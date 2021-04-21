export default (arr: number[], a: number): number => {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (arr[mid] === a) {
      return mid
    }

    if (arr[mid] > a) {
      high = mid - 1
    }

    if (arr[mid] < a) {
      low = mid + 1
    }
  }

  return -1
}
