import Rover from "../src/Rover";
import Grid from "../src/Grid";
import North from "../src/Direction/North";
import Move from "../src/Move/Move";

const STARTING_COORDINATES = "0:0:";
const MOVE = new Move();
const NORTH = new North();
const EMPTY_GRID: Grid = new Grid([
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
const GRID_WITH_OBSTACLE: Grid = new Grid([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["o", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""]
]);

let rover: Rover;

describe("Rover Acceptance Test", () => {
    it("given a grid with no obstacles, input MMRMMLM gives output 2:3:N", () => {
        rover = new Rover(EMPTY_GRID, STARTING_COORDINATES, NORTH, MOVE)
        expect(rover.execute("MMRMMLM")).toBe("2:3:N");
    })

    it("given a grid with no obstacles, input MMMMMMMMMM gives output 0:0:N (due to wrap-around)", () => {
        rover = new Rover(EMPTY_GRID, STARTING_COORDINATES, NORTH, MOVE)
        expect(rover.execute("MMMMMMMMMM")).toBe("0:0:N");
    })

    it("given a grid with an obstacle at (0, 3), input MMMM gives output O:0:2:N", () => {
        rover = new Rover(GRID_WITH_OBSTACLE, STARTING_COORDINATES, NORTH, MOVE)
        expect(rover.execute("MMMM")).toBe("O:0:2:N");
    })
})
