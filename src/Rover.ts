export default class Rover {
    private readonly startingPosition: string;
    directions: string[] = ["N", "E", "S", "W"]

    constructor(startingPosition: string) {
        this.startingPosition = startingPosition;
    }

    execute(commands: string): string {

        let direction: string = this.startingPosition[4];
        let yPosition: number = Number(this.startingPosition[2]);
        let xPosition: number = Number(this.startingPosition[0]);

        for (let command of commands) {
            if (command === "R") {
                direction = this.directions[(this.directions.indexOf(direction) + 1) % 4];
            }
            if (command === "L") {
                direction = this.directions[(this.directions.indexOf(direction) + 3) % 4];
            }
            if (command === "M") {
                if(direction === "N"){
                    yPosition++
                }
                if(direction === "E"){
                    xPosition++
                }
                if(direction === "S"){
                    yPosition--
                }
                if(direction === "W"){
                    xPosition--
                }
            }
        }

        return xPosition + ":" + yPosition + ":" + direction;
    }
}
