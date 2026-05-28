import {useState} from "react";
import {
    FaBookOpen,
    FaEnvelope,
    FaLock,
    FaPhone,
    FaShieldAlt,
    FaStar,
    FaTrophy,
    FaUser,
    FaUsers,
} from "react-icons/fa";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Header from '../Header' 

function Register() {

    // Password Auth
    let [password, updatePassword] = useState("")
    let [confirmPassword, updateConfirmPassword] = useState("")
    let [passwordMatch, updateMatchStatus] = useState(false);
    let [email, setEmail] = useState();
    let [name, setName] = useState();
    let [phonenumber, setPhonenumber] = useState();
    let [userExists, updateUserStatus] = useState(false);

    // Navigate
    const navigate = useNavigate();

    const checkPassword = (e) => {
        let newPassword = e.target.value
        updatePassword(newPassword)
        if (newPassword !== confirmPassword){
            updateMatchStatus(false)
        }
        else {
            updateMatchStatus(true)
        }
    }

    const checkConfirmPassword = (e) => {
        let newConfirmPassword = e.target.value
        updateConfirmPassword(newConfirmPassword);

        if(newConfirmPassword !== password){
            updateMatchStatus(false)
        }
        else {
            updateMatchStatus(true);
        }
    }
    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePhonenumber = (e) => {
        setPhonenumber(e.target.value)
    }

    // Send Post To Server
    const registerUser = async (e) => {
        e.preventDefault();

        let response  = await fetch("http://localhost:3000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body : JSON.stringify(
                {
                    name : name,
                    email : email,
                    phone_number : phonenumber,
                    role : 'student',
                    password : password
                }
            )
        })
        
        let data = await response.json();
        console.log(data)
        
        if(data.message == "User Already Exists"){
            updateUserStatus(true)
        }

        else{
            navigate('/student-dashboard')
        }

        
    }

    return (
        <>
            <Header/>
            <main className="register-page">
                <section className="register-card">
                    <aside className="register-side">
                        <div>
                            <h1>
                                Create Your Account
                                <span>Start Learning Today!</span>
                            </h1>
                            <p>
                                Join Learning Dam and get personalized tutoring to help your child
                                achieve their goals.
                            </p>
                        </div>

                        <div className="register-books" aria-hidden="true">
                            <span className="doodle doodle-one">2+2=4</span>
                            <span className="doodle doodle-two">A+</span>
                            <div className="book book-one" />
                            <div className="book book-two" />
                            <div className="book book-three" />
                            <div className="book-cup" />
                        </div>

                        <div className="register-benefits">
                            <article>
                                <span className="benefit-icon blue">
                                    <FaUsers aria-hidden="true" />
                                </span>
                                <div>
                                    <strong>Expert Tutors</strong>
                                    <small>Learn from experienced and qualified teachers.</small>
                                </div>
                            </article>
                            <article>
                                <span className="benefit-icon green">
                                    <FaShieldAlt aria-hidden="true" />
                                </span>
                                <div>
                                    <strong>Safe & Secure</strong>
                                    <small>Your child's safety and privacy are our priority.</small>
                                </div>
                            </article>
                            <article>
                                <span className="benefit-icon gold">
                                    <FaStar aria-hidden="true" />
                                </span>
                                <div>
                                    <strong>Proven Results</strong>
                                    <small>We help students build confidence and improve grades.</small>
                                </div>
                            </article>
                            <article>
                                <span className="benefit-icon purple">
                                    <FaTrophy aria-hidden="true" />
                                </span>
                                <div>
                                    <strong>Flexible Learning</strong>
                                    <small>Learn anytime, anywhere with flexible schedules.</small>
                                </div>
                            </article>
                        </div>
                    </aside>

                    <section className="register-form-panel">
                        <div className="register-heading">
                            <h2>Register</h2>
                            <p>Fill in the details to create your account.</p>
                        </div>

                        <form method="POST" onSubmit={registerUser} className="register-form">
                            <div className="register-field">
                                <label htmlFor='fullname'>Full Name</label>
                                <div className="register-input">
                                    <FaUser aria-hidden="true" />
                                    <input
                                        id="fullname"
                                        type='text'
                                        name='fullname'
                                        placeholder="Enter your full name"
                                        onChange={updateName}
                                    />
                                </div>
                            </div>

                            <div className="register-field">
                                <label htmlFor='email'>Email Address</label>
                                <div className="register-input">
                                    <FaEnvelope aria-hidden="true" />
                                    <input
                                        id="email"
                                        type='email'
                                        name='email'
                                        placeholder="Enter your email address"
                                        onChange={updateEmail}
                                        value={email || ""}
                                    />
                                </div>
                            </div>

                            <div className="register-field">
                                <label htmlFor='phone'>Phone Number</label>
                                <div className="register-input">
                                    <FaPhone aria-hidden="true" />
                                    <input
                                        id="phone"
                                        type='tel'
                                        name='phone'
                                        placeholder="Enter your phone number"
                                        onChange={updatePhonenumber}
                                    />
                                </div>
                            </div>

                            <div className="register-field">
                                <label htmlFor='password'>Create Password</label>
                                <div className="register-input">
                                    <FaLock aria-hidden="true" />
                                    <input
                                        id="password"
                                        type='password'
                                        placeholder="Create a password"
                                        onChange={checkPassword}
                                    />
                                </div>
                            </div>

                            <div className="register-field">
                                <label htmlFor='confirm-password'>Confirm Password</label>
                                <div className="register-input">
                                    <FaLock aria-hidden="true" />
                                    <input
                                        id="confirm-password"
                                        type='password'
                                        placeholder="Confirm your password"
                                        onChange={checkConfirmPassword}
                                    />
                                </div>
                            </div>

                            <p className={passwordMatch ? "password-message success" : "password-message"}>
                                {passwordMatch ? "Password Match" : "Passwords do not match"}
                            </p>
                            {userExists ? <p className="register-error-message">User already exists</p> : ""}
                            <button type="submit" className="register-submit" onSubmit={registerUser}>
                                Create Account
                            </button>
                        </form>
                    </section>
                </section>

                <footer className="register-footer">
                    <div className="register-footer-brand">
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
                        <h3>For Parents</h3>
                        <a href="/how-it-works">How It Works</a>
                        <a href="/progress">Progress Tracking</a>
                        <a href="/faq">FAQ</a>
                        <a href="/policies">Policies</a>
                    </div>
                    <div>
                        <h3>Newsletter</h3>
                        <p>Subscribe to get updates on new courses and offers.</p>
                        <div className="register-newsletter">
                            <input type="email" placeholder="Enter your email" />
                            <button type="button">Subscribe</button>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}

export default Register
