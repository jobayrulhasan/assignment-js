/*We know one mile = 5280 feet*/

function feetToMile(feet){
    var mile = feet/ 5280;
    return mile;
}
var result = feetToMile(10300);
console.log(result);