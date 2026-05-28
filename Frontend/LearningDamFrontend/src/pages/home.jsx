import {
    FaArrowRight,
    FaBookOpen,
    FaCalendarAlt,
    FaChartBar,
    FaFileInvoiceDollar,
    FaFlask,
    FaGift,
    FaGlobe,
    FaLock,
    FaMoneyBillWave,
    FaShieldAlt,
    FaSquareRootAlt,
    FaStar,
    FaTrophy,
    FaUserCheck,
    FaUsers,
} from 'react-icons/fa';
import childLearningPic from '../assets/Stock_Child.jpg';
import './home.css';
import Header from '../Header' 
// Hero feature cards shown under the main headline.
const features = [
    {
        title: 'Expert Tutors',
        text: 'Experienced teachers who care',
        icon: FaUsers,
    },
    {
        title: 'Personalized Learning',
        text: 'Custom lessons for every student',
        icon: FaBookOpen,
    },
    {
        title: 'Flexible Schedule',
        text: 'Learn anytime, anywhere',
        icon: FaCalendarAlt,
    },
    {
        title: 'Proven Results',
        text: 'Better understanding and grades',
        icon: FaChartBar,
    },
];

// Right-side hero statistic cards.
const stats = [
    { value: '500+', label: 'Happy Students', tone: 'blue', icon: FaUsers },
    { value: '95%', label: 'Parents Satisfied', tone: 'green', icon: FaShieldAlt },
    { value: '4.9/5', label: 'Average Rating', tone: 'gold', icon: FaStar },
    { value: '1000+', label: 'Tutoring Sessions', tone: 'purple', icon: FaTrophy },
];

// Subject cards in the Popular Subjects section.
const subjects = [
    { title: 'Science', grades: 'Grades 4 - 10', text: 'Build strong concepts with easy examples.', tone: 'blue', icon: FaFlask },
    { title: 'Math', grades: 'Grades 1 - 10', text: 'From basics to advanced problem solving.', tone: 'green', icon: FaSquareRootAlt },
    { title: 'English', grades: 'Grades 1 - 10', text: 'Improve reading, writing and speaking.', tone: 'gold', icon: FaBookOpen },
    { title: 'Other Subjects', grades: 'All Grades', text: 'Social studies, chemistry, physics and more.', tone: 'purple', icon: FaGlobe },
];

// Numbered rows in the How It Works section.
const steps = [
    'Book a free assessment',
    'Get matched with a tutor',
    'Start live online lessons',
    'See improvement',
];

// Trust strip items below the hero.
const trustItems = [
    { title: 'Verified Tutors', text: 'Background-checked and experienced', icon: FaUserCheck },
    { title: 'Safe & Secure', text: 'Online classes in a safe environment', icon: FaLock },
    { title: 'Money Back Guarantee', text: 'Not satisfied? Get a refund within 7 days', icon: FaMoneyBillWave },
    { title: 'No Hidden Fees', text: 'Transparent pricing you can trust', icon: FaFileInvoiceDollar },
];

