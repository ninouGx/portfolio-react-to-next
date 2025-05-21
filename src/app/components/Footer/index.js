import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {currentYear} Nils GALLOUX. Tous droits réservés.</p>
                <div className="social-links">
                    <a href="https://github.com/ninouGx" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:nils@galloux.net">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;