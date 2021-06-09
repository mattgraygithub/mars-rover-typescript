import {Direction} from "./Direction";
import West from "./West";
import East from "./East";

export default class North implements Direction {
    direction = "N";
    private readonly _delimiter = ":";

    move(grid: string[][], x: number, y: number): string {
        return this.isOnEdgeOfGrid(grid.length, y)
            ? `${x}${this._delimiter}${0}${this._delimiter}`
            : `${x}${this._delimiter}${y + 1}${this._delimiter}`
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
}
