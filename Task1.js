var input = 'b1c11M4d15';
var diff = 1;
var finalText = '';

for (let k = 0; k < input.length; k++) {
    let letter = input[k];
    let times = '';
    let i = k + 1;

    while (!isNaN(input[i]) && k < input.length - 1) {
        times += `${input[i]}`
        i++;
        k++;
    }

    for (j = 0; j < parseInt(times); j++) {
        var finalText = finalText + letter;
    }

}
console.log(finalText);