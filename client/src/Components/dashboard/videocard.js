import React,{useState} from 'react'
import {ChevronRight} from '../icons/icons'

import './dashboard.css'
export default function VideoCard() {
    const id=['2e9viAUvwq4','B6j3nphJwCw','FFkOKY5JLwQ']
    const video_url = 'https://www.youtube.com/embed/';
    var [ind,setind]=useState(0);
    const handleclick=()=>{
        if(ind >= id.length-1)
        {
            setind(0)
        }
        else
        {
            setind(ind+1)
        }
    }
    return (
        < >
        <div className="container">
           <iframe className="box" 
            type="text/html" width="700rem" height="360rem"
            src={`https://youtube.com/embed/${id[ind]}?autoplay=0?controls=1?fs=1`}>
            </iframe>
          < button className="btn btn-outline-info box" onClick={handleclick} style={{"height":360}} data-toggle="tooltip" title="Next Video"><ChevronRight /></button>
        </div>
        </>
    )
}
