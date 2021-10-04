import Button from '../Button'
import { fireEvent, render } from '@testing-library/react'

beforeEach(() => {
  // repetative login go here
})

test('should Button render with given props', () => {
  const { getByTestId } = render(
    <Button
      text="Simple Button"
      onClick={() => {
        console.log('hi')
      }}
      type="button"
    />
  )

  const btn = getByTestId('button')
  expect(btn.textContent).toBe('Simple Button')
  expect(btn.getAttribute('type')).toBe('button')
})

test('should onclick on button working', () => {
  const testFn = jest.fn(() => {
    console.log('hi')
  })
  const { getByTestId } = render(
    <Button text="Simple Button" onClick={() => testFn()} type="button" />
  )

  const btn = getByTestId('button')
  fireEvent.click(btn)
  expect(testFn.mock.calls.length).toBe(1)
})

export {}
