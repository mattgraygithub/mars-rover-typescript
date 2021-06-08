import Rover from "../src/Rover";
import North from "../src/Direction/North";
import East from "../src/Direction/East";
import South from "../src/Direction/South";
import West from "../src/Direction/West";
import Grid from "../src/Grid";
import Move from "../src/Move/Move";

const STARTING_COORDINATES = "5:5:";
const FACING_NORTH = "N";
const FACING_EAST = "E";
const FACING_SOUTH = "S";
const FACING_WEST = "W";
const MOVE = new Move();
const NORTH = new North(MOVE);
const EAST = new East(MOVE);
const SOUTH = new South(MOVE);
const WEST = new West(MOVE);

let EMPTY_GRID: Grid = new Grid([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""]
]);

let rover: Rover;

describe("Rover rotation functionality", () => {
    beforeEach(() => {
        rover = new Rover(EMPTY_GRID, STARTING_COORDINATES, NORTH);
    });

    it.each`
        inputCommands | expectedOutput
        ${"R"}        | ${STARTING_COORDINATES + FACING_EAST}
        ${"RR"}       | ${STARTING_COORDINATES + FACING_SOUTH}
        ${"RRR"}      | ${STARTING_COORDINATES + FACING_WEST}
        ${"RRRR"}     | ${STARTING_COORDINATES + FACING_NORTH}
    `("rotates right when an R command is received", ({inputCommands, expectedOutput}) => {
        expect(rover.execute(inputCommands)).toBe(expectedOutput);
    })

    it.each`
        inputCommands | expectedOutput
        ${"L"}        | ${STARTING_COORDINATES + FACING_WEST}
        ${"LL"}       | ${STARTING_COORDINATES + FACING_SOUTH}
        ${"LLL"}      | ${STARTING_COORDINATES + FACING_EAST}
        ${"LLLL"}     | ${STARTING_COORDINATES + FACING_NORTH}
    `("rotates left when an L command is received", ({inputCommands, expectedOutput}) => {
        expect(rover.execute(inputCommands)).toBe(expectedOutput);
    })
})

describe("Rover movement functionality", () => {
    it.each`
              direction   |   expectedOutput
              ${NORTH}    |   ${"5:6:" + FACING_NORTH}
              ${EAST}     |   ${"6:5:" + FACING_EAST}
              ${SOUTH}    |   ${"5:4:" + FACING_SOUTH}
              ${WEST}     |   ${"4:5:" + FACING_WEST}
        `
    ("moves forward when an M command s received", ({direction, expectedOutput}) => {
        rover = new Rover(EMPTY_GRID, STARTING_COORDINATES, direction)
        expect(rover.execute("M")).toBe(expectedOutput);
    })
})

describe("Rover wrapping functionality", () => {
    it.each`
         startingCoordinates    |   direction   |   expectedOutput
             ${"5:9:"}          |   ${NORTH}    |   ${"5:0:" + FACING_NORTH}
             ${"9:5:"}          |   ${EAST}     |   ${"0:5:" + FACING_EAST}
             ${"5:0:"}          |   ${SOUTH}    |   ${"5:9:" + FACING_SOUTH}
             ${"0:5:"}          |   ${WEST}     |   ${"9:5:" + FACING_WEST}
        `
    ("wraps around the grid when an M command is received and Rover is on edge of grid", ({
                                                                                              startingCoordinates,
                                                                                              direction,
                                                                                              expectedOutput
                                                                                          }) => {
        rover = new Rover(EMPTY_GRID, startingCoordinates, direction)
        expect(rover.execute("M")).toBe(expectedOutput);
    })
})

describe("Rover obstacle detection functionality", () => {
    it.each`
         startingCoordinates    |   direction   |   expectedOutput
             ${"5:5:"}          |   ${NORTH}    |   ${"O:5:6:" + FACING_NORTH}
             ${"4:6:"}          |   ${EAST}     |   ${"O:5:6:" + FACING_EAST}
             ${"5:7:"}          |   ${SOUTH}    |   ${"O:5:6:" + FACING_SOUTH}
             ${"6:6:"}          |   ${WEST}     |   ${"O:5:6:" + FACING_WEST}
        `
    ("detects an obstacle in the next cell without wrapping", ({startingCoordinates, direction, expectedOutput}) => {
        rover = new Rover(gridWithOneObstacle(), startingCoordinates, direction)
        expect(rover.execute("M")).toBe(expectedOutput);
    })

    it.each`
            grid                       |   startingCoordinates   |   direction   |   expectedOutput
    ${gridWithObstacleOnSouthEdge()}   |        ${"5:9:"}        |   ${NORTH}    |   ${"O:5:0:" + FACING_NORTH}
    ${gridWithObstacleOnWestEdge()}    |        ${"9:6:"}        |   ${EAST}     |   ${"O:0:6:" + FACING_EAST}
    ${gridWithObstacleOnNorthEdge()}   |        ${"4:0:"}        |   ${SOUTH}    |   ${"O:4:9:" + FACING_SOUTH}
    ${gridWithObstacleOnEastEdge()}    |        ${"0:5:"}        |   ${WEST}    |   ${"O:9:5:" + FACING_WEST}
    `
    ("detects an obstacle in the next cell with wrapping", ({grid, startingCoordinates, direction, expectedOutput}) => {
        rover = new Rover(grid, startingCoordinates, direction)
        expect(rover.execute("M")).toBe(expectedOutput);
    })

    function gridWithOneObstacle(): Grid {
        return new Grid([
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "o", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""]
        ]);
    }

    function gridWithObstacleOnSouthEdge(): Grid {
        return new Grid([
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "o", "", "", "", ""]
        ]);
    }

    function gridWithObstacleOnWestEdge(): Grid {
        return new Grid([
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["o", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""]
        ]);
    }

    function gridWithObstacleOnNorthEdge(): Grid {
        return new Grid([
            ["", "", "", "", "o", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""]
        ]);
    }

    function gridWithObstacleOnEastEdge(): Grid {
        return new Grid([
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", "o"],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""]
        ]);
    }
})
