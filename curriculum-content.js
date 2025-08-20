// This file contains all the curriculum content and structure
// It will be loaded after the main script.js

// Early Interactions Curriculum
const earlyInteractionsCurriculum = {
    beginner: {
        title: "Beginner Level: Building Awareness and Engagement",
        ageRange: "(Ages: 9-15 months and beyond)",
        skills: ["Responding to Name", "Joint Attention", "Basic Turn Taking"],
        content: `
            <p>At this level, the focus is on helping the child become more engaged in communication and interactions with others. Many children who struggle with communication may not yet respond to their name consistently or participate in shared activities. Therapy at this level uses play-based strategies to encourage engagement and increase responsiveness to social interactions.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will improve social awareness and engagement skills by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.</p>
            </div>
            
            <table class="rubric-table">
                <tr>
                    <th>Score</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>5 – Emerging Mastery</td>
                    <td>Consistently responds to name, actively shares attention during play (e.g., looks between object and adult, points/showing), and initiates or participates in turn-taking activities with minimal support.</td>
                </tr>
                <tr>
                    <td>4 – Strong Progress</td>
                    <td>Responds to name in most settings; shares joint attention with adult support (e.g., follows gaze or pointing); participates in familiar turn-taking routines but may need reminders or prompts to stay engaged.</td>
                </tr>
                <tr>
                    <td>3 – Developing</td>
                    <td>Inconsistently responds to name; shows some awareness of shared activities but rarely shifts attention between people and objects; may imitate turn-taking actions but needs frequent support to participate.</td>
                </tr>
                <tr>
                    <td>2 – Emerging Skills</td>
                    <td>Rarely responds to name; joint attention is limited or absent (focuses only on object or person, not both); turn-taking occurs only with high levels of prompting and modeling.</td>
                </tr>
                <tr>
                    <td>1 – Limited/Not Yet Observed</td>
                    <td>Does not respond to name; no observable joint attention; does not engage in or attempt turn-taking activities even with adult modeling.</td>
                </tr>
            </table>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('respondingToName')">Responding to Name</button>
                <button class="activity-btn" onclick="showSkill('jointAttention')">Joint Attention and Turn Taking</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Understanding and Responding to Communication",
        ageRange: "(Ages: 1-2 yrs and beyond)",
        skills: ["Following Basic Directions", "Answering Yes/No Questions", "Making a Choice Between two Options"],
        content: `
            <p>At this stage, the child builds on their social engagement skills by learning to understand and respond to simple communication cues. They are learning how to follow directions and make choices, which allows for increased participation in their environment.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will improve social understanding and responding skills by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.</p>
            </div>
            
            <table class="rubric-table">
                <tr>
                    <th>Score</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>5 – Emerging Mastery</td>
                    <td>Consistently follows common one-step directions in various settings, accurately answers yes/no questions to express preferences, and clearly makes choices between two options using words, gestures, or AAC.</td>
                </tr>
                <tr>
                    <td>4 – Strong Progress</td>
                    <td>Follows one-step directions with minimal support or cues, answers yes/no questions in familiar contexts, and makes choices between two options when prompted or offered in a structured setting.</td>
                </tr>
                <tr>
                    <td>3 – Developing</td>
                    <td>Follows simple directions inconsistently and/or only in familiar routines; shows emerging understanding of yes/no questions (e.g., sometimes nods, gestures, or gives unclear answers); can make a choice when given support or a model.</td>
                </tr>
                <tr>
                    <td>2 – Emerging Skills</td>
                    <td>Responds to directions only with frequent prompting or modeling; rarely responds to yes/no questions or choices without full assistance, or may repeat the question or last option given instead of responding</td>
                </tr>
                <tr>
                    <td>1 – Limited/Not Yet Observed</td>
                    <td>Does not follow one-step directions, answer yes/no questions, or make choices between two presented options.</td>
                </tr>
            </table>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('followingDirections')">Following Basic Directions</button>
                <button class="activity-btn" onclick="showSkill('answeringYesNo')">Answering Yes/No Questions</button>
                <button class="activity-btn" onclick="showSkill('makingChoices')">Making a Choice Between Two Options</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Expanding Social Participation and Interaction",
        ageRange: "(Ages: 1-3 yrs and beyond)",
        skills: ["Participating in Early Social Routines", "Increasing Interaction Length", "Answering Wh- Questions"],
        content: `
            <p>At this level, the child strengthens social communication skills and builds the ability to participate in early social routines and engage in longer interactions. They learn to respond to a wider variety of questions and begin engaging in back-and-forth exchanges with more independence.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will improve social participation and interaction by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.</p>
            </div>
            
            <table class="rubric-table">
                <tr>
                    <th>Score</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>5 – Emerging Mastery</td>
                    <td>Actively participates in familiar social routines with minimal prompting, maintains attention and engagement during multi-turn social interactions, and consistently responds to "What," "Where," and "Who" questions in familiar situations.</td>
                </tr>
                <tr>
                    <td>4 – Strong Progress</td>
                    <td>Joins in common social games and routines when prompted, stays engaged in short interactions with support, and responds accurately to some WH- questions with occasional prompts or cues.</td>
                </tr>
                <tr>
                    <td>3 – Developing</td>
                    <td>Occasionally participates in social routines with frequent support, briefly attends to back-and-forth interactions, and shows emerging understanding of WH- questions (may respond correctly in highly familiar contexts).</td>
                </tr>
                <tr>
                    <td>2 – Emerging Skills</td>
                    <td>Rarely joins social routines, attention to interaction is fleeting, and WH- questions are typically unanswered or the question is repeated instead of answered.</td>
                </tr>
                <tr>
                    <td>1 – Limited/Not Yet Observed</td>
                    <td>Not yet participating in familiar social routines, minimal engagement in social exchanges, and no observable response to "What," "Where," or "Who" questions.</td>
                </tr>
            </table>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('socialRoutines')">Participating in Early Social Routines</button>
                <button class="activity-btn" onclick="showSkill('interactionLength')">Increase Interaction Length</button>
                <button class="activity-btn" onclick="showSkill('whQuestions')">Respond to Wh- Questions</button>
            </div>
        `
    }
};

