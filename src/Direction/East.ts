import {Direction} from "./Direction";
import North from "./North";
import South from "./South";

export default class East implements Direction {
    direction = "E";

    move(coordinates: string): string {
        return (Number(coordinates[0]) + 1) + coordinates.slice(1, 4);
    }

    rotateLeft(): Direction {
        return new North();
    }

    rotateRight(): Direction {
        return new South();
    }
}
