//Singleton
// const tinderUser=new Object()
// console.log(tinderUser); // {} -> empty object

const tinderUser={}
tinderUser.id=1
tinderUser.name="Ram"
tinderUser.city="Noida"
// console.log(tinderUser);

const upiUser={
    name : "Neeraj",
    fullName :{
        userFullName : {
            firstName : "Neeraj",
            lastName : "Patel"
        }
    },
    email : "Neeraj@gmail.com"
}
//console.log(upiUser.fullName.userFullName.lastName); // Patel

const obj1={1:"a" , 2:"b" , 3:"c"}
const obj2={4:"d" , 5:"e" , 6:"f"}
const obj3={7:"g" , 8:"h" , 9:"i"}
const obj=Object.assign(obj1,obj2)
// console.log(obj); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// console.log(Object.assign({},obj1,obj2,obj3)) // {}->target , obj1,obj2,obj3->source //  { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f','7': 'g','8': 'h','9':'i' }
// const objj={...obj1,...obj2,...obj3} // spread operator 
// console.log(objj); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f','7': 'g','8': 'h','9':'i' }

const user=[
    {

    },
    {
        id: 2,
        email : "rjf@sd.com"
    },
    {

    }
]
//console.log(user[1].email); // rjf@sd.com

// console.log(tinderUser); // { id: 1, name: 'Ram', city: 'Noida' }
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'city' ]
// console.log(Object.values(tinderUser)); // [ 1, 'Ram', 'Noida' ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', 1 ], [ 'name', 'Ram' ], [ 'city', 'Noida' ] ]

// console.log(tinderUser.hasOwnProperty('city')); // true // it takes only key
// console.log(tinderUser.hasOwnProperty('Noida')); // false

// ** Objecct de-structure **
const course={
    courseName : "JS",
    coursePrice : 999,
    courseTeacher : "Neeraj"
}
//console.log(course.courseTeacher); // Neeraj
// const {courseTeacher}=course
// console.log(courseTeacher); //Neeraj
const {courseTeacher : myTeacher}=course
//console.log(myTeacher); //Neeraj

//**JSON formate */
{
    "courseName" : "JS",
    "coursePrice" : 999,
    "courseTeache"r : "Neeraj"
}

[
    {},
    {},
    {}
]















