import { RoverWithInstructions } from './spacial.types';

export type FormatedInput = {
  grid: {
    x: number;
    y: number;
  };
  rovers: RoverWithInstructions[];
}
