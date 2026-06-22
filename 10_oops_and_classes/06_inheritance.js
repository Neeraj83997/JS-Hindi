class User{
    constructor(userName){
        this.userName=userName
    }
    logMe(){
        console.log(`USERNAME is ${this.userName}`);    
    }
}
class Teacher extends User{
    constructor(userName,email,password){
        super(userName)
        this.email
        this.password
    }
   addCourse(){
    console.log(`A new course added by ${this.userName}`);
    
   }

}
const c1=new Teacher('Neeraj','we@gmail.com',123)
c1.addCourse()
const c2=new User('Ram')
//c2.addCourse() // not posible due to parent class and inheritance feature
c2.logMe()
console.log(c1 === c2);//false
console.log(c1 instanceof Teacher); //true
console.log(c1 instanceof User);//true
console.log(c2 instanceof Teacher);//false
console.log(c2 instanceof User);//true





