const R = require('ramda')
const { snakeToCamel } = require('./index');

it.concurrent('Convert string from snake to camel case', async () => {
  expect(snakeToCamel('snake_case')).toBe('snakeCase');
});

it.concurrent('Convert array from snake to camel case', async () => {
  const a = R.times((n) => `snake_case_${n}`, 5)
  const b = R.times((n) => `snakeCase${n}`, 5)
  expect(snakeToCamel(a)).toStrictEqual(b);
  const c = { array: ['shouldBeSameCaseAsBefore'] }
  expect(snakeToCamel(c)).toStrictEqual(c)
});

it.concurrent('Convert object from snake to camel case', async () => {
  const a = {'user_id': 1, 'user_name': 'Oga'}
  const b = {'userId': 1, 'userName': 'Oga'}
  expect(snakeToCamel(a)).toStrictEqual(b);
});

it.concurrent('Convert object recursively from snake to camel case', async () => {
  const a = {
    'user_id': 1,
    'user_name': 'Oga',
    'user_links': {
      'profile_url': 'http://url.io',
      'resume_url': 'http://url.io',
    }
  }
  const b = {
    'userId': 1,
    'userName': 'Oga',
    'userLinks': {
      'profileUrl': 'http://url.io',
      'resumeUrl': 'http://url.io',
    }
  }
  expect(snakeToCamel(a)).toStrictEqual(b);
});

it.concurrent('Convert object recursively from snake to camel case with different types', async () => {
  const a = {
    'user_id': 1,
    'user_name': 'Oga',
    'user_links': {
      'profile_url': 'http://url.io',
      'resume_url': 'http://url.io',
    },
    'user_positions': [11, 21, 43, 54],
    'user_friends': [
      {
        'user_id': 2,
        'user_name': 'Red Hot'
      },
      {
        'user_id': 5,
        'user_name': 'Tommy'
      },
    ],
  }
  const b = {
    'userId': 1,
    'userName': 'Oga',
    'userLinks': {
      'profileUrl': 'http://url.io',
      'resumeUrl': 'http://url.io',
    },
    'userPositions': [11, 21, 43, 54],
    'userFriends': [
      {
        'userId': 2,
        'userName': 'Red Hot'
      },
      {
        'userId': 5,
        'userName': 'Tommy'
      },
    ],
  }
  expect(snakeToCamel(a)).toStrictEqual(b);
});
