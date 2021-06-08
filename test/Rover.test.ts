import Rover from "../src/Rover";
import North from "../src/Direction/North";
import East from "../src/Direction/East";
import South from "../src/Direction/South";
import West from "../src/Direction/West";
import Grid from "../src/Grid";

const STARTING_COORDINATES = "5:5:";
const FACING_NORTH = "N";
const FACING_EAST = "E";
const FACING_SOUTH = "S";
const FACING_WEST = "W";
const NORTH = new North();
const EAST = new East();
const SOUTH = new South();
const WEST = new West();

let EMPTY_GRID: Grid = new Grid([
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""]
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
    it("moves one space forward along y axis when an M command is received and Rover is facing north", () => {
        rover = new Rover(EMPTY_GRID, STARTING_COORDINATES, NORTH)
        expect(rover.execute("M")).toBe("5:6:" + FACING_NORTH);
    })

    it("moves one space forward along x axis when an M command is received and Rover is facing east", () => {
        rover = new Rover(EMPTY_GRID, STARTING_COORDINATES, EAST)
        expect(rover.execute("M")).toBe("6:5:" + FACING_EAST);
    })

    it("moves one space backwards along y axis when an M command is received and Rover is facing south", () => {
        rover = new Rover(EMPTY_GRID, STARTING_COORDINATES, SOUTH)
        expect(rover.execute("M")).toBe("5:4:" + FACING_SOUTH);
    })

    it("moves one space backwards along x axis when an M command is received and Rover is facing west", () => {
        rover = new Rover(EMPTY_GRID, STARTING_COORDINATES, WEST)
        expect(rover.execute("M")).toBe("4:5:" + FACING_WEST);
    })
})

describe("Rover wrapping functionality", () => {
    it("wraps on y axis when an M command is received and Rover is on the edge of the grid facing north", () => {
        rover = new Rover(EMPTY_GRID, "5:9:", NORTH)
        expect(rover.execute("M")).toBe("5:0:" + FACING_NORTH);
    })

    it("wraps on y axis when an M command is received and Rover is on the edge of the grid facing south", () => {
        rover = new Rover(EMPTY_GRID, "5:0:", SOUTH)
        expect(rover.execute("M")).toBe("5:9:" + FACING_SOUTH);
    })

    it("wraps on x axis when an M command is received and Rover is on the edge of the grid facing east", () => {
        rover = new Rover(EMPTY_GRID, "9:5:", EAST)
        expect(rover.execute("M")).toBe("0:5:" + FACING_EAST);
    })

    it("wraps on x axis when an M command is received and Rover is on the edge of the grid facing west", () => {
        rover = new Rover(EMPTY_GRID, "0:5:", WEST)
        expect(rover.execute("M")).toBe("9:5:" + FACING_WEST);
    })
})

describe("Rover obstacle detection functionality", () => {
    it("detects an obstacle in the next cell facing north without wrapping", () => {

        let gridWithOneObstacle: Grid = new Grid([
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","o","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""]
        ]);

        rover = new Rover(gridWithOneObstacle, "5:5:", NORTH)
        expect(rover.execute("M")).toBe("O:5:6:" + FACING_NORTH);
    })

    it("detects an obstacle in the next cell facing north with wrapping", () => {

        let gridWithOneObstacle: Grid = new Grid([
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","o","","","",""]
        ]);

        rover = new Rover(gridWithOneObstacle, "5:9:", NORTH)
        expect(rover.execute("M")).toBe("O:5:0:" + FACING_NORTH);
    })
})
