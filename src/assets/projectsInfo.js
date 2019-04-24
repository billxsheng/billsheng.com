const ProjectsInfo = {
    headings: {
        projects: {
            title: "Projects",
            description: "A collection of projects & experiences"
        },
        webMobile: {
            title: "Web & Mobile",
            description: "Web/Mobile Development",
            link: 'web-mobile'
        },
        ds: {
            title: "Data Science",
            link: 'data-science',
            description: "Projects coming soon",
        },
        experience: {
            title: "Experience",
            description: "Internships, Design Teams, Clubs",
            link: 'experience'
        },
        hackathons: {
            title: "Hackathons",
            description: "Projects built during hackathons",
            link: 'hackathons'
        },
        order: ['experience', 'web-mobile', 'data-science', 'hackathons']
    },
    huddle: {
        name:'Huddle',
        description: 'A new way to connect NFL fans',
        tag: "Side Project",
        about: "Coming Soon",
        date: "January 2019 - April 2019",
        content: {
            summary: "Huddle is a modern social media application that connects NFL fans while supporting local venues.",
            technology: 'React Native, Java (Spring), Maven, MySQL',
            problem: 'Professional sports is a product that can connect people regardless of age, gender, or race. This can occur in any setting, whether it\'s the office or the classroom. It is a concept that is very undermined, yet so powerful. We wanted to utilize the product of sports by coming up with a way to quantify its fan-fueled competitive aspect while selling it for what it really is, a social event.',
            solution: 'Our brainstorming initially began with the concept of bringing people together. We realized that fans don’t prioritize where they watch games, only who they are watching with and whether or not the game is on. This led us to the idea of promoting local venues. Through Huddle, local venues could advertise the games they were streaming to increase business while connecting fans at the same time. A win-win situation. For the motivational aspect of Huddle, we decided to use a system that would associate a  “rating” with each user. The rating would be based on the accuracy of the user’s picks. It inclines users to continue to use Huddle in order to broadcast their ability to make picks correctly. This can be compared to Stack Overflow, where users ask/answer questions to increase their Stack Overflow “reputation”.',
        }  
    },
    blitz: {
        name: 'Blitz',
        description: 'Redefining sports notifications',
        tag: "Side Project",
        about: "Coming Soon",
        content: {
            summary: "Blitz is a serverless notification service that sends real-time game updates to NFL fans through SMS text messages. From a web application, users can authenticate, specify their favorite team, and add their phone number. Whenever a game finishes, a Node JS server runs a complex algorithm that sends the custom text messages to the appropriate users.",
            technology: "Node JS (Express JS, Passport JS), MongoDB, Twilio SMS Microservice, MySportsFeeds API",
            problem: "Digital media apps (ESPN, theScore) are great at notifying fans about their favorite teams and players. The problem is that they heavily rely on the internet. If a user is on the go and does not have consistent access to the web, obtaining the final score of an important game could be a very frustrating process.",
            solution: "Sports notifications are different because users do not have to further view the content to know the context of the situation. Consider a notification similar to “John Smith commented on your post.” Users must open the application in order to know exactly what was said.  A sports notification as simple as  “Toronto wins 5-3.” contains all the information the user needs. No further action would be required. The solution I came up with utilized SMS texting. Texts are extremely accessible and possess all necessary requirements to pass a piece of data that would not have to be further examined. I created a service that would automatically notify users via SMS texts.",
        }     
    },
    ryse: {
        name: 'Ryse',
        description: 'Networking application for ex-criminals',
        about: "Coming Soon",       
        tag: "Hackathon",
        content: {
            summary: "Ryse is a web application that helps ex-criminals find employment. Instead of a networking application that focuses on achievements (LinkedIn), Ryse zeroes in on personal development. Users can create an account and record personal reflections, skills, and experiences. Endorsements can also be given out by correctional officers, family and friends (similar to LinkedIn Recommendations). By showcasing personal progress, Ryse eliminates the associated negative stigma. This encourages businesses to give second-chances to well-deserved candidates, keeping them off the streets where they can potentially recommit the same crimes.",
            technology: "HTML/CSS, Node JS (Express JS, Passport JS), MongoDB"
        } 
    },
    airdrums: {
        name:'AirDrums',
        description: 'Computer vision drum kit',
        tag: "Hackathon Winner",
        about: "Coming Soon",
        content: {
            summary: "AirDrums uses computer vision to mimic the standard drum set without the need for heavy and expensive equipment. Using OpenCV color detection, users can use whatever tools they wish as drum sticks. This project won the “Best Intel Hack” award at UofTHacks 2019.",
            technology: "Python (NumPy, OpenCV, MatPlotLib, PyGame, WinSound)"
        } 
    },
    munkee: {
        name: 'Munkee',
        description: 'Online multiplayer game',
        tag: "Side Project",
        about: "Coming Soon",
        content: {
            summary: "Munkee is a cross-platform multiplayer game that runs the classic dice game of pig. The game can be played locally on one computer or online through private game lobbies. When a player creates a game, a unique hexatridecimal game ID is created and saved to the database. The player can then invite their friends by sharing the ID. My usage of web sockets allow for real-time games to be played. Being a fan of console-based sports game (2K, Madden, NHL), I have always been curious about how online matches took place through the web. This inspired me to try implementing my own matchmaking architecture.",
            technology: "Node JS (Express JS, Socket.IO), jQuery, Bootstrap, MongoDB, Heroku"
        } 
    },
    moodify: {
        name: 'Moodify',
        description: 'Adding AI to the job search',
        tag: "Hackathon",
        about: "Coming Soon",
        content: {
            summary: "Moodify is an iOS application that helps students write professional letters.Users upload their document, where the IBM Watson Tone API analyzes how the text is portrayed. The app then gives suggestions on how to adjust the text based on tones the user prioritizes.",
            technology: "Swift, Objective C, XCode, IBM Watson API"
        } 
    },
    ctc: {
        name: 'Canadian Tire',
        link: 'canadian-tire',
        description: 'Improving IT productivity',
        tag: "Internship",
        about: "Coming Soon",
        content: {
            position: "Technical Specialist",
            technology: "PowerShell, Docker, VMWare, Confluence",
            evaluation: "Excellent"
        }    
    },
    opentext: {
        name: 'OpenText',
        description: 'EIM Engineering',
        tag: "Internship",
        about: "Coming Soon",
        content: {
            position: "Full Stack Developer",
            technology: "Java (Spring), Maven, Docker, JavaScript (Node JS, Angular 2+), TypeScript, MongoDB, HTML/CSS, Bulma, Git, Jira",
            evaluation: "Very Good (letter of reference available)"
        }    
    },
    freelance: {
        name: 'Freelance',
        description: 'My personal brand',
        tag: 'Freelance',
        about: 'Coming soon',
        content: {
            position: "Founder/Engineer",
            technology: "JavaScript (Node JS, React JS, Angular 2+), TypeScript, MongoDB, HTML/CSS, Bootstrap, jQuery, AWS, Git",
            summary: "Coming Soon"        
        }
    },
}
export default ProjectsInfo;