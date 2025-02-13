import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Upload from './components/Upload'
import './App.css'

function App() {
  const [data, setData] = useState(''); 
  useEffect(() => {
    fetch('/summarize')
      .then((res) => res.json())
      .then((data) => {
        setData(data.message); 
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []); 
  return (
    <>
    {/* <div>{data}</div> */}
    <Upload dat = {data}/>
    
    </>
  )
}

export default App
