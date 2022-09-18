// var jsStudents=[]
// var smmStudents=[]
// var maxStudent=4;
// function addStudent(student){
// if(student.includes('js')){
//         jsStudents.push(student)
//     }
//     if(jsStudents.length==maxStudent){
//         console.log('you can not join this group');
//     }
// }
// function printStudents(){

//     for(var i = 0;i<jsStudents.length;i++){
//         console.log(jsStudents[i]);
//     }
// }
// addStudent('jstoxir')
// addStudent('jsNajim')
// addStudent('jsAziz')

// printStudents(jsStudents)
//  const phone= 'iphone14ProMax'
//  switch(phone){
//     case "Animal":
//         break
//     case 'iphone14ProMax':
//         break
//     case "samsung": 
//          break
//     default :
//     console.log('this predmet no more');            
//  }
// var nums=[2,7,3,9]
// var target =9
// function result(number){
// if(number.includes(9)){
//  nums.push(number)
// }

// }
// result(9)
// const age =5;
// const canWrite =age>10 ? 'write':'you can not write'
// console.log(canWrite);
// let about ={
//     name:'ozod',
//     age:17,
//     gender:'male',
//     job:'useful job'
// }
// let arr = ['',1, 'ikki',null,undefined,NaN,true]
// arr.push(13)//bu oxiridan data type turini qo'shadi
// arr.pop()//bu oxiridan qoshilgan data type turini oladi 
// arr.unshift(10) //bu boshidan data type qoshadi
// arr.shift()//bu boshidan qoshilgan soni yoki typlarni oladi
// console.log(arr);
// function main(a){
//     let numArr=[]
//     let strArr=[]
//     if(typeof a==='number'){
//         numArr.push(a)
//         return numArr
//     }
//     if(typeof a === 'string'){
//         strArr.push(a)
//         return strArr
//     }
// }
// console.log(main(1));
// function main(a){
//     let numArr= 0
//     let strArr=''
//     if(typeof a === 'number'){
//         numArr.unshift(a)
//     }
//     if(typeof a === 'string'){
//         strArr.unshift(a)

//     }
// }
// n1
// var n =5
// var k =9
// for(let i=0; i<k;i++){
//     console.log(i);
// }
// N2
// let a = 10
// let b =5
// for(let i=b;i<=a;i++){
//     console.log(i);
// }
// N3
// let a=10
// let b=1
// for(let i=a;i>b;i--){
//     console.log(i);
// }
// N4
// let kg =10000
// for(let i=1;i<=100000;i++){
//     if(i%kg ===0){
//         console.log(i);
//     }

// }
// N5
// let kg =0.1
// for(let i=kg;i<1;i+=0.1){
//    console.log(i*10000);
// }

// N6

// let kg =1.2
// for(let i=kg;i<=2;i+=0.2 ){
//     console.log(i*10000);
// }

// N7
// let a =0
// let b=10
// for(let i=1;i<b;i++){
//    a += i
// }
// console.log(a);
// N8
// let a =1
// let b=4
// for(let i=1;i<b;i++){
//    a *= i
// }
// console.log(a);
// N9
// let a=0
// let b=6
// for(let i=0;i<b;i++){
//    a += i*i
// }
// console.log(a);
// N11
// let n=18
// for(let i=0;i<n;i++){
//     if(i%2 !==0){
//         console.log(i);
//     }
// }
// N12
// let n=18
// for(let i=1;i<n;i++){
//     if(i%2 ==0){
//         console.log(i);
//     }
// }
// N13
// let a=30
// for (let i = 1; i < a; i++) {
//     if (a % i === 0) {
//  console.log(i);
//     }
// }
// N14
// let n=4
// for(let i=1;i<n;i++){
//     console.log(i*i);
// }
// N15
// let n=10
// for(let i =n;i>=1;i--){
//     console.log(i);
// }
// N16
// let n=10

//     for(let i = 0; i <= n; i++){
//         if(i % 5 != 0){
//             console.log(i);
//         }
//     }

// N17
// let a = 1
// let n = 10
// for (let i = a; i <n; i++) {
//     a *= i
// }
// console.log(a);
// N18
// let a = 1
// let n = 3
// for (let i = a; i <=n; i++) {
//     a *= i


// }
// console.log(a);
//   const kun=1
//   switch(kun){
//     case 1:
//         console.log('Bugun dushanba');
//     break
//     case 2:
//         console.log('Bugun seshanba');
//     break
//     case 3:
//         console.log('Bugun chorshanba');
//     break
//     case 4:
//         console.log('Bugun payshanba');
//     break
//     case 5:
//         console.log('Bugun juma');
//     break
//     case 6:
//         console.log('Bugun shanba');
//     break
//     case 7:
//         console.log('Bugun yakshanba');
//     break
//        default :
//        console.log('bunday sonda kun yoq');
//   }

// const baho = 1

// switch (baho) {
//     case 1:
//         console.log('yomon');
//         break
//     case 2:
//         console.log('qoniqarsiz');
//         break
//     case 3:
//         console.log('qoniqarli');
//         break
//     case 4:
//         console.log('yaxshi');
//         break
//     case 5:
//         console.log('alo');
//         break
//     default:
//         console.log('bunday baho yoq');
// }

// const fasl =1

// switch (fasl) {
//         case 1:
//             console.log('bahor');
//             break
//         case 2:
//             console.log('qish');
//             break
//         case 3:
//             console.log('yoz');
//             break
//         case 4:
//             console.log('kuz');
//             break

//         default:
//             console.log('bunday fasl yoq');
//     }
// const oy = 1

// switch (oy) {
//     case 1:
//         console.log('30-kun bor');
//         break
//     case 2:
//         console.log('29-28-kun bor');
//         break
//     case 3:
//         console.log('30-kun bor');
//         break
//     case 4:
//         console.log('31-kun bor');
//         break
//     case 5:
//         console.log('30-kun bor');
//         break
//     case 6:
//         console.log('31-kun bor');
//         break
//     case 7:
//         console.log('30-kun bor');
//         break
//     case 8:
//         console.log('31-kun bor');
//         break
//     case 9:
//         console.log('30-kun bor');
//         break
//     case 10:
//         console.log('31-kun bor');
//         break
//     case 11:
//         console.log('30-kun bor');
//         break
//     case 12:
//         console.log('31-kun bor');
//         break
//     default:
//         console.log('bunday oy yoq');
// }

// let a = 13
// let b = 12
// let c = "+"
// switch (c) {
//     case "+":
//         console.log(a + b);
//         break
//     case "/":
//         console.log(a / b);
//         break
//     case "-":
//         console.log(a - b);
//         break
//     case "*":
//         console.log(a * b);
// //         break
// default:
//     console.log('bynday amal yoq');
// }
// let baho = 10
// switch (baho) {
//     case 10:
//         console.log('100 ming');
//         break
//     case 20:
//         console.log('200 ming');
//         break
//     case 30:
//         console.log('300 ming');
//         break
//     case 40:
//         console.log('400 ming');
//         break
//     default:
//         console.log('bunday bahoga stipendya belgilanmagan');
// }








