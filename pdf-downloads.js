// PDF Download Functions for SLK Curriculum
// Based on the official SLK Modular Therapy Curriculum markdown specification

// Main PDF generation function that handles all download types
function generateFunctionalPDF(type, resourceId) {
    // Show immediate feedback
    showDownloadMessage('Preparing download...', 'info');
    
    // Small delay to show the loading message
    setTimeout(() => {
        const pdfData = getPDFData(type, resourceId);
        
        if (pdfData && pdfData.url) {
            // If we have a real URL (from the markdown spec), open it
            try {
                window.open(pdfData.url, '_blank');
                showDownloadMessage(`Opening ${pdfData.title}`, 'success');
            } catch (error) {
                showDownloadMessage(`Error opening ${pdfData.title}. Please try again.`, 'error');
            }
        } else {
            // Generate a placeholder PDF with content
            generatePlaceholderPDF(type, resourceId);
        }
    }, 500);
}

// Get PDF data based on type and resource ID from the markdown specifications
function getPDFData(type, resourceId) {
    const pdfDatabase = {
        // Screening Checklists (from Page 4 of the markdown)
        checklist: {
            'screening-general': {
                title: 'Speech Language Screening Checklist',
                url: 'https://www.dropbox.com/scl/fi/n6wvrdzk812tzu87z3704/Speech_Language_Screening_Checklist.pdf?rlkey=hj9wq00r0s1ypl4bfwvrea69o&dl=1'
            },
            'speech-sounds': {
                title: 'Speech Sound Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/o6q8oucn96p33git5q62u/Speech_Sound_Progress_Monitoring_Tool.pdf?rlkey=a0myfmo3j8bhpb3a38objn4p6&dl=1'
            },
            'language-development': {
                title: 'Language Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/59l86kz4udmmv5d3zline/Language_Progress_Monitoring_Tool.pdf?rlkey=u5g0ary94fptp8bgfs6vh6l4w&dl=1'
            },
            'voice-resonance': {
                title: 'Voice/Resonance Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/wogx8yo1zuf97pnul4rlz/Voice-Resonance_Progress_Monitoring_Tool.pdf?rlkey=0d428rej37hfe3nwj181x6hz8&dl=1'
            },
            'fluency-voice': {
                title: 'Fluency Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/g7km69459qicdiyqkq0oa/Fluency_Progress_Monitoring_Tool.pdf?rlkey=ianc9quid0oft8pg99tfyrmya&dl=1'
            },
            'early-communication': {
                title: 'Functional Communication Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/zpwztvvcv2lwxtjs50if7/Functional_Communication_Progress_Monitoring_Tool.pdf?rlkey=1k7k46ra8xn6860kxi0h8q1rw&dl=1'
            },
            'social-communication': {
                title: 'Social Communication Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/1hq6jek4t9d0ccb0v5z4f/Social_Communication_Progress_Monitoring_Tool.pdf?rlkey=cv4pa4kpj50cm8vjjb6af9tkw&dl=1'
            },
            'aac-assessment': {
                title: 'AAC Assessment Checklist',
                url: null // Placeholder for future implementation
            }
        },
        
        // Handouts (from Page 5 - links to hub.speechandlanguagekids.com)
        handout: {
            'early-communication-home': {
                title: 'Early Communication Home Support Handout',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            },
            'speech-sounds-home': {
                title: 'Speech Sounds Home Practice Handout',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            },
            'aac-implementation': {
                title: 'AAC Implementation Guide',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            },
            'classroom-supports': {
                title: 'Classroom Communication Supports',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            },
            'fluency-support': {
                title: 'Fluency Support Strategies',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            },
            'social-communication-home': {
                title: 'Social Communication Home Strategies',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            }
        },
        
        // Visual Supports (from Page 6 - links to hub.speechandlanguagekids.com)
        visual: {
            'core-vocabulary': {
                title: 'Core Vocabulary Visual Cards',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            },
            'visual-schedules': {
                title: 'Visual Schedule Templates',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            },
            'social-stories': {
                title: 'Social Story Templates',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            },
            'emotion-cards': {
                title: 'Emotion Recognition Cards',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            },
            'speech-sound-cues': {
                title: 'Speech Sound Visual Cues',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            },
            'aac-symbols': {
                title: 'AAC Symbol Cards',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            }
        }
    };
    
    if (pdfDatabase[type] && pdfDatabase[type][resourceId]) {
        return pdfDatabase[type][resourceId];
    }
    
    return null;
}

// Generate placeholder PDF when no real URL is available
function generatePlaceholderPDF(type, resourceId) {
    const resourceName = resourceId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const typeName = type.charAt(0).toUpperCase() + type.slice(1);
    
    showDownloadMessage(`${typeName}: ${resourceName} - This resource is being prepared and will be available soon.`, 'info');
}

// Show download status messages
function showDownloadMessage(message, messageType = 'info') {
    // Create message element if it doesn't exist
    let messageDiv = document.getElementById('download-message');
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.id = 'download-message';
        messageDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            z-index: 10000;
            max-width: 350px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            font-family: 'Candara', 'Calibri', 'Arial', sans-serif;
            font-size: 14px;
            transition: all 0.3s ease;
            transform: translateX(400px);
        `;
        document.body.appendChild(messageDiv);
    }
    
    // Set message type styles using the theme colors
    const styles = {
        success: 'background: linear-gradient(135deg, #a0ce4e, #8fb93e);',
        info: 'background: linear-gradient(135deg, #0093ac, #007a8c);',
        warning: 'background: linear-gradient(135deg, #ee4f9c, #d63384);',
        error: 'background: linear-gradient(135deg, #dc3545, #b02a37);'
    };
    
    messageDiv.style.cssText = messageDiv.style.cssText.replace(/background[^;]*;/g, '') + styles[messageType] || styles.info;
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    
    // Animate in
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(0)';
    }, 50);
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(400px)';
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 300);
    }, 4000);
}

// Download specific checklist types
function downloadChecklist(type) {
    generateFunctionalPDF('checklist', type);
}

// Download specific handout types  
function downloadHandout(type) {
    generateFunctionalPDF('handout', type);
}

// Download specific visual support types
function downloadVisual(type) {
    generateFunctionalPDF('visual', type);
}

// Download curriculum-specific resources
function downloadResource(curriculum, resourceType) {
    generateFunctionalPDF('resource', `${curriculum}-${resourceType}`);
}

// Download skill-specific resources
function downloadSkillResource(skillId, resourceType) {
    generateFunctionalPDF('skill', `${skillId}-${resourceType}`);
}

// Make functions globally available
window.generateFunctionalPDF = generateFunctionalPDF;
window.downloadChecklist = downloadChecklist;
window.downloadHandout = downloadHandout;
window.downloadVisual = downloadVisual;
window.downloadResource = downloadResource;
window.downloadSkillResource = downloadSkillResource;

console.log('✅ PDF download functions loaded and available globally');