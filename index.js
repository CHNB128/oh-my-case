const toCase = (stringToCaseFn) => (value) => {
  const convertFn = toCase(stringToCaseFn)
  if (value === null) {
    return null
  } else if (typeof value === 'string') {
    return stringToCaseFn(value)
  } else if (value.length !== undefined) {
    return value.map(convertFn)
  } else if (typeof value === 'object') {
    const object = {}
    Object.keys(value).forEach((key) => {
      let _value = value[key]
      if (typeof _value === 'object') {
        _value = convertFn(value[key])
      }
      object[convertFn(key)] = _value
    })
    return object
  } else {
    return value
  }
}

const snakeStringToCamel = (str) => str.replace(/_(\w)/g, (m) => m[1].toUpperCase())
const snakeToCamel = toCase(snakeStringToCamel)

const camelStringToSnake = (str) => str.replace(/[A-Z]/g, m => `_${m.toLowerCase()}`)
const camelToSnake = toCase(camelStringToSnake)

module.exports = {
  snakeToCamel,
  camelToSnake,
}
