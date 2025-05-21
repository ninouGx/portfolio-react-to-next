import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>Nils <span className="text-primary">GALLOUX</span></h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#profile">À propos</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#add-project">Ajouter un projet</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;