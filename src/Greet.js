import React , { useState, useEffect } from 'react' ;

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Greet() {
    const [url, setUrl] = useState([])

    const greets = [{url : 'images/1.jpg' , greet : 'Happy Birthday !! ', toast:'50% on Macbook Pro' },{url : 'images/2.jpg' , greet : 'Happy Pongal !!! ', toast:'22% on iPhone13' },{url : 'images/3.jpg' , greet : 'Happy New Year !! ', toast:"12% on iPad mini" },{url : 'images/4.jpg' , greet : 'Happy Diwali !! ', toast: '30% on Mac mini' }]

    useEffect(() => {
        fetch("https://source.unsplash.com/user/c_v_r").then(
            res => setUrl(res)
        )
    }, []);

    let rI = Math.ceil(Math.random() * 3) ;

    console.log("rI=====", url);
    
    useEffect(()=>{
        if(url && url.url) toast(greets[rI].toast);
        document.title=greets[rI].toast;
    },[url && url.url]);

    if(url && url.url) {
        return (
            <React.Fragment>
                <div className='center greetCenter'>
                    <img src={greets[rI].url} width={300}></img> 
                </div>
                <div className='timer greet'>{greets[rI].greet}</div>
                <div className='center imgCenter'>
                    <img src={url.url} width={600} height={400}></img>  
                </div>
                <ToastContainer />   
            </React.Fragment>
        )
    }
    return null;
}

export default Greet ;
