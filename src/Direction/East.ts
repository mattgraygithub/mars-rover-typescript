import {Direction} from "./Direction";
import North from "./North";
import South from "./South";
import Move from "../Move/Move";

export default class East implements Direction {
    direction = "E";
    private _move: Move;

    constructor(move: Move) {
        this._move = move;
    }

    move(grid: string[][], x: number, y: number): string {
        return this.isOnEdgeOfGrid(grid.length, x)
            ? this._move.move(grid, 0, y)
            : this._move.move(grid, x + 1, y);
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
