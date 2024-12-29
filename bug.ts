function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const result = combine([1,2,3], [4,5,'6']);
console.log(result); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.