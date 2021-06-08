import {Direction} from "./Direction";
import South from "./South";
import North from "./North";
import Move from "../Move/Move";

export default class West implements Direction {
    direction = "W";
    private readonly _delimiter = ":";
    private _move: Move;

    constructor(move: Move) {
        this._move = move;
    }

    move(grid: string[][], x: number, y: number): string {
        return this.isOnEdgeOfGrid(x)
            ? (grid.length - 1) + this._delimiter + y + this._delimiter
            : (x - 1) + this._delimiter + y + this._delimiter;
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
