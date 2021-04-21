import binarySearch from './index'

it('奇数个数数组', () => {
  const arr = [1, 2, 3, 4, 5]
  const r = binarySearch(arr, 3)
  expect(r).toBe(2)
})

it('测试偶数个数组', () => {
  const arr = [2, 3, 4, 5]
  const r = binarySearch(arr, 3)
  expect(r).toBe(1)
})

it('测试空数组', () => {
  const arr = []
  const r = binarySearch(arr, 3)
  expect(r).toBe(-1)
})

it('测试边界', () => {
  const arr = [2, 3, 4, 5, 6]
  expect(binarySearch(arr, 2)).toBe(0)
  expect(binarySearch(arr, 6)).toBe(4)
})
