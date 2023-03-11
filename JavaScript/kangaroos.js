function kangaroo(x1, v1, x2, v2) {
    var result = 'YES';
    if (v2 > v1) {
        if (x2 >= x1) {
            result = 'NO';
        }
        else if ((x2-x1)%(v1-v2)!=0) {
            result = 'NO';
        }
    }
    if (v1 > v2) {
        if (x1 >= x2) {
            result = 'NO';
        }
        else if ((x1-x2)%(v2-v1)!=0) {
            result = 'NO';
        }
    }
    if (v1 == v2) {
        result = 'NO';
    }
    return result;
}
