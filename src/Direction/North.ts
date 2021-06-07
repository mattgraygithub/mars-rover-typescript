import {Direction} from "./Direction";
import West from "./West";
import East from "./East";

export default class North implements Direction {
    direction = "N";

    move(coordinates: string): string {
        const x = coordinates.slice(0, 2);
        const y = Number(coordinates[2]);
        return this.isOnEdgeOfGrid(y)
        ? x + "0" + ":"
        : x + (y + 1) + ":";
    }

    rotateLeft(): Direction {
        return new West();
    }

    rotateRight(): Direction {
        return new East();
    }

    isOnEdgeOfGrid(y: number): boolean {
        return y === 9;
    }
}
