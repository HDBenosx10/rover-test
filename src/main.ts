import fs from 'fs';
import { Grid } from './entities/Grid.entity';
import { Rover } from './entities/Rover.entity';
import { GetInput } from './utils/GetInput.util';

export function main() {
  const inputFile = fs.readFileSync('./input.txt');
  const input = GetInput.formatInput(inputFile);

  const grid = new Grid(input.grid.x, input.grid.y);

  const roversCordinates = input.rovers.map(inputRover => {
    return new Rover(
      inputRover.cordinates.x,
      inputRover.cordinates.y,
      inputRover.cordinates.facing,
      inputRover.instructions,
      grid,
    ).start();
  });

  return roversCordinates.join('\n');
}

