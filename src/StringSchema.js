export default class StringSchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  startsFromUpperCase() {
    const validator = (value) => {
      const regexp = /^[A-Z]/;
      if (value.match(regexp) !== null) {
        return true;
      }
      return false;
    };
    return new StringSchema([...this.validators, validator]);
  }

  length(len) {
    const validator = (value) => value.length === len;
    return new StringSchema([...this.validators, validator]);
  }

  hasExclamation() {
    const validator = (value) => value.match(/!/) !== null;
    return new StringSchema([...this.validators, validator]);
  }
}
