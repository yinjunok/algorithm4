import selectionSort from './index'

it('插入排序', () => {
  const testArr = [2, 3, 4, 56, 6, 7, 8]
  expect(selectionSort(testArr)).toEqual([2, 3, 4, 6, 7, 8, 56])
})

it('有重复元素, 插入排序', () => {
  const testArr = [2, 2, 3, 4, 5, 6, 1, 1, 2, 3, 432, 5, 64, 63, 243, 243, 214]
  expect(selectionSort(testArr)).toEqual([1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 63, 64, 214, 243, 243, 432])
})

it('空数组', () => {
  expect(selectionSort([])).toEqual([])
})
