for (var j = 0; j <= 100; j++) {
    var flag = 0;
    for (var i = 2; i <= j; i++) {
        if (j%i===0 && i!==j) {
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        console.log(j);
    }
}