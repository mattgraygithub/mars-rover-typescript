export default class Move {
    private readonly _delimiter = ":";
    private readonly _obstacleIdentifier = "O:";

    move(grid: string[][], x: number, y: number): string {
        return this.hasObstacle(grid, x, y)
            ? this._obstacleIdentifier + x + this._delimiter + y + this._delimiter
            : x + this._delimiter + y + this._delimiter
    }

    hasObstacle(grid: string[][], x: number, y: number): boolean {
        return grid[grid.length - 1 - y][x] === "o";
    }
}
