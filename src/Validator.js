/* eslint-disable class-methods-use-this */
import StringSchema from './StringSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  string() {
    const validator = (value) => typeof value === 'string';
    return new StringSchema([validator]);
  }

  array() {
    const validator = (value) => Array.isArray(value);
    return new ArraySchema([validator]);
  }

  object() {
    return new ObjectSchema();
  }
}
// const validator = new Validator();
//   const schema = validator.object().shape({
//     name: validator.string().startsFromUpperCase(),
//     basket: validator.array().maxDepth(1),
//   })
// const value = { name: 'B11', basket: ['potatos', 'tomatos', 'oranges', ['carrots']] };
// const keys = Object.keys(value);

// const res = () => {
//     if (keys.length !== Object.keys(schema).length) {
//         return false;
//     }
//     const results = keys.every((key) => schema[key].isValid(value[key]) === true);
//     return results;
// }

// console.log(res())
