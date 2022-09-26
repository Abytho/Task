let dt = "virat sachin dhoni virat rahul virat rahul sachin";
let copy = dt.split(" ");

let mps = new Map();
copy.forEach(item => {
    if (mps.has(item)) {
        mps.set(item, mps.get(item) + 1)
    } else {
        mps.set(item, 1)
    }
})

console.log(mps);