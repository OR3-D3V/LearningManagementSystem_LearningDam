import { FiCalendar, FiClock, FiUsers } from "react-icons/fi";
import "./UpcomingMeetings.css";

function UpcomingMeetings() {
    const meetings = [
        {
            meetingName: "Math Tutoring",
            date: "Jun 06, 2026",
            time: "10:00 AM",
            mode: "Online",
        },
        {
            meetingName: "Web Dev Discussion",
            date: "Jun 08, 2026",
            time: "1:30 PM",
            mode: "Classroom A2",
        },
        {
            meetingName: "Project Feedback Session",
            date: "Jun 10, 2026",
            time: "9:00 AM",
            mode: "Online",
        },
    ];

    return (
        <section className="um-card mt-3 w-50">
            <div className="um-header">
                <h2>Upcoming Meetings</h2>
                <span className="um-count">
                    <FiUsers aria-hidden="true" />
                    {meetings.length} scheduled
                </span>
            </div>

            <ul className="um-list" aria-label="Upcoming meetings list">
                {meetings.map((meeting) => (
                    <li key={`${meeting.meetingName}-${meeting.date}`} className="um-item">
                        <h3>{meeting.meetingName}</h3>

                        <div className="um-meta">
                            <p>
                                <FiCalendar aria-hidden="true" />
                                {meeting.date}
                            </p>

                            <p>
                                <FiClock aria-hidden="true" />
                                {meeting.time}
                            </p>

                            <span className="um-mode">{meeting.mode}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default UpcomingMeetings;