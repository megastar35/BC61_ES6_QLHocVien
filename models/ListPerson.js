export default class ListPerson {
  personList = [];

  addPerson = function (user) {
    this.personList.push(user);
  };
  delPerson = function (index) {
    this.personList.splice(index, 1);
  };
  updatePerson = function (person, index) {
    this.personList[index] = person;
  };
}
