import {Direction} from "./Direction";
import North from "./North";
import South from "./South";

export default class East implements Direction {
    direction = "E";
    private readonly _delimiter = ":";

    move(grid: string[][], x: number, y: number): string {
        return this.isOnEdgeOfGrid(grid.length, x)
            ? "0" + this._delimiter + y + this._delimiter
            : (x + 1) + this._delimiter + y + this._delimiter;
    }

    rotateLeft(): Direction {
        return new North();
    }

    rotateRight(): Direction {
        return new South();
    }

    isOnEdgeOfGrid(gridSize: number, x: number): boolean {
        return x === gridSize - 1;
    }
}
