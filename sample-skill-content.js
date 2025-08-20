// Sample Content for Select Skill Pages
// This file contains actual therapy content for some of the most commonly used skill pages
// These replace the BT-8008 filler content with real, usable therapy materials

// Initialize sample content after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait for BT-8008 content to load first, then replace with sample content
    setTimeout(function() {
        replaceBT8008WithSampleContent();
    }, 100);
});

function replaceBT8008WithSampleContent() {
    // Replace select skill pages with sample content
    createJointAttentionPage();
    createSoundProductionPage();
    createYesNoQuestionsPage();
    createPluralsPage();
    createPhonologicalAwarenessPage();
    createIdentifyingEmotionsPage();
    createGreetingsPage();
    createOneStepDirectionsPage();
    createIdiomsPage();
    createPronounsPage();
    createEyeContactPage();
}

// Joint Attention Skills (Page 43) - Sample Content
function createJointAttentionPage() {
    const page = document.getElementById('jointAttention');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Joint Attention Skills</h2>
        <div class="skill-overview">
            <h3>Overview</h3>
            <p>Joint attention is the shared focus of two individuals on an object, person, or activity. It is a foundational skill for social communication and language development. Children with joint attention skills can share experiences, learn from others, and engage in meaningful social interactions.</p>
        </div>
        
        <div class="skill-goals">
            <h3>Sample Goals</h3>
            <div class="goal-box">
                <h4>Beginner Goal:</h4>
                <p>By the end of the reporting period, _________ will establish joint attention by looking at what a communication partner is looking at when the partner uses pointing and verbal cues (e.g., "Look at the ___!") in 8 out of 10 opportunities across three consecutive sessions.</p>
            </div>
            
            <div class="goal-box">
                <h4>Intermediate Goal:</h4>
                <p>By the end of the reporting period, _________ will initiate joint attention by spontaneously pointing to or showing objects of interest to a communication partner and looking back and forth between the object and partner in 7 out of 10 opportunities during play-based activities.</p>
            </div>
        </div>
        
        <div class="skill-activities">
            <h3>Therapy Activities</h3>
            
            <div class="activity-section">
                <h4>Following Joint Attention</h4>
                <ul>
                    <li><strong>Point and Look:</strong> Point to interesting objects around the room while saying "Look!" or "See that!" Practice having the child follow your point and gaze.</li>
                    <li><strong>Bubbles:</strong> Blow bubbles and point to them while saying "Look at the bubbles!" Encourage the child to look where you're pointing.</li>
                    <li><strong>Hidden Toys:</strong> Hide a preferred toy and point to its location while saying "There it is!" to practice following pointing gestures.</li>
                    <li><strong>Book Reading:</strong> While reading, point to pictures and wait for the child to look before continuing the story.</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Initiating Joint Attention</h4>
                <ul>
                    <li><strong>Exciting Events:</strong> Create opportunities for exciting things to happen (wind-up toys, musical toys) and model pointing and looking at the child to share the experience.</li>
                    <li><strong>Cause and Effect Toys:</strong> Use toys that create interesting effects (pop-up toys, jack-in-the-box) and encourage the child to look at you when something happens.</li>
                    <li><strong>Shared Experiences:</strong> During snack time, art activities, or outdoor play, create moments of shared attention and model looking back and forth between objects and people.</li>
                </ul>
            </div>
        </div>
        
        <div class="skill-resources">
            <h3>Materials Needed</h3>
            <ul>
                <li>Bubbles</li>
                <li>Wind-up toys</li>
                <li>Pop-up or cause-and-effect toys</li>
                <li>Colorful picture books</li>
                <li>Musical toys</li>
                <li>Preferred small toys for hiding games</li>
            </ul>
        </div>
        
        <div class="home-practice">
            <h3>Home Practice Ideas</h3>
            <ul>
                <li>Practice pointing out interesting things during daily routines (animals outside, airplanes, trucks)</li>
                <li>Read books together and point to pictures</li>
                <li>Play simple hiding games with toys</li>
                <li>Share excitement about preferred activities or foods</li>
            </ul>
        </div>
    `;
}

// Sound Production Skills (Page 57) - Sample Content  
function createSoundProductionPage() {
    const page = document.getElementById('soundProduction');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Sound Production Skills</h2>
        <div class="skill-overview">
            <h3>Overview</h3>
            <p>Sound production focuses on teaching the correct articulation of individual speech sounds. This foundational skill involves learning proper tongue, lip, and jaw placement to produce clear, accurate sounds that listeners can easily understand.</p>
        </div>
        
        <div class="skill-goals">
            <h3>Sample Goals</h3>
            <div class="goal-box">
                <h4>Production Goal:</h4>
                <p>By the end of the reporting period, _________ will correctly produce the target sound /s/ in isolation with appropriate tongue placement and airflow in 9 out of 10 trials across three consecutive therapy sessions.</p>
            </div>
        </div>
        
        <div class="skill-activities">
            <h3>Therapy Activities</h3>
            
            <div class="activity-section">
                <h4>Sound Awareness Activities</h4>
                <ul>
                    <li><strong>Sound Identification:</strong> Listen to the target sound in words and identify when it's correct vs. incorrect</li>
                    <li><strong>Mirror Work:</strong> Use a mirror to watch mouth movements while producing the sound</li>
                    <li><strong>Auditory Bombardment:</strong> Listen to lists of words containing the target sound</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Production Practice</h4>
                <ul>
                    <li><strong>Placement Cues:</strong> Use tactile and visual cues to teach correct tongue/lip placement</li>
                    <li><strong>Sound Imitation:</strong> Model the sound and have child imitate immediately</li>
                    <li><strong>Sustained Production:</strong> Hold the sound for 3-5 seconds to establish motor pattern</li>
                    <li><strong>Rapid Trials:</strong> Practice the sound 10-20 times in succession for motor learning</li>
                </ul>
            </div>
        </div>
        
        <div class="skill-resources">
            <h3>Materials Needed</h3>
            <ul>
                <li>Hand mirror</li>
                <li>Flashcards with target sound words</li>
                <li>Tongue depressors for placement cues</li>
                <li>Audio recording device for feedback</li>
            </ul>
        </div>
    `;
}

