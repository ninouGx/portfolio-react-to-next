import './Profile.css';
import Image from 'next/image';

function Profile() {
    return (
        <section id="profile" className="profile">
            <div className="profile-content">
                <div className="profile-image">
                    <Image src="/pp.jpg" alt="Nils GALLOUX" width={200} height={200} />
                </div>
                <div className="profile-details">
                    <h3>Ingénieur Logiciel | Spécialisation Big Data & Analyse de données</h3>
                    <p className="bio">
                        Actuellement en cursus d'ingénieur en Informatique à l'EICNAM, avec une expérience pratique
                        en analyse de données, ingénierie big data, et développement de projets acquise lors de stages
                        et d'apprentissages. Je cherche à approfondir mes compétences techniques et à contribuer
                        à des projets à fort impact.
                    </p>
                    <div className="profile-contact">
                        <p><i className="fas fa-envelope" />  <a href="mailto:nils@galloux.net">
                            nils@galloux.net
                        </a></p>
                        <p><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                    <div className="profile-links">
                        <a href="https://github.com/ninouGx" target="_blank" rel="noopener noreferrer" className="btn">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/nils-galloux" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;