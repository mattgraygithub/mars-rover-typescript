import {Direction} from "./Direction";
import East from "./East";
import West from "./West";

export default class South implements Direction {
    direction = "S";

    move(coordinates: string): string {
        return coordinates.slice(0, 2) + (Number(coordinates[2]) - 1) + ":";
    }

    rotateLeft(): Direction {
        return new East();
    }

    rotateRight(): Direction {
        return new West();
    }
}
