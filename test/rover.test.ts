import Rover from "../src/rover";

const STARTING_COORDINATES = "5:5:";
const FACING_NORTH = "N";
const FACING_EAST = "E";
const FACING_SOUTH = "S";
const FACING_WEST = "W";

let rover: Rover;

describe("Rover should", () => {
    rover = new Rover(STARTING_COORDINATES + FACING_NORTH);
    it.each`
        inputCommands | expectedOutput
        ${"R"}        | ${STARTING_COORDINATES + FACING_EAST}
        ${"RR"}       | ${STARTING_COORDINATES + FACING_SOUTH}
        ${"RRR"}      | ${STARTING_COORDINATES + FACING_WEST}
        ${"RRRR"}     | ${STARTING_COORDINATES + FACING_NORTH}
    `("rotate right when an R command is received", ({inputCommands, expectedOutput}) => {
        expect(rover.execute(inputCommands)).toBe(expectedOutput);
    })

    it.each`
        inputCommands | expectedOutput
        ${"L"}        | ${STARTING_COORDINATES + FACING_WEST}
        ${"LL"}       | ${STARTING_COORDINATES + FACING_SOUTH}
        ${"LLL"}      | ${STARTING_COORDINATES + FACING_EAST}
        ${"LLLL"}     | ${STARTING_COORDINATES + FACING_NORTH}
    `("rotate left when an L command is received", ({inputCommands, expectedOutput}) => {
        expect(rover.execute(inputCommands)).toBe(expectedOutput);
    })

    it("move one space forward along y axis when an M command is received and Rover is facing north", () => {
        expect(rover.execute("M")).toBe("5:6:" + FACING_NORTH);
    })

    it("move one space forward along x axis when an M command is received and Rover is facing east", () => {
        rover = new Rover(STARTING_COORDINATES + FACING_EAST)
        expect(rover.execute("M")).toBe("6:5:" + FACING_EAST);
    })

    it("move one space backwards along y axis when an M command is received and Rover is facing south", () => {
        rover = new Rover(STARTING_COORDINATES + FACING_SOUTH)
        expect(rover.execute("M")).toBe("5:4:" + FACING_SOUTH);
    })

    it("move one space backwards along x axis when an M command is received and Rover is facing west", () => {
        rover = new Rover(STARTING_COORDINATES + FACING_WEST)
        expect(rover.execute("M")).toBe("4:5:" + FACING_WEST);
    })
})
