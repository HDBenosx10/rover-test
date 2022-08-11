import { Grid } from '../entities/Grid.entity';
import { Rover } from '../entities/Rover.entity';
import { mockedGrid } from './mocks/grid.mock';

describe('Rover move', () => {
  it('Should move to (x + 1, y)', () => {
    const rover = new Rover(5, 5, 'N', ['R', 'M'], mockedGrid);
    expect(rover.start()).toBe('6 5 E');
  });
  it('Should move to (x - 1, y)', () => {
    const rover = new Rover(5, 5, 'N', ['L', 'M'], mockedGrid);
    expect(rover.start()).toBe('4 5 W');
  });
  it('Should move to (x, y + 1)', () => {
    const rover = new Rover(5, 5, 'N', ['M'], mockedGrid);
    expect(rover.start()).toBe('5 6 N');
  });
  it('Should move to (x, y - 1)', () => {
    const rover = new Rover(5, 5, 'N', ['L', 'L', 'M'], mockedGrid);
    expect(rover.start()).toBe('5 4 S');
  });
  it('Should throw "Rover crashed" if move outside the grid in any direction', () => {
    const rover1 = new Rover(10, 10, 'N', ['M'], mockedGrid);
    const rover2 = new Rover(10, 10, 'E', ['M'], mockedGrid);
    const rover3 = new Rover(0, 0, 'S', ['M'], mockedGrid);
    const rover4 = new Rover(0, 0, 'W', ['M'], mockedGrid);

    expect(() => rover1.start()).toThrow('Rover crashed');
    expect(() => rover2.start()).toThrow('Rover crashed');
    expect(() => rover3.start()).toThrow('Rover crashed');
    expect(() => rover4.start()).toThrow('Rover crashed');
  });
});

describe('Rover turn', () => {
  it('Should turn to L (Left) of every facing direction', () => {
    const rover1 = new Rover(0, 0, 'N', ['L'], mockedGrid);
    const rover2 = new Rover(0, 0, 'E', ['L'], mockedGrid);
    const rover3 = new Rover(0, 0, 'S', ['L'], mockedGrid);
    const rover4 = new Rover(0, 0, 'W', ['L'], mockedGrid);

    expect(rover1.start()).toBe('0 0 W');
    expect(rover2.start()).toBe('0 0 N');
    expect(rover3.start()).toBe('0 0 E');
    expect(rover4.start()).toBe('0 0 S');
  });
  it('Should turn to R (Rigth) of every facing direction', () => {
    const rover1 = new Rover(0, 0, 'N', ['R'], mockedGrid);
    const rover2 = new Rover(0, 0, 'E', ['R'], mockedGrid);
    const rover3 = new Rover(0, 0, 'S', ['R'], mockedGrid);
    const rover4 = new Rover(0, 0, 'W', ['R'], mockedGrid);

    expect(rover1.start()).toBe('0 0 E');
    expect(rover2.start()).toBe('0 0 S');
    expect(rover3.start()).toBe('0 0 W');
    expect(rover4.start()).toBe('0 0 N');
  });
});

describe('Rover start', () => {
  it('Should follow commands properly', () => {
    const grid = new Grid(5,5);
    const rover1 = new Rover(1, 2, 'N', ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'], grid);
    const rover2 = new Rover(3, 3, 'E', ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'], grid);

    expect(rover1.start()).toBe('1 3 N');
    expect(rover2.start()).toBe('5 1 E');
  });
});
