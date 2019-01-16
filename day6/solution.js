function processData(input) {

    let inputs = input.split('\n');
    let odd = '';
    let even = '';
    //Enter your code here

    for (let i = 0; i < parseInt(inputs[0]); i++) { // Felt weird doing this but yea
        for (let j = 0; j < inputs[i + 1].length; j++) {
            if (j % 2 == 0) {
                even += inputs[i + 1][j];
            } else {
                odd += inputs[i + 1][j];
            }
        }
        console.log(even + ' ' + odd);
        even = '';
        odd = '';
    }

    // I could only allocate about 10 mins to do this day 6 because I am swamped, but this is the hacky version I came up with
    // Maybe I'd produce something more elegant on another day
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
