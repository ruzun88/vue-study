// test를 위한 파일
import { sum } from './math';

sum(10, 20); // 30

describe('sum 함수 테스트 코드', () => {
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    expect(result).toBe(30);
  });
});
