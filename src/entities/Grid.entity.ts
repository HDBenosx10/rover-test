import { AxisEntity } from '../base/AxisEntity.base';
import { Cardinals } from '../types/spacial.types';

export class Grid extends AxisEntity {
  private readonly cardinals: Cardinals[] = ['N','E','S','W'];
  public nextCardinal(currentCardinal: Cardinals) {
    const currentCardinalPosition = this.cardinals.indexOf(currentCardinal);
    if(currentCardinalPosition + 1 > this.cardinals.length - 1) return this.cardinals[0];
    return this.cardinals[currentCardinalPosition + 1];
  }
  public previousCardinal(currentCardinal: Cardinals) {
    const currentCardinalPosition = this.cardinals.indexOf(currentCardinal);
    if(currentCardinalPosition - 1 < 0) return this.cardinals[this.cardinals.length - 1];
    return this.cardinals[currentCardinalPosition - 1];
  }
}
