# Oh my cases

Library to recursively convert any types from any cases to destination one

## Install

npm

```shell
npm install oh-my-cases
```

yarn

```shell
yarn add oh-my-cases
```

## Usage

```js
import { toCamel } from 'oh-my-cases'

toCamel('snake_case') // => 'snakeCase'
toCamle({'snake_case': 11}) // => {'snakeCase': 11}
```

## How to contribute

To add support for new case, just add two functions like `snakeStringtoCamel` and `snakeToCamel` into `index.js` and export function for case conversion.
Don't forgot about tests.

Example for `camelCase`:

```js
// index.js

const snakeStringToCamel = (value) => {
  return value.replace(/_(\w)/g, (m) => m[1].toUpperCase())
}

const snakeToCamel = toCase(snakeStringToCamel)

module.exports = {
  // ...
  snakeToCamel
  // ...
}
```

Then make a Pull Request and thanks to you for help grow open source :)
