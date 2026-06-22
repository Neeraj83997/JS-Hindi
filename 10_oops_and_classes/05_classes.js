class User{
    constructor(userName, email,password){
        this.userName=userName
        this.email=email
        this.password=password
    }
    myEncripter(){
        console.log(`Password encrypted ${this.password}abc`);
        
    }
}
const usr=new User('Neeraj','Neeraj@gmail.com',123)
usr.myEncripter()

// behind the seen with using function
// function User(userName, email,password){
//     this.userName=userName
//     this.email=email
//     this.password=password
// }
// User.prototype.myEncripter=function (){
//     console.log(`Password encrypted ${this.password}abc`);
// }
// const encPass=new User('Neeraj','Neeraj@gmail.com',123)
// encPass.myEncripter()
