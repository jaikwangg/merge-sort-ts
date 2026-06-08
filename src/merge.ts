export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const col2Asc = reverseArray(collection_2);
  const merged12 = mergeTwoAscending(collection_1, col2Asc);
  return mergeTwoAscending(merged12, collection_3);
}

function reverseArray(arr: number[]): number[] {
  const result: number[] = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[arr.length - 1 - i];
  }
  return result;
}

function mergeTwoAscending(a: number[], b: number[]): number[] {
  const result: number[] = new Array(a.length + b.length);
  let i = 0, j = 0, k = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) result[k++] = a[i++];
    else result[k++] = b[j++];
  }
  while (i < a.length) result[k++] = a[i++];
  while (j < b.length) result[k++] = b[j++];
  return result;
}