// Standard function:
// function fullName(first : string, last : string) {
//     return first + " " + last;
// }
// fullName("Jessica", "Rowell");
// Immediately invoked function
var names = ['Jessica', 'Joshua', 'Kai', 'Kon', 'Nash'];
var counter = 0;
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
//# sourceMappingURL=018_immediately_invoked_functions.js.map