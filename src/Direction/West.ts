import {Direction} from "./Direction";
import South from "./South";
import North from "./North";

export default class West implements Direction {
    direction = "W";

    move(coordinates: string): string {
        return (Number(coordinates[0]) - 1) + coordinates.slice(1, 4);
    }

    rotateLeft(): Direction {
        return new South();
    }

    rotateRight(): Direction {
        return new North();
    }
}
