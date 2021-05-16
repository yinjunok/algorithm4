const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export default (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j > 0; j -= 1) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
      }
    }
  }
  
  return arr
}
