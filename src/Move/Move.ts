import {Direction} from "../Direction/Direction";

const X = 0;
const Y = 2;
const OBSTACLE_IDENTIFIER = "O:";

export default class Move {

    move(grid: string[][], coordinates: string, direction: Direction): string {
        return this.hasObstacle(grid, direction.move(grid, Number(coordinates[X]), Number(coordinates[Y])))
            ? `${OBSTACLE_IDENTIFIER}${coordinates}`
            : direction.move(grid, Number(coordinates[X]), Number(coordinates[Y]))
    }

    hasObstacle(grid: string[][], coordinates: string): boolean {
        return grid[grid.length - 1 - Number(coordinates[Y])][Number(coordinates[X])] === "o";
    }
}
