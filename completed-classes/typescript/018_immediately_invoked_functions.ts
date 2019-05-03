// Standard function:
// function fullName(first : string, last : string) {
//     return first + " " + last;
// }

// fullName("Jessica", "Rowell");

// Immediately invoked function
var names : string[] = ['Jessica', 'Joshua', 'Kai', 'Kon', 'Nash'];
var counter : number = 0;

(function(){
    for (let name in names) {
        counter ++;
    }
})();

console.log(counter);