// Function to populate Early Interactions curriculum page
function populateEarlyInteractions() {
    const page = document.getElementById('earlyInteractions');
    if (!page) return;
    
    let html = `
        <h2>Early Interactions Curriculum</h2>
        <p>This curriculum will encourage the individual to engage, respond, and participate in social interactions. Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelData = {
        beginner: earlyInteractionsCurriculum.beginner,
        intermediate: earlyInteractionsCurriculum.intermediate,
        advanced: earlyInteractionsCurriculum.advanced
    };
    
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('earlyInteractions', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div id="earlyInteractions-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Analytic Language Processor Curriculum
const analyticLanguageCurriculum = {
    beginner: {
        title: "Beginner Level: Encouraging First Words",
        ageRange: "(Any Age)",
        skills: ["Modeling language in a way that supports language development", "Vocabulary-building activities"],
        content: `
            <p>In this level, the focus is on creating an environment that encourages spontaneous word use by using short, simple, and engaging language models during play interactions. Caregivers and therapists will use shortened utterances, sign language, self-talk, parallel talk, expansions, and vocab-rich activities to expose the child to meaningful vocabulary in a natural, interactive way.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _______ will spontaneously speak words to interact with others at least five times during a 10-minute play interaction on three consecutive data collection days.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('encouragingFirstWords')">Encouraging First Words through Indirect Language Stimulation</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Producing Early Word Shapes",
        ageRange: "(Ages: 1-3 yrs and beyond)",
        skills: ["Imitating Actions and Sound Effects", "Imitating and Producing CV, VC, and CVC Words"],
        content: `
            <p>This level focuses on helping the child produce clear, functional words by strengthening their ability to imitate sounds and words. If a child is not yet imitating speech, therapy begins with gross-motor and fine-motor imitation, then progresses to sound effects and speech sounds to build a foundation for verbal communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the report period, during a 10-minute activity, _________ will spontaneously produce at least 10 consonant-vowel (CV), vowel-consonant (VC), and consonant-vowel-consonant (CVC) words with verbal prompting (e.g. "what do you need") as needed (speech sound errors or replacements are acceptable as long as the sounds are attempted).</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('producingCVCWords')">Producing CV, VC, and CVC Words for Functional Communication</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Expanding Vocabulary and Combining Words",
        ageRange: "(Ages: 1.5-3 yrs and beyond)",
        skills: ["Building an Expressive Vocabulary of First 50 Words", "Producing 2-Word Utterances"],
        content: `
            <p>At this level, the focus is on growing the child's vocabulary and moving from single words to two-word phrases for more functional communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, during a 10-minute interaction with an adult, ______ will produce five 2-word combinations, either in imitation or spontaneously produced, with models and prompts from the adult as needed.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('first50Words')">Building an Expressive Vocabulary of First 50 Words</button>
                <button class="activity-btn" onclick="showSkill('twoWordUtterances')">Producing 2-Word Utterances</button>
            </div>
        `
    }
};

// Function to populate Analytic Language curriculum page
function populateAnalyticLanguage() {
    const page = document.getElementById('analyticLanguage');
    if (!page) return;
    
    let html = `
        <h2>Analytic Language Processor Curriculum (First Words)</h2>
        <p>Analytic Language Processors (ALPs) are children who learn language one word at a time—starting with single words, gradually combining them into phrases and sentences as they develop.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelData = {
        beginner: analyticLanguageCurriculum.beginner,
        intermediate: analyticLanguageCurriculum.intermediate,
        advanced: analyticLanguageCurriculum.advanced
    };
    
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('analyticLanguage', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div id="analyticLanguage-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Gestalt Language Processor Curriculum
const gestaltLanguageCurriculum = {
    beginner: {
        title: "Beginner Level: Using Early Gestalts",
        ageRange: "(Ages: 1.5 - 3.5 yrs and beyond)",
        skills: ["Finding meaning in echolalia", "Modeling gestalts"],
        content: `
            <p>This level focuses on helping caregivers and therapists understand and support a GLP's unique language development. Many GLPs already have scripts and gestalts they use in communication, but they may not yet be mixing or modifying them.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, __________ will spontaneously communicate using at least 5 different gestalts (words, phrases, sentences, songs, or scripts) during a 10-minute play activity in the therapy room.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('earlyGestalts')">Responding to and Modeling Early Gestalts</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Mitigated Gestalts",
        ageRange: "(Ages: 2.5 - 5 yrs and beyond)",
        skills: ["Breaking Down Gestalts", "Recombining Pieces of Different Gestalts"],
        content: `
            <p>At this stage, the child begins to analyze and break apart their longer gestalts into smaller, more flexible units. They may start mixing and matching words from different scripts to create novel combinations.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____________ will spontaneously communicate using at least 5 different shortened gestalts or a gestalt made up of pieces of other gestalts during a 10-minute play activity.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('mitigatedGestalts')">Breaking Down and Mixing and Matching Gestalts</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Developing Self-Generated Language",
        ageRange: "(Ages: 3 - 7 yrs and beyond)",
        skills: ["Using Single Words", "Producing 2-Word Utterances"],
        content: `
            <p>At this level, gestalt language processors begin to pull single words out of their gestalts and use them independently. They may label or request using single words.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will spontaneously communicate using at least 5 different single words or 2-word combinations during a 10-minute play activity.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('first50Words')">Building an Expressive Vocabulary of First 50 Words</button>
                <button class="activity-btn" onclick="showSkill('twoWordUtterances')">Producing 2-Word Utterances</button>
            </div>
        `
    }
};

// Function to populate Gestalt Language curriculum page
function populateGestaltLanguage() {
    const page = document.getElementById('gestaltLanguage');
    if (!page) return;
    
    let html = `
        <h2>Gestalt Language Processor Curriculum (Shaping Echolalia)</h2>
        <p>Gestalt Language Processors (GLPs) develop language in chunks or "gestalts" rather than individual words. Instead of learning single words and combining them into phrases, they acquire and use whole sentences, scripts, or song lyrics that they have heard elsewhere.</p>
        <p>Choose the level below that best fits this individual's current level.</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelData = {
        beginner: gestaltLanguageCurriculum.beginner,
        intermediate: gestaltLanguageCurriculum.intermediate,
        advanced: gestaltLanguageCurriculum.advanced
    };
    
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('gestaltLanguage', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div id="gestaltLanguage-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Call initialization functions when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Populate curriculum pages
    populateEarlyInteractions();
    populateAnalyticLanguage();
    populateGestaltLanguage();
    populateAACCurriculum();
    populateArticulationCurriculum();
    populatePhonologyCurriculum();
    populateMotorSpeechCurriculum();
    populateMumblingCurriculum();
    populateFollowingDirectionsCurriculum();
    populateAskingAnsweringCurriculum();
    populateSequencingCurriculum();
    populateAbstractLanguageCurriculum();
    populateGrammarSyntaxCurriculum();
    populateVocabularyCurriculum();
    populateHealthyVoiceCurriculum();
    populateVoiceCurriculum();
    populateResonanceCurriculum();
    populateProsodyCurriculum();
    populateSocialAwarenessCurriculum();
    populateEmotionalRegulationCurriculum();
    populateConversationalSkillsCurriculum();
    populateSelectiveMutismCurriculum();
    populateFoundationsFluencyCurriculum();
    populateWordFindingCurriculum();
    populateStutteringCurriculum();
    populateClutteringCurriculum();
    
    // Additional populate functions from curriculum-content-2.js
    populateAbstractLanguageSocial();
    populateLiteracyFoundationsCurriculum();
    populateCyclesLanguageCurriculum();
    populateCyclesPhonologyCurriculum();
    // Add other curriculum population functions here
});

// AAC Curriculum
const aacCurriculum = {
    beginner: {
        title: "Beginner Level: Using AAC for Basic Communication",
        ageRange: "(Ages: 2 - 4 yrs and beyond)",
        skills: ["Modeling Core Vocabulary Words on an AAC Device/System", "Using Core Words on an AAC Device/System to Communicate Basic Wants and Needs"],
        content: `
            <p>At this stage, the focus is on introducing AAC as a reliable, consistent communication tool for expressing wants, needs, and ideas. Many early AAC users begin by imitating core vocabulary and learning to use their device to request items. However, true functional communication happens when a child can spontaneously use their AAC system in interactions.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, during 10-minutes of interaction with the therapist (who is modeling AAC use), ________ will spontaneously use the AAC device to communicate a want, need, or idea at least ___ times.</p>
                <p><em>(You should include the number of times that you think this child will be able to communicate spontaneously after the specified amount of therapy)</em></p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('earlyAAC')">Early Functional Communication Using AAC</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Expanding AAC Use to Different Communicative Functions",
        ageRange: "(Ages: 3 - 5 yrs and beyond)",
        skills: ["Using AAC to communicate: rejection, recurrence, actions, descriptors, possession, locatives, self-advocacy"],
        content: `
            <p>At this stage, the child begins to use their AAC device or system for more than just requesting and expands their ability to communicate for a variety of reasons. Instead of only saying "I want," they learn to reject, describe, indicate location, and self-advocate, building a more functional and flexible communication system.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, during a 10-minute interaction with the therapist (who is modeling AAC use), ________ will spontaneously use alternative and augmentative communication (AAC) or spoken speech to express at least _(number)_ different communicative intents (examples: rejection/cessation, recurrence, actions, attributes, possession, location, self-advocacy).</p>
                <p><em>(You should specify a number of different communication types for goal)</em></p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('expandingAAC')">Expanding Communication through AAC</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Using AAC for Independent Functional Communication",
        ageRange: "(Ages: 4 - 6 yrs and beyond)",
        skills: ["Using AAC Throughout the Day and Expanding Language Skills with the AAC Device/System"],
        content: `
            <p>At this level, the focus is on independent, flexible communication across settings. The individual should be able to use AAC to engage in conversations, advocate for themselves, and navigate real-world situations.</p>
            
            <p>At this stage, you should choose an area of communication that the individual needs the most help or support in. Follow the therapy curriculum for that area but allow the individual to use their AAC device or system as the method for communicating within that activity. Modify the goals to indicate that spoken or AAC responses will be accepted.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="restartDecisionGuide()">Click Here to Start the Decision Guide Over to Choose a New Communication Skill to Target</button>
            </div>
        `
    }
};

// Function to populate AAC curriculum page
function populateAACCurriculum() {
    const page = document.getElementById('aacCurriculum');
    if (!page) return;
    
    let html = `
        <h2>Early Augmentative/Alternative Communication (AAC) Curriculum</h2>
        <p>Augmentative and Alternative Communication (AAC) provides a way for individuals to express themselves using tools beyond spoken language, such as speech-generating devices, picture communication systems, or sign language. AAC is not a "last resort"—it is an essential tool that supports language development and functional communication, whether a child uses it as their primary mode of communication or alongside spoken speech.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelData = {
        beginner: aacCurriculum.beginner,
        intermediate: aacCurriculum.intermediate,
        advanced: aacCurriculum.advanced
    };
    
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('aacCurriculum', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div id="aacCurriculum-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Export for use in other scripts if needed
// Articulation Curriculum
const articulationCurriculum = {
    beginner: {
        title: "Beginner Level: Early-Developing Sounds",
        ageRange: "(Ages: 2 - 3 yrs and beyond)",
        skills: ["Producing the following sounds: /b, n, m, p, h, w, d/ and vowels"],
        content: `
            <p>The sounds in this level are some of the first that children typically acquire as they learn to speak. They are produced with simple mouth movements and are foundational for clear communication. Mastering these early sounds helps build confidence and sets the stage for developing more complex speech patterns. Therapy at this level focuses on helping the child accurately produce these sounds in isolation, then gradually using them in syllables, words, and simple phrases.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ________ will correctly produce early-developing speech sounds (/b, n, m, p, h, w, d/ and vowels) in structured conversational tasks (e.g., retelling a simple story or providing a short response to a question/prompt) with 80% accuracy across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('bSound')">/b/ Sound</button>
                <button class="activity-btn" onclick="showSkill('mSound')">/m/ Sound</button>
                <button class="activity-btn" onclick="showSkill('nSound')">/n/ Sound</button>
                <button class="activity-btn" onclick="showSkill('pSound')">/p/ Sound</button>
                <button class="activity-btn" onclick="showSkill('hSound')">/h/ Sound</button>
                <button class="activity-btn" onclick="showSkill('wSound')">/w/ Sound</button>
                <button class="activity-btn" onclick="showSkill('dSound')">/d/ Sound</button>
                <button class="activity-btn" onclick="showSkill('vowelSounds')">Vowel Sounds</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Mid-Developing Sounds",
        ageRange: "(Ages: 3 - 4 yrs and beyond)",
        skills: ["Producing the following sounds: /ɡ, k, f, t, ŋ (\"ng\"), \"y\"/"],
        content: `
            <p>At this level, we focus on speech sounds that require more precise tongue and airflow coordination. These sounds typically emerge after the early-developing sounds but may still be challenging for some individuals.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, __________ will correctly produce mid-developing speech sounds (/ɡ, k, f, t, ŋ ("ng"), "y"/) in structured conversational tasks (e.g., retelling a simple story or providing a short response to a question/prompt) with 80% accuracy across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('kSound')">/k/ Sound</button>
                <button class="activity-btn" onclick="showSkill('gSound')">/g/ Sound</button>
                <button class="activity-btn" onclick="showSkill('fSound')">/f/ Sound</button>
                <button class="activity-btn" onclick="showSkill('tSound')">/t/ Sound</button>
                <button class="activity-btn" onclick="showSkill('ngSound')">/ŋ/ "ng" Sound</button>
                <button class="activity-btn" onclick="showSkill('ySound')">"y" Sound</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Later-Developing Sounds and Clusters",
        ageRange: "(Ages: 4 - 7 yrs and beyond)",
        skills: ["Producing the following sounds: /v, ʤ (\"j\"), s, ʧ (\"ch\"), l, ʃ (\"sh\"), z, /r/, \"th\" (voiced and voiceless), ʒ (\"zh\" as in \"measure\")/", "Producing Consonant Clusters"],
        content: `
            <p>At this level, therapy focuses on speech sounds that require precise tongue movements, airflow control, and coordination. These later-developing sounds are often the most challenging for children to master and may impact overall speech intelligibility if not produced correctly.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, __________ will correctly produce later-developing speech sounds (/v, ʤ ("j"), s, ʧ ("ch"), l, ʃ ("sh"), z, /r/, "th" (voiced and voiceless), ʒ ("zh" as in "measure")/ and consonant clusters) in structured conversational tasks (e.g., retelling a simple story or providing a short response to a question/prompt) with 80% accuracy across three consecutive sessions.</p>
                <p><em>(You only need to include the sounds that the individual needs to work on)</em></p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('vSound')">/v/ Sound</button>
                <button class="activity-btn" onclick="showSkill('jSound')">/ʤ/ ("j") Sound</button>
                <button class="activity-btn" onclick="showSkill('sSound')">/s/ Sound</button>
                <button class="activity-btn" onclick="showSkill('chSound')">/ʧ/ ("ch") Sound</button>
                <button class="activity-btn" onclick="showSkill('lSound')">/l/ Sound</button>
                <button class="activity-btn" onclick="showSkill('shSound')">/ʃ/ ("sh") Sound</button>
                <button class="activity-btn" onclick="showSkill('zSound')">/z/ Sound</button>
                <button class="activity-btn" onclick="showSkill('rSound')">/r/ Sound</button>
                <button class="activity-btn" onclick="showSkill('thSound')">"th" Sound (Voiced and Voiceless)</button>
                <button class="activity-btn" onclick="showSkill('zhSound')">/ʒ/ Sound ("zh" as in "measure")</button>
                <button class="activity-btn" onclick="showSkill('consonantClusters')">Consonant Clusters (like /st/ and /tw/)</button>
            </div>
        `
    }
};

// Function to populate Articulation curriculum page
function populateArticulationCurriculum() {
    const page = document.getElementById('articulation');
    if (!page) return;
    
    let html = `
        <h2>Articulation Curriculum</h2>
        <p>In articulation therapy, we focus on teaching children how to produce individual speech sounds correctly, starting with isolated sounds and gradually working up to using them in words, sentences, and conversation. This structured approach helps build muscle coordination and sound awareness, making speech clearer and more intelligible over time.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelData = {
        beginner: articulationCurriculum.beginner,
        intermediate: articulationCurriculum.intermediate,
        advanced: articulationCurriculum.advanced
    };
    
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('articulation', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div id="articulation-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Phonology Curriculum
const phonologyCurriculum = {
    beginner: {
        title: "Beginner Level: Early Phonological Processes",
        ageRange: "(Ages: 3 - 4 yrs and beyond)",
        skills: ["Initial Consonant Deletion (e.g., \"at\" for \"cat\")", "Final Consonant Deletion (e.g., \"do\" for \"dog\")", "Unstressed Syllable Deletion (e.g., \"nana\" for \"banana\")"],
        content: `
            <p>At the Beginner Level, we focus on phonological processes that have the most significant impact on speech intelligibility and are typically eliminated first in development. These processes involve omitting entire sounds or syllables, making speech difficult to understand.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, __________ will eliminate initial consonant deletion, final consonant deletion, and unstressed syllable deletion in conversational speech, producing complete words with all expected sounds (sound substitutions are acceptable as long as all sounds are represented) with fewer than 5 errors in 10 minutes of conversation, as measured by clinician observation and data collection.</p>
                <p><em>(You only need to include the processes that the individual needs to work on)</em></p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('initialConsonantDeletion')">Initial Consonant Deletion</button>
                <button class="activity-btn" onclick="showSkill('finalConsonantDeletion')">Final Consonant Deletion</button>
                <button class="activity-btn" onclick="showSkill('unstressedSyllableDeletion')">Unstressed Syllable Deletion</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Mid-Developing Phonological Processes",
        ageRange: "(Ages: 4 - 5 yrs and beyond)",
        skills: ["Velar Fronting (e.g., \"tat\" for \"cat\")", "Backing (e.g., \"gog\" for \"dog\")", "Stopping of Fricatives (e.g., \"toap\" for \"soap\")", "Cluster Reduction (e.g., \"poon\" for \"spoon\")"],
        content: `
            <p>At the Intermediate Level, we target phonological processes that involve replacing or simplifying more complex sounds, which can still significantly impact intelligibility.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ___________ will eliminate velar fronting, backing, stopping of fricatives, and cluster reduction in conversational speech with fewer than 5 errors in 10 minutes of conversation, as measured by clinician observation and data collection.</p>
                <p><em>(You only need to include the processes that the individual needs to work on)</em></p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('velarFronting')">Velar Fronting</button>
                <button class="activity-btn" onclick="showSkill('backing')">Backing</button>
                <button class="activity-btn" onclick="showSkill('stoppingFricatives')">Stopping of Fricatives</button>
                <button class="activity-btn" onclick="showSkill('clusterReduction')">Cluster Reduction</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Later-Developing Phonological Processes",
        ageRange: "(Ages: 4 - 7 yrs and beyond)",
        skills: ["Gliding (e.g., \"wabbit\" for \"rabbit\")", "Prevocalic Voicing (e.g., \"big\" for \"pig\")", "Postvocalic Devoicing (e.g., \"pick\" for \"pig\")"],
        content: `
            <p>At the Advanced Level, we focus on phonological processes that persist longer in development and are harder to perceive and therefore teach in therapy.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ___________ will eliminate gliding of liquids, prevocalic voicing, and postvocalic devoicing in conversational speech with fewer than 5 errors in 10 minutes of conversation, as measured by clinician observation and data collection.</p>
                <p><em>(You only need to include the processes that the individual needs to work on)</em></p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('glidingLiquids')">Gliding of Liquids</button>
                <button class="activity-btn" onclick="showSkill('prevocalicVoicing')">Prevocalic Voicing</button>
                <button class="activity-btn" onclick="showSkill('postvocalicDevoicing')">Postvocalic Devoicing</button>
            </div>
        `
    }
};

// Function to populate Phonology curriculum page
function populatePhonologyCurriculum() {
    const page = document.getElementById('phonology');
    if (!page) return;
    
    let html = `
        <h2>Phonology Curriculum</h2>
        <p>Phonology refers to the patterns of sounds in a language and the rules that govern how they are used. While the Articulation Curriculum focuses on teaching individual speech sounds, the Phonology Curriculum will teach entire classes of sounds or sound patterns. Individuals with phonological disorders often exhibit predictable error patterns, such as leaving off final consonants or replacing entire groups of sounds with easier ones. These patterns can significantly impact how well they are understood by others.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <p><strong>NOTE:</strong> If the individual is highly unintelligible and is using many different phonological processes, a Cycles Approach to phonology may be more appropriate.</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelData = {
        beginner: phonologyCurriculum.beginner,
        intermediate: phonologyCurriculum.intermediate,
        advanced: phonologyCurriculum.advanced
    };
    
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('phonology', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div id="phonology-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Motor Speech Curriculum
const motorSpeechCurriculum = {
    beginner: {
        title: "Beginner Level: CV, VC, CVC Words",
        ageRange: "(Ages: 1 - 3 yrs and beyond)",
        skills: ["Produce consonant-vowel (CV), vowel-consonant (VC) and consonant-vowel-consonant (CVC) words"],
        content: `
            <p>At the Beginner Level, therapy focuses on building a strong foundation for speech by developing consistent and accurate motor planning for simple word structures.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given multisensory cues and verbal models, _________ will accurately produce CV, VC, and CVC word structures at least 30 times within a 15-minute play-based session in 80% of opportunities across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('producingCVCWords')">Producing CV, VC, and CVC Words for Functional Communication</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Expanded Word Structures and Utterance Length",
        ageRange: "(Ages: 1.5 - 4 yrs and beyond)",
        skills: ["Produce Expanded Word Structures, such as CVCV, CCVC, etc.", "Produce 2-Word Utterances"],
        content: `
            <p>At the Intermediate Level, therapy focuses on increasing speech complexity and utterance length by introducing expanded word structures (e.g., CVCV, CCVC) and combining simple words into longer phrases. As children with motor speech disorders develop greater consistency with individual words, they must learn to transition smoothly between sounds and syllables while producing longer utterances.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given verbal models and multisensory cues, __________  will accurately produce expanded word structures (CVCV, CCVC) and/or combine CV, VC, and CVC words into two- to three-word utterances at least 30 times within a 15-minute play-based session across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('expandedWordStructures')">Produce Expanded Word Structures, such as CVCV, CCVC, etc.</button>
                <button class="activity-btn" onclick="showSkill('twoWordUtterances')">Produce 2-Word Utterances</button>
            </div>
            <p><em>Note: you will need to modify this activity slightly. Focus on using shorter words that the child can approximate. It's OK to simplify harder words down into a CV, VC or CVC structure. For example, "ball" could be "ba" for now</em></p>
        `
    },
    advanced: {
        title: "Advanced Level: Coordination and Connected Speech",
        ageRange: "(Ages: 3 - 7 yrs and beyond)",
        skills: ["Improving oral proprioception and coordination for speech", "Producing multi-syllabic words", "Improving prosody (pitch, volume, rate)"],
        content: `
            <p>At the Advanced Level, therapy focuses on refining speech coordination, accuracy, and fluency in multi-syllabic words and connected speech. As speech complexity increases, children with motor speech disorders may struggle with smooth transitions between sounds and syllables, as well as maintaining consistent articulation and natural prosody.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ___________ will improve speech intelligibility and fluidity by achieving at least a 4 out of 5 on the following rubric, as measured by the classroom teacher.</p>
                <p><strong>Over the past few weeks, this individual's speech was...</strong></p>
                <table class="rubric-table">
                    <tr>
                        <td><strong>1</strong></td>
                        <td>Very difficult to understand. Speech is unclear, choppy, or broken up so much that listeners frequently ask for repetition or can't understand the message.</td>
                    </tr>
                    <tr>
                        <td><strong>2</strong></td>
                        <td>Often hard to understand. Some words come out clearly, but speech frequently breaks down, and the child struggles to get words out smoothly. Listeners need to guess or ask for clarification.</td>
                    </tr>
                    <tr>
                        <td><strong>3</strong></td>
                        <td>Mostly understandable, but not always smooth. Speech is clearer, but some sounds or syllables are still missing, jumbled, or awkward. Occasional pauses or struggles are noticeable.</td>
                    </tr>
                    <tr>
                        <td><strong>4</strong></td>
                        <td>Easily understood with only small disruptions. Speech flows well, and most words sound natural. There may be minor pauses or small articulation errors, but they don't interfere much with understanding.</td>
                    </tr>
                    <tr>
                        <td><strong>5</strong></td>
                        <td>Natural and smooth. The individual speaks clearly and easily, with smooth transitions and natural rhythm. Listeners understand without effort.</td>
                    </tr>
                </table>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('oralProprioception')">Improving Oral Proprioception and Coordination for Speech and Saliva Management</button>
                <button class="activity-btn" onclick="showSkill('multisyllabicWords')">Producing Multi-Syllabic Words</button>
                <button class="activity-btn" onclick="showSkill('improvingProsody')">Improving Prosody (Pitch, Volume, Rate)</button>
            </div>
            <p><em>Only include the first skill if the individual is unable to get their articulators into the correct position for speech sounds and/or saliva management</em></p>
        `
    }
};

// Function to populate Motor Speech curriculum page
function populateMotorSpeechCurriculum() {
    const page = document.getElementById('motorSpeech');
    if (!page) return;
    
    let html = `
        <h2>Motor Speech Curriculum</h2>
        <p>Motor speech disorders, such as childhood apraxia of speech (CAS) and dysarthria, affect a child's ability to plan, coordinate, and produce speech sounds accurately. Unlike articulation or phonological disorders, which stem from difficulties with specific sounds or patterns, motor speech disorders are rooted in challenges with motor planning, sequencing, and execution of movements needed for clear speech. These difficulties can result in inconsistent speech errors, trouble producing longer words, difficulty transitioning between sounds, and even physical struggle during speech production.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelData = {
        beginner: motorSpeechCurriculum.beginner,
        intermediate: motorSpeechCurriculum.intermediate,
        advanced: motorSpeechCurriculum.advanced
    };
    
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('motorSpeech', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div id="motorSpeech-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Mumbling Curriculum
const mumblingCurriculum = {
    beginner: {
        title: "Beginner Level: Overarticulation in Structured Tasks",
        ageRange: "(Ages: 3 - 5 yrs and beyond)",
        skills: ["Overarticulate in Single Words", "Overarticulate in Phrases", "Overarticulate in Sentences"],
        content: `
            <p>At the Beginner Level, therapy focuses on helping the child become aware of their speech clarity by practicing intentional overarticulation in structured activities. Many children who mumble are unaware that their speech is unclear, so this stage emphasizes exaggerating speech movements, slowing down, and fully pronouncing words to establish a foundation for clear communication. By using overarticulation in structured tasks, the child learns what clear speech feels and sounds like, making it easier to carry over into everyday interactions.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, _________ will use intentional overarticulation (exaggerated speech clarity) when speaking single sentences when prompted during therapy on 80% of opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('overarticulationWords')">Overarticulation in Words, Phrases, and Sentences</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Speaking Clearly in Structured Conversation",
        ageRange: "(Ages: 5 - 7 yrs and beyond)",
        skills: ["Overarticulate in Structured Conversation", "Overarticulate conversational speech when prompted"],
        content: `
            <p>At the Intermediate Level, the focus shifts from structured overarticulation in shorter speech tasks to using the strategy as needed in longer speaking opportunities. At this stage, the child practices speaking naturally but learns to adjust their clarity in response to cues from a listener, such as a verbal reminder or a visual signal. This helps them build self-awareness and control over their speech while still having external support.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, __________ will overarticulate (properly and precisely pronounce every sound) in conversation when he receives a visual signal from the therapist on 80% of opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('overarticulationConversation')">Overarticulate in Structured Conversation when Prompted</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Self-Correcting in Conversation",
        ageRange: "(Ages: 7 - 10 yrs and beyond)",
        skills: ["Identify signs of a communication breakdown", "Overarticulate during communication breakdown"],
        content: `
            <p>At the Advanced Level, the focus is on independent self-monitoring—helping the child recognize when their speech is unclear and correct it without external cues. By this stage, they have practiced overarticulation and responding to prompts, and now the goal is for them to naturally adjust their clarity in everyday conversations. Therapy at this level emphasizes real-time awareness, self-correction, and maintaining clear speech across different settings, ensuring that improved articulation and volume become a consistent habit in daily interactions.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, During ten minutes of unstructured conversation in a natural setting, ___________ will achieve a score of 4 or higher on the intelligibility and breakdown repair rubric below, as rated by the speech-language pathologist, on three consecutive data collection days.</p>
                
                <table class="rubric-table">
                    <tr>
                        <td><strong>5</strong></td>
                        <td>Almost everything the student said was easily understood. If a rare misunderstanding occurred, the student independently noticed and clarified without prompting.</td>
                    </tr>
                    <tr>
                        <td><strong>4</strong></td>
                        <td>Much of what the student said was easily understood. When unclear, the student recognized signs of confusion (e.g., listener facial expression, request for repetition) and made effective attempts to clarify.</td>
                    </tr>
                    <tr>
                        <td><strong>3</strong></td>
                        <td>About half of the student's speech was understood. The student occasionally attempted to clarify when prompted or when signs of confusion were obvious, but not consistently or effectively.</td>
                    </tr>
                    <tr>
                        <td><strong>2</strong></td>
                        <td>Less than half of the student's speech was understood. The student rarely noticed or responded to communication breakdowns, even when prompted.</td>
                    </tr>
                    <tr>
                        <td><strong>1</strong></td>
                        <td>Most of what the student said was difficult to understand. The student made no noticeable attempts to clarify or repair communication breakdowns.</td>
                    </tr>
                </table>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('communicationBreakdown')">Identifying Signs of Communication Breakdown and Using Repair Strategies</button>
            </div>
        `
    }
};

// Function to populate Mumbling curriculum page
function populateMumblingCurriculum() {
    const page = document.getElementById('mumbling');
    if (!page) return;
    
    let html = `
        <h2>Mumbling Curriculum</h2>
        <p>Mumbling occurs when speech is unclear, slurred, or too quiet, making it difficult for others to understand. Children who mumble may drop sounds, speak too quickly, or fail to fully articulate words, often without realizing it. While their speech may technically be correct, the lack of clarity, volume, or articulation can interfere with communication, leading to frustration in academic and social settings.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <p><strong>NOTE:</strong> If the individual is difficult to understand, speaks very quickly, and is easier to understand when you ask them to slow down, consider the Cluttering Curriculum instead.</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelData = {
        beginner: mumblingCurriculum.beginner,
        intermediate: mumblingCurriculum.intermediate,
        advanced: mumblingCurriculum.advanced
    };
    
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('mumbling', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div id="mumbling-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Following Directions Curriculum
const followingDirectionsCurriculum = {
    beginner: {
        title: "Beginner Level: Basic Directions",
        ageRange: "(Ages: 1 - 4 yrs and beyond)",
        skills: ["Following One-Step Routine Directions", "Following One-Step Novel Directions", "Following Two-Step Directions (Routine and Novel)", "Following Directions with Spatial Concepts"],
        content: `
            <p>At the Beginner Level, therapy focuses on helping children understand and follow simple 1- and 2-step directions using familiar language and structured tasks.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given visual and verbal cues, __________ will follow 1- and 2-step directions containing basic spatial and action concepts (e.g., "Put the block in the box, then clap your hands") with 80% accuracy across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('oneStepDirections')">Following One-Step Directions (Routine and Novel)</button>
                <button class="activity-btn" onclick="showSkill('twoStepDirections')">Following Two-Step Directions (Routine and Novel)</button>
                <button class="activity-btn" onclick="showSkill('spatialConcepts')">Following Directions with Spatial Concepts</button>
            </div>
            <p><em>Use only the first phase of this therapy activity unless they also need practice for learning those spatial concepts</em></p>
        `
    },
    intermediate: {
        title: "Intermediate Level: Expanded Directions",
        ageRange: "(Ages: 4 - 7 yrs and beyond)",
        skills: ["Following 3-Step Directions (Routine and Novel)", "Following Directions with Temporal Words: Before and After"],
        content: `
            <p>At the Intermediate Level, children work on following longer, more complex directions that require increased attention, memory, and language processing.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given verbal instructions without visual supports, _________ will follow multi-step and non-routine directions (e.g., "Before you color the picture, put your name at the top and fold the paper in half") with 80% accuracy across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('threeStepDirections')">Following 3-Step Directions (Routine and Novel)</button>
                <button class="activity-btn" onclick="showSkill('temporalConcepts')">Following Directions with Temporal Words: Before and After</button>
            </div>
            <p><em>Only use the first two phases of this therapy activity unless the individual also needs expanded practice for learning these temporal concepts</em></p>
        `
    },
    advanced: {
        title: "Advanced Level: Functional Directions",
        ageRange: "(Ages: 5 - 8 yrs and beyond)",
        skills: ["Following Classroom and Academic Instructions", "Managing Larger, Functional Directions"],
        content: `
            <p>At the Advanced Level, the focus shifts to following multi-step directions in real-world situations, such as classroom tasks, academic instructions, and daily routines. These directions often require listening, problem-solving, and carrying out multiple steps independently.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given verbal instructions in a natural setting, _______________ will follow multi-step directions related to classroom activities and real-life tasks (e.g., "Get your notebook, write the date at the top, and copy the first sentence from the board") with 80% accuracy across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('classroomDirections')">Following Classroom, Academic, and Larger Functional Directions</button>
            </div>
        `
    }
};

// Function to populate Following Directions curriculum page
function populateFollowingDirectionsCurriculum() {
    const page = document.getElementById('followingDirections');
    if (!page) return;
    
    let html = `
        <h2>Following Directions Curriculum</h2>
        <p>The ability to understand and follow directions is a foundational language skill that impacts a child's ability to function in the classroom, follow routines, and engage in social interactions. Some children struggle with following directions due to difficulty processing language, remembering steps, or understanding key concepts like spatial terms, sequencing, or conditionals. These challenges can lead to frustration, difficulty completing tasks, and reduced independence in academic and everyday situations.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelData = {
        beginner: followingDirectionsCurriculum.beginner,
        intermediate: followingDirectionsCurriculum.intermediate,
        advanced: followingDirectionsCurriculum.advanced
    };
    
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('followingDirections', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div id="followingDirections-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Asking and Answering Questions Curriculum
const askingAnsweringCurriculum = {
    beginner: {
        title: "Beginner Level: Answering Yes/No and Individual Wh- Questions",
        ageRange: "(Ages: 2 - 6 yrs and beyond)",
        skills: ["Yes/No Questions", "What Questions", "Who Questions", "Where Questions", "When Questions", "Why Questions", "How Questions", "Which Questions"],
        content: `
            <p>At the Beginner Level, therapy focuses on helping children understand and respond to basic yes/no and wh- questions in structured tasks. Many children need explicit instruction to grasp the meaning of different question types, so this stage introduces one question type at a time (e.g., starting with "where" questions before moving to "who" or "what" questions).</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given structured tasks focusing on one question type at a time, __________ will accurately answer yes/no and wh- questions (who, what, where, when, why, how, which) with 80% accuracy across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('answeringYesNo')">Answering Yes/No Questions</button>
                <button class="activity-btn" onclick="showSkill('answeringWhat')">Answering What Questions</button>
                <button class="activity-btn" onclick="showSkill('answeringWho')">Answering Who Questions</button>
                <button class="activity-btn" onclick="showSkill('answeringWhere')">Answering Where Questions</button>
                <button class="activity-btn" onclick="showSkill('answeringWhen')">Answering When Questions</button>
                <button class="activity-btn" onclick="showSkill('answeringWhy')">Answering Why Questions</button>
                <button class="activity-btn" onclick="showSkill('answeringHow')">Answering How Questions</button>
                <button class="activity-btn" onclick="showSkill('answeringWhich')">Answering Which Questions</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Asking and Answering Mixed Questions in Conversation",
        ageRange: "(Ages: 4 - 7 yrs and beyond)",
        skills: ["Asking Questions with Correct Syntax", "Answering Mixed Questions", "Answering Questions about Past Events"],
        content: `
            <p>At the Intermediate Level, therapy focuses on helping children understand, answer, and ask a mix of yes/no and wh- questions naturally within conversations. At this stage, children move beyond structured practice with single question types and begin responding to a variety of questions in real-time interactions.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, during a 15-minute conversation with the therapist, ______ will accurately answer and ask a variety of yes/no and wh- questions at least 10 times across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('askingQuestions')">Asking Questions with Correct Syntax</button>
                <button class="activity-btn" onclick="showSkill('answeringMixed')">Answering Mixed Questions</button>
                <button class="activity-btn" onclick="showSkill('answeringPastEvents')">Answering Questions about Past Events</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Using Questions in Classwork and Daily Activities",
        ageRange: "(Ages: 5 - 10 yrs and beyond)",
        skills: ["Asking and Answering Questions in Academic Work", "Asking and Answering Questions for Self-Advocacy", "Asking and Answering Questions in Conversations with Others"],
        content: `
            <p>At the Advanced Level, therapy focuses on helping children use questions independently in real-world settings, such as classroom activities, social interactions, and problem-solving situations. Children practice answering complex, multi-step questions in academic settings while also learning to initiate and use questions to navigate social and functional situations.</p>
            
            <p>At this point, therapy becomes customized to the specific types of question skills that the individual is struggling with. Work with classroom teachers and caregivers to identify the types of questions the individual needs extra instruction and support with. Here are a few examples:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('selfAdvocacyQuestions')">Asking and Answering Questions for Self-Advocacy</button>
                <button class="activity-btn" onclick="showSkill('conversationQuestions')">Asking and Answering Questions in Conversations with Others</button>
                <button class="activity-btn" onclick="showSkill('inferenceQuestions')">Asking and Answering Questions that Require Inferences</button>
            </div>
        `
    }
};

// Function to populate Asking and Answering Questions curriculum page
function populateAskingAnsweringCurriculum() {
    const page = document.getElementById('askingAnswering');
    if (!page) return;
    
    let html = `
        <h2>Asking and Answering Questions Curriculum</h2>
        <p>The ability to ask and answer questions is a core language skill that supports learning, social interactions, and problem-solving. Some children struggle with this skill due to difficulty understanding question types, recalling information, or formulating appropriate responses. Others may have trouble knowing when and how to ask questions to seek information or clarify confusion. These challenges can impact participation in conversations, classroom discussions, and daily functional tasks.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelData = {
        beginner: askingAnsweringCurriculum.beginner,
        intermediate: askingAnsweringCurriculum.intermediate,
        advanced: askingAnsweringCurriculum.advanced
    };
    
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('askingAnswering', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div id="askingAnswering-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Sequencing and Retelling Curriculum
const sequencingCurriculum = {
    beginner: {
        title: "Beginner Level: Sequencing and Retelling Common Tasks",
        ageRange: "(Ages: 4 - 6 yrs and beyond)",
        skills: ["Sequencing and Describing Steps to Common Activities"],
        content: `
            <p>At the Beginner Level, therapy focuses on helping children sequence and retell simple, familiar routines and tasks in the correct order.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given visual or verbal prompts, _________ will accurately sequence and verbally retell the steps of a familiar task (e.g., brushing teeth, making a sandwich) in the correct order using transition words (first, next, last) in 80% of opportunities across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, use the suggested activities below:</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('sequencingCommonTasks')">Sequencing and Describing Steps to Common Activities</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Retelling Past Events",
        ageRange: "(Ages: 4 - 7 yrs and beyond)",
        skills: ["Answering Questions about Past Events", "Sequencing and Retelling Past Events"],
        content: `
            <p>At the Intermediate Level, therapy focuses on helping children retell past events in a clear, logical order. Many children who struggle with this skill may jump around in their story, leave out important details, or assume the listener already knows what happened. During this stage, children learn to provide context, include key details, and organize their thoughts using sequencing words (e.g., first, then, last).</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given visual or verbal prompts, __________ will accurately retell a past event (e.g., what they did over the weekend) using a clear beginning, middle, and end, while providing necessary details and sequencing words (first, then, last) in 80% of opportunities across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('answeringPastEvents')">Answering Questions about Past Events</button>
                <button class="activity-btn" onclick="showSkill('sequencingPastEvents')">Sequencing and Retelling Past Events</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Using Sequencing and Retelling in Classwork",
        ageRange: "(Ages: 5 - 8 yrs and beyond)",
        skills: ["Understanding, Retelling, and Producing Narratives", "Using Temporal Concepts: Before, During, After"],
        content: `
            <p>At the Advanced Level, therapy focuses on applying sequencing and retelling skills to academic tasks, such as summarizing a story, explaining a classroom activity, or organizing thoughts for written assignments.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, given verbal or written prompts, _____________ will accurately retell a narrative or academic event (e.g., summarizing a story, explaining a science experiment) using a clear structure, appropriate sequencing, and temporal concepts (e.g., before, during, after) in 80% of opportunities across three consecutive sessions.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered. Focus on one skill at a time. You may either work on a single skill until it is mastered, or rotate through all the skills—spending a set amount of time on each (e.g., 2 weeks)—and revisit the ones that still need more practice.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('narrativeStructure')">Understanding, Retelling, and Producing Narratives</button>
                <button class="activity-btn" onclick="showSkill('temporalConcepts')">Using Temporal Concepts: Before, During, After</button>
            </div>
        `
    }
};

// Function to populate Sequencing curriculum page
function populateSequencingCurriculum() {
    const page = document.getElementById('sequencing');
    if (!page) return;
    
    let html = `
        <h2>Sequencing and Retelling Curriculum</h2>
        <p>Being able to sequence and retell events in a clear, logical way is an essential language skill for communication, academic success, and social interactions. Some children struggle with this because they start in the middle of a story, mix up the order of events, leave out key details, or assume the listener already knows the context. These difficulties can make it hard for them to share experiences, explain what happened, or participate in discussions, leading to frustration and misunderstandings.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelData = {
        beginner: sequencingCurriculum.beginner,
        intermediate: sequencingCurriculum.intermediate,
        advanced: sequencingCurriculum.advanced
    };
    
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('sequencing', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = levelData[levelId];
        html += `
            <div id="sequencing-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Population functions for additional curricula
function populateAbstractLanguageCurriculum() {
    const page = document.getElementById('abstractLanguage');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.abstractLanguage;
    let html = `
        <h2>Abstract Language Curriculum</h2>
        <p>Developing abstract language skills is essential for understanding nuanced communication, engaging in complex conversations, and interpreting meaning beyond literal words. Some children struggle with abstract language because they rely heavily on concrete thinking, which can make it difficult to grasp figurative expressions, infer unstated meanings, or detect humor and sarcasm. These difficulties can impact social interactions, academic performance, and comprehension of both spoken and written language.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('abstractLanguage', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="abstractLanguage-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

function populateGrammarSyntaxCurriculum() {
    const page = document.getElementById('grammarSyntax');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.grammarSyntax;
    let html = `
        <h2>Grammar/Syntax Curriculum</h2>
        <p>Strong grammar and syntax skills are essential for clear communication, academic success, and social interactions. Some children struggle with sentence structure, verb tenses, or word order, making it difficult to express their thoughts effectively. These difficulties can impact writing, conversation, and comprehension.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('grammarSyntax', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="grammarSyntax-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

function populateVocabularyCurriculum() {
    const page = document.getElementById('vocabulary');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.vocabulary;
    let html = `
        <h2>Vocabulary Curriculum</h2>
        <p>A strong vocabulary is essential for effective communication, reading comprehension, and academic success. Some children struggle with vocabulary development due to limited exposure to language, difficulty retaining new words, or challenges understanding word meanings in different contexts. Building vocabulary skills systematically helps children improve their ability to understand and express ideas clearly across various settings.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('vocabulary', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="vocabulary-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Voice/Resonance Curriculum Population Functions
function populateHealthyVoiceCurriculum() {
    const page = document.getElementById('healthyVoice');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.healthyVoice;
    let html = `
        <h2>Foundations for Healthy Voice Use Curriculum</h2>
        <p>Voice disorders in children can result from various factors including vocal trauma (such as yelling or throat clearing), medical conditions affecting the vocal cords, or poor vocal hygiene habits. These conditions can lead to hoarseness, vocal fatigue, reduced vocal range, and discomfort while speaking. Early intervention with voice therapy can help prevent long-term vocal damage and establish healthy voice use patterns that will benefit children throughout their lives.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('healthyVoice', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="healthyVoice-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

function populateVoiceCurriculum() {
    const page = document.getElementById('voice');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.voice;
    let html = `
        <h2>Voice Curriculum</h2>
        <p>Voice quality disorders can significantly impact a child's communication effectiveness and self-confidence. Children with voice disorders may have hoarse, breathy, strained, or harsh vocal quality that makes their speech difficult to understand or unpleasant to listen to. These conditions can result from vocal fold lesions, neurological differences, or functional voice disorders. Voice therapy focuses on improving vocal quality through targeted techniques and behavioral changes.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('voice', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="voice-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

function populateResonanceCurriculum() {
    const page = document.getElementById('resonance');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.resonance;
    let html = `
        <h2>Resonance (Nasality) Curriculum</h2>
        <p>Resonance disorders occur when there is abnormal modification of sound vibrations in the oral, nasal, or pharyngeal cavities. The most common type in children is hypernasality, where too much sound resonates through the nose during speech production. This can result from structural differences like cleft palate, neurological conditions affecting velopharyngeal function, or learned patterns. Resonance therapy focuses on improving the balance between oral and nasal resonance for clearer speech.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('resonance', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="resonance-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

function populateProsodyCurriculum() {
    const page = document.getElementById('prosody');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.prosody;
    let html = `
        <h2>Prosody Curriculum</h2>
        <p>Prosody refers to the rhythm, stress, and intonation patterns of speech that convey meaning beyond the words themselves. Children with prosodic differences may speak in a monotone voice, use inappropriate stress patterns, speak too quickly or slowly, or have trouble modulating their volume. These differences can impact communication effectiveness and social interactions. Prosody therapy focuses on developing natural, varied speech patterns that enhance communication and expression.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('prosody', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="prosody-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Social Communication Curriculum Population Functions
function populateSocialAwarenessCurriculum() {
    const page = document.getElementById('socialAwareness');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.socialAwareness;
    let html = `
        <h2>Social Awareness and Interaction Curriculum</h2>
        <p>Social awareness and interaction skills are fundamental to successful communication and relationship building. Some children struggle with understanding social cues, taking others' perspectives, or engaging appropriately in social situations. These difficulties can impact friendship development, classroom participation, and family interactions. Building social awareness helps children navigate social situations more successfully and develop meaningful connections with others.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('socialAwareness', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="socialAwareness-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

function populateEmotionalRegulationCurriculum() {
    const page = document.getElementById('emotionalRegulation');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.emotionalRegulation;
    let html = `
        <h2>Emotional Regulation and Self-Advocacy Curriculum</h2>
        <p>Emotional regulation and self-advocacy skills are essential for managing feelings, expressing needs appropriately, and navigating social situations successfully. Some children struggle with identifying emotions, managing strong feelings, or communicating their needs effectively. These difficulties can lead to challenging behaviors, social conflicts, and academic struggles. Teaching emotional regulation and self-advocacy helps children develop independence and confidence in managing their emotional well-being.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('emotionalRegulation', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="emotionalRegulation-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

function populateConversationalSkillsCurriculum() {
    const page = document.getElementById('conversationalSkills');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.conversationalSkills;
    let html = `
        <h2>Conversational Skills Curriculum</h2>
        <p>Strong conversational skills are essential for building relationships, participating in academic activities, and succeeding in social situations. Some children struggle with initiating conversations, maintaining topics, taking turns, or repairing communication breakdowns. These difficulties can impact their ability to form friendships, participate in classroom discussions, and navigate social interactions successfully. Developing conversational skills helps children become more confident and effective communicators.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('conversationalSkills', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="conversationalSkills-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

function populateSelectiveMutismCurriculum() {
    const page = document.getElementById('selectiveMutism');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.selectiveMutism;
    let html = `
        <h2>Selective Mutism Curriculum</h2>
        <p>Selective mutism is an anxiety-based condition where children speak comfortably in certain settings (often at home) but remain silent or speak very little in other environments (such as school or with unfamiliar people). This is not defiance or choice, but rather an anxiety response that prevents the child from speaking. Treatment focuses on gradually building comfort and confidence in communication while addressing the underlying anxiety. The goal is to help children feel safe enough to use their voice across different settings and with various people.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('selectiveMutism', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="selectiveMutism-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Fluency Curriculum Population Functions
function populateFoundationsFluencyCurriculum() {
    const page = document.getElementById('foundationsFluency');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.foundationsFluency;
    let html = `
        <h2>Foundations for Fluency Curriculum</h2>
        <p>Fluency disorders can significantly impact a child's confidence, social relationships, and academic participation. Children who struggle with fluency may experience emotional distress, anxiety about speaking, and avoidance of communication situations. Building strong foundations for fluency includes developing awareness, acceptance, and confidence while learning strategies to support smooth speech production. Early intervention focusing on positive attitudes and self-advocacy helps children become confident communicators regardless of their fluency challenges.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('foundationsFluency', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="foundationsFluency-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

function populateWordFindingCurriculum() {
    const page = document.getElementById('wordFinding');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.wordFinding;
    let html = `
        <h2>Word Finding/Word Retrieval Curriculum</h2>
        <p>Word finding difficulties, also known as word retrieval problems or anomia, occur when children know what they want to say but can't access the right word at the right time. This can lead to frustration, overuse of filler words ("um," "that thing"), circumlocution, or giving up on communication attempts. These challenges can impact academic performance, social interactions, and confidence in speaking. Word finding therapy helps children develop strategies to retrieve words more effectively and communicate their ideas successfully even when retrieval is difficult.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('wordFinding', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="wordFinding-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

function populateStutteringCurriculum() {
    const page = document.getElementById('stuttering');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.stuttering;
    let html = `
        <h2>Stuttering Curriculum</h2>
        <p>Stuttering is a fluency disorder characterized by disruptions in the forward flow of speech. These disruptions may include repetitions of sounds, syllables, or words; prolongations of sounds; or blocks where no sound comes out. Many people who stutter also develop secondary behaviors like eye blinking or head movements as they try to "push through" moments of stuttering. Stuttering therapy focuses on reducing the impact of stuttering on communication and life participation, building confidence, and developing strategies for easier, more comfortable speech production. The goal is not necessarily to eliminate all disfluencies but to help individuals communicate effectively and confidently.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('stuttering', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="stuttering-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

function populateClutteringCurriculum() {
    const page = document.getElementById('cluttering');
    if (!page || !window.additionalCurriculumData) return;
    
    const curriculum = window.additionalCurriculumData.cluttering;
    let html = `
        <h2>Cluttering Curriculum</h2>
        <p>Cluttering is a fluency disorder characterized by a rapid and/or irregular speech rate that results in breakdowns in speech clarity and fluency. People who clutter may speak very quickly, omit syllables, have irregular pauses, or produce bursts of speech that are difficult to understand. Unlike stuttering, individuals who clutter often have limited awareness of their speech differences. Cluttering can co-occur with other conditions like ADHD or language disorders. Therapy focuses on increasing awareness, controlling speech rate, improving articulation, and organizing language for clearer communication.</p>
        <p>Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.</p>
        <div class="level-selection">
    `;
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('cluttering', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    levels.forEach(levelId => {
        const level = curriculum[levelId];
        html += `
            <div id="cluttering-${levelId}" class="expandable-section">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

window.curriculumData = {
    earlyInteractions: earlyInteractionsCurriculum,
    analyticLanguage: analyticLanguageCurriculum,
    gestaltLanguage: gestaltLanguageCurriculum,
    aac: aacCurriculum,
    articulation: articulationCurriculum,
    phonology: phonologyCurriculum,
    motorSpeech: motorSpeechCurriculum,
    mumbling: mumblingCurriculum,
    followingDirections: followingDirectionsCurriculum,
    askingAnswering: askingAnsweringCurriculum,
    sequencing: sequencingCurriculum
    // Add other curriculums here
};