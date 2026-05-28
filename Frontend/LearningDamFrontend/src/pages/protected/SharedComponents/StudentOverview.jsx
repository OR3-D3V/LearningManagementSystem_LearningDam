
import "./StudentOverview.css";

function StudentOverview(props){
    const overviewCards = [
        { data: 3, text: "Courses Enrolled", tone: "blue" },
        { data: 5, text: "Assignments To Do", tone: "amber" },
        { data: 2, text: "Upcoming Meetings", tone: "green" },
        { data: "85%", text: "Overall Progress", tone: "purple" },
    ];

    return (
        <section className="student-overview">
            <header className="student-overview-top">
                <div>
                    <h2>Welcome back, {props.userObj?.name || "Student"}! 👋</h2>
                    <p>Keep going, you are doing great.</p>
                </div>
                <div className="student-avatar">E</div>
            </header>

            <div className="student-kpi-grid">
                {overviewCards.map((card) => (
                    <article className={`student-kpi-card ${card.tone}`} key={card.text}>
                        <strong>{card.data}</strong>
                        <span>{card.text}</span>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default StudentOverview