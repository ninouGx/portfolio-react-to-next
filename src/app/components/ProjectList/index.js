import './ProjectList.css';

function ProjectList({ projects = [] }) {

    const allProfessionalProjects = [...projects.filter(p => p.isProProject)];
    const allPersonalProjects = [...projects.filter(p => !p.isProProject)];

    return (
        <section id="projects" className="projects">
            <h2>Expérience Professionnelle</h2>
            <div className="project-grid">
                {allProfessionalProjects.map((project) => (
                    <div className="project-card pro-card" key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tech">
                            {project.technologies?.map((tech) => (
                                <span key={`${project.id}-${tech}`} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="personal-projects-title">Projets Personnels</h2>
            <div className="project-grid">
                {allPersonalProjects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <h3>
                            {project.githubUrl ? (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    {project.title} 🌐 <i className="fas fa-external-link-alt" />
                                </a>
                            ) : (
                                project.title
                            )}
                        </h3>
                        <p>{project.description}</p>
                        <div className="project-tech">
                            {project.technologies?.map((tech) => (
                                <span key={`${project.id}-${tech}`} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectList;