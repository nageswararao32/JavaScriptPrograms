var string = 'This is a sunny day';
var revString = '';
var revWord = '';
for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
        revString += revWord + ' ';
        revWord = '';
    } else {
        revWord = string[i] + revWord;
    }
}
revString += revWord;
console.log(revString);



