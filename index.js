// // //---1---
// let d="Hello World"
// console.log(d)
// ---2---
// //swaping
// let d="Hello World"
// let day = d.split(" ");
// let first =day[0]
// let second =day[1]
// day[0] = second;
// day[1] = first;
// my_string = day.join(" ");
// console.log(my_string)

// //---3---
// let d= "H W H W H"
// let value="H"
// count=0;
// for(i=0; i<d.length; i++){
// if(d.charAt(i)==value)
// {
//   count +=1
// }
// }
// console.log(count)

// //---4---
// let d="abc xyz"
// console.log(d.length)

// //---5---

// let d="abcd xyz abc"
// c=d.split(" ")
// console.log(c)

// // ---6---
// d="abcdd xyz"
// c=d.split(" ")
// c.splice(1,0,c[0],c[0],c[1])
// console.log(c)

// ---7---
// n = 5
// newValue = []
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     newValue.push(i)
//   }
// }
// console.log(newValue.join(""))

// //---8---
// let d= "1,2,3,4"
// c=d.split("")
// b=c.reverse()
// a=b.join("")
// console.log(a)

//// ---9---

// console.log(Math.pow(2, 4));

// //---10---
// let count= 10
// for (i=1;i<=count; i++){
//   console.log(i)
// }

// ---11---
// let count= 5
// for (i=1;i<=count; i++){
//   console.log(i*i)
// }
// //---12---
// let count= 0
//  for (i=10;i>count; i--){
//    console.log(i)
//  }

// ---13---


// let count = 10
// let countreverse = 0
// test = 1
// for (i = 10; i > countreverse; i--) {
//   console.log(i)
//   for (j = test; j <= count; j++) {
//     console.log(j);
//     test = j + 1;
//     break;
//   }
// }

// //---14---
// n = 3
// newValue = ""

// for (i = 0; i < n; i++) {

//   newValue = newValue+"111 222 " 
//   // console.log("111 222 ")
// }
// console.log(newValue)

// //---15---
// d=[123,456,789]
// console.log(d.indexOf(789))
// ---16---
//  d = [ ];
// console.log(d.indexOf())

//---17---
// d=['a','b','c','d']
// console.log(d.join(""))

// //---18---
// d =["hello", "softops"]
// d.splice(1,0,"world")
// console.log(d.join(" "))

// //---19---
// let d = [1, 2, 7, 6]
// for (let i = 0; i < d.length; i++) {
//   //console.log(i)
//   console.log(Math.pow(d[i], (i + 1))); 
// }
// //---20---
// d = [1, 'a', 3, 'b']
// str = []
// int = []
// for (let i = 0; i < d.length; i++) 
// {
//   if (typeof d[i] == "string") {
//     str.push(d[i]);
//     //console.log(d[i])
//   }
//   else if (typeof d[i] != "string")
//   {
//     int.push(d[i])
//   }
// }
// console.log(str)
// console.log(int)
// // ---21---

// d=[1,2,3,4,5]
// //let day = d.split(" ");
// let first =d[0]
// let second =d[4]
//  d[0] = second;
//  d[4] = first;
//  my_string = d.join(" ");
//  console.log(my_string)

// //---22---
// d = [1, 2, 3,4,5,6]
// var b = 0
// for (let i = 0; i < d.length; i++) {
//   b += d[i]

// }
// console.log(b)

// //---23---
// let d = [2, 2, 2, 1, 1, 1]
// let value = 2
// count = 0;
// for (i = 0; i < d.length; i++) {
//   if (d[i] == value) {
//     count += 1
//   }
// }
// console.log(count)

// //---24---
// d = [0, 1, 0, 1, 0, 1]
// d.sort(function funSort(a, b) {
//   return b - a
// })
// console.log(d)

// //---25---
// a = [1, 2, 3, 4, 5]
// b = [6, 7, 8, 9]
// d = a.concat(b)

// d.sort(function funSort(a, b) {
//   return b - a
// })
// console.log(d)

// //---26---
// a = [1, 2, 3, 5, 4]
// b = [6, 7, 8, 9]
// d = a.concat(b)
// d.sort(function funSort(a, b) {
//   return a - b
// })
// console.log(d)

// //---27---
// d=[3,9,6,10] 
// console.log(d.reverse())

// //---28---
// d= [2,1,2,1,1,2]
// d.sort(function funSort(a, b) {
//   return a-b

// })
// console.log(d)

// //---29---
// d = [1, 2, 3, 4, 5]
// for (i = 0; i < d.length; i++) { console.log(d[i] + 2) }

