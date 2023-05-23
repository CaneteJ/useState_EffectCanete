import React from 'react'
import { useEffect,useState} from 'react'
import axios from 'axios'

function Home() {
        const [selected, setSelected] = useState([]);

        useEffect(() =>{
            axios.get('https://api.publicapis.org/entries')
	    .then(response =>{
		console.log(response.data.entries);
        setSelected(response.data.entries);
})
},[])
    return (
        <div><h1>HOMEPAGE</h1></div>
    );
}
export default Home;

