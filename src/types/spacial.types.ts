export type Cardinals = 'N' | 'E' | 'S' | 'W';
export type Directions = 'L' | 'R';
export type RoverCordinates = { x: number, y: number, facing: Cardinals };
export type RoverWithInstructions = { cordinates: RoverCordinates, instructions: string[] };