// Yes/No Questions Skills (Page 95) - Sample Content
function createYesNoQuestionsPage() {
    const page = document.getElementById('yesNoQuestions');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Yes/No Questions Skills</h2>
        <div class="skill-overview">
            <h3>Overview</h3>
            <p>Yes/No questions are fundamental for communication and comprehension. These questions require understanding of concepts, factual knowledge, and the ability to provide appropriate binary responses. Mastering yes/no questions builds the foundation for more complex question types.</p>
        </div>
        
        <div class="skill-goals">
            <h3>Sample Goals</h3>
            <div class="goal-box">
                <h4>Comprehension Goal:</h4>
                <p>By the end of the reporting period, _________ will correctly respond to yes/no questions about familiar objects, people, and activities with 85% accuracy across three consecutive sessions.</p>
            </div>
            
            <div class="goal-box">
                <h4>Formulation Goal:</h4>
                <p>By the end of the reporting period, _________ will independently ask yes/no questions to obtain information during structured activities in 8 out of 10 opportunities.</p>
            </div>
        </div>
        
        <div class="skill-activities">
            <h3>Therapy Activities</h3>
            
            <div class="activity-section">
                <h4>Answering Yes/No Questions</h4>
                <ul>
                    <li><strong>Object Identification:</strong> "Is this a ball?" (while holding different objects)</li>
                    <li><strong>Personal Information:</strong> "Is your name _____?" "Do you like pizza?"</li>
                    <li><strong>Function Questions:</strong> "Do you eat soup with a fork?" "Do cars fly?"</li>
                    <li><strong>Category Questions:</strong> "Is a dog an animal?" "Is a banana a fruit?"</li>
                    <li><strong>Picture Questions:</strong> Show pictures and ask "Is the boy running?" "Is it raining?"</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Asking Yes/No Questions</h4>
                <ul>
                    <li><strong>Guessing Games:</strong> "Is it red?" "Is it big?" "Can you eat it?"</li>
                    <li><strong>Mystery Box:</strong> Feel items in a box and ask yes/no questions to identify</li>
                    <li><strong>20 Questions:</strong> Think of an animal/object and ask yes/no questions to guess</li>
                    <li><strong>Would You Rather:</strong> "Would you rather have ice cream?" "Do you want to play with blocks?"</li>
                </ul>
            </div>
        </div>
        
        <div class="skill-resources">
            <h3>Materials Needed</h3>
            <ul>
                <li>Various familiar objects</li>
                <li>Picture cards of actions and objects</li>
                <li>Mystery box with different textured items</li>
                <li>Visual yes/no cards or symbols</li>
            </ul>
        </div>
        
        <div class="home-practice">
            <h3>Home Practice Ideas</h3>
            <ul>
                <li>Ask yes/no questions during daily routines: "Are you hungry?" "Is it time for bed?"</li>
                <li>Play simple guessing games with toys or family members</li>
                <li>Ask questions about family photos: "Is daddy in this picture?"</li>
                <li>Use yes/no questions during story time</li>
            </ul>
        </div>
    `;
}

// Plurals Skills (Page 99) - Sample Content
function createPluralsPage() {
    const page = document.getElementById('plurals');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Plurals Skills</h2>
        <div class="skill-overview">
            <h3>Overview</h3>
            <p>Plural formation is a fundamental grammatical skill that involves adding morphological markers to indicate more than one item. This includes regular plurals (-s, -es) and irregular plurals (mice, children, feet). Mastering plurals improves grammatical accuracy and communication clarity.</p>
        </div>
        
        <div class="skill-goals">
            <h3>Sample Goals</h3>
            <div class="goal-box">
                <h4>Regular Plurals Goal:</h4>
                <p>By the end of the reporting period, _________ will correctly produce regular plural forms by adding -s or -es to nouns in structured activities with 80% accuracy across three consecutive sessions.</p>
            </div>
            
            <div class="goal-box">
                <h4>Irregular Plurals Goal:</h4>
                <p>By the end of the reporting period, _________ will correctly use 10 common irregular plural forms (feet, mice, children, teeth, etc.) in sentences with 75% accuracy.</p>
            </div>
        </div>
        
        <div class="skill-activities">
            <h3>Therapy Activities</h3>
            
            <div class="activity-section">
                <h4>Regular Plurals (-s, -es)</h4>
                <ul>
                    <li><strong>Counting Objects:</strong> Use real objects (blocks, crayons, books) and count "one block, two blocks, three blocks"</li>
                    <li><strong>Picture Description:</strong> Show pictures with multiple items and describe "I see dogs" or "There are cats"</li>
                    <li><strong>Sorting Games:</strong> Sort items into "one" and "more than one" categories</li>
                    <li><strong>Fill-in Activities:</strong> "I have one car. Now I have two ____" (cars)</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Irregular Plurals</h4>
                <ul>
                    <li><strong>Memory Games:</strong> Match singular and plural cards (foot/feet, tooth/teeth)</li>
                    <li><strong>Story Activities:</strong> Read books featuring irregular plurals and highlight them</li>
                    <li><strong>Body Parts:</strong> Practice with body parts - "one foot, two feet" "one tooth, many teeth"</li>
                    <li><strong>Animal Plurals:</strong> Practice with animals - "one mouse, three mice" "one goose, two geese"</li>
                </ul>
            </div>
        </div>
        
        <div class="skill-resources">
            <h3>Materials Needed</h3>
            <ul>
                <li>Sets of identical objects for counting</li>
                <li>Picture cards with singular and plural items</li>
                <li>Books with plural examples</li>
                <li>Sorting containers or boxes</li>
            </ul>
        </div>
        
        <div class="home-practice">
            <h3>Home Practice Ideas</h3>
            <ul>
                <li>Count items during daily routines: "two shoes, three cookies"</li>
                <li>Practice with toys: "Where are your cars? I see five cars!"</li>
                <li>Use plurals during mealtime: "Do you want more crackers?"</li>
                <li>Point out body parts: "Wash your hands!" "Brush your teeth!"</li>
            </ul>
        </div>
    `;
}

