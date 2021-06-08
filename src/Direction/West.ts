import {Direction} from "./Direction";
import South from "./South";
import North from "./North";
import Move from "../Move/Move";

export default class West implements Direction {
    direction = "W";
    private _move: Move;

    constructor(move: Move) {
        this._move = move;
    }

    move(grid: string[][], x: number, y: number): string {
        return this.isOnEdgeOfGrid(x)
            ? this._move.move(grid, grid.length - 1, y)
            : this._move.move(grid, x - 1, y);
    }

    rotateLeft(): Direction {
        return new South(new Move());
    }

    rotateRight(): Direction {
        return new North(new Move());
    }

    isOnEdgeOfGrid(x: number): boolean {
        return x === 0;
    }
}
