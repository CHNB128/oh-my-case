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

const stringToCamel = (value) => {
  return value.replace(/_(\w)/g, (m) => m[1].toUpperCase())
}

const toCamel = toCase(stringToCamel)

module.exports = {
  toCamel
}
