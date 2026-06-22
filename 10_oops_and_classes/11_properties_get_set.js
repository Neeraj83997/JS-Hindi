function User(name,age,password){
       this.myName=name
        this.myAge=age
        this.myPassword=password

    Object.defineProperty(this,'password',{
        get: function (){
            return this.myPassword.toUpperCase()
        },
        set: function(value){
            this.myPassword=value
        }
    })

}
const myUser=new User('Ramu',22,'abc@123')
console.log(myUser.password);

