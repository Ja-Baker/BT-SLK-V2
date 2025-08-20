// Curriculum page templates and data
const curriculumData = {
    earlyInteractions: {
        title: "Early Interactions Curriculum",
        description: "This curriculum will encourage the individual to engage, respond, and participate in social interactions. Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.",
        levels: [
            {
                id: "beginnerEI",
                title: "Beginner Level",
                subtitle: "Building Awareness and Engagement",
                ageRange: "(Ages: 9-15 months and beyond)",
                skills: ["Responding to Name", "Joint Attention", "Basic Turn Taking"],
                content: {
                    description: "At this level, the focus is on helping the child become more engaged in communication and interactions with others. Many children who struggle with communication may not yet respond to their name consistently or participate in shared activities. Therapy at this level uses play-based strategies to encourage engagement and increase responsiveness to social interactions.",
                    goal: "By the end of the reporting period, ____ will improve social awareness and engagement skills by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.",
                    rubric: [
                        {
                            score: 5,
                            title: "Emerging Mastery",
                            description: "Consistently responds to name, actively shares attention during play (e.g., looks between object and adult, points/showing), and initiates or participates in turn-taking activities with minimal support."
                        },
                        {
                            score: 4,
                            title: "Strong Progress",
                            description: "Responds to name in most settings; shares joint attention with adult support (e.g., follows gaze or pointing); participates in familiar turn-taking routines but may need reminders or prompts to stay engaged."
                        },
                        {
                            score: 3,
                            title: "Developing",
                            description: "Inconsistently responds to name; shows some awareness of shared activities but rarely shifts attention between people and objects; may imitate turn-taking actions but needs frequent support to participate."
                        },
                        {
                            score: 2,
                            title: "Emerging Skills",
                            description: "Rarely responds to name; joint attention is limited or absent (focuses only on object or person, not both); turn-taking occurs only with high levels of prompting and modeling."
                        },
                        {
                            score: 1,
                            title: "Limited/Not Yet Observed",
                            description: "Does not respond to name; no observable joint attention; does not engage in or attempt turn-taking activities even with adult modeling."
                        }
                    ],
                    activities: [
                        { id: "respondingToName", title: "Responding to Name" },
                        { id: "jointAttention", title: "Joint Attention and Turn Taking" }
                    ]
                }
            },
            {
                id: "intermediateEI",
                title: "Intermediate Level",
                subtitle: "Understanding and Responding to Communication",
                ageRange: "(Ages: 1-2 yrs and beyond)",
                skills: ["Following Basic Directions", "Answering Yes/No Questions", "Making a Choice Between two Options"],
                content: {
                    description: "At this stage, the child builds on their social engagement skills by learning to understand and respond to simple communication cues. They are learning how to follow directions and make choices, which allows for increased participation in their environment.",
                    goal: "By the end of the reporting period, ____ will improve social understanding and responding skills by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.",
                    rubric: [
                        {
                            score: 5,
                            title: "Emerging Mastery",
                            description: "Consistently follows common one-step directions in various settings, accurately answers yes/no questions to express preferences, and clearly makes choices between two options using words, gestures, or AAC."
                        },
                        {
                            score: 4,
                            title: "Strong Progress",
                            description: "Follows one-step directions with minimal support or cues, answers yes/no questions in familiar contexts, and makes choices between two options when prompted or offered in a structured setting."
                        },
                        {
                            score: 3,
                            title: "Developing",
                            description: "Follows simple directions inconsistently and/or only in familiar routines; shows emerging understanding of yes/no questions (e.g., sometimes nods, gestures, or gives unclear answers); can make a choice when given support or a model."
                        },
                        {
                            score: 2,
                            title: "Emerging Skills",
                            description: "Responds to directions only with frequent prompting or modeling; rarely responds to yes/no questions or choices without full assistance, or may repeat the question or last option given instead of responding"
                        },
                        {
                            score: 1,
                            title: "Limited/Not Yet Observed",
                            description: "Does not follow one-step directions, answer yes/no questions, or make choices between two presented options."
                        }
                    ],
                    activities: [
                        { id: "followingBasicDirections", title: "Following Basic Directions" },
                        { id: "answeringYesNo", title: "Answering Yes/No Questions" },
                        { id: "makingChoice", title: "Making a Choice Between Two Options" }
                    ]
                }
            },
            {
                id: "advancedEI",
                title: "Advanced Level",
                subtitle: "Expanding Social Participation and Interaction",
                ageRange: "(Ages: 1-3 yrs and beyond)",
                skills: ["Participating in Early Social Routines", "Increasing Interaction Length", "Answering Wh- Questions"],
                content: {
                    description: "At this level, the child strengthens social communication skills and builds the ability to participate in early social routines and engage in longer interactions. They learn to respond to a wider variety of questions and begin engaging in back-and-forth exchanges with more independence.",
                    goal: "By the end of the reporting period, ____ will improve social participation and interaction by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.",
                    rubric: [
                        {
                            score: 5,
                            title: "Emerging Mastery",
                            description: "Actively participates in familiar social routines with minimal prompting, maintains attention and engagement during multi-turn social interactions, and consistently responds to \"What,\" \"Where,\" and \"Who\" questions in familiar situations."
                        },
                        {
                            score: 4,
                            title: "Strong Progress",
                            description: "Joins in common social games and routines when prompted, stays engaged in short interactions with support, and responds accurately to some WH- questions with occasional prompts or cues."
                        },
                        {
                            score: 3,
                            title: "Developing",
                            description: "Occasionally participates in social routines with frequent support, briefly attends to back-and-forth interactions, and shows emerging understanding of WH- questions (may respond correctly in highly familiar contexts)."
                        },
                        {
                            score: 2,
                            title: "Emerging Skills",
                            description: "Rarely joins social routines, attention to interaction is fleeting, and WH- questions are typically unanswered or the question is repeated instead of answered."
                        },
                        {
                            score: 1,
                            title: "Limited/Not Yet Observed",
                            description: "Not yet participating in familiar social routines, minimal engagement in social exchanges, and no observable response to \"What,\" \"Where,\" or \"Who\" questions."
                        }
                    ],
                    activities: [
                        { id: "socialRoutines", title: "Participating in Early Social Routines" },
                        { id: "interactionLength", title: "Increase Interaction Length" },
                        { id: "whQuestions", title: "Respond to Wh- Questions" }
                    ]
                }
            }
        ]
    },
    analyticLanguage: {
        title: "Analytic Language Processor Curriculum (First Words)",
        description: "Analytic Language Processors (ALPs) are children who learn language one word at a time—starting with single words, gradually combining them into phrases and sentences as they develop. Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.",
        levels: [
            {
                id: "beginnerALP",
                title: "Beginner Level",
                subtitle: "Encouraging First Words",
                ageRange: "(Any Age)",
                skills: ["Modeling language in a way that supports language development", "Vocabulary-building activities"],
                content: {
                    description: "In this level, the focus is on creating an environment that encourages spontaneous word use by using short, simple, and engaging language models during play interactions. Caregivers and therapists will use shortened utterances, sign language, self-talk, parallel talk, expansions, and vocab-rich activities to expose the child to meaningful vocabulary in a natural, interactive way.",
                    goal: "By the end of the reporting period, _______ will spontaneously speak words to interact with others at least five times during a 10-minute play interaction on three consecutive data collection days.",
                    activities: [
                        { id: "encouragingFirstWords", title: "Encouraging First Words through Indirect Language Stimulation" }
                    ]
                }
            },
            {
                id: "intermediateALP",
                title: "Intermediate Level",
                subtitle: "Producing Early Word Shapes",
                ageRange: "(Ages: 1-3 yrs and beyond)",
                skills: ["Imitating Actions and Sound Effects", "Imitating and Producing CV, VC, and CVC Words (like \"no\", \"up\", and \"dog\")"],
                content: {
                    description: "This level focuses on helping the child produce clear, functional words by strengthening their ability to imitate sounds and words. If a child is not yet imitating speech, therapy begins with gross-motor and fine-motor imitation, then progresses to sound effects and speech sounds to build a foundation for verbal communication. Once the child can imitate sounds, they will practice consonant-vowel (CV), vowel-consonant (VC), and consonant-vowel-consonant (CVC) words, such as \"go,\" \"up,\" and \"dog.\"",
                    goal: "By the end of the report period, during a 10-minute activity, _________ will spontaneously produce at least 10 consonant-vowel (CV), vowel-consonant (VC), and consonant-vowel-consonant (CVC) words with verbal prompting (e.g. \"what do you need\") as needed (speech sound errors or replacements are acceptable as long as the sounds are attempted).",
                    activities: [
                        { id: "producingCVWords", title: "Producing CV, VC, and CVC Words for Functional Communication" }
                    ]
                }
            },
            {
                id: "advancedALP",
                title: "Advanced Level",
                subtitle: "Expanding Vocabulary and Combining Words",
                ageRange: "(Ages: 1.5-3 yrs and beyond)",
                skills: ["Building an Expressive Vocabulary of First 50 Words", "Producing 2-Word Utterances"],
                content: {
                    description: "At this level, the focus is on growing the child's vocabulary and moving from single words to two-word phrases for more functional communication.",
                    goal: "By the end of the reporting period, during a 10-minute interaction with an adult, ______ will produce five 2-word combinations, either in imitation or spontaneously produced, with models and prompts from the adult as needed.",
                    activities: [
                        { id: "buildingVocabulary", title: "Building an Expressive Vocabulary of First 50 Words" },
                        { id: "twoWordUtterances", title: "Producing 2-Word Utterances" }
                    ]
                }
            }
        ]
    },
    // Add more curriculum data as needed...
};