// //---30---

// d = [9, 4, 27, 6, 3]
// d.splice(2, 1, 0)
// console.log(d)

//---31---

// day=[10,20,30,40,50]

// let first =day[0]
// let second =day[1]
// let fourth =day[3]
//   let fifth =day[4]
// day[0] = second;
// day[1] = first;
// day[3]=fifth;
// day[4]=fourth;

// console.log(day)

// x=40
// y=30
// x=x-y
// y=y+x
// x=y-x
// console.log(y,x)




// //---32---
// d=[4,3,2,1,0]
// d.splice(3, 1, 4)
//  console.log(d)

// //---33---
// a = [6, 6, 6, 6]
// b = [7, 8, 9, 10]
// c = [6, 7, 8, 10]
// value = []
// arr = a.concat(b, c)
// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
//console.log(removeDuplicates(arr));

// //---34---
// a = ["a"]
// b = ["b"]
// c = ["c"]
// d = a.concat(b, c)
// console.log(d.join('')
// )
// //---35---
// d=[2,3,4,5] 
// //=> [2,6,4,5]
// d.splice(1,1,6)
// console.log(d)

//---36--
// d = [4, 5, 6, 7]
// newArray = []
// b = d.slice(0, 2)
// let text = b.join("");
// newArray.push(text)
// q = d.slice(2, 4)
// let textq = q.join("");
// newArray.push(textq)
// console.log(newArray)


// //---37---
// d = [4, 5, 6, 7, 8, 9]
// arr = []
// for (i = 0; i < d.length; i++) {
//   if(i > d.length-2){ break;}
//   else {x = d[i]
//   y = d[i + 1]
//   value = x + "" + y
//   arr.push(value)}

// }
// console.log(arr)

// // ---38---
// d=[7,8,9,10,11,12] 

// d.splice(0,0,d[5])
// d.pop()
// console.log(d)

//---39--

// arr = [3, 2, 1, 0, -1, -2];
// total = 0;
// for (i = 0; i < arr.length; i++) {
//   total = total + arr[i];
// }
// console.log(total)

// // //---40---
// n = 6;
// arr = [1, 2, 3]
// for (i = 0; i < 3; i++) {
//   //arr.push()
//   value = arr[arr.length - 1]
//   arr.push(value + 1)
//   console.log(arr)
// }
// //---41---


// let d=['abc','xyz','pqr']
// let first =d[0]
// let second =d[1]
// d[0] = second;
// d[1] = first;
// console.log(d)

//---42---
// //Even--Odd
// d = [3, 2, 1, 0]
// evenArray = []
// oddArray = []
// for (i = 0; i < d.length; i++) {
//   if (d[i] % 2 == 0) { evenArray.push(d[i]) }
//   else { oddArray.push(d[i]) }
// }
// value = evenArray.concat(oddArray)
// console.log(value)

// //---43---
// d=['I','AM','DEV'] 
// d[2]="DEVELOPER"
// console.log(d)

// //---44---
// d = "A B C D"
// arr=d.split(" ")
// newArray = []
// b = arr.slice(0, 2)
// let text = b.join("");
// newArray.push(text)
// q = arr.slice(2, 4)
// let textq = q.join("");
// newArray.push(textq)
// console.log(newArray)

// //---45---
// d = "SOFTOPS"
// a = d.split("")
// for (let i = 0; i < a.length; i++) {
//   for (j = 0; j < i; j++) {
// console.log(a[i-1])
//   }
//   //console.log(a[i] += a[i])
//   //console.log(Math.pow(a[i], (i + 1))); 
// }

//---46---

// str="ABC"
// arr=["D","E","F"]
// a=arr.join("")
// console.log(str+a)

// //---47---

// a="JAVA"
// b="SCRIPT"
// console.log(b+" "+a+" " +b)

// //---48---

// str="MAN"
// console.log(str.split("").reverse().join(""))
// //---49---
// str=prompt("enter the value:" )

// value=str.split("").reverse().join("")
// if(value==str){console.log("TRUE")}
// else {console.log("FALSE")}
//---50---

// n = 5
// for (i = 0; i < n + 1; i++) {
//   for (j = 0; j < i; j++) {
//     console.log(i)
//   }
// }
// //---51---
// obj = { abc: "abc" }
// console.log(obj.abc)
// //---52---

// obj = { abc: 1 }
// console.log(obj.abc)
// //---53---

// obj = { abc: "abcd" }
//  console.log(obj.abc)

