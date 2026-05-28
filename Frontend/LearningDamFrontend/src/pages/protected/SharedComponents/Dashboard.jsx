import StudentOverview from "./StudentOverview"
function Dashboard(props){
    return(
        <div className="dashboard-shell">
            <StudentOverview userObj={props.userObj}/>
        </div>
    )
}

export default Dashboard