// Function to render curriculum page
function renderCurriculumPage(curriculumId) {
    const curriculum = curriculumData[curriculumId];
    if (!curriculum) return '';

    let html = `
        <h2>${curriculum.title}</h2>
        <p>${curriculum.description}</p>
        <div class="curriculum-levels">
    `;

    curriculum.levels.forEach(level => {
        html += `
            <div class="level-card">
                <div class="level-header" onclick="toggleLevel('${level.id}')">
                    <h3>${level.title}: ${level.subtitle}</h3>
                    <p class="age-range">${level.ageRange}</p>
                    <ul class="skills-preview">
                        ${level.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                    <button class="level-btn">Choose ${level.title}</button>
                </div>
                <div id="${level.id}" class="level-content" style="display: none;">
                    ${renderLevelContent(level)}
                </div>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

// Function to render level content
function renderLevelContent(level) {
    let html = `
        <div class="level-details">
            <p>${level.content.description}</p>
            
            <div class="sample-goal">
                <h4>Sample Goal:</h4>
                <p>${level.content.goal}</p>
            </div>
    `;

    // Add rubric if it exists
    if (level.content.rubric) {
        html += `
            <div class="rubric">
                <table class="rubric-table">
                    <thead>
                        <tr>
                            <th>Score</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        level.content.rubric.forEach(item => {
            html += `
                <tr>
                    <td class="score">${item.score} – ${item.title}</td>
                    <td>${item.description}</td>
                </tr>
            `;
        });
        
        html += `
                    </tbody>
                </table>
            </div>
        `;
    }

    // Add therapy activities
    html += `
        <div class="therapy-activities">
            <h4>Therapy Activities:</h4>
            <p>To make progress in this area, ${level.content.activities.length > 1 ? 'choose one or more of the suggested activities below' : 'use the suggested activities below'}:</p>
            <div class="activity-buttons">
    `;

    level.content.activities.forEach(activity => {
        html += `<button class="activity-btn" onclick="showSkill('${activity.id}')">${activity.title}</button>`;
    });

    html += `
            </div>
        </div>
    </div>
    `;

    return html;
}

// Function to toggle level content
function toggleLevel(levelId) {
    const levelContent = document.getElementById(levelId);
    const allLevelContents = document.querySelectorAll('.level-content');
    
    // Hide all other level contents
    allLevelContents.forEach(content => {
        if (content.id !== levelId) {
            content.style.display = 'none';
        }
    });
    
    // Toggle the selected level content
    if (levelContent) {
        levelContent.style.display = levelContent.style.display === 'none' ? 'block' : 'none';
    }
}

// Export functions
window.renderCurriculumPage = renderCurriculumPage;
window.toggleLevel = toggleLevel;