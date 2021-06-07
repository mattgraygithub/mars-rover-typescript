import Rover from "../src/rover";

const STARTING_LOCATION = "5:5:";
const STARTING_DIRECTION = "N";
const STARTING_POSITION = STARTING_LOCATION + STARTING_DIRECTION;

describe("Rover should", () => {
    const rover = new Rover(STARTING_POSITION);
    it.each`
        inputCommands | expectedOutput
        ${"R"}        | ${STARTING_LOCATION + "E"}
        ${"RR"}       | ${STARTING_LOCATION + "S"}
        ${"RRR"}      | ${STARTING_LOCATION + "W"}
        ${"RRRR"}     | ${STARTING_LOCATION + "N"}
    `("rotate right when an R command is received", ({inputCommands, expectedOutput}) => {
        expect(rover.execute(inputCommands)).toBe(expectedOutput);
    })

    it.each`
        inputCommands | expectedOutput
        ${"L"}        | ${STARTING_LOCATION + "W"}
        ${"LL"}       | ${STARTING_LOCATION + "S"}
        ${"LLL"}      | ${STARTING_LOCATION + "E"}
        ${"LLLL"}     | ${STARTING_LOCATION + "N"}
    `("rotate left when an L command is received", ({inputCommands, expectedOutput}) => {
        expect(rover.execute(inputCommands)).toBe(expectedOutput);
    })

    it("move one space along y axis when an M command is received and Rover is facing north", () => {
        expect(rover.execute("M")).toBe("5:6:" + STARTING_DIRECTION);
    })
})
