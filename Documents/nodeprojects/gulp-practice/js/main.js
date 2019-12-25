function compareTriplets(a, b) {
    var result = [];
    var aScore = 0,
        bScore = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) aScore++;
        if (a[i] < b[i]) bScore++;
    }
    result[0] = aScore;
    result[1] = bScore;
    return result;
}