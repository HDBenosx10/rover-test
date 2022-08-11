import { GetInput } from '../utils/GetInput.util';
import fs from 'fs';

describe('GetInput formatInput', () => {
  it('Should format input buffer', () => {
    const formatedInput = GetInput.formatInput(fs.readFileSync('src/tests/mocks/input.test.txt'));
    expect(formatedInput).toMatchObject(
      {
        grid: {x: 5, y: 5},
        rovers: [
          {
            cordinates: {
              facing: 'N',
              x: 1,
              y: 2,
            },
            instructions: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']
          }
        ]
      }
    );
  });
});
