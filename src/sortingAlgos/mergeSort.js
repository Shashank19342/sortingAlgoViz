import {sleep, RED_COLOR, GREEN_COLOR, DASK_SKY_BLUE, LIGHTGREEN_COLOR, SKYBLUE_COLOR } from "../helper";

async function merge(arr, l, m, r,newArr, speed, setNewArr)
{
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);
 
    for (let i = 0; i < n1; i++){
        L[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j++){
        R[j] = arr[m + 1 + j];
    }
    let i = 0;
    let j = 0;
    let k = l;
 
    while (i < n1 && j < n2) {
        if (L[i].value <= R[j].value) {
            arr[k] = {value: L[i].value, barColor: LIGHTGREEN_COLOR};
            setNewArr([...newArr, arr])
            await sleep(speed);
            arr[k] = {value: L[i].value, barColor: GREEN_COLOR};
            setNewArr([...newArr, arr])
            await sleep(speed);
            i++;
        }
        else {
            arr[k] = {value: R[j].value, barColor: LIGHTGREEN_COLOR};
            setNewArr([...newArr, arr])
            await sleep(speed);
            arr[k] = {value: R[j].value, barColor: GREEN_COLOR};
            setNewArr([...newArr, arr])
            await sleep(speed);
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = {value: L[i].value, barColor: LIGHTGREEN_COLOR};
        setNewArr([...newArr, arr])
        await sleep(speed);
        arr[k] = {value: L[i].value, barColor: GREEN_COLOR};
        setNewArr([...newArr, arr])
        await sleep(speed);
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = {value: R[j].value, barColor: LIGHTGREEN_COLOR};
        setNewArr([...newArr, arr])
        await sleep(speed);
        arr[k] = {value: R[j].value, barColor: GREEN_COLOR};
        setNewArr([...newArr, arr])
        await sleep(speed);
        j++;
        k++;
    }
}

async function mergeSorting(arr,l, r,newArr, speed, setNewArr){
    if(l>=r){
        return;//returns recursively
    }
    for(let i = l;i<=r;i++){
        arr[i] = {value: arr[i].value, barColor: DASK_SKY_BLUE};
    }
    setNewArr([...newArr, arr])
    await sleep(speed);

    let m =l+ parseInt((r-l)/2);
    arr[m] = {value: arr[m].value, barColor: RED_COLOR};
    setNewArr([...newArr, arr])
    await sleep(speed);

    for(let i = 0;i<arr.length;i++){
        if(i!==m) arr[i] = {value: arr[i].value, barColor: SKYBLUE_COLOR};
    }
    setNewArr([...newArr, arr])
    await sleep(speed);

    await mergeSorting(arr,l,m,newArr, speed, setNewArr);
    await mergeSorting(arr,m+1,r,newArr, speed, setNewArr);
    await merge(arr,l,m,r,newArr, speed, setNewArr);
}
 

async function mergeSort(newArr, arraySize, speed, setNewArr,setSorting){
    let currArr = newArr;
    await mergeSorting(currArr,0,arraySize-1,newArr,speed,setNewArr);
    setSorting(false);
}

export default mergeSort;