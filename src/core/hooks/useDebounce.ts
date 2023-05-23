import React from 'react'

/**
 * Hook useDebouncedValue позволяет отложить action на n-время.
 *
 * @param value - значение
 * @param timeout - время
 */

export const useDebouncedValue = (value: string | number | boolean, timeout: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  React.useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebouncedValue(value)
    }, timeout)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [value, timeout])

  return debouncedValue
}
