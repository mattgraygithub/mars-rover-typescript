import {Direction} from "./Direction/Direction";
import Grid from "./Grid";
import Move from "./Move/Move";

const X = 0;
const Y = 2;

export default class Rover {
    private _grid: Grid;
    private readonly _startingCoordinates: string;
    private _direction: Direction;
    private _move: Move;

    constructor(grid: Grid, startingCoordinates: string, direction: Direction, move: Move) {
        this._grid = grid;
        this._startingCoordinates = startingCoordinates;
        this._direction = direction;
        this._move = move;
    }

    execute(commands: string): string {
        let coordinates = this._startingCoordinates.slice(0, 4);

        for (let command of commands) {
            if (command === "R") {
                this._direction = this._direction.rotateRight();
            }
            if (command === "L") {
                this._direction = this._direction.rotateLeft();
            }
            if (command === "M") {
                coordinates = this._move.move(this._grid.grid, coordinates, this._direction);
                if (coordinates[0] === "O") {
                    break;
                }
            }
        }

        return coordinates + this._direction.direction;
    }
}
