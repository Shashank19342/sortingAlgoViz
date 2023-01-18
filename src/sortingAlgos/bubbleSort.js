import { sleep, GREEN_COLOR, SKYBLUE_COLOR, RED_COLOR, LIGHTGREEN_COLOR, isSorted } from "../helper";

export default async function bubbleSort(newArr, arraySize, speed, setNewArr,setSorting){
    let currArr = newArr;
    let sorted = false;
    while(!sorted){
        for(let i = 0;i<arraySize-1;i++){
            currArr[i] = {value: currArr[i].value, barColor: RED_COLOR};
            currArr[i+1] = {value: currArr[i+1].value, barColor: RED_COLOR};
            setNewArr([...newArr, currArr]);
            await sleep(speed);
            if(currArr[i].value>currArr[i+1].value){
                currArr[i] = {value: currArr[i].value, barColor: LIGHTGREEN_COLOR};
                currArr[i+1] = {value: currArr[i+1].value, barColor: LIGHTGREEN_COLOR};
                setNewArr([...newArr, currArr]);
                await sleep(speed);
                let tempObj = currArr[i];
                currArr[i] = currArr[i+1];
                currArr[i+1] = tempObj;
                setNewArr([...newArr, currArr]);
                await sleep(speed);
                currArr[i] = {value: currArr[i].value, barColor: RED_COLOR};
                currArr[i+1] = {value: currArr[i+1].value, barColor: RED_COLOR};
                setNewArr([...newArr, currArr]);
                await sleep(speed)
            }
            currArr[i] = {value: currArr[i].value, barColor: SKYBLUE_COLOR};
            currArr[i+1] = {value: currArr[i+1].value, barColor: SKYBLUE_COLOR};
            setNewArr([...newArr, currArr]);
            await sleep(speed);
        }
        if(isSorted(currArr,0,arraySize-1)) sorted = true;
    }
    for(let i = 0;i<arraySize;i++){
        currArr[i] = {value: currArr[i].value, barColor: GREEN_COLOR};
    }
    setNewArr([...newArr, currArr]);
    setSorting(false);
}

