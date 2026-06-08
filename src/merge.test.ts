import { merge } from "./merge";

describe("merge(collection_1, collection_2, collection_3)", () => {
  test("merges three typical sorted arrays", () => {
    expect(merge([1,4,7], [9,6,3], [2,5,8])).toEqual([1,2,3,4,5,6,7,8,9]);
  });
  test("result is ascending", () => {
    const result = merge([0,10,20], [15,5], [3,8,25]);
    for (let i = 1; i < result.length; i++) {
      expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
    }
  });
  test("handles all empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
  });
  test("handles c1 only", () => {
    expect(merge([1,2,3], [], [])).toEqual([1,2,3]);
  });
  test("handles c2 only (descending)", () => {
    expect(merge([], [5,3,1], [])).toEqual([1,3,5]);
  });
  test("handles c3 only", () => {
    expect(merge([], [], [2,4,6])).toEqual([2,4,6]);
  });
  test("handles duplicates", () => {
    expect(merge([1,3,3], [5,3,1], [1,3,5])).toEqual([1,1,1,3,3,3,3,5,5]);
  });
  test("handles single elements", () => {
    expect(merge([2], [5], [3])).toEqual([2,3,5]);
  });
  test("handles negatives", () => {
    expect(merge([-10,-5,0], [8,3,-3], [-7,-1,6])).toEqual([-10,-7,-5,-3,-1,0,3,6,8]);
  });
  test("does not mutate inputs", () => {
    const c1 = [1,3], c2 = [4,2], c3 = [5,6];
    merge(c1, c2, c3);
    expect(c1).toEqual([1,3]);
    expect(c2).toEqual([4,2]);
    expect(c3).toEqual([5,6]);
  });
});