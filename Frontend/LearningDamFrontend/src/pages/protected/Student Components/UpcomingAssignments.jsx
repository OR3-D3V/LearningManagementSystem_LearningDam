import { Link } from 'react-router-dom'
import { FiArrowRight, FiBookOpen, FiCalendar, FiClock } from 'react-icons/fi'
import { HiOutlineCodeBracketSquare } from 'react-icons/hi2'
import { BsDatabaseCheck } from 'react-icons/bs'
import { IoColorPaletteOutline } from 'react-icons/io5'
import './UpcomingAssignments.css'

function UpcomingAssignments() { 

    const assignments = [
        {
            assignmentName: "React Project - Part 1",
            icon: <HiOutlineCodeBracketSquare />,
            dueDate: "May 28, 2025",
            daysLeft: 2
        },
        {
            assignmentName: "Database Design",
            icon: <BsDatabaseCheck />,
            dueDate: "May 30, 2025",
            daysLeft: 8
        },
        {
            assignmentName: "UI/UX Case Study",
            icon: <IoColorPaletteOutline />,
            dueDate: "Jun 2, 2025",
            daysLeft: 5
        },
        {
            assignmentName: "Data Structures Reflection",
            icon: <FiBookOpen />,
            dueDate: "Jun 5, 2025",
            daysLeft: 10
        }
    ]

    const getUrgencyClass = (daysLeft) => {
        if (daysLeft <= 3) {
            return 'urgent'
        }

        if (daysLeft <= 7) {
            return 'soon'
        }

        return 'normal'
    }

    return (
        <section className="ua-card mt-3">
            <div className="ua-header">
                <h2>Upcoming Assignments</h2>
                <Link to="/Login" className="ua-view-all">
                    View All <FiArrowRight aria-hidden="true" />
                </Link>
            </div>

            <ul className="ua-list" aria-label="Upcoming assignments list">
                {assignments.map((assignment) => (
                    <li key={assignment.assignmentName} className="ua-item">
                        <span className="ua-icon" aria-hidden="true">
                            {assignment.icon}
                        </span>

                        <div className="ua-item-content">
                            <h3>{assignment.assignmentName}</h3>
                            <p>
                                <FiCalendar aria-hidden="true" />
                                Due: {assignment.dueDate}
                            </p>
                        </div>

                        <span className={`ua-days-left ${getUrgencyClass(assignment.daysLeft)}`}>
                            <FiClock aria-hidden="true" />
                            {assignment.daysLeft} day{assignment.daysLeft > 1 ? 's' : ''} left
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}


export default UpcomingAssignments