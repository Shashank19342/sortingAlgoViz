import {sleep, RED_COLOR, GREEN_COLOR, LIGHTGREEN_COLOR } from "../helper";

async function insertionSort(newArr, arraySize, speed, setNewArr,setSorting){
    let currArr = newArr;
    for(let i = 1;i<arraySize;i++){
        let j = i-1;
        let key = currArr[i];
        currArr[i] = {value: currArr[i].value, barColor: RED_COLOR};
        currArr[j] = {value: currArr[j].value, barColor: RED_COLOR};
        setNewArr([...newArr, currArr]);
        await sleep(speed);
        while(j>=0){
            if(currArr[j].value>key.value){
                currArr[j+1] = {value: currArr[j+1].value, barColor: LIGHTGREEN_COLOR};
                currArr[j] = {value: currArr[j].value, barColor: LIGHTGREEN_COLOR};
                setNewArr([...newArr, currArr]);
                await sleep(speed);
                currArr[j+1] = currArr[j];
                currArr[j] = {value: key.value, barColor: LIGHTGREEN_COLOR};
                setNewArr([...newArr, currArr]);
                await sleep(speed);
                currArr[j+1] = {value: currArr[j+1].value, barColor: GREEN_COLOR};
                currArr[j] = {value: currArr[j].value, barColor: RED_COLOR};
                j -= 1;
                if(j>=0){
                    currArr[j] = {value: currArr[j].value, barColor: RED_COLOR};
                    setNewArr([...newArr, currArr]);
                    await sleep(speed);
                }
            }else{
                currArr[i] = {value: currArr[i].value, barColor: GREEN_COLOR};
                currArr[j] = {value: currArr[j].value, barColor: GREEN_COLOR};
                currArr[j+1] = {value: currArr[j+1].value, barColor: GREEN_COLOR};
                setNewArr([...newArr, currArr]);
                await sleep(speed);
                break;
            }
        }
        currArr[j+1] = {value: key.value, barColor: GREEN_COLOR};
        setNewArr([...newArr, currArr]);
        await sleep(speed);
    }
    setSorting(false)
}


export default insertionSort;
