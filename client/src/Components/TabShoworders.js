import {useState, useEffect,useContext} from 'react'
import ShowOrders from './ShowOrders'
import axios from 'axios'
import {UserContext} from '../contextapi'


const TabShoworders = () => {
    
    // const [show,setshow]=useState(false)
    const [login,setlogin]=useState('')
    const [pass,setpass]=useState('')
    const [loggedin,setloggedin]=useState(false)
    const [registered,setregistered]=useState(false)
    const [state,setState] = useContext(UserContext)

    useEffect(() => {
        if(login !== '' && pass !== '')
        {
            const payload = {username:login,password:pass}

             axios.post("http://localhost:4000/user/add",payload)
             .then(()=>{
                  console.log('axios to mongodb')
             })
             .catch(()=>{
                  console.log('unable  to send from axios to mongodb')
             })
    
        }//end of if
    }, [registered])

    useEffect(() => {
       if(login !== '' && pass !== '')
       {
        const payload = {username:login,password:pass}

        axios.get("http://localhost:4000/user/registered",payload)
        .then(()=>{
             console.log('axios to mongodb successfully logged in')
            //  setshow(true)
             setState({show_logout_btn:true})  

        })
        .catch(()=>{
             console.log('unable  to send from axios to mongodb')
        })

       }//if block

    }, [loggedin])

    return(
    <div>
    <div> 
    {!state.show_logout_btn && <div className="row">
            <div className=" col-lg-4 center-block">
            <div className="card card-signin my-5">
            <div className="card-body">
                <form >
                <div className="form-label-group ">
                <input type="text" id="login" className="form-control mr-sm-2" name="login" placeholder="login" value={login} onChange={(e)=>{setlogin(e.target.value)}}/>
                </div>
                <div className="form-label-group">
                <input type="text" id="password" className="form-control mr-sm-2" name="password" placeholder="password" value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
                </div>
                <div className="form-label-group">   
                <button className="btn btn-outline-success mr-sm-4 my-2 my-sm-0" onClick={(e)=>{ e.preventDefault(); setloggedin(true)}}>Login</button>
                <button className="btn btn-outline-success mr-sm-4 my-2 my-sm-0" onClick={(e)=>{ e.preventDefault(); setregistered(true)}}>Register</button>
                </div> 
                </form>
            </div>
            </div>
            </div>

        </div>}
    </div>


     {state.show_logout_btn && <ShowOrders style={ { "height": "100vh" , "width":"100vw"} }  />}
    </div>
    )
}
export default TabShoworders