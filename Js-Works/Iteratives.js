//print 1,2,3,4,5
/*
    initlization: let i = 1
    condition   : i<=5
    incr/decr   : i++
*/

for (let i = 1; i <= 5; i = i + 1) {
    console.log(i)
}
console.log("*****")

i = 1
while (i <= 5) {
    console.log(i)
    i++
}
console.log("*****")

i = 1
do {
    console.log(i)
    i++
} while (i <= 5)
