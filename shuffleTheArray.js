function shuffleTheArray(nums, n) {
    var output = [];

    for (let i = 0; i <n; i++) {
        output.push(nums[i], nums[i+n])        
    }
    return output;
}


let check = shuffleTheArray([1, 2, 3, 4, 4, 3, 2, 1], 4);
console.log(check)