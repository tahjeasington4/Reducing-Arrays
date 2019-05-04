function average(array) {
    var average = sum(array) / array.length;
    return average;
}
average([1,2,3])

function sum(array) {
    var total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total
}