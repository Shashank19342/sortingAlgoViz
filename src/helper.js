export const RED_COLOR = "#db2c2c";
export const GREEN_COLOR = "#24b524";
export const SKYBLUE_COLOR = "skyblue";
export const LIGHTGREEN_COLOR = "#0fdb0f";
export const DASK_SKY_BLUE = "#27aac4"

export const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds))
}

export const isSorted = (arr,start,end) => {
    let ans = true;
    for(let i = start;i<end;i++){
        if(arr[i].value<=arr[i+1].value) continue;
        ans = false;
    }
    return ans;
}

export const setAllGreen = (arr,start,end) => {
    for(let i = start;i<=end;i++){
        arr[i] = {value: arr[i].value, barColor: GREEN_COLOR}
    }
    return arr;
}
