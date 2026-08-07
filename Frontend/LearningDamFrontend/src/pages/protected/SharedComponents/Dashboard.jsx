import UpcomingAssignments from "../Student Components/UpcomingAssignments"
import StudentOverview from "./StudentOverview"
import UpcomingMeetings from "./UpcomingMeetings"
function Dashboard(props){
    return(
        <div className="dashboard-shell">
            <StudentOverview userObj={props.userObj}/>
            <UpcomingAssignments/>
            <UpcomingMeetings/>
        </div>
    )
}

export default Dashboard