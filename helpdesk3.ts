//declaring Object -Methods1
// let person : {
//     name: string,
//     height: number,
//     contact: number
// }
//************** */
// let person : {
//     name: string,
//     height: number,
//     contact: number
// } = {
//     name: "person name",
//     height: 6,
//     contact: 23224232
// }
///********************* */
// let person : {
//         name: string,
//         height?: number,
//         contact: number
//     }

// let new_var = person = {
//     contact: 23232323,
//     //height: 6.2,
//     name: "my name"
// }
// let new_var1 = person = {
//     contact: 988823,
//     height: 5.5,
//     name: "Aamir",
    
// }
// console.log(new_var.contact, new_var1.height)
//************************** */
//nested object
// let person : {
//     name: {first_name: string, last_name: string}, //nested object
//     height: number,
//     contact: number
// }
// let new_var = person = { 
//     name: {first_name: "name1", last_name: "name2"},
//     contact: 9874748,
//     height: 5.5
// }
// console.log(new_var.name.last_name)
///**************************************** */
//var vs let vs const
// var new_var2=""
// function func_name (){

// var var_new=1;

// for(var_new; var_new<=10; var_new++){
// let variable_new = 2
// var_new
// }
//**************************** */
//Alias Type Object. 
// type Object_name = {
//     property1: string,
//     property2: number,
//     property3: boolean
// }
//***************************** */
//unions objecty types
//************************** */
type motorcycle = {
    wheels: number;
    fuel_capacity: number;
    make: string
}
type car = {
    wheels: number,
    fuel_capacity: number,
    number_of_seats: number
    }


 type vehicle = motorcycle | car ;

let new_var: vehicle
new_var = {
    fuel_capacity: Number(prompt("Enter the fuel capacity")),
    //make: "",
    number_of_seats: 4,
    wheels: 2
}
console.log(new_var)
//******************************* */
//Enum Types 
//******************************** */
// enum fruits {
//     apple,
//     banana=12,
//     orange=15,
//     peach,
// }








