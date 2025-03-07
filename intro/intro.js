/* 
// (localStorage) ta browser er api so eta use korte  caile (ekta html file create kroe sei file er sate js file ta )add atta lagai then (localStorage) ta use korte hbe.jeehto amr ekn ei js file ta html file er sate linkup kora ase & html file to browser e cole tai (localStorage)api ta use kora jabe.
jmn: 22


// kuno object browser er localStorage e set korte caile must be (JSON.stringify(object)) ta convert korte hbe, hlei sei object ta browser e set hbe. & sei browser e set kora obj ta browser theke access korte caile seta access korar pore (JSON.parse()) etar maddome stringify object theke normal object e covnert korte hbe ,thlei kaj korbe, 

##eta korar karon hocce 

@ localStorage e object rakte ( JSON.stringify(objectName)  ) er maddome string e convert kore rakte hbe, & jodi sei localStorage er object ta abr use korte cai kinba sei object er kuno value/data jaihokna keno use korte caile seta k (JSON.parse()) er maddome objectstring theke object e covert korte hbe jate sei object key/value/entries sob ja mon cai access kora jai.
*/

const object1 = {name:'tipu' , age:22};

console.log("before stringify",object1)//{ name: 'tipu', age: 22 }
const after_converted_JSON_stringify = JSON.stringify(object1);
console.log(after_converted_JSON_stringify);// output: {"name":"tipu","age":22}


// again stringify to json parse er maoddome object e convert krte caile:


// 22

localStorage.setItem("add1" , "add1 er value ami ")
const getdata = localStorage.getItem("add1");
console.log(getdata)

const object2 = {age:222 ,name:"stringify"}
const setObjectToBrowser_localStorage_by_JSON_stringify = JSON.stringify(object2);//object e json.stringify e converted kroa hoise


const getObjectFrom_localStorage = localStorage.setItem("object2" , setObjectToBrowser_localStorage_by_JSON_stringify)
// string e convert kroa obj k local browser er localStorage e set kora hoise,  nise seta print kore check kora hoise add hoise kina.


console.log(setObjectToBrowser_localStorage_by_JSON_stringify);
console.log(getObjectFrom_localStorage);



