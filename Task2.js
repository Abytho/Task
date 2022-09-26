let commission = { 400: 5, 800: 4, 1200: 3, 9000: 2, 15000: 1 };
let selectedCommission = 0;

let userInput = 12452;

if (userInput < 400) {
  selectedCommission = commission[400];
} else if (userInput < 800) {
  selectedCommission = commission[800];
} else if (userInput < 1200) {
  selectedCommission = commission[1200];
} else if (userInput < 9000) {
  selectedCommission = commission[9000];
} else if (userInput < 15000) {
  selectedCommission = commission[15000];
}

let yourCommission = userInput * (selectedCommission / 100);
let yourAmount = userInput - yourCommission;

console.log(
  `Your commission rate is %${selectedCommission} you will get $${yourCommission} and remaining amount is $${yourAmount}`
);