function woodCalculator(sagune,goran,mahagoni,gojari){
    var saguneWood = sagune * 3 ;
    var goranWood = goran * 5 ;
    var mahagoniWood = mahagoni * 10 ;
    var gojariWood = gojari * 2 ;
    totalWood = saguneWood + goranWood + mahagoniWood + gojariWood;
    return totalWood;

}
var woodResult = woodCalculator(5 ,6, 8, 9 );
console.log(woodResult);