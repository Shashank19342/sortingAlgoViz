import {sleep, RED_COLOR, GREEN_COLOR, LIGHTGREEN_COLOR, SKYBLUE_COLOR} from "../helper";

async function selectionSort(newArr, arraySize, speed, setNewArr,setSorting){
  let currArr = newArr;
  for(let i = 0;i<arraySize;i++){
    let minIndex = i;
    currArr[i] = {value: currArr[i].value, barColor: LIGHTGREEN_COLOR};
    setNewArr([...newArr,currArr]);
    await sleep(speed);
    for(let j = i+1;j<arraySize;j++){
      currArr[j] = {value: currArr[j].value, barColor: RED_COLOR};
      setNewArr([...newArr,currArr]);
      await sleep(speed);
      if(currArr[j].value<currArr[minIndex].value) {
        currArr[minIndex] = {value: currArr[minIndex].value, barColor: SKYBLUE_COLOR}
        setNewArr([...newArr,currArr]);
        await sleep(speed);
        minIndex = j;
        currArr[minIndex] = {value: currArr[minIndex].value, barColor: LIGHTGREEN_COLOR}
        setNewArr([...newArr,currArr]);
        await sleep(speed);
        continue;
      }
      currArr[j] = {value: currArr[j].value, barColor: SKYBLUE_COLOR};
      setNewArr([...newArr,currArr]);
      await sleep(speed);
    }
    // swapping indices
    let tempObj1 = currArr[minIndex];
    currArr[minIndex] = currArr[i];
    currArr[i] = tempObj1;
    setNewArr([...newArr,currArr]);
    await sleep(speed);
    currArr[i] = {value: currArr[i].value, barColor: GREEN_COLOR};
    setNewArr([...newArr,currArr]);
    await sleep(speed);
  }
  setSorting(false)
}

export default selectionSort;


