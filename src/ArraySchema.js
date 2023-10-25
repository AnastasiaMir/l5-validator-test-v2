export default class ArraySchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  maxDepth(dep) {
    const findDepth = (value, currentDepth) => {
      const filtered = value.filter((arr) => Array.isArray(arr))
        .flat();
      return filtered.length !== 0 ? findDepth(filtered, currentDepth + 1) : currentDepth;
    };
    const validator = (value) => findDepth(value, 0) <= dep;

    return new ArraySchema([...this.validators, validator]);
  }
}
