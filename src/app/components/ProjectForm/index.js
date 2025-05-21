'use client';

import { useState } from 'react';
import './ProjectForm.css';

function ProjectForm({ onAddProject }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        technologies: '',
        isProProject: false
    });

    const { title, description, technologies, isProProject } = formData;

    const onChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert('Veuillez remplir tous les champs obligatoires');
            return;
        }

        const techArray = technologies
            ? technologies.split(',').map(tech => tech.trim())
            : [];

        const newProject = {
            title,
            description,
            technologies: techArray,
            isProProject
        };

        // Appel de la fonction parent pour ajouter le projet
        onAddProject(newProject);

        // Réinitialisation du formulaire
        setFormData({
            title: '',
            description: '',
            technologies: '',
            isProProject: false
        });
    };

    return (
        <section id="add-project" className="add-project">
            <h2>Ajouter un nouveau projet</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Titre du projet *</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        value={title}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description *</label>
                    <textarea
                        id="description"
                        name="description"
                        className="form-control"
                        value={description}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="technologies">Technologies utilisées (séparées par des virgules)</label>
                    <input
                        type="text"
                        id="technologies"
                        name="technologies"
                        className="form-control"
                        value={technologies}
                        onChange={onChange}
                        placeholder="React, JavaScript, CSS..."
                    />
                </div>
                <div className="form-group form-check">
                    <input
                        type="checkbox"
                        id="isProProject"
                        name="isProProject"
                        checked={isProProject}
                        onChange={onChange}
                        className="form-check-input"
                    />
                    <label htmlFor="isProProject" className="form-check-label">Projet professionnel</label>
                </div>
                <button type="submit" className="btn">Ajouter le projet</button>
            </form>
        </section>
    );
}

export default ProjectForm;