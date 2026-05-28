import {Link} from 'react-router-dom'
function Header(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light lms-nav rounded-top-2 p-4 mb-2">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand lms-brand" href="#">Learning Dam</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link lms-nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Features' className="nav-link lms-nav-link">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/pricing' className="nav-link lms-nav-link">Pricing</Link>
                            </li>
                        </ul>
                        <ul className='nav nav-pills'>
                            <li className='nav-item'>
                                <Link to='/register' className='nav-link lms-pill'>Register</Link>
                            </li>
                            <li className='nav-item ms-3'>
                                <Link to='/login' className='nav-link lms-pill lms-pill-outline'>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
