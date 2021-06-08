import {Direction} from "./Direction";
import North from "./North";
import South from "./South";
import Move from "../Move/Move";

export default class East implements Direction {
    direction = "E";
    private readonly _delimiter = ":";
    private _move: Move;

    constructor(move: Move) {
        this._move = move;
    }

    move(grid: string[][], x: number, y: number): string {
        return this.isOnEdgeOfGrid(grid.length, x)
            ? "0" + this._delimiter + y + this._delimiter
            : (x + 1) + this._delimiter + y + this._delimiter;
    }

    rotateLeft(): Direction {
        return new North(new Move());
    }

    rotateRight(): Direction {
        return new South(new Move());
    }

    isOnEdgeOfGrid(gridSize: number, x: number): boolean {
        return x === gridSize - 1;
    }
}
