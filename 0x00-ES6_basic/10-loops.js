export default function appendToEachArrayValue(array, appendString) {
    const nArray = [];
    for (const elemt of array) {
	nArray.push(appendString + elemt);
    }

    return nArray;   
}
