export interface Direction {

    direction: string;

    rotateLeft(): Direction;

    rotateRight(): Direction;

    move(coordinates: string): string;
}
