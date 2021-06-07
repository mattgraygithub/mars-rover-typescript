export default class Rover {
    startingX: string = "5";
    startingDirection: string = "N";
    directions: string[] = ["N", "E", "S", "W"]

    execute(commands: string): string {

        let direction: string = this.startingDirection;
        let xPosition: number = Number(this.startingX);

        for (let command of commands) {
            if (command === "R") {
                direction = this.directions[(this.directions.indexOf(direction) + 1) % 4];
            }
            if (command === "L") {
                direction = this.directions[(this.directions.indexOf(direction) + 3) % 4];
            }
            if (command === "M") {
                xPosition++
            }
        }

        return "5:" + xPosition + ":" + direction;
    }
}
