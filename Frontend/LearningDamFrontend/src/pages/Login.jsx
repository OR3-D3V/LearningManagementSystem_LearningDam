import { useState } from "react";
import { FaBookOpen, FaEnvelope, FaLock, FaShieldAlt, FaStar, FaUsers } from "react-icons/fa";
import Header from "../Header";
import "./Login.css";
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const [wrongPassword, updateWrongPassword] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();
        
        console.log("Got here")
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(
                {
                    email : email,
                    password: password
                }
            )
        })

        const data = await response.json();

        console.log(data)
        if(response.status == 401){
            updateWrongPassword(true);
            console.log("Wrong Password / Email")
        }

        else if(response.status == 200){
            updateWrongPassword(false);
            console.log("Login Worked I Think")
            navigate('/student-dashboard')
        }

    };

    return (
        <>
            <Header />
            <main className="login-page">
                <section className="login-card">
                    <aside className="login-side">
                        <div>
                            <h1>
                                Welcome Back
                                <span>Continue Learning!</span>
                            </h1>
                            <p>
                                Sign in to your Learning Dam account and pick up right where
                                you left off.
                            </p>
                        </div>

                        <div className="login-benefits">
                            <article>
                                <span className="benefit-icon blue">
                                    <FaUsers aria-hidden="true" />
                                </span>
                                <div>
                                    <strong>Expert Tutors</strong>
                                    <small>Learn from trusted and qualified teachers.</small>
                                </div>
                            </article>
                            <article>
                                <span className="benefit-icon green">
                                    <FaShieldAlt aria-hidden="true" />
                                </span>
                                <div>
                                    <strong>Safe Learning</strong>
                                    <small>Your classes and progress are always secure.</small>
                                </div>
                            </article>
                            <article>
                                <span className="benefit-icon gold">
                                    <FaStar aria-hidden="true" />
                                </span>
                                <div>
                                    <strong>Track Progress</strong>
                                    <small>Monitor growth and celebrate achievements.</small>
                                </div>
                            </article>
                        </div>
                    </aside>

                    <section className="login-form-panel">
                        <div className="login-heading">
                            <h2>Login</h2>
                            <p>Enter your email and password to continue.</p>
                        </div>

                        <form method="POST" onSubmit={handleLogin} className="login-form">
                            <div className="login-field">
                                <label htmlFor="email">Email Address</label>
                                <div className={`login-input ${wrongPassword ? "login-input-error" : ""}`}>
                                    <FaEnvelope aria-hidden="true" />
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (wrongPassword) updateWrongPassword(false);
                                        }}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="login-field">
                                <label htmlFor="password">Password</label>
                                <div className={`login-input ${wrongPassword ? "login-input-error" : ""}`}>
                                    <FaLock aria-hidden="true" />
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (wrongPassword) updateWrongPassword(false);
                                        }}
                                        aria-invalid={wrongPassword}
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="login-submit">
                                Sign In
                            </button>
                        </form>
                        {wrongPassword ? <p className="login-error-message" role="alert">Wrong email or password. Please try again.</p> : ""}
                    </section>
                </section>

                <footer className="login-footer">
                    <div className="login-footer-brand">
                        <FaBookOpen aria-hidden="true" />
                        <div>
                            <h2>Learning Dam</h2>
                            <p>Quality online tutoring in Math, Science and more for school students.</p>
                        </div>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <a href="/">Home</a>
                        <a href="/Features">Subjects</a>
                        <a href="/pricing">Pricing</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div>
                        <h3>Need Help?</h3>
                        <a href="/faq">FAQ</a>
                        <a href="/support">Support</a>
                        <a href="/how-it-works">How It Works</a>
                        <a href="/policies">Policies</a>
                    </div>
                </footer>
            </main>
        </>
    );
}

export default Login;