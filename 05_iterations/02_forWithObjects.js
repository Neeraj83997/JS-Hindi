const langObj={
    JS : "Java Script",
    CPP : "C++",
    RB : "Ruby"
}
for (const k in langObj) {
    //console.log(k); // JS   CPP   RB
     // console.log(langObj[k]); //     Java Script         C++       Ruby
     // console.log(`${k} means ${langObj[k]}`);  // JS means Java Script    CPP means C++     RB means Ruby 
}


const progArr=["Ruby","Java","Python"]
for (const key in progArr) {
    //console.log(key); // 0   1   2
    //console.log(progArr[key]); // Ruby   Java   Python
}


// map is not iterable by using forin
const map=new Map()
map.set("IN","India")
map.set("USA","United State Of America")
map.set("FR","France")
for (const [e,f] in map) {
    console.log(e +":"+ f); // map is not iterable by using forin
}
