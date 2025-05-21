'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './PDFExport.css';

function PDFExportButton({ projects }) {
    const [isGenerating, setIsGenerating] = useState(false);
    const [showAnnouncement, setShowAnnouncement] = useState(true);

    const dismissAnnouncement = () => {
        setShowAnnouncement(false);
    };

    const generatePDF = async () => {
        setIsGenerating(true);

        // Create a temporary div to render content for PDF
        const pdfContent = document.createElement('div');
        pdfContent.className = 'pdf-export-container';
        pdfContent.style.position = 'absolute';
        pdfContent.style.left = '-9999px';
        pdfContent.style.top = '-9999px';
        document.body.appendChild(pdfContent);

        // Get user profile info
        const profileEl = document.getElementById('profile');
        const profileClone = profileEl.cloneNode(true);

        // Render content for PDF
        pdfContent.appendChild(profileClone);

        // Add a projects section
        const projectsSection = document.createElement('div');
        projectsSection.className = 'pdf-projects-section';

        // Add professional projects
        const proProjects = projects.filter(p => p.isProProject);
        if (proProjects.length > 0) {
            const proTitle = document.createElement('h2');
            proTitle.textContent = 'Expérience Professionnelle';
            projectsSection.appendChild(proTitle);

            for (const project of proProjects) {
                const projectDiv = createProjectElement(project);
                projectsSection.appendChild(projectDiv);
            }
        }

        // Add personal projects
        const personalProjects = projects.filter(p => !p.isProProject);
        if (personalProjects.length > 0) {
            const personalTitle = document.createElement('h2');
            personalTitle.textContent = 'Projets Personnels';
            personalTitle.style.marginTop = '20px';
            projectsSection.appendChild(personalTitle);

            for (const project of personalProjects) {
                const projectDiv = createProjectElement(project);
                projectsSection.appendChild(projectDiv);
            }
        }

        pdfContent.appendChild(projectsSection);

        // Generate PDF
        try {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const currentPosition = 10;
            const pageWidth = pdf.internal.pageSize.getWidth();
            const margin = 10;
            const contentWidth = pageWidth - (margin * 2);

            // Generate canvas from the content
            const canvas = await html2canvas(pdfContent, {
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true
            });

            const imageData = canvas.toDataURL('image/png');

            // Add image to PDF
            const imgWidth = contentWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            // First page
            pdf.addImage(
                imageData,
                'PNG',
                margin,
                currentPosition,
                imgWidth,
                imgHeight
            );
            heightLeft -= (pdf.internal.pageSize.getHeight() - 20);

            // Add new pages if content overflows
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(
                    imageData,
                    'PNG',
                    margin,
                    position,
                    imgWidth,
                    imgHeight
                );
                heightLeft -= (pdf.internal.pageSize.getHeight() - 20);
            }

            // Save PDF
            pdf.save('portfolio-nils-galloux.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.');
        } finally {
            // Clean up
            document.body.removeChild(pdfContent);
            setIsGenerating(false);
        }
    };

    // Helper function to create project elements
    const createProjectElement = (project) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'pdf-project';

        const title = document.createElement('h3');
        title.textContent = project.title;
        projectDiv.appendChild(title);

        const description = document.createElement('p');
        description.textContent = project.description;
        projectDiv.appendChild(description);

        if (project.technologies && project.technologies.length > 0) {
            const techDiv = document.createElement('div');
            techDiv.className = 'pdf-tech-tags';

            for (const tech of project.technologies) {
                const tag = document.createElement('span');
                tag.className = 'pdf-tech-tag';
                tag.textContent = tech;
                techDiv.appendChild(tag);
            }

            projectDiv.appendChild(techDiv);
        }

        return projectDiv;
    };

    return (
        <>
            {showAnnouncement && (
                <div className="pdf-feature-announcement">
                    <div className="sparkle sparkle-1" />
                    <div className="sparkle sparkle-2" />
                    <div className="sparkle sparkle-3" />
                    <div className="sparkle sparkle-4" />
                    <div className="ribbon">NOUVEAU !</div>
                    <h3>✨ Nouvelle Fonctionnalité Disponible ! ✨</h3>
                    <p>Exportez mon portfolio complet en PDF en un seul clic ! </p>
                    <button
                        type="button"
                        onClick={dismissAnnouncement}
                        style={{
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            color: 'white',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            marginTop: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        Compris !
                    </button>
                </div>
            )}
            <button
                type="button"
                onClick={generatePDF}
                disabled={isGenerating}
                className="btn btn-secondary pdf-button"
                aria-label="Télécharger le portfolio en PDF"
            >
                {isGenerating ? 'Génération...' : 'Télécharger PDF'}
            </button>
        </>
    );
}

export default PDFExportButton;