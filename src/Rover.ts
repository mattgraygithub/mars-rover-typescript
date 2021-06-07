import {Direction} from "./Direction/Direction";

export default class Rover {
    private readonly startingCoordinates: string;
    private _direction: Direction;

    constructor(startingCoordinates: string, direction: Direction) {
        this.startingCoordinates = startingCoordinates;
        this._direction = direction;
    }

    execute(commands: string): string {
        let coordinates = this.startingCoordinates.slice(0, 4);

        for (let command of commands) {
            if (command === "R") {
                this._direction = this._direction.rotateRight();
            }
            if (command === "L") {
                this._direction = this._direction.rotateLeft();
            }
            if (command === "M") {
                coordinates = this._direction.move(coordinates);
            }
        }

        return coordinates + this._direction.direction;
    }
}
