import "./SideBar.css";
import { NavLink, useLocation } from "react-router-dom";
import {
    FaBookOpen,
    FaCalendarAlt,
    FaChartLine,
    FaCog,
    FaGraduationCap,
    FaHome,
    FaSignOutAlt,
    FaTasks,
    FaUser,
    FaBell,
    FaEnvelope,
} from "react-icons/fa";

function SideBar(props){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentView = searchParams.get("view") || "dashboard";

    const sideBarElements = [
        { id: "dashboard", label: "Dashboard", to: "/student-dashboard?view=dashboard", icon: FaHome },
        { id: "courses", label: "My Courses", to: "/student-dashboard?view=courses", icon: FaBookOpen },
        { id: "assignments", label: "Assignments", to: "/student-dashboard?view=assignments", icon: FaTasks },
        { id: "meetings", label: "Meetings", to: "/student-dashboard?view=meetings", icon: FaCalendarAlt },
        { id: "grades", label: "Grades", to: "/student-dashboard?view=grades", icon: FaChartLine },
        { id: "notifications", label: "Notifications", to: "/student-dashboard?view=notifications", icon: FaBell },
        { id: "messages", label: "Messages", to: "/student-dashboard?view=messages", icon: FaEnvelope },
        { id: "profile", label: "Profile", to: "/student-dashboard?view=profile", icon: FaUser },
        { id: "settings", label: "Settings", to: "/student-dashboard?view=settings", icon: FaCog },
        { id: "logout", label: "Logout", to: "/login", icon: FaSignOutAlt },
    ];

    function genListItems(){
        return sideBarElements.map((item) => {
            const Icon = item.icon;
            const isActive = item.id !== "logout" && currentView === item.id;

            return (
                <li key={item.id}>
                    <NavLink
                        className={`sideBar-link ${isActive ? "active" : ""} ${item.id === "logout" ? "logout" : ""}`}
                        to={item.to}
                    >
                        <Icon className="sideBar-icon" aria-hidden="true" />
                        <span>{item.label}</span>
                    </NavLink>
                </li>
            );
        });
    }

    return(
        <aside className={props.className || "sideBar"}>
            <header className="sideBar-brand">
                <div className="sideBar-brandRow">
                    <span className="sideBar-logoMark" aria-hidden="true">
                        <FaGraduationCap />
                    </span>
                    <h1>LMS</h1>
                </div>
                <small>Welcome, {props.userObj?.name || "Student"}</small>
            </header>

            <p className="sideBar-sectionLabel">Main Menu</p>

            <ul className="sideBar-list">
                {genListItems()}
            </ul>
        </aside>
    )
}

export default SideBar