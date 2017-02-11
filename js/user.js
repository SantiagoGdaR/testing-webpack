module.exports = class User {
  constructor(name, surname, email){
    this._name = name;
    this._surname = surname;
    this._email = email;
  }

  get name(){ return this._name };
  get surname() { return this._surname };
  get email() { return this._email };

  set name(name){ this._name = name };
  set surname(surname){ this._surname = surname };
  set email(email){ this._email = email };

  toString(){
    return `Nombre: ${this._name} Apellido: ${this._surname}`
  }
}
