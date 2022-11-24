export class Contact {
    name = '';
    lastname = '';
    cellphone = '';
    email = '';
    state = false

    constructor(name, lastname, cellphone, email, state){
        this.name = name;
        this.lastname = lastname;
        this.cellphone = cellphone;
        this.email = email;
        this.state = state
    }
};

