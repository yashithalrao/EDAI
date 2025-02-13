import {useState} from 'react';




const Upload = (props) =>{
    const [search, setSearch] = useState('')
    return(
        <div>
            <h1>Search by topic:</h1>
            <input type="text" id="search" name="search" placeholder="Search" onChange = {(e)=>{setSearch(e.target.value)}}></input>
            <h2>fetching results for your topic: {search}</h2>
            <div>{props.dat}</div>
            {/* //need to send the sesarch query to the backend */}
        </div>
    )



}

export default Upload; 