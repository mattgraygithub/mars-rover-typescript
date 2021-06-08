import {Direction} from "./Direction";
import East from "./East";
import West from "./West";
import Move from "../Move/Move";

export default class South implements Direction {
    direction = "S";
    private readonly _delimiter = ":";
    private _move: Move;

    constructor(move: Move) {
        this._move = move;
    }

    move(grid: string[][], x: number, y: number): string {
        return this.isOnEdgeOfGrid(y)
            ? x + this._delimiter + (grid.length - 1) + this._delimiter
            : x + this._delimiter + (y - 1) + this._delimiter;
    }

    rotateLeft(): Direction {
        return new East(new Move());
    }

    rotateRight(): Direction {
        return new West(new Move());
    }

    isOnEdgeOfGrid(y: number): boolean {
        return y === 0;
    }
}
