const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export default (arr: number[]): number[] => {
  
  for (let i = 0; i < arr.length - 1; i += 1) {
    let min = i
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    swap(arr, min, i)
  }
  
  return arr
}
