var arr = [3, 14444, 4234, 11, 555, 999, 2, 6, 5, 31, 55];
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);

OUTPUT:
[14444, 4234, 999, 555, 55,  31, 11, 6, 5, 3, 2]
