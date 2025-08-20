// Simple validation script to check if all pages and navigation work
console.log('=== SLK Curriculum Tool Validation ===');

// Check if all required pages exist
const requiredPages = [
    'homePage', 'decisionGuide', 'jumpToCurriculum', 'checklists', 'handouts', 'visuals',
    'noFunctionalComm', 'needsFunctionalComm', 'speechSounds', 'language', 'voiceResonance',
    'socialCommunication', 'fluency', 'earlyInteractions', 'analyticLanguage', 'gestaltLanguage',
    'aacCurriculum', 'articulation', 'phonology', 'cyclesPhonology', 'motorSpeech', 'mumbling'
];

let missingPages = [];
requiredPages.forEach(pageId => {
    const page = document.getElementById(pageId);
    if (!page) {
        missingPages.push(pageId);
    }
});

if (missingPages.length > 0) {
    console.error('Missing pages:', missingPages);
} else {
    console.log('✅ All required pages found');
}

// Test navigation function
try {
    if (typeof showPage === 'function') {
        console.log('✅ showPage function exists');
    } else {
        console.error('❌ showPage function not found');
    }
} catch (e) {
    console.error('❌ Error testing showPage:', e);
}

// Test back navigation
try {
    if (typeof goBack === 'function') {
        console.log('✅ goBack function exists');
    } else {
        console.error('❌ goBack function not found');
    }
} catch (e) {
    console.error('❌ Error testing goBack:', e);
}

// Test curriculum population
try {
    if (typeof populateEarlyInteractions === 'function') {
        console.log('✅ populateEarlyInteractions function exists');
    } else {
        console.error('❌ populateEarlyInteractions function not found');
    }
} catch (e) {
    console.error('❌ Error testing populateEarlyInteractions:', e);
}

// Check if curriculum data is loaded
try {
    if (window.curriculumData && window.curriculumData.earlyInteractions) {
        console.log('✅ Curriculum data loaded');
    } else {
        console.error('❌ Curriculum data not loaded');
    }
} catch (e) {
    console.error('❌ Error checking curriculum data:', e);
}

console.log('=== Validation Complete ===');