const assert = require('assert');
const execute = require('../lib/handlebars-sample').execute;

describe('sample',() => {
  it('execute ',() => {
    // arrange
    const obj = {
      name : 'Sakai.Memoru',
      age  : 51
    };
    const expected = 'Sakai.Memoru is 51.'
    // act
    const actual = execute('template',obj);
    console.log('%j',actual);
    // assert
    assert(actual,expected);
  })
});
