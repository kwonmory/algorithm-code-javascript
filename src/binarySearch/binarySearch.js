const binarySearch = (inputArray, target) => {
    let firstIndex = 0;
    let lastIndex = inputArray.length -1;    
    let middleIndex;

    while(firstIndex <= lastIndex) {
        middleIndex = Math.floor((firstIndex + lastIndex) / 2);

        if (inputArray[middleIndex] === target) {
            return middleIndex;
        }
        
        if (inputArray[middleIndex] < target){
            firstIndex = middleIndex + 1; // point
        } else {
            lastIndex = middleIndex - 1; // point
        }
    }

    return -1;
}

export default binarySearch;