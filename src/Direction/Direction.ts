export interface Direction {

    direction: string;

    rotateLeft(): Direction;

    rotateRight(): Direction;

    move(x: number, y: number): string;
}
