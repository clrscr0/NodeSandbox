// tests/add.spec.js (Vitest)

import { describe, it, expect } from 'vitest';
import Calculator from '../src/calculator';

describe('Calculator class', () => {
  let calc = new Calculator();

  it('should add two numbers correctly', () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(-1, 1)).toBe(0);
  });

  it('should handle zero values', () => {
    expect(calc.add(0, 0)).toBe(0);
  });
});