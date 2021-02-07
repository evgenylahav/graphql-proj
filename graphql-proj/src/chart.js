import React, { useState, useRef, useEffect } from 'react';
import { Chart } from 'react-charts';
 
export default function MyChart() {

    const getRand = () => {
        return Math.floor(Math.random() * 10); 
    }

    const getLine = () => {
        let result = [];
        for (let i=0; i<5; i++) {
            const point = [i, getRand()];
            result.push(point);

        }
        return result;
    }

  const generateData = () => {
      return ([
        {
          label: 'Series 1',
          data: getLine()
        },
        {
          label: 'Series 2',
          data: getLine()
        }
      ]);
  } 

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
  }

  const [lineData, setLineData] = useState(generateData());

  const addPoint = () => {
      const newLineData = lineData.map(item => {
         const l = item.data.length;
         item.data.push([l, getRand()])
         return item 
      })
      setLineData(newLineData);
  }

  useInterval(() => {
    addPoint();
  }, 1000);
  
//   setInterval(generateData(), 3000);
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={lineData} axes={axes} />
    </div>
  )

  return lineChart;
}