import {Direction} from "./Direction";
import West from "./West";
import East from "./East";

export default class North implements Direction {
    direction = "N";

    move(coordinates: string): string {
        return coordinates.slice(0, 2) + (Number(coordinates[2]) + 1) + ":";
    }

    rotateLeft(): Direction {
        return new West();
    }

    rotateRight(): Direction {
        return new East();
    }
}
