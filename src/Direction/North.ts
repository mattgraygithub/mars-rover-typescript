import {Direction} from "./Direction";
import West from "./West";
import East from "./East";
import Rover from "../Rover";

export default class North implements Direction {
    direction = "N";
    private readonly _delimiter = ":";

    move(x: number, y: number): string {
        return this.isOnEdgeOfGrid(y)
            ? x + this._delimiter + "0" + this._delimiter
            : x + this._delimiter + (y + 1) + this._delimiter;
    }

    rotateLeft(): Direction {
        return new West();
    }

    rotateRight(): Direction {
        return new East();
    }

    isOnEdgeOfGrid(y: number): boolean {
        return y === Rover.gridSize - 1;
    }
}
