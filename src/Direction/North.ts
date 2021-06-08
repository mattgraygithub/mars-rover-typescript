import {Direction} from "./Direction";
import West from "./West";
import East from "./East";
import Move from "../Move/Move";

export default class North implements Direction {
    direction = "N";
    private _move: Move;

    constructor(move: Move) {
        this._move = move;
    }

    move(grid: string[][], x: number, y: number): string {
        return this.isOnEdgeOfGrid(grid.length, y)
            ? this._move.move(grid, x, 0)
            : this._move.move(grid, x, y + 1);
    }

    rotateLeft(): Direction {
        return new West(new Move());
    }

    rotateRight(): Direction {
        return new East(new Move());
    }

    isOnEdgeOfGrid(gridSize: number, y: number): boolean {
        return y === gridSize - 1;
    }
}
