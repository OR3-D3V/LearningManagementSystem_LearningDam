import Header from "../../Header";

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import SideBar from './SharedComponents/SideBar';
import Dashboard from './SharedComponents/Dashboard'

function StudentDashboard(){
    const navigate = useNavigate()
    let [userObj, updateUserObj] = useState({})
    

    async function checkSession(){
        const response = await fetch('http://localhost:3000/auth/me', {
            credentials: "include"
        })

        const sessionInfo = await response.json();

        console.log(sessionInfo.loggedIn)
        if(!sessionInfo.loggedIn){
          navigate('/login')  
          return;
        }
        
        updateUserObj(sessionInfo.userObj)
    }


    // Check the user session
    useEffect(()=> {
        checkSession();
    }, [])

    return(
        <>
            <div className="d-flex flex-row vh-100">
                <SideBar userObj={userObj} className="sideBar"/>
                <Dashboard></Dashboard>
            </div>
            
        </>
    )
}

export default StudentDashboard