// //---54---
// obj = {
//   abc: "abc",
//   xyz: 'abc'
// }
// console.log(obj.abc)

// //---55---


// //---56---
// let obj ={ a:1, b:2, c:3}

// for (key in obj )
// {
// a=obj[key]*obj[key]
//     obj[key] = a;

// }
// console.log(obj)‹

// //---57---
// let obj ={ a:1, b:2, c:3}
// for (key in obj ){console.log(key)}

// //---58---

// let obj ={ a:1, b:2, c:3}
// for(key in obj ){console.log(obj[key])}

// //---59---
// let obj ={ a:2, b:3, c:4} 
// console.log(obj.c)
//---60---

//  let obj ={ a:1, b:2, c:3} 
// console.log(obj.b *3)

//---61---
// let obj = { a: 1 };
// let obj2 = { p: 2 }
// object ={...obj, ...obj2}
// console.log(object)

// //---62---

// let obj ={ a:1, b:2} 
// console.log(obj)

// //---63---
// let obj = { a: 1, c: 3 }
// for (key in obj) {
//   a = obj[key] * 3
//   obj[key] = a
// }
// console.log(obj)

// //---64---
// let obj = { a: 1, c: 3 }
// delete obj.a
// console.log(obj)

// //---65---


// let obj ={ a:1}
// obj.a ="1 abc"
// console.log(obj)

// //---66--


// let obj = { a: [1, 2, 3] }
//  obj.a[1] ="a"
// console.log(obj)

// //---67---
// let obj = { a: [1, 2, 3], b: [3, 4, 5] }
// obj.a[2] = "a"
// obj.b[2] = "b"
// console.log(obj)


// //---68---

//  let obj ={ a:[1,1,1], b:[2,2,2]}
// obj.c =[3,3,3]
// obj.d =[4,4,4]
// console.log(obj)

// // //---69---


//  obj ={ a:'abc',b:[1,1,1]}
// c=obj.a

// obj.b.push(c)
// delete obj.a
// console.log(obj)

// ---70---
// let obj ={ a:[1,2,3], b:[3,4,5]}
// console.log(obj.b.length-1)
// //---71---
// let obj = {
//   b: [3, 4, 5]
// }
// value = 1
// for (i = 0; i < obj.b.length; i++) {
//     value= obj.b[i] * value

// }
// console.log(value)

// //---72---


// let obj ={ a:2, b:[3,4,5]}
// newObj= obj.b

// value=4
// console.log(newObj.indexOf(value))

// //---73---
// let obj =
// { soft:"top"}
// objKey=     Object.keys(obj)
// objValue= Object.values(obj)
// arr=objKey.concat(objValue);
// finalvalue=arr.join("-")
// console.log(finalvalue)

// //---74---
// let obj ={ a:[1,2,3], b:[3,4,5], c:[8,9,10]}

// let first =obj.a
//  let second =obj.c

//  obj.a = second;
//  obj.c  = first;

//  console.log(obj)

// //---75---

let obj ={ a:[1,2,3,4,5]}
newValue=""
for (i=0;i<obj.a.length; i++)
  {

newValue=newValue+obj.a[i]

  }
console.log(newValue)


// //---76---
// let obj = {
//   abc: [
//     { id: 1, abc: 1, xyz: 2 },
//     { id: 2, abc: 2, xyz: 3 }
//   ]
// }
// for (i = 0; i < 2; i++) {
//   if (obj.abc[i].id == 1) {
//     obj.abc[i].xyz = 3
//     console.log(obj)
//   }
// }

// //---77---


// let obj = {
//   abc: [
//     { id: 1, abc: 1, xyz: 2 },
//     { id: 2, abc: 2, xyz: 3 }
//   ]
// }
// for(i=0;i<2;i++)
// {
// if(obj.abc[i].id==2){
//   obj.abc[i].abc =3
//   console.log(obj)

// }
// }

// //---78---

// let obj = {
//   abc: [
//     { id: 1, abc: 1, xyz: 2 },
//     { id: 2, abc: 2, xyz: 3 }
//   ]
// }
// for(i=0;i<2;i++)
// {
// if(obj.abc[i].xyz==3){
//   obj.abc[i].abc ="ABC"
//   console.log(obj)

// }
// }

// //---79---
// let obj = {
//   abc: [
//     { id: 1, abc: 1, xyz: 2 },
//     { id: 2, abc: 2, xyz: 3 }
//   ]
// }
// obj.abc.push({id:3,abc:5,xyz:7})
// console.log(obj)

