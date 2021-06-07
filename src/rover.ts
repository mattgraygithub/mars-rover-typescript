export default class Rover {
    startingDirection: string = "N";
    rightTurns: { [key: string]: string } = {"N": "E", "E": "S", "S": "W", "W": "N"};

    execute(commands: string): string {

        let direction: string = this.startingDirection;

        for (let command of commands) {
            direction = this.rightTurns[direction]
        }

        return "5:5:" + direction
    }
}
