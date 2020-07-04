import React from 'react'
import ReactDOM from 'react-dom'
import CanducciSwitch from '.'
import { act } from 'react-dom/test-utils'

describe('CanducciSwitch', () => {
  let container: any
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('is truthy', () => {
    expect(CanducciSwitch).toBeTruthy()
    act(() => {
      ReactDOM.render(<CanducciSwitch defaultChecked={false} />, container)
    })
    const input = container.querySelector('input')
    expect(input.checked).toBe(false)
  })
})