// //---80---

// let obj = {
//   abc: [
//     { id: 1, abc: 1, xyz: 2 },
//     { id: 2, abc: 2, xyz: 3 }
//   ]
// }
// obj.abc.push({id:4,abc:5,xyz:7,value:4})
// console.log(obj)

// //---81---
// let obj = {
//   abc: [
//     { id: 1, abc: 1, xyz: 2 },
//     { id: 2, abc: 2, xyz: 3 }
//   ]
// }
// const newArry = obj.abc.filter((item) => item.abc !==2 );
// console.log(newArry)

// //---82---
// let obj = {
//   abc: [
//     { id: 1, abc: 1, xyz: 2 },
//     { id: 2, abc: 2, xyz: 3 }
//   ]
// }
// const newArry = obj.abc.filter((item) => item.id !== 2);
// console.log(newArry)

//---83---

// let obj = {
//   abc: [
//     { id: 1, abc: 1, xyz: 2 },
//     { id: 2, abc: 2, xyz: 3 }
//   ]
// }
// const newArr=

//---84---
//not available

//---85---
// let obj ={
// 	abc:[
//   	{id:1,name:'Rohit',age:26},
//   	{id:2,name:'rituraj',age:25},
//   	{id:3,name:'gaurav',age:18}
//  	]
//   }

// obj.abc.push( {id:4,name:'abc',age:25}		
// )
//  console.log(obj)


//---86---
// let obj ={
// 	abc:[
//   	{id:1,name:'Rohit',age:26},
//   	{id:2,name:'rituraj',age:25},
//   	{id:3,name:'gaurav',age:18}
//  	]
//   }
// for(i=0;i<3;i++)
// {
//   if(obj.abc[i].id==2){

//    console.log(obj.abc[i])
// }
//  }

// //---87---
// let obj ={
// 	abc:[
//   	{id:1,name:'Rohit',age:26},
//   	{id:2,name:'rituraj',age:25},
//   	{id:3,name:'gaurav',age:18}
//  	]
//   }
// for(i=0;i<3;i++)
// {
//   if(obj.abc[i].id==3){

//    console.log(obj.abc[i])
// }
//  }

// //---88---
// let obj ={
// 	abc:[
//   	{id:1,name:'Rohit',age:26},
//   	{id:2,name:'rituraj',age:25},
//   	{id:3,name:'gaurav',age:18}
//  	]
//   }

// for(i=0;i<3;i++)
// {
//   if(obj.abc[i].age>20){

//    console.log(obj.abc[i].name)
// }
// }


//---89---
// let obj ={
// 	abc:[
//   	{id:1,name:'Rohit',age:26},
//   	{id:2,name:'rituraj',age:25},
//   	{id:3,name:'gaurav',age:18}
//  	]
//   }

// for(i=0;i<3;i++)
// {
//   if(obj.abc[i].id==3){
//     console.log(obj.abc[i].age
//                )
// }
// }
// //---90---
// let obj ={
// 	abc:[
//   	{id:1,name:'Rohit',age:26},
//   	{id:2,name:'rituraj',age:25},
//   	{id:3,name:'gaurav',age:18}
//  	]
//   }
// for(i=0; i<3;i++)
// {

//   if(obj.abc[i].name=="gaurav")
//     obj.abc[i].age=30
//   {console.log(obj)}
// }
// //---91---
// let obj ={
// 	abc:[
//   	{id:1,name:'Rohit',age:26},
//   	{id:2,name:'rituraj',age:25},
//   	{id:3,name:'gaurav',age:18}
//  	]
//   }
// for(i=0; i<3;i++)
// {

//   if(obj.abc[i].id==1)
//   {  obj.abc[i].name="Rituraj Mandloi"
//   }
// }console.log(obj)

// //---92---

// let obj ={
// 	abc:[
//   	{id:1,name:'Rohit',age:26},
//   	{id:2,name:'rituraj',age:25},
//   	{id:3,name:'gaurav',age:18}
//  	]
//   }
// obj.abc.unshift({id:4,abc:5,xyz:7,value:4})
// console.log(obj)


// //---93---

// let obj ={
// 	abc:[
//   	{id:1,name:'Rohit',age:26},
//   	{id:2,name:'rituraj',age:25},
//   	{id:3,name:'gaurav',age:18}
//  	]
// }
// for(i=0; i<3;i++)
// {
// delete obj.abc[i].age
// }console.log(obj)

// //---94---

