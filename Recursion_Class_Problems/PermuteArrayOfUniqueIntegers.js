// PSEUDOCODE

// Create a for loop to iterate over the array
// Create an empty variable = [] to store the permutations

// function to swap 
function swap(array, indexA, indexB){
    let temp = array[indexA]
    array[indexA] = array[indexB]
    array[indexB] = temp
}

let result = []

// helper function to design all permutations
function helper(slate, array, i){

    if (i >= array.length) {
        return result.push(slate.slice(0))
    }

    for (let j = i; j < array.length; j++) {
        swap(array, j, i)
        slate.push(array[i])
        helper(slate, array, i + 1)
        slate.pop()
        swap(array, j, i)
    }
}

function get_permutations(arr) {


    helper([], arr, 0)

    return result
}