function addValue(value) {
    var array = [10, 20, 30];
    // Array.prototype.push.apply(array, [value]);
    return [...array, value];
}

console.log(addValue(40));
console.log(addValue(50));

