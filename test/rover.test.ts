import Rover from "../src/rover";

const rover = new Rover();

describe("Rover should", () => {
    it.each`
        inputCommands | expectedOutput
        ${"R"}        | ${"5:5:E"}
        ${"RR"}       | ${"5:5:S"}
        ${"RRR"}      | ${"5:5:W"}
        ${"RRRR"}     | ${"5:5:N"}
    `("rotate right when an R command is received", ({inputCommands,expectedOutput}) => {
        expect(rover.execute(inputCommands)).toBe(expectedOutput);
    })

    it.each`
        inputCommands | expectedOutput
        ${"L"}        | ${"5:5:W"}
        ${"LL"}       | ${"5:5:S"}
        ${"LLL"}      | ${"5:5:E"}
        ${"LLLL"}     | ${"5:5:N"}
    `("rotate left when an L command is received", ({inputCommands,expectedOutput}) => {
        expect(rover.execute(inputCommands)).toBe(expectedOutput);
    })

    it.each`
        inputCommands | expectedOutput
        ${"M"}        | ${"5:6:N"}
    `("move one space when an M command is received", ({inputCommands,expectedOutput}) => {
        expect(rover.execute(inputCommands)).toBe(expectedOutput);
    })
})
