let array = [1,2,3,4,5,6,7,8]

function receivesAFunction(callback) {
 return callback()
}

receivesAFunction(function() {
    return 2 + 2;
})


function returnsANamedFunction() {
    return function add() {
        return 2 + 2;
    }
}


function returnsAnAnonymousFunction() {
    return () => 2 + 2;
}