function HomePage() {
    return (
        <>
            <Header/>
            <main className="learning-home">
                {/* Hero section with headline, student image and stats */}
                <section className="home-hero">
                    <div className="hero-copy">
                        <h1>
                            Better Grades.
                            <span>Brighter Futures.</span>
                        </h1>
                        <p>
                            Personalized online tutoring in Math, Science and more for school
                            students of all levels.
                        </p>

                        <div className="hero-features">
                            {features.map((feature) => (
                                <article className="hero-feature" key={feature.title}>
                                    <span className="feature-icon">
                                        <feature.icon className="home-icon" aria-hidden="true" />
                                    </span>
                                    <div>
                                        <strong>{feature.title}</strong>
                                        <small>{feature.text}</small>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <button className="primary-action" type="button">
                            Explore Tutoring Programs
                            <FaArrowRight aria-hidden="true" />
                        </button>
                    </div>

                    <div className="hero-visual" aria-label="Student learning online">
                        <div className="hero-blob" />
                        <img src={childLearningPic} alt="Student using a laptop for online learning" />
                        <span className="math-note math-note-one">2+3=5</span>
                        <span className="math-note math-note-two">A+</span>
                    </div>

                    <aside className="hero-stats" aria-label="Learning Dam highlights">
                        {stats.map((stat) => (
                            <article className={`stat-card ${stat.tone}`} key={stat.value}>
                                <span className="stat-mark">
                                    <stat.icon className="home-icon" aria-hidden="true" />
                                </span>
                                <div>
                                    <strong>{stat.value}</strong>
                                    <small>{stat.label}</small>
                                </div>
                            </article>
                        ))}
                    </aside>
                </section>

                {/* Trust and guarantee strip */}
                <section className="trust-panel">
                    <div className="trust-intro">
                        <h2>A Trusted Partner for Your Child's Success</h2>
                        <p>Quality tutoring, steady progress and clear support for parents.</p>
                    </div>
                    {trustItems.map((item) => (
                        <article className="trust-item" key={item.title}>
                            <span className="trust-icon">
                                <item.icon className="home-icon" aria-hidden="true" />
                            </span>
                            <div>
                                <strong>{item.title}</strong>
                                <small>{item.text}</small>
                            </div>
                        </article>
                    ))}
                </section>

                {/* Main content cards: Popular Subjects and How It Works */}
                <section className="home-grid">
                    {/* Popular Subjects section */}
                    <div className="section-card subjects-card">
                        <div className="section-heading">
                            <h2>Popular Subjects</h2>
                            <a href="/Features">View all subjects -&gt;</a>
                        </div>
                        <div className="subject-list">
                            {subjects.map((subject) => (
                                <article className={`subject-card ${subject.tone}`} key={subject.title}>
                                    <span className="subject-symbol">
                                        <subject.icon aria-hidden="true" />
                                    </span>
                                    <h3>{subject.title}</h3>
                                    <small>{subject.grades}</small>
                                    <p>{subject.text}</p>
                                    <a href="/Features">Learn More -&gt;</a>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* How It Works section */}
                    <div className="section-card steps-card">
                        <div className="section-heading">
                            <h2>How It Works</h2>
                            <span>Simple steps to success</span>
                        </div>
                        <div className="steps-list">
                            {steps.map((step, index) => (
                                <article className="step-row" key={step}>
                                    <span>{index + 1}</span>
                                    <div>
                                        <h3>{step}</h3>
                                        <p>{index === 0 ? 'Tell us about your child and their goals.' : 'We keep the process simple and focused.'}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                </section>

                {/* Free trial call-to-action banner */}
                <section className="trial-banner">
                    <span className="trial-icon">
                        <FaGift aria-hidden="true" />
                    </span>
                    <div>
                        <h2>Free Trial Class</h2>
                        <p>Book a free 30-minute trial session and experience Learning Dam.</p>
                    </div>
                    <button className="primary-action" type="button">
                        Book Free Trial
                        <FaArrowRight aria-hidden="true" />
                    </button>
                </section>

                {/* Footer links and newsletter form */}
                <footer className="home-footer">
                    <div className="footer-brand">
                        <h2>Learning Dam</h2>
                        <p>Quality online tutoring in Math, Science and more for school students.</p>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <a href="/">Home</a>
                        <a href="/Features">Subjects</a>
                        <a href="/pricing">Pricing</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div>
                        <h3>Subjects</h3>
                        <a href="/Features">Math Tutoring</a>
                        <a href="/Features">Science Tutoring</a>
                        <a href="/Features">English Tutoring</a>
                        <a href="/Features">Other Subjects</a>
                    </div>
                    <div>
                        <h3>Newsletter</h3>
                        <p>Get tips and updates on learning straight to your inbox.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email" aria-label="Email address" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </footer>
            </main>
        </>
        
    );
}

export default HomePage;