// Phonological Awareness Skills (Page 107) - Sample Content
function createPhonologicalAwarenessPage() {
    const page = document.getElementById('phonemicAwareness');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Phonological Awareness Skills</h2>
        <div class="skill-overview">
            <h3>Overview</h3>
            <p>Phonological awareness is the ability to recognize and manipulate the sound structure of spoken language. This includes skills like rhyming, syllable segmentation, and phoneme manipulation. These skills are crucial foundations for reading and spelling development.</p>
        </div>
        
        <div class="skill-goals">
            <h3>Sample Goals</h3>
            <div class="goal-box">
                <h4>Rhyming Goal:</h4>
                <p>By the end of the reporting period, _________ will identify words that rhyme by selecting the rhyming word from a choice of three options with 80% accuracy across three consecutive sessions.</p>
            </div>
            
            <div class="goal-box">
                <h4>Syllable Segmentation Goal:</h4>
                <p>By the end of the reporting period, _________ will segment 2-3 syllable words by clapping or tapping for each syllable with 85% accuracy.</p>
            </div>
        </div>
        
        <div class="skill-activities">
            <h3>Therapy Activities</h3>
            
            <div class="activity-section">
                <h4>Rhyming Activities</h4>
                <ul>
                    <li><strong>Rhyming Books:</strong> Read books with strong rhyming patterns and emphasize rhyming words</li>
                    <li><strong>Rhyme Time:</strong> Generate words that rhyme with target words (cat: bat, hat, sat)</li>
                    <li><strong>Odd One Out:</strong> Present 3 words, identify which one doesn't rhyme (cat, bat, dog)</li>
                    <li><strong>Nursery Rhymes:</strong> Sing familiar nursery rhymes and emphasize rhyming patterns</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Syllable Awareness</h4>
                <ul>
                    <li><strong>Name Clapping:</strong> Clap syllables in names (Sarah = Sa-rah, Michael = Mi-chael)</li>
                    <li><strong>Robot Talk:</strong> Say words in a "robot voice" with pauses between syllables</li>
                    <li><strong>Syllable Sorting:</strong> Sort picture cards by number of syllables (1, 2, or 3+)</li>
                    <li><strong>Musical Syllables:</strong> Use instruments to tap out syllables in words</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Sound Manipulation</h4>
                <ul>
                    <li><strong>First Sound Games:</strong> Identify the first sound in words (/c/ in "cat")</li>
                    <li><strong>Sound Substitution:</strong> Change the first sound: "cat" becomes "bat" when we change /c/ to /b/</li>
                    <li><strong>Elkonin Boxes:</strong> Use boxes to represent each sound in simple words</li>
                    <li><strong>I Spy Sounds:</strong> "I spy something that starts with /b/" (ball, book, etc.)</li>
                </ul>
            </div>
        </div>
        
        <div class="skill-resources">
            <h3>Materials Needed</h3>
            <ul>
                <li>Rhyming books and nursery rhyme collections</li>
                <li>Picture cards for syllable sorting</li>
                <li>Musical instruments for rhythm activities</li>
                <li>Elkonin boxes or sound manipulation boards</li>
            </ul>
        </div>
    `;
}

// Identifying Emotions Skills (Page 135) - Sample Content
function createIdentifyingEmotionsPage() {
    const page = document.getElementById('identifyingEmotions');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Identifying Emotions Skills</h2>
        <div class="skill-overview">
            <h3>Overview</h3>
            <p>Emotion identification is the ability to recognize and label emotions in oneself and others through facial expressions, body language, tone of voice, and situational context. This foundational skill supports emotional regulation, social communication, and relationship building.</p>
        </div>
        
        <div class="skill-goals">
            <h3>Sample Goals</h3>
            <div class="goal-box">
                <h4>Basic Emotions Goal:</h4>
                <p>By the end of the reporting period, _________ will correctly identify the four basic emotions (happy, sad, angry, scared) in pictures, stories, and real-life situations with 80% accuracy across three consecutive sessions.</p>
            </div>
            
            <div class="goal-box">
                <h4>Self-Awareness Goal:</h4>
                <p>By the end of the reporting period, _________ will identify their own emotions in the moment by labeling how they feel using emotion words with adult prompting in 7 out of 10 opportunities.</p>
            </div>
        </div>
        
        <div class="skill-activities">
            <h3>Therapy Activities</h3>
            
            <div class="activity-section">
                <h4>Emotion Recognition Activities</h4>
                <ul>
                    <li><strong>Emotion Cards:</strong> Show photos/drawings of facial expressions and identify the emotion</li>
                    <li><strong>Mirror Practice:</strong> Practice making different emotion faces in a mirror</li>
                    <li><strong>Emotion Stories:</strong> Read books about emotions and identify how characters feel</li>
                    <li><strong>Feeling Faces:</strong> Draw or use emoji to represent different emotions</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Situational Emotion Activities</h4>
                <ul>
                    <li><strong>What Would You Feel:</strong> Present scenarios and discuss likely emotions ("Your friend took your toy. How would you feel?")</li>
                    <li><strong>Emotion Charades:</strong> Act out emotions and guess what feeling is being shown</li>
                    <li><strong>Video Analysis:</strong> Watch short clips and identify emotions shown by characters</li>
                    <li><strong>Photo Analysis:</strong> Look at real photos of people and identify their emotions</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Self-Awareness Activities</h4>
                <ul>
                    <li><strong>Emotion Check-ins:</strong> Regular "How are you feeling right now?" discussions</li>
                    <li><strong>Feeling Thermometer:</strong> Use a visual scale to rate intensity of emotions</li>
                    <li><strong>Emotion Journal:</strong> Draw or write about daily emotions and their causes</li>
                    <li><strong>Body Clues:</strong> Identify physical sensations that accompany emotions</li>
                </ul>
            </div>
        </div>
        
        <div class="skill-resources">
            <h3>Materials Needed</h3>
            <ul>
                <li>Emotion picture cards or photos</li>
                <li>Mirror for facial expression practice</li>
                <li>Books about emotions</li>
                <li>Feeling thermometer visual aid</li>
                <li>Art supplies for emotion journaling</li>
            </ul>
        </div>
        
        <div class="home-practice">
            <h3>Home Practice Ideas</h3>
            <ul>
                <li>Point out emotions in family members: "Daddy looks tired" "Sister seems excited"</li>
                <li>Discuss emotions during TV shows and movies</li>
                <li>Practice emotion faces during play time</li>
                <li>Use emotion words to describe daily experiences</li>
            </ul>
        </div>
    `;
}

