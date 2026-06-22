const User={
    myName: 'Neeraj',
    myPassword: 'abc@321',

    get password(){
        return this.myPassword.toUpperCase()
    },
    set password(value){
        this.myPassword=value
    }

}
const myUser=Object.create(User)
console.log(myUser.password);

