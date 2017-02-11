module.exports = class User {
  constructor(name, surname, email){
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  toString(){
    return `Nombre: ${this.name} Apellido: ${this.surname}`
  }
}
