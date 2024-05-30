function sumOfAllXOR(nums) {
    let result = 0;
    let n = nums.length;
    
    for (let i = 0; i < (1 << n); i++) {
        let xor = 0;
        for (let j = 0; j < n; j++) {
            if ((i & (1<<j)) != 0) {
                xor ^= nums[j]
            }
            
        }
        result += xor;
        
    }
    return result;
}

let check = sumOfAllXOR([1,3])
console.log(check)