// Greetings Skills (Page 141) - Sample Content  
function createGreetingsPage() {
    const page = document.getElementById('greetings');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Greetings Skills</h2>
        <div class="skill-overview">
            <h3>Overview</h3>
            <p>Greetings are essential social communication skills that initiate positive interactions with others. Appropriate greetings help establish rapport, show respect, and create opportunities for further communication. This includes verbal greetings, eye contact, and appropriate physical gestures.</p>
        </div>
        
        <div class="skill-goals">
            <h3>Sample Goals</h3>
            <div class="goal-box">
                <h4>Greeting Others Goal:</h4>
                <p>By the end of the reporting period, _________ will independently greet familiar adults and peers using appropriate verbal greetings ("Hi," "Hello," "Good morning") with eye contact in 8 out of 10 opportunities across different settings.</p>
            </div>
            
            <div class="goal-box">
                <h4>Responding to Greetings Goal:</h4>
                <p>By the end of the reporting period, _________ will respond to greetings from others within 3 seconds using verbal or gestural responses with 90% consistency.</p>
            </div>
        </div>
        
        <div class="skill-activities">
            <h3>Therapy Activities</h3>
            
            <div class="activity-section">
                <h4>Basic Greeting Practice</h4>
                <ul>
                    <li><strong>Hello/Goodbye Songs:</strong> Use familiar songs to practice greetings at the start and end of sessions</li>
                    <li><strong>Puppet Greetings:</strong> Use puppets to model and practice greeting interactions</li>
                    <li><strong>Mirror Practice:</strong> Practice eye contact and facial expressions while greeting</li>
                    <li><strong>Role Play:</strong> Practice greetings in different scenarios (arriving at school, meeting a friend)</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Context-Specific Greetings</h4>
                <ul>
                    <li><strong>Time-Based Greetings:</strong> Practice "Good morning," "Good afternoon," "Good night" based on time of day</li>
                    <li><strong>Relationship-Based:</strong> Different greetings for family vs. teachers vs. peers</li>
                    <li><strong>Cultural Greetings:</strong> Learn greetings from different cultures and when to use them</li>
                    <li><strong>Phone Greetings:</strong> Practice appropriate phone greetings and responses</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Non-Verbal Components</h4>
                <ul>
                    <li><strong>Eye Contact Practice:</strong> Games that encourage looking at people while greeting</li>
                    <li><strong>Waving Practice:</strong> When and how to wave as part of greetings</li>
                    <li><strong>Personal Space:</strong> Appropriate distance when greeting different people</li>
                    <li><strong>Facial Expressions:</strong> Matching friendly facial expressions with verbal greetings</li>
                </ul>
            </div>
        </div>
        
        <div class="skill-resources">
            <h3>Materials Needed</h3>
            <ul>
                <li>Puppets or stuffed animals for practice</li>
                <li>Pictures of different greeting scenarios</li>
                <li>Mirror for self-monitoring</li>
                <li>Greeting songs or videos</li>
            </ul>
        </div>
        
        <div class="home-practice">
            <h3>Home Practice Ideas</h3>
            <ul>
                <li>Practice greetings when family members come home</li>
                <li>Greet neighbors, mail carriers, and community helpers</li>
                <li>Practice phone greetings with family members</li>
                <li>Use greetings when entering stores or restaurants</li>
                <li>Practice morning and bedtime greetings as part of routines</li>
            </ul>
        </div>
    `;
}

// One-Step Directions Skills (Page 78) - Sample Content
function createOneStepDirectionsPage() {
    const page = document.getElementById('oneStepDirections');
    if (!page) return;
    
    page.innerHTML = `
        <h2>One-Step Directions Skills</h2>
        <div class="skill-overview">
            <h3>Overview</h3>
            <p>Following one-step directions is a foundational language skill that involves understanding and executing single commands or instructions. This skill requires listening comprehension, processing of vocabulary, and motor planning to carry out the requested action.</p>
        </div>
        
        <div class="skill-goals">
            <h3>Sample Goals</h3>
            <div class="goal-box">
                <h4>Basic Directions Goal:</h4>
                <p>By the end of the reporting period, _________ will follow one-step directions containing familiar action words (sit, stand, walk, stop, come, go) in 8 out of 10 opportunities across three consecutive sessions.</p>
            </div>
            
            <div class="goal-box">
                <h4>Functional Directions Goal:</h4>
                <p>By the end of the reporting period, _________ will follow one-step directions during daily routines and classroom activities with 85% accuracy without requiring repetition or visual cues.</p>
            </div>
        </div>
        
        <div class="skill-activities">
            <h3>Therapy Activities</h3>
            
            <div class="activity-section">
                <h4>Basic Action Directions</h4>
                <ul>
                    <li><strong>Simon Says:</strong> Use the classic game to practice basic movement directions like "Simon says touch your nose" or "Simon says clap your hands"</li>
                    <li><strong>Action Cards:</strong> Show picture cards and give matching directions "Touch the ball," "Pick up the book," "Point to the chair"</li>
                    <li><strong>Gross Motor Directions:</strong> Practice with whole body movements "Stand up," "Sit down," "Walk to the door," "Jump twice"</li>
                    <li><strong>Object Manipulation:</strong> Use real objects and give directions "Open the box," "Put the toy away," "Hold the cup"</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Functional Daily Directions</h4>
                <ul>
                    <li><strong>Snack Time Directions:</strong> "Get your napkin," "Wash your hands," "Sit at the table," "Throw away your trash"</li>
                    <li><strong>Transition Directions:</strong> "Line up," "Get your backpack," "Come to circle time," "Put on your coat"</li>
                    <li><strong>Art/Craft Directions:</strong> "Get the glue," "Cut the paper," "Color the circle," "Put away the crayons"</li>
                    <li><strong>Cleanup Directions:</strong> "Put the blocks away," "Close the book," "Turn off the light," "Push in your chair"</li>
                </ul>
            </div>
        </div>
        
        <div class="skill-resources">
            <h3>Materials Needed</h3>
            <ul>
                <li>Familiar objects and toys</li>
                <li>Action picture cards</li>
                <li>Classroom/therapy room materials</li>
                <li>Simple props for activities</li>
            </ul>
        </div>
        
        <div class="home-practice">
            <h3>Home Practice Ideas</h3>
            <ul>
                <li>Give simple directions during daily routines: "Get your shoes," "Brush your teeth"</li>
                <li>Practice during mealtime: "Sit down," "Use your fork," "Drink your milk"</li>
                <li>Use directions during play: "Roll the ball," "Stack the blocks," "Hug the teddy bear"</li>
                <li>Include directions in bedtime routine: "Get your pajamas," "Climb into bed"</li>
            </ul>
        </div>
    `;
}

// Idioms Skills (Page 85) - Sample Content
function createIdiomsPage() {
    const page = document.getElementById('idioms');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Idioms Skills</h2>
        <div class="skill-overview">
            <h3>Overview</h3>
            <p>Idioms are expressions that have meanings different from the literal interpretation of the individual words. Understanding idioms requires abstract thinking and cultural knowledge. This skill is essential for comprehending figurative language in academic texts, social conversations, and media.</p>
        </div>
        
        <div class="skill-goals">
            <h3>Sample Goals</h3>
            <div class="goal-box">
                <h4>Recognition Goal:</h4>
                <p>By the end of the reporting period, _________ will correctly identify the meaning of 15 common idioms when presented in context with 80% accuracy across three consecutive sessions.</p>
            </div>
            
            <div class="goal-box">
                <h4>Usage Goal:</h4>
                <p>By the end of the reporting period, _________ will appropriately use 10 familiar idioms in conversational speech or written expression with 70% accuracy.</p>
            </div>
        </div>
        
        <div class="skill-activities">
            <h3>Therapy Activities</h3>
            
            <div class="activity-section">
                <h4>Common Idioms Practice</h4>
                <ul>
                    <li><strong>Picture Matching:</strong> Match idioms to pictures showing their figurative meanings ("It's raining cats and dogs" with heavy rain picture)</li>
                    <li><strong>Story Context:</strong> Read short stories containing idioms and discuss their meanings in context</li>
                    <li><strong>Idiom of the Day:</strong> Introduce one new idiom daily with examples and practice opportunities</li>
                    <li><strong>Acting It Out:</strong> Have students act out both literal and figurative meanings of idioms</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Beginning Idioms List</h4>
                <ul>
                    <li><strong>Time:</strong> "Time flies" (time goes by quickly), "Better late than never"</li>
                    <li><strong>Animals:</strong> "Don't count your chickens before they hatch," "Let the cat out of the bag"</li>
                    <li><strong>Body Parts:</strong> "Break a leg" (good luck), "Give me a hand" (help me)</li>
                    <li><strong>Weather:</strong> "It's raining cats and dogs," "Every cloud has a silver lining"</li>
                    <li><strong>Food:</strong> "That's a piece of cake" (easy), "Don't cry over spilled milk"</li>
                </ul>
            </div>
        </div>
        
        <div class="skill-resources">
            <h3>Materials Needed</h3>
            <ul>
                <li>Idiom picture cards with literal and figurative meanings</li>
                <li>Books and stories containing common idioms</li>
                <li>Idiom worksheets and activities</li>
                <li>Video clips or examples from media</li>
            </ul>
        </div>
        
        <div class="home-practice">
            <h3>Home Practice Ideas</h3>
            <ul>
                <li>Point out idioms when reading books together</li>
                <li>Use family-friendly idioms during daily conversation</li>
                <li>Watch age-appropriate shows and discuss any idioms used</li>
                <li>Create an "idiom journal" to collect new expressions</li>
            </ul>
        </div>
    `;
}

