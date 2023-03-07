function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var applehitcount = 0;
    var orangehitcount = 0;
    for (let i = 0; i < apples.length; i++){
        var afallposition = a + apples[i];
        if (afallposition >= s) {
            if (afallposition <= t) {
                applehitcount++;
            }
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        var ofallposition = b + oranges[i];
        if (ofallposition <= t) {
            if (ofallposition >= s) {
                orangehitcount++;
            }
        }
    }
    console.log(applehitcount);
    console.log(orangehitcount);
} 

// PASSED :)
