var minimumTotal = function(triangle) {
    return minimumTotalRec({}, triangle, 0, 0)
};

function minimumTotalRec(memo, triangle, row, pos){
    if(row === triangle.length - 1) return triangle[row][pos]

    if(!memo[`${row}-${pos}`]){
        const val = triangle[row][pos]
        const left = minimumTotalRec(memo, triangle, row + 1, pos)
        const right = minimumTotalRec(memo, triangle, row + 1, pos + 1)

        memo[`${row}-${pos}`] = val + Math.min(left, right)
    }
    return memo[`${row}-${pos}`]
}

var minimumTotal = function(triangle) {
    for (let i = triangle.length-2; i >= 0; i--)
        for (let j = 0; j < triangle[i].length; j++)
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
    return triangle[0][0]
};