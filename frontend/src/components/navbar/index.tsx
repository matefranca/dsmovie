import { ReactComponent as GithubIcon } from 'Assets/images/github.svg';
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/matefranca">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/matefranca</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;