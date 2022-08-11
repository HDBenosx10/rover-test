import { AxisEntity } from '../base/AxisEntity.base';
import { Cardinals, Directions, RoverCordinates } from '../types/spacial.types';
import { Grid } from './Grid.entity';

export class Rover extends AxisEntity {
  public facing: Cardinals;

  private readonly grid: Grid;

  private readonly instructions: string[];

  constructor(
    x: number,
    y: number,
    facingDirection: Cardinals,
    instructions: string[],
    grid: Grid
  ) {
    super(x, y);
    this.facing = facingDirection;
    this.grid = grid;
    this.instructions = instructions;
  }

  private move() {
    switch(this.facing) {
      case 'N':
        if(this.y + 1 > this.grid.y) throw new Error('Rover crashed');
        this.y++;
        break;
      case 'S':
        if(this.y - 1 < 0) throw new Error('Rover crashed');
        this.y--;
        break;
      case 'E':
        if(this.x + 1 > this.grid.x) throw new Error('Rover crashed');
        this.x++;
        break;
      case 'W':
        if(this.x - 1 < 0) throw new Error('Rover crashed');
        this.x--;
        break;
    }
  }

  private turn(direction: Directions) {
    switch(direction){
      case 'R':
        this.facing = this.grid.nextCardinal(this.facing);
        break;
      case 'L':
        this.facing = this.grid.previousCardinal(this.facing);
        break;
    }
  }

  private cordinates(): RoverCordinates {
    return {
      x: this.x,
      y: this.y,
      facing: this.facing
    };
  }

  private plainCordinates(): string {
    return `${this.x} ${this.y} ${this.facing}`;
  }

  public start(getStructuredResult = false): RoverCordinates | string {
    this.instructions.forEach(command => {
      switch(command){
        case 'M':
          this.move();
          break;
        case 'L':
        case 'R':
          this.turn(command);
          break;
      }
    });
    if(getStructuredResult) return this.cordinates();
    return this.plainCordinates();
  }
}
