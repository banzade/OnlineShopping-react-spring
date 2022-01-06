import {withRouter} from './History';
import {useParams} from 'react-router-dom';
import axios from "axios";
import {useEffect,useState} from 'react';


function ProfileView(){
    const {user} = useParams()
    const [userProfile, setUserProfile] = useState({});
    const [deleteMessage, setDeleteMessage] = useState("");

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/getUserByName/${user}`).then((res)=>{
    //             setUserProfile(res.data)
    //         })
    // })

            axios.get(`http://localhost:8080/getUserByName/${user}`).then((res)=>{
                setUserProfile(res.data)
            })

     


    return <div>
        <h1> welcome to your profile </h1>    
        {user} 
        {userProfile.userEmail} {userProfile.userId} {userProfile.userName} {userProfile.uFirstName} {userProfile.uLastName} 
         {userProfile.userAddress} {userProfile.phone}

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