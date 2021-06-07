import {Direction} from "./Direction";
import North from "./North";
import South from "./South";

export default class East implements Direction {
    direction = "E";
    private readonly _delimiter = ":";

    move(x: number, y: number): string {
        return (x + 1) + this._delimiter + y + this._delimiter;
    }

    rotateLeft(): Direction {
        return new North();
    }

    rotateRight(): Direction {
        return new South();
    }
}
