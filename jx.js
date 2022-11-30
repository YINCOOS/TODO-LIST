// Given an array of buildings and a direction that all of the buildings face, return an array of the indices of the buildings that can see the sunset.
// A building can see the sunset if it's strictly taller than all of the buildings that come after it in the direction that it faces.
// The input array named buildings contains positive, non-zero integers representing the heights of the buildings. A building at index i thus has a height denoted buildings[i].
// Assume that the heights of all of the buildings are unique.
// An east-facing building is denoted by a 1, and a west-facing building is denoted by a 0.
// Note that you can't see the sunset even if all of the buildings have the same height, in that case, return an empty array.
// Sample input: [3, 5, 4, 4, 3, 1, 3, 2], 0
// Sample output: [6, 3, 1]
//solution
function sunsetViews(buildings, direction) {
    // Write your code here.
    let result = [];
    let start = direction === 1 ? 0 : buildings.length - 1;
    let step = direction === 1 ? 1 : -1;
    let max = 0;
    for (let i = start; i < buildings.length && i >= 0; i += step) {
        if (buildings[i] > max) {
        result.push(i);
        max = buildings[i];
        }
    }
    if (direction === 0) return result.reverse();
    return result;
    }

    // Returns the clock-cycles of when the process will be executed for a given index.
    //solution
    function getClockCycles(processes, index) {
        // Write your code here.
        let clockCycles = 0;
        for (let i = 0; i < index; i++) {
            clockCycles += processes[i][1];
        }
        return clockCycles;
    }

//Returns the clock-cycles (cc) of when the process will be executed for a given index
//solution
// const sjf = (jobs, index) => {
//     let clockCycles = 0;
//     for (let i = 0; i < index; i++) {
//         clockCycles += jobs[i][1];
//     }
//     return clockCycles;
// }

