console.log(fullName('Jessica', 'Rowell'));
// console.log(otherFullName('Jessica', 'Rowell'));
// console.log(thirdFullName('Jessica', 'Rowell'));

// Function declaration, hoisting

function fullName(first : string, last : string) : string {
    return first + " " + last;
}

// Function expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
    return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
    return first + " " + last;
}