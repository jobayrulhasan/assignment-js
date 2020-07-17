/* Note: 25000 is stands for each floor bricks */

function brickCalculation(floorcount){
    var totalBrickNumber = floorcount * 25000;
    return totalBrickNumber;

}
var floorNumber = brickCalculation(30);
console.log(floorNumber);