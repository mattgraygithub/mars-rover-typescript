import {Direction} from "./Direction";
import North from "./North";
import South from "./South";
import Rover from "../Rover";

export default class East implements Direction {
    direction = "E";
    private readonly _delimiter = ":";

    move(x: number, y: number): string {
        return this.isOnEdgeOfGrid(x)
            ? "0" + this._delimiter + y + this._delimiter
            : (x + 1) + this._delimiter + y + this._delimiter;
    }

    rotateLeft(): Direction {
        return new North();
    }

    rotateRight(): Direction {
        return new South();
    }

    isOnEdgeOfGrid(x: number): boolean {
        return x === Rover.gridSize - 1;
    }
}
