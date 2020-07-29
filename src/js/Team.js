export default class Team {
  constructor(...persons) {
    this.members = new Set(persons);
  }

  * [Symbol.iterator]() {
    for (const person of this.members) {
      yield person;
    }
  }
}
