//                                                            Syntax


// Condition Flow

// *****************************                             if block                                   *****************************

if (a > b) {                                       //    If
        console.log("True")                        //    True
}

// *****************************                             if else block                              *****************************

if (a > b) {                                       //    if
        console.log("True")                        //    True
}
else {                                             //    else 
        console.log("False")                       //    False
}

// *****************************                             Ternary                                    *****************************

a > b ? console.log("True") : console.log("False")

// Iterative Flow

// *****************************                              for Loop                                  ***************************** 

for (var i = 1; i <= 10; i = i + 1) {               //     for(Initialization,Condition,Increment / Decrement){
        console.log(i)                            //     console.log(i)      
}                                                 //     }

// *****************************                              while Loop                                ***************************** 

var i = 1                                         //     Initialization

while (i <= 10) {                                 //     (Condition)
        console.log(i)
        i = i + 1                                 //     Increment / Decrement
}

// *****************************                             do while Loop                              *****************************

var i = 1                                         //     Initialization

do {
        console.log(i)
        i = i + 1                                 //     Increment / Decrement
}
while (i <= 10)                                   //     (Condition)

// *****************************                             for of loop                                *****************************

for (emp of employees) {
        console.log(emp)
}

// *****************************                             function                                   *****************************

function add() {                                  //      Parameters
        //      Declaration 
        console.log()
}
add()                                             //      Invoke with Arguments

// *****************************                             Fat Arrow                                  *****************************

let multiply = () => {
        console.log()
}
multiply()

// *****************************                             Class Array                                *****************************

class Array {

}