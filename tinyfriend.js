
function tinyfriend(friends){
    var little = friends[0];
    for(i = 0 ; i<friends.length; i++){
        var moreFriends = friends[i];
        if(moreFriends < little){
            little = moreFriends;
        }
    }
    return little;
}

var result = tinyfriend([ 'Sharif','Torif','Dalu','Habibullah']);
console.log(result);

