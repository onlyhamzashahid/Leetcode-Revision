function largestLoaclValue(grid) {
    let n = grid.length;
    let res = new Array(n-2).fill(0).map(() => new Array(n-2).fill(0))

    for (let i = 1; i < n-1; i++) {
        for (let j = 1; j < n-1; j++) {
            let max = Math.max(
                grid[i-1][j-1],grid[i-1][j],grid[i-1][j+1],
                grid[i][j-1],grid[i][j],grid[i][j+1],
                grid[i+1][j-1],grid[i+1][j],grid[i+1][j+1],
            )
            res[i-1][j-1] = max;
            
        }
        
    }
    return res;
    
}


let check = largestLoaclValue([
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
]);
console.log(check)