// let obj ={
// 	abc:[
//   	{id:1,name:'Rohit',age:26},
//   	{id:2,name:'rituraj',age:25},
//   	{id:3,name:'gaurav',age:18}
//  	]
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// indexx= getRandomInt(3)
// obj.abc.splice(indexx,0 ,{id: 4 , name:"aditya", age : 23})
// console.log(obj.abc)
//---95---
// let obj ={
// 	abc:[
//   	{id:1,name:'Rohit',age:26},
//   	{id:2,name:'rituraj',age:25},
//   	{id:3,name:'gaurav',age:18}
//  	]}
// newArr = obj.abc.map(myFunction)

// function myFunction(num , index) {
//     aa= obj.abc[index]
//   console.log(aa)
// }
//---96--- to ---98
//not available



// //---100---
// let obj ={
// 	abc:[
//   	{id:1,name:'Santa',age:26},
//   	{id:2,name:'banta',age:25},
//   	{id:3,name:'bhad me jaye janta',age:18}
//  	],
//   	xyz:[
//   	{id:4,name:'Hum',age:26},
//   	{id:5,name:'tum',age:25}
//  	]
//   }
// let newArry= obj.xyz.filter((item)=>{
//   return item.id ==5
// })
// delete obj.xyz.newArry
// console.log(obj.xyz)
// console.log(newArry)




// // ---101---
// let obj = {
//   abc: [
//     { id: 1, name: 'Santa', age: 26 },
//     { id: 2, name: 'banta', age: 25 },
//     { id: 3, name: 'bhad me jaye janta', age: 18 }
//   ],
//   xyz: [
//     { id: 4, name: 'Hum', age: 26 },
//     { id: 5, name: 'tum', age: 25 }
//   ]
// }
// const newArry = obj.xyz.filter((item) => item.name !== "Hum");
// console.log(newArry)


//---102---

// let obj = {
//   abc: [
//     { id: 1, name: 'Santa', age: 26 },
//     { id: 2, name: 'banta', age: 25 },
//     { id: 3, name: 'bhad me jaye janta', age: 18 }
//   ],
//   xyz: [
//     { id: 4, name: 'Hum', age: 26 },
//     { id: 5, name: 'tum', age: 25 }
//   ]
//  }

// const newArry = obj.abc.filter((item) => item.id !== 2);
// console.log(newArry)

//---103---
// let obj = {
//   abc: [
//     { id: 1, name: 'Santa', age: 26 },
//     { id: 2, name: 'banta', age: 25 },
//     { id: 3, name: 'bhad me jaye janta', age: 18 }
//   ],
//   xyz: [
//     { id: 4, name: 'Hum', age: 26 },
//     { id: 5, name: 'tum', age: 25 }
//   ]
// }

// const newArry = obj.abc.filter((item) => item.id <= 2);
// console.log(newArry)



// //---104---
// let obj = {
//   abc: [
//     { id: 1, name: 'Santa', age: 26 },
//     { id: 2, name: 'banta', age: 25 },
//     { id: 3, name: 'bhad me jaye janta', age: 18 }
//   ],
//   xyz: [
//     { id: 4, name: 'Hum', age: 26 },
//     { id: 5, name: 'tum', age: 25 }
//   ]
// }

// for(i=0 ; i< obj.abc.length;i++)
//   { 
//     if( obj.abc[i].id==3 ){

//    obj.abc[i].name = "pqr" 
//     }
//   }
// console.log(obj.abc)

// //---105---

// let obj = {
//   abc: [
//     { id: 1, name: 'Santa', age: 26 },
//     { id: 2, name: 'banta', age: 25 },
//     { id: 3, name: 'bhad me jaye janta', age: 18 }
//   ],
//   xyz: [
//     { id: 4, name: 'Hum', age: 26 },
//     { id: 5, name: 'tum', age: 25 }
//   ]
// }

// for(i=0 ; i< obj.xyz.length;i++)
//   {
//    obj.xyz[i].name = "pqr" 
//   }
// console.log(obj.xyz)
// // ---106---

// let obj ={
// 	abc:[
//   	{id:2,name:'banta',age:25},
//   	{id:1,name:'Santa',age:26},
//   	{id:3,name:'bhad me jaye janta',age:18}
//  	],
//   	xyz:[
//   	{id:4,name:'Hum',age:26},
//   	{id:5,name:'tum',age:25}
//  	]
//   }
// obj.xyz.push({id:6,name:'Upr Ja',age:2} )
// console.log(obj.xyz)
//
