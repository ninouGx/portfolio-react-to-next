'use client'

import { useState } from 'react';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import PDFExportButton from './PDFExportButton';

export default function ClientWrapper() {
    const professionalProjects = [
        {
            id: 101,
            title: "Outil de gestion des données chez EDF",
            description: "Développement d'un outil de gestion pour rendre les données accessibles à l'échelle de l'entreprise. Intégration de nouvelles sources de données et fonctionnalités à travers des microservices (Java/Angular), Big Data (Hadoop/Spark/Scala) et Python, REST API.",
            technologies: ["Java", "Angular", "Hadoop", "Spark", "Scala", "Python", "REST API"],
            isProProject: true
        },
        {
            id: 102,
            title: "Analyse BI avec Google Cloud",
            description: "Évaluation d'outils BI et prototypage de solutions avec la suite BI de Google. Création de tableaux de bord Looker, mise en place d'un pipeline de données automatisé sur Google Cloud et production de rapports pour l'analyse des performances.",
            technologies: ["Google Cloud", "BigQuery", "Looker Studio", "Data Pipeline"],
            isProProject: true
        },
        {
            id: 103,
            title: "Intranet basé sur SharePoint",
            description: "Construction d'un intranet sécurisé basé sur SharePoint pour optimiser les opérations internes, automatisation des flux de travail avec Power Automate, centralisation des documents et amélioration des processus d'intégration et de communication.",
            technologies: ["SharePoint", "Power Automate", "Microsoft 365"],
            isProProject: true
        },
    ];

    const githubProjects = [
        {
            id: 1,
            title: "Loldle - Python Terminal Edition",
            description: "Version terminal du jeu Loldle avec optimisation statistique pour trouver les meilleures suggestions. Comprend un mode assisté, un helper pour la version en ligne et une extension Chrome pour faciliter la récupération des combinaisons de champions.",
            technologies: ["Python", "Statistiques", "Chrome Extension", "Web Scraping"],
            githubUrl: "https://github.com/ninouGx/Loldle"
        },
        {
            id: 2,
            title: "Poke-CLI - Light Pokemon Project",
            description: "Un projet en C++ simulant des combats Pokémon en ligne de commande. Implémente un système de combat avec IA et différents types de Pokémon.",
            technologies: ["C++", "Game Development", "AI"],
            githubUrl: "https://github.com/ninouGx/poke-cli"
        },
        {
            id: 3,
            title: "Princess Treatment - Event Tracker",
            description: "Application Android en Kotlin pour suivre les événements récurrents. Offre une interface utilisateur simple pour créer, gérer et visualiser des événements, avec un widget pour un accès rapide depuis l'écran d'accueil. Idéal pour des routines comme les soins capillaires.",
            technologies: ["Kotlin", "Android", "Jetpack Compose", "Widgets", "Hilt"],
            githubUrl: "https://github.com/ninouGx/princess-treatment"
        },
        {
            id: 4,
            title: "Pokemon Test Mod",
            description: "Un mod pour Terraria qui implémente des combats entre deux joueurs avec les mécaniques de Pokémon.",
            technologies: ["C#", "Terraria", "Modding"],
            githubUrl: "https://github.com/ninouGx/pokemon-test-mod"
        },
        {
            id: 5,
            title: "Advent Calendar",
            description: "Implémentation du calendrier de l'Avent en Rust, pour résoudre les défis de programmation annuels.",
            technologies: ["Rust", "Python", "Advent of Code"],
            githubUrl: "https://github.com/ninouGx/advent-calendar"
        },
        {
            id: 6,
            title: "Elevator CLI",
            description: "Simulation d'un système d'ascenseur en ligne de commande, développé en C.",
            technologies: ["C", "Simulation"],
            githubUrl: "https://github.com/ninouGx/elevator-cli"
        }
    ];

    const [projects, setProjects] = useState([...professionalProjects, ...githubProjects]);

    const addProject = (newProject) => {
        const projectWithId = {
            ...newProject,
            id: Date.now(),
        };
        setProjects([...projects, projectWithId]);
    };

    return (
        <>
            <div className="export-button-container" style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem 0' }}>
                <PDFExportButton projects={projects} />
            </div>
            <ProjectList projects={projects} />
            <ProjectForm onAddProject={addProject} />
        </>
    );
}