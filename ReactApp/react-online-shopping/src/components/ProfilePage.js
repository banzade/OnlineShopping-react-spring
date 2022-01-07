import {withRouter} from './History';
import {useParams} from 'react-router-dom';
import axios from "axios";
import {useEffect,useState} from 'react';


function ProfileView(){
    const {user} = useParams()
    const [userProfile, setUserProfile] = useState({});
    const [deleteMessage, setDeleteMessage] = useState("");
    const [userUpdateMessage, setUpdateMessage] = useState({});
    const[userFirstName, setUserFirstName]= useState("");
    const[userLastName, setUserLastName]= useState("");
    const[userEmail, setUserEmail]= useState("");
    const[userPassword, setUserPassword]= useState("");
    


    // useEffect(() => {
    //     axios.get(`http://localhost:8080/getUserByName/${user}`).then((res)=>{
    //             setUserProfile(res.data)
    //         })
    // })

   const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
   };


    return <div>
        <h1> welcome to your profile </h1>    
        <form>
        <label> {user}</label>        
        </form>
    <button onClick={()=>{
                    axios.get(`http://localhost:8080/getUserByName/${user}`).then((res)=>{
                setUserProfile(res.data)
            })
    }}>View your profile </button>
    <form style = {mystyle}>
            {/* <label> {userProfile.userEmail}</label> <br/> <br/>
            <label> */}
            <label>
            Email
            </label>
            <input name="prodName" className="form-control" defaultValue={userProfile.userEmail} onChange={(e)=>{
                setUserEmail(e.target.value)
            }}/>
            <label>
            UserName
            </label>
            <input name="prodName" className="form-control" defaultValue={userProfile.userName}/>

            <label>
            First Name
            </label>
            <input placeholder="Prod Name" name="prodName" className="form-control" defaultValue={userProfile.uFirstName} onChange={(e)=>{
                setUserFirstName(e.target.value)
            }}/>

            <label>
            Last Name
            </label>
            <input placeholder="Prod Name" name="prodName" className="form-control" defaultValue={userProfile.uLastName} onChange={(e)=>{
                setUserLastName(e.target.value)
            }}/>

            <label>
            Address
            </label>
            <input placeholder="Prod Name" name="prodName" className="form-control" defaultValue={userProfile.userAddress}/>

            <label>
            phone
            </label>
            <input placeholder="Prod Name" name="prodName" className="form-control" defaultValue={userProfile.phone}/>
    </form>


        {/* {userProfile.userEmail} {userProfile.userId} {userProfile.userName} {userProfile.uFirstName} {userProfile.uLastName} 
         {userProfile.userAddress} {userProfile.phone} */}

        <button onClick={(e)=>{
            userProfile.uFirstName=userFirstName
            userProfile.uLastName=userLastName
            userProfile.userEmail=userEmail

            e.preventDefault()
            axios.put(`http://localhost:8080/userupdate/${userProfile.userId}`,userProfile).then((res)=>{
                setUpdateMessage("Profile is updated");
            })
        }}>Update your button</button>



         <button onClick={(e)=>{
             e.preventDefault()
             
             axios.delete(`http://localhost:8080/${user}`).then((res)=>{
                setDeleteMessage("Profile is deleted");
            })

         }} > Delete your profile </button>
         {deleteMessage}

    </div>
}

export default withRouter(ProfileView);