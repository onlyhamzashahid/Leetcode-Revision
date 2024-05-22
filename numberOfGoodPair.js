function goodPair(nums) {
    let count = 0;
    let freq = {};

    for (let num of nums) {
        count += (freq[num] || 0);
        freq[num] = (freq[num] || 0) + 1;
    }
    return count;
}

let check = goodPair([1, 2, 3, 1, 1, 3]);
console.log(check);