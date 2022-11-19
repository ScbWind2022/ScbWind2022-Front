// Keep in mind that @media is inclusive by the CSS specification.
export default function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values,
    unit = 'px',
    step = 5,
    ...other
  } = breakpoints
  const keys = Object.keys(values)

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key
    return `@media (min-width:${value}${unit})`
  }

  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key
    return `@media (max-width:${value - step / 100}${unit})`
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end)
    const minWidth = typeof values[start] === 'number' ? values[start] : start
    const maxWidth =
      (endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100

    return `@media (min-width:${minWidth}${unit}) and (max-width:${maxWidth}${unit})`
  }

  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1])
    }

    return up(key)
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    unit,
    ...other
  }
}
