export interface Direction {

    direction: string;

    rotateLeft(): Direction;

    rotateRight(): Direction;

    move(grid: string[][], x: number, y: number): string;

    isOnEdgeOfGrid(gridSize: number, y: number): Boolean;
}
