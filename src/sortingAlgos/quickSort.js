import {sleep, setAllGreen, RED_COLOR, GREEN_COLOR, LIGHTGREEN_COLOR, SKYBLUE_COLOR, isSorted } from "../helper";

async function partition(arr, low, high, speed, setNewArr, newArr) {
    let pivot = arr[high].value;
    arr[high] = {value: arr[high].value, barColor: RED_COLOR};
    setNewArr([...newArr, arr]);
    await sleep(speed);
    let i = (low - 1);
  
    for (let j = low; j <= high - 1; j++) {
        arr[j] = {value: arr[j].value, barColor: RED_COLOR};
        setNewArr([...newArr, arr]);
        await sleep(speed); 
        if (arr[j].value < pivot) {
            if(i>=0 && i<=high){
                arr[i] = {value: arr[i].value, barColor: SKYBLUE_COLOR};
                setNewArr([...newArr, arr]);
                await sleep(speed);
            }
            i++;
            if(i>=0 && i<=high) arr[i] = {value: arr[i].value, barColor: LIGHTGREEN_COLOR};
            arr[j] = {value: arr[j].value, barColor: LIGHTGREEN_COLOR};
            setNewArr([...newArr, arr]);
            await sleep(speed); 
            // swapping
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            setNewArr([...newArr, arr]);
            await sleep(speed);
        }
        arr[j] = {value: arr[j].value, barColor: SKYBLUE_COLOR};
        setNewArr([...newArr, arr]);
        await sleep(speed); 
    }
    // swapping 
    arr[i+1] = {value: arr[i+1].value, barColor: LIGHTGREEN_COLOR};
    arr[high] = {value: arr[high].value, barColor: LIGHTGREEN_COLOR};
    setNewArr([...newArr, arr]);
    await sleep(speed); 
    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    setNewArr([...newArr, arr]);
    await sleep(speed); 
    arr[i+1] = {value: arr[i+1].value, barColor: SKYBLUE_COLOR};
    // if(i>=0) arr[i] = {value: arr[i].value, barColor: SKYBLUE_COLOR};
    arr[high] = {value: arr[high].value, barColor: SKYBLUE_COLOR};
    return (i + 1);
}

async function quickSorting(arr, low, high, speed, setNewArr, newArr) {
    if (low < high) {
        let pi = await partition(arr, low, high, speed, setNewArr, newArr);
        arr[pi] = {value: arr[pi].value, barColor: GREEN_COLOR};
        setNewArr([...newArr, arr]);
        await sleep(speed); 
        await quickSorting(arr, low, pi - 1, speed, setNewArr, newArr);
        setNewArr([...newArr, setAllGreen(arr,low,pi)]);
        await sleep(speed);
        await quickSorting(arr, pi + 1, high, speed, setNewArr, newArr);
        setNewArr([...newArr, setAllGreen(arr,pi,high)]);
        await sleep(speed);
        // console.log(low,high);
    }
    if(isSorted(arr,0, arr.length-1)){
        setNewArr([...newArr, setAllGreen(arr,0,arr.length-1)]);
    }
}


async function quickSort(newArr, arraySize, speed, setNewArr,setSorting){
    let currArr = newArr;
    await quickSorting(currArr,0,arraySize-1, speed, setNewArr, newArr);
    setSorting(false);
}

export default quickSort;
