import { reject } from 'lodash'

export const addCounter = (list) => {
  return [...list, 0]
}

export const removeCounter = (list, index) => {
  return reject(list, (v, i) => index === i)
}

export const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ]
}
