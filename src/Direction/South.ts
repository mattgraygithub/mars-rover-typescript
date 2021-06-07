import {Direction} from "./Direction";
import East from "./East";
import West from "./West";

export default class South implements Direction {
    direction = "S";
    private readonly _delimiter = ":";

    move(x: number, y: number): string {
        return x + this._delimiter + (y - 1) + this._delimiter;
    }

    rotateLeft(): Direction {
        return new East();
    }

    rotateRight(): Direction {
        return new West();
    }
}
