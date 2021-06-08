import {Direction} from "./Direction";
import West from "./West";
import East from "./East";

export default class North implements Direction {
    direction = "N";
    private readonly _delimiter = ":";

    move(grid: string[][], x: number, y: number): string {

        if (this.isOnEdgeOfGrid(grid.length, y)) {
            return x + this._delimiter + "0" + this._delimiter
        } else {
            return this.isObstacle(grid, x, y + 1)
                ? "O:" + x + this._delimiter + (y + 1) + this._delimiter
                : x + this._delimiter + (y + 1) + this._delimiter;
        }
    }

    rotateLeft(): Direction {
        return new West();
    }

    rotateRight(): Direction {
        return new East();
    }

    isOnEdgeOfGrid(gridSize: number, y: number): boolean {
        return y === gridSize - 1;
    }

    isObstacle(grid: string[][], x: number, y: number): boolean {
        return grid[grid.length - 1 - y][x] === "o";
    }
}
