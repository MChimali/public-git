class Usuario{
    constructor(name, surname){
      this.name = name,
      this.surname = surname,
      this.fullname = this.name + this.surname
    }
}

const user1 = new Usuario("Miguel", "Chimali")
console.log(user1)