//                                                         CRUD OPERATION


let emp = { id: 10, name: "Prabhakar", email: "pprabhakar108", salary: 55000, location: "Bengaluru" }       // CREATE

/* console.log(emp.id)
console.log(emp.name)
console.log(emp.email)                                                                                      // READ
console.log(emp.salary)
console.log(emp.location)
 */

/* for (key in emp) {
    console.log(emp[key])                                                                                   // READ
} */

console.log(emp)                                                                                            // READ

console.log("***Update Operation***")
emp.name = "Praveen";
emp.email = "praveenprabhakar108";                                                                          // UPDATE
emp.salary = 60000
console.log(emp)

console.log("***Delete Operation***")
delete emp.location                                                                                         // DELETE
console.log(emp)