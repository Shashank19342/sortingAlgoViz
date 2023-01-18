/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css';
import selectionSort from './sortingAlgos/selectionSort';
import bubbleSort from './sortingAlgos/bubbleSort';
import insertionSort from './sortingAlgos/insertionSort';
import quickSort from './sortingAlgos/quickSort';
import mergeSort from './sortingAlgos/mergeSort';

function App() {

  const[arraySize, setArraySize] = useState(10);
  const[speed, setSpeed] = useState(10);
  const[sorting, setSorting] = useState(false)
  const[newArr, setNewArr] = useState([]);

  const handleNewArray = (size)=>{
    let tempArr = [];
    for(let i = 0;i<size;i++){
        let x = Math.ceil(Math.random() * 100);
        tempArr.push({value: x, barColor: "skyblue"});
    }
    setNewArr(tempArr);
  }

  const handleSelectionSort = ()=>{
    selectionSort(newArr,arraySize,speed,setNewArr,setSorting);
    setSorting(true);
  }
  const handleBubbleSort = ()=>{
    bubbleSort(newArr,arraySize,speed,setNewArr,setSorting);
    setSorting(true);
  }
  const handleInsertionSort = ()=>{
    insertionSort(newArr, arraySize, speed, setNewArr,setSorting);
    setSorting(true);
  }
  const handleQuickSort = ()=>{
    quickSort(newArr, arraySize, speed, setNewArr,setSorting);
    setSorting(true);
  }
  const handleMergeSort = ()=>{
    mergeSort(newArr, arraySize, speed, setNewArr,setSorting);
    setSorting(true);
  }

  useEffect(()=>{
    handleNewArray(arraySize);
  },[arraySize])

  return (
    <div className="app">
      <div style={{display: 'flex', justifyContent: "center"}}>
        <button disabled={sorting} onClick={()=>{handleNewArray(arraySize)}} className="newArr-btn">New Array</button>
        <button disabled={sorting} onClick={handleSelectionSort} className="newArr-btn">Selection Sort</button>
        <button disabled={sorting} onClick={handleBubbleSort} className="newArr-btn">Bubble Sort</button>
        <button disabled={sorting} onClick={handleInsertionSort} className="newArr-btn">Insertion Sort</button>
        <button disabled={sorting} onClick={handleQuickSort} className="newArr-btn">Quick Sort</button>
        <button disabled={sorting} onClick={handleMergeSort} className="newArr-btn">Merge Sort</button>
      </div>
      <br />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{marginRight: 5 + "px"}}>
          <input type="range" min="10" max="75" defaultValue="10" disabled={sorting} onChange={(e)=>setArraySize(e.target.value)} />
          <p>Array Size: {arraySize}</p>
        </div>
        <div style={{marginRight: 5 + "px"}}>
          <input type="range" min="0" max="200" step="10" defaultValue="10" disabled={sorting} onChange={(e)=>setSpeed(e.target.value)} />
          <p>Speed Multiplier: {200 - speed}</p>
        </div>
      </div>
      <br />
      <div style={{display: 'flex', bottom: 0, position: "relative"}} className="array-comp">
        {
          newArr.map((obj,index)=>
            <div key={index}
              style={{
                height: obj.value*7 + "px",
                width: 50 + "px",
                backgroundColor: obj.barColor,
                margin: 2 + "px",
                textAlign: "center"
              }}
            >{obj.value}</div>
          )
        }
      </div>
    </div>
  );
}

export default App;
