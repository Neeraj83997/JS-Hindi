class User{
    constructor(name,age,password){
        this.name=name
        this.age=age
        this.password=password
    }
    get password(){
        return `${this.pass_word.toUpperCase()}45`
    }
    set password(value){
        this.pass_word=value // here this pass_word is not equal to password, if i put password in this line, error will come like: Maximum call stack size exceeded , 
                             // because constructor and setter method ,both are continusly trying to set the password value
    }

}
const myUser=new User("Ram",33,'ram@123')
console.log(myUser.password); //RAM@12345
