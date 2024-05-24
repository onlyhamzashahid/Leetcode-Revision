function findValue(operations) {
    var count = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].includes('X++') || operations[i].includes('++X')) {
            count = count+1;
        } else if(operations[i].includes('--X') || operations[i].includes('X--')) {
            count = count-1;
        };
        
    }
    return count
    
}


let check = findValue(["++X", "++X", "X++"]);
console.log(check)