import { counterService } from './index';

describe('Counter Service', () => {
  it('should return numbers from 1 to 10', () => {
    const result = counterService.getCountSequence();
    
    expect(result).toBeDefined();
    expect(result.numbers).toHaveLength(10);
    expect(result.numbers[0]).toBe(1);
    expect(result.numbers[9]).toBe(10);
    
    // Verify the sequence is correct
    for (let i = 0; i < 10; i++) {
      expect(result.numbers[i]).toBe(i + 1);
    }
  });
});
