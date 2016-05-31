import expect from 'expect'
import deepFreeze from 'deep-freeze'

import {
  addCounter,
  incrementCounter,
  removeCounter,
  toggleTodo
} from './app'

describe('addCounter', function () {
  it ('adds a counter', function () {
    const listBefore = []
    const listAfter = [0]

    deepFreeze(listBefore)

    expect(
      addCounter(listBefore)
    ).toEqual(listAfter)
  })
})

describe('removeCounter', function () {
  it('removes the counter', function () {
    const listBefore = [0, 10, 20]
    const listAfter = [0, 20]

    deepFreeze(listBefore)

    expect(
      removeCounter(listBefore, 1)
    ).toEqual(listAfter)
  })
})


describe('incrementCounter', function () {
  it('increments the given counter', function () {
    const listBefore = [0, 10, 20]
    const listAfter = [0, 11, 20]

    deepFreeze(listBefore)

    expect(
      incrementCounter(listBefore, 1)
    ).toEqual(listAfter)
  })
})

describe('toggleTodo', function () {
  it("it toggles a todo's 'completed' attribute", function () {
    const todoBefore = {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
    const todoAfter = {
      id: 0,
      text: 'Learn Redux',
      completed: true
    }

    deepFreeze(todoBefore)

    expect(
      toggleTodo(todoBefore)
    ).toEqual(todoAfter)
  })
})
