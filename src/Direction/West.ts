import {Direction} from "./Direction";
import South from "./South";
import North from "./North";

export default class West implements Direction {
    direction = "W";
    private readonly _delimiter = ":";

    move(x: number, y: number): string {
        return this.isOnEdgeOfGrid(x)
        ? "9" + this._delimiter + y + this._delimiter
        : (x - 1) + this._delimiter + y + this._delimiter;
    }

    rotateLeft(): Direction {
        return new South();
    }

    rotateRight(): Direction {
        return new North();
    }

    isOnEdgeOfGrid(x: number): boolean {
        return x === 0;
    }
}
