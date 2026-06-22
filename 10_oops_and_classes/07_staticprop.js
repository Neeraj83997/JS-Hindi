class User{
    constructor(username,age){
        this.username=username
        this.age=age
    }
    logMe(){
        console.log(`USER is ${this.username}`);
        
    }
    static userId(){ // this userId()'s access is prohibited by using static
        return 123
    }
}
const c1=new User('Nee',22)
//console.log(c1.userId()); // we can not access because of static

class Teacher extends User{
    constructor(userName,email,age){
        super(userName,age)
        this.email=email
    }

}
const c2=new Teacher("Arun","Arun@gmail.com",11)
c2.logMe()
//c2.userId() // Not accessable

