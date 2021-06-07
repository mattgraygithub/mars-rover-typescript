import Rover from "../src/rover";

const rover = new Rover();

describe("Rover should", () => {
    it.each`
        inputCommands | expectedOutput
        ${"R"}        | ${"5:5:E"}
        ${"RR"}       | ${"5:5:S"}
        ${"RRR"}      | ${"5:5:W"}
        ${"RRRR"}     | ${"5:5:N"}
    `("rotate right", ({inputCommands,expectedOutput}) => {
        expect(rover.execute(inputCommands)).toBe(expectedOutput);
    })
})
