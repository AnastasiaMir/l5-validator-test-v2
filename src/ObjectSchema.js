export default class ObjectSchema {
  shape(fields) {
    this.schema = fields;
    return this;
  }

  isValid(value) {
    const keys = Object.keys(value);
    if (keys.length !== Object.keys(this.schema).length) {
      return false;
    }
    const results = keys.every((key) => this.schema[key].isValid(value[key]) === true);
    return results;
  }
}