// Pronouns Skills (Page 101) - Sample Content
function createPronounsPage() {
    const page = document.getElementById('pronouns');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Pronouns Skills</h2>
        <div class="skill-overview">
            <h3>Overview</h3>
            <p>Pronouns are words that replace nouns in sentences (he, she, it, they, we, you, I, me, him, her, us, them). Correct pronoun use requires understanding of gender, number, case, and reference. This skill improves sentence variety and grammatical accuracy in both spoken and written language.</p>
        </div>
        
        <div class="skill-goals">
            <h3>Sample Goals</h3>
            <div class="goal-box">
                <h4>Subject Pronouns Goal:</h4>
                <p>By the end of the reporting period, _________ will correctly use subject pronouns (I, you, he, she, it, we, they) in sentences with 85% accuracy during structured activities.</p>
            </div>
            
            <div class="goal-box">
                <h4>Object Pronouns Goal:</h4>
                <p>By the end of the reporting period, _________ will correctly use object pronouns (me, you, him, her, it, us, them) in sentences with 80% accuracy during conversational speech.</p>
            </div>
        </div>
        
        <div class="skill-activities">
            <h3>Therapy Activities</h3>
            
            <div class="activity-section">
                <h4>Subject Pronouns (I, you, he, she, it, we, they)</h4>
                <ul>
                    <li><strong>Picture Description:</strong> Show pictures of people doing activities and practice "He is running," "She is eating," "They are playing"</li>
                    <li><strong>Substitution Practice:</strong> Start with names, then replace with pronouns "Sarah is happy" → "She is happy"</li>
                    <li><strong>Personal Pronouns:</strong> Practice first person "I am..." and second person "You are..." during daily activities</li>
                    <li><strong>Group Activities:</strong> Practice plural pronouns "We are sitting," "They are working" during group time</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Object Pronouns (me, you, him, her, it, us, them)</h4>
                <ul>
                    <li><strong>Action Games:</strong> "Give it to me," "Show him the ball," "Tell her your name," "Help us clean up"</li>
                    <li><strong>Story Retelling:</strong> Practice using object pronouns when retelling familiar stories</li>
                    <li><strong>Role Play:</strong> Act out scenarios requiring object pronouns "The teacher is calling them"</li>
                    <li><strong>Question Practice:</strong> "Who did you see?" "I saw him/her" "What did you do with it?"</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Possessive Pronouns (my, your, his, her, its, our, their)</h4>
                <ul>
                    <li><strong>Ownership Games:</strong> "This is my book," "That is your pencil," "These are their toys"</li>
                    <li><strong>Family Pictures:</strong> Practice with family photos "This is his mom," "That is her dad"</li>
                    <li><strong>Classroom Items:</strong> Identify ownership of school supplies and materials</li>
                </ul>
            </div>
        </div>
        
        <div class="skill-resources">
            <h3>Materials Needed</h3>
            <ul>
                <li>Picture cards showing people of different genders</li>
                <li>Family photos or pictures</li>
                <li>Classroom objects for ownership practice</li>
                <li>Pronoun reference charts</li>
            </ul>
        </div>
    `;
}

// Eye Contact Skills (Page 127) - Sample Content
function createEyeContactPage() {
    const page = document.getElementById('eyeContact');
    if (!page) return;
    
    page.innerHTML = `
        <h2>Eye Contact Skills</h2>
        <div class="skill-overview">
            <h3>Overview</h3>
            <p>Eye contact is a fundamental nonverbal communication skill that supports social connection, shows attention and respect, and helps individuals understand social cues. Appropriate eye contact varies by culture and context, but is generally important for successful social interactions and communication.</p>
        </div>
        
        <div class="skill-goals">
            <h3>Sample Goals</h3>
            <div class="goal-box">
                <h4>Basic Eye Contact Goal:</h4>
                <p>By the end of the reporting period, _________ will make brief eye contact (1-2 seconds) when greeting familiar adults in 7 out of 10 opportunities across three consecutive sessions.</p>
            </div>
            
            <div class="goal-box">
                <h4>Conversational Eye Contact Goal:</h4>
                <p>By the end of the reporting period, _________ will maintain appropriate eye contact during 3-5 turn conversations with peers, looking at the speaker when listening and at the listener when speaking, in 8 out of 10 opportunities.</p>
            </div>
        </div>
        
        <div class="skill-activities">
            <h3>Therapy Activities</h3>
            
            <div class="activity-section">
                <h4>Building Comfort with Eye Contact</h4>
                <ul>
                    <li><strong>Mirror Practice:</strong> Practice looking at self in mirror while talking or singing</li>
                    <li><strong>Looking at Foreheads:</strong> Teach looking at eyebrows or forehead as a comfortable alternative that appears like eye contact</li>
                    <li><strong>Peek-a-Boo Games:</strong> Use familiar games that naturally encourage looking at faces</li>
                    <li><strong>Favorite Person Practice:</strong> Start with people the child is most comfortable with</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Functional Eye Contact Practice</h4>
                <ul>
                    <li><strong>Greeting Practice:</strong> Practice brief eye contact during "hello" and "goodbye" interactions</li>
                    <li><strong>Requesting Activities:</strong> Encourage eye contact when asking for preferred items or activities</li>
                    <li><strong>Turn-Taking Games:</strong> Use board games or activities that naturally require looking at partners</li>
                    <li><strong>Story Time:</strong> Practice looking at the storyteller during reading activities</li>
                </ul>
            </div>
            
            <div class="activity-section">
                <h4>Understanding When Eye Contact is Important</h4>
                <ul>
                    <li><strong>Social Stories:</strong> Create stories about when and why we look at people</li>
                    <li><strong>Video Modeling:</strong> Watch examples of appropriate eye contact in different situations</li>
                    <li><strong>Role Playing:</strong> Practice different scenarios (talking to teachers vs. friends vs. family)</li>
                    <li><strong>Cultural Awareness:</strong> Discuss how eye contact expectations may vary in different settings</li>
                </ul>
            </div>
        </div>
        
        <div class="skill-resources">
            <h3>Materials Needed</h3>
            <ul>
                <li>Mirror for self-practice</li>
                <li>Preferred games and activities for turn-taking</li>
                <li>Social stories about eye contact</li>
                <li>Video examples of appropriate social interactions</li>
            </ul>
        </div>
        
        <div class="home-practice">
            <h3>Home Practice Ideas</h3>
            <ul>
                <li>Practice brief eye contact during daily greetings</li>
                <li>Encourage looking during preferred activities and games</li>
                <li>Model appropriate eye contact during family conversations</li>
                <li>Use gentle reminders without pressuring or forcing eye contact</li>
                <li>Celebrate small successes and progress</li>
            </ul>
        </div>
    `;
}

// Add CSS for the new content sections
const sampleContentStyles = `
    <style>
        .activity-section {
            background-color: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
        }
        
        .activity-section h4 {
            color: var(--blue);
            margin-top: 0;
            margin-bottom: 0.75rem;
        }
        
        .home-practice {
            background-color: #fff8e1;
            border: 1px solid #ffcc02;
            border-radius: 8px;
            padding: 1rem;
            margin-top: 1.5rem;
        }
        
        .home-practice h3 {
            color: var(--purple);
            margin-top: 0;
        }
        
        .skill-overview, .skill-goals, .skill-activities, .skill-resources {
            margin-bottom: 1.5rem;
        }
    </style>
`;

// Inject the additional styles
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const styleElement = document.createElement('div');
        styleElement.innerHTML = sampleContentStyles;
        document.head.appendChild(styleElement.firstElementChild);
    }, 150);
});