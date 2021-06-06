import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { ThemeProvider, THEME_MODE, useTheme } from './theme.context'

test('expect default theme is dark mode', () => {
  // test the application with context provider provided by wrapper option
  // renderHook: https://github.com/testing-library/react-hooks-testing-library#usecountertestjs
  const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider })

  // default theme mode is dark mode
  expect(result.current.mode).toBe(THEME_MODE.dark)
  expect(global.window.document.body.dataset.theme).toBe(THEME_MODE.dark)
})

test('toggle theme', () => {
  const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider })

  // toggle theme mode
  act(() => {
    result.current.toggleTheme()
  })
  expect(result.current.mode).toBe(THEME_MODE.light)

  act(() => {
    result.current.toggleTheme()
  })
  expect(result.current.mode).toBe(THEME_MODE.dark)
})
