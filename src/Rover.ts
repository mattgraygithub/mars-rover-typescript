import {Direction} from "./Direction/Direction";
import Grid from "./Grid";

export default class Rover {
    private _grid: Grid;
    private readonly _startingCoordinates: string;
    private _direction: Direction;

    constructor(grid: Grid, startingCoordinates: string, direction: Direction) {
        this._grid = grid;
        this._startingCoordinates = startingCoordinates;
        this._direction = direction;
    }

    execute(commands: string): string {
        let coordinates = this._startingCoordinates.slice(0, 4);
        let x = Number(this._startingCoordinates[0]);
        let y = Number(this._startingCoordinates[2]);

        for (let command of commands) {
            if (command === "R") {
                this._direction = this._direction.rotateRight();
            }
            if (command === "L") {
                this._direction = this._direction.rotateLeft();
            }
            if (command === "M") {
                coordinates = this._direction.move(this._grid.grid, x, y);
            }
        }

        return coordinates + this._direction.direction;
    }
}
