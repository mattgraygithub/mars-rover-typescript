export default class Grid {
    private readonly _grid: string[][];

    constructor(grid: string[][]) {
        this._grid = grid;
    }

    get grid(): string[][] {
        return this._grid;
    }
}
