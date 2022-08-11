import { FormatedInput } from '../types/input.types';
import { Cardinals, RoverWithInstructions } from '../types/spacial.types';

export class GetInput {
  private static createRoverWithCommands(x: string, y: string, facing: Cardinals, instructions: string[]): RoverWithInstructions {
    return {
      cordinates: { x: Number(x), y: Number(y), facing },
      instructions
    };
  }

  public static formatInput(input: Buffer): FormatedInput {
    const inputLines = input.toString().trim().split('\n');
    const gridLine = inputLines.shift();

    if(!gridLine) throw new Error('Invalid input');
    const [gridX, gridY] = gridLine.split(' ');
    const grid = { x: Number(gridX), y: Number(gridY) };
    const rovers = [];

    while(inputLines.length > 0){
      const [x, y, facingDirection] = inputLines[0].split(' ');
      const commands = inputLines[1];
      inputLines.splice(0,2);
      rovers.push(GetInput.createRoverWithCommands(x, y, facingDirection as Cardinals, commands.split('')));
    }

    return {grid, rovers};
  }
}






