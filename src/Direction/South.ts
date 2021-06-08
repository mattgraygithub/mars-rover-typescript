import {Direction} from "./Direction";
import East from "./East";
import West from "./West";

export default class South implements Direction {
    direction = "S";
    private readonly _delimiter = ":";

    move(grid: string[][], x: number, y: number): string {
        return this.isOnEdgeOfGrid(y)
            ? x + this._delimiter + (grid.length - 1) + this._delimiter
            : x + this._delimiter + (y - 1) + this._delimiter;
    }

    rotateLeft(): Direction {
        return new East();
    }

    rotateRight(): Direction {
        return new West();
    }

    isOnEdgeOfGrid(y: number): boolean {
        return y === 0;
    }
}
