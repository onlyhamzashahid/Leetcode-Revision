function widestVertical(points) {
    points.sort((a,b) => a[0] - b[0])
    let maxWidth = 0;

    for (let i = 1; i < points.length; i++) {
        maxWidth = Math.max(maxWidth, points[i][0] - points[i-1][0]);
        
    }
    return maxWidth;
}

let check = widestVertical([
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
]
)

console.log(check)

// points.sort((a, b) => a[0] - b[0]);
// let maxWidth = 0;

// for (let i = 1; i < points.length; i++) {
//   maxWidth = Math.max(maxWidth, points[i][0] - points[i - 1][0]);
// }
// return maxWidth;