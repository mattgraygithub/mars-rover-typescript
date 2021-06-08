import {Direction} from "./Direction";
import East from "./East";
import West from "./West";
import Move from "../Move/Move";

export default class South implements Direction {
    direction = "S";
    private _move: Move;

    constructor(move: Move) {
        this._move = move;
    }

    move(grid: string[][], x: number, y: number): string {
        return this.isOnEdgeOfGrid(y)
            ? this._move.move(grid, x, grid.length - 1)
            : this._move.move(grid, x, y - 1);
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
