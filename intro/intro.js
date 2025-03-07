/* 

// kuno object browser er localStorage e set korte caile must be (JSON.stringify(object)) ta convert korte hbe, hlei sei object ta browser e set hbe. & sei browser e set kora obj ta browser theke access korte caile seta access korar pore (JSON.parse()) etar maddome stringify object theke normal object e covnert korte hbe ,thlei kaj korbe, 

##eta korar karon hocce 


*/

const object1 = {name:'tipu' , age:22};

console.log("before stringify",object1)//{ name: 'tipu', age: 22 }
const after_converted_JSON_stringify = JSON.stringify(object1);
console.log(after_converted_JSON_stringify);// output: {"name":"tipu","age":22}


// again stringify to json parse er maoddome object e convert krte caile:
