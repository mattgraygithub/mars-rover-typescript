export default class Rover {
    startingDirection: string = "N";
    directions: string[] = ["N", "E", "S", "W"]

    execute(commands: string): string {

        let direction: string = this.startingDirection;

        for (let command of commands) {
            if (command === "R") {
                direction = this.directions[(this.directions.indexOf(direction) + 1) % 4];
            }
            if (command === "L") {
                direction = this.directions[(this.directions.indexOf(direction) + 3) % 4];
            }
        }

        return "5:5:" + direction;
    }
}
