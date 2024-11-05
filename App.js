import React,{useState,useMemo} from 'react'
import './App.css';

const App = () => {
  const [weight,setWeight] = useState(80);
  const [height,setHeight] = useState(100);
  const handleWeight=(event)=>{
    setWeight(event.target.value);
  }
  const handleHeight=(event)=>{
    setHeight(event.target.value);
  }
 
  const Output = useMemo(()=>{
    const calculateHeight = (height/100);
    return(weight/(calculateHeight*calculateHeight)).toFixed(1);
  },[height,weight]);
 
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div>
        Weight : {weight} Kg
        <div className='weight-slider'>
        <input type='range' min='40' max='120' onChange={handleWeight}/>
        </div>
        
        Height : {height} cm
        <div className='height-slider'>
        <input type='range' min='120' max='220' onChange={handleHeight}/>
        </div>
        <div className='output-section'>
          <p>Your BMI is</p>
          <p className='output'>{Output}</p>
        </div>
      </div>
    </main>
  )
}

export default App