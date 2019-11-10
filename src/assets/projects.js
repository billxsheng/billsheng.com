const projects = {
    headings: {
        projects: {
            title: "Projects",
            description: "A collection of projects & experiences"
        },
        webMobile: {
            title: "Side Projects",
            link: 'side-projects',
            description: "Learning & Innovation",
            order: ['shell-chatbot', 'huddle', 'blitz', 'munkee'],
        },
        ds: {
            title: "Data",
            link: 'data',
            description: "Designing Data-Intensive Applications",
            order: ['oubre-sa'],
        },
        experience: {
            title: "Experience",
            link: 'experience',
            description: "Internships, Design Teams, Clubs",
            order: ['lcbo-next', 'uwblueprint', 'opentext', 'freelance', 'ctc'],
        },
        hackathons: {
            title: "Hackathons",
            link: 'hackathons',
            description: "Projects built during hackathons",
            order: ['airdrums', 'ryse', 'moodify'],
        },
        order: ['experience', 'side-projects', 'data', 'hackathons'],
        projectOrder: ['experience/lcbo-next', 'experience/uwblueprint', 'experience/opentext', 'experience/freelance', 'experience/ctc', 'side-projects/shell-chatbot', 'side-projects/huddle', 'side-projects/blitz', 'side-projects/munkee', 'data/oubre-sentiment-analysis', 'hackathons/airdrums', 'hackathons/ryse', 'hackathons/moodify']
    },
    huddle: {
        name: 'Huddle',
        reference: 'side-projects/huddle',
        description: 'A new way to connect NFL fans',
        tag: "Side Project",
        about: "Coming Soon",
        date: "January 2019 - April 2019",
        content: {
            summary: "Huddle is a modern social media application that connects NFL fans while supporting local venues.",
            technology: 'React Native, Java (Spring), Maven, MySQL',
            problem: 'Professional sports is a product that connects people regardless of age, gender, or race. This can occur in any setting, whether it\'s the office or the classroom. It is a concept that is very undermined, yet so powerful. We wanted to utilize the product of sports by coming up with a way to quantify its fan-fueled competitive aspect while selling it for what it really is, a social event.',
            solution: 'Our brainstorming initially began with the concept of bringing people together. We realized that fans don’t prioritize where they watch games, only who they are watching with and whether or not the game is on. This led us to the idea of promoting local venues. Through Huddle, local venues could advertise the games they were streaming to increase business while connecting fans at the same time. A win-win situation. For the motivational aspect of Huddle, we decided to use a system that would associate a  “rating” with each user. The rating would be based on the accuracy of the user’s picks. It inclines users to continue to use Huddle in order to broadcast their ability to make picks correctly. This can be compared to Stack Overflow, where users ask/answer questions to increase their Stack Overflow “reputation”.',
        }
    },
    blitz: {
        name: 'Blitz',
        reference: 'side-projects/blitz',
        description: 'Redefining sports notifications',
        tag: "Side Project",
        about: "Coming Soon",
        content: {
            summary: "Blitz is a serverless notification service that sends real-time game updates to NFL fans through SMS text messages. From a web application, users can authenticate, specify their favorite team, and add their phone number. Whenever a game finishes, a Node JS server will run a complex algorithm that sends text message notifications to the appropriate users.",
            technology: "Node JS (Express JS, Passport JS), MongoDB, Mongoose, Twilio SMS Microservice, MySportsFeeds API. HTML/CSS, Postman",
            problem: "Digital media apps (ESPN, theScore) are great at keeping fans up to date on their favorite teams and players. The problem is that they heavily rely on internet connection. If a user does not have consistent access to the web, obtaining the final score of an important game could be a very frustrating process.",
            solution: "Sports notifications are different because users do not have to further view the content to know the context of the situation. Consider a notification similar to “John Smith commented on your post.” Users must open the application in order to know exactly what was said.  A sports notification as simple as  “Toronto wins 5-3.” contains all the information the user needs. No further action would be required. The solution I came up with utilized SMS texting. Texts are extremely accessible and possess all requirements necessary when passing an immutable piece of data. By incorporating several external API’s, I created a service that would send SMS notifications to users.",
        }
    },
    ryse: {
        name: 'Ryse',
        reference: 'hackathons/ryse',
        description: 'Networking application for ex-criminals',
        about: "Coming Soon",
        tag: "Hackathon",
        content: {
            summary: "Ryse is a web application that helps employ ex-criminals. Instead of a networking application that focuses on achievements (LinkedIn), Ryse zeroes in on personal development. Users can create an account and record personal reflections, skills, and experiences. Endorsements can also be given out by correctional officers, family and friends (similar to LinkedIn Recommendations). By showcasing personal progress, Ryse eliminates the associated negative stigma. This encourages businesses to give second-chances to well-deserved candidates, keeping them off the streets where they can potentially recommit the same crimes.",
            technology: "Node JS (Express JS, Passport JS), MongoDB, Mongoose, HTML/CSS, Postman"
        }
    },
    shellChatbot: {
        name: 'Shell Chatbot',
        reference: 'side-projects/shell-chatbot',
        description: 'A Tour of Go',
        tag: "Side Project",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon",
            technology: "Coming Soon"
        }
    },
    airdrums: {
        name: 'AirDrums',
        reference: 'hackathons/airdrums',
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
        reference: 'side-projects/munkee',
        description: 'Online multiplayer game',
        tag: "Side Project",
        about: "Coming Soon",
        content: {
            summary: "Munkee is a cross-platform multiplayer game that runs the classic game of pig. The game can be played locally on one computer or online through private game lobbies. When a player creates a game, a unique hexatridecimal game ID is created and saved to a NoSQL database. The player can then invite their friends by sharing the ID. My usage of web sockets allow for real-time games to be played. Being a fan of console-based sports game (2K, Madden, NHL), I have always been curious about how online matches took place. This inspired me to implement my own real-time matchmaking architecture.",
            technology: "Node JS (Express JS, Socket.IO), jQuery, Bootstrap, MongoDB, Mongoose, HTML/CSS, Heroku"
        }
    },
    moodify: {
        name: 'Moodify',
        reference: 'hackathons/moodify',
        description: 'Adding AI to the job search',
        tag: "Hackathon",
        about: "Coming Soon",
        content: {
            summary: "Moodify is an iOS application that helps students write professional letters. Users can upload a document where the IBM Watson Tone API determines how the text is portrayed. The app then gives suggestions on how to adjust the text based on tones the user prioritizes.",
            technology: "Swift, Objective C, XCode, IBM Watson API"
        }
    },
    oubre: {
        name: 'Oubre SA',
        reference: 'data/oubre-sentiment-analysis',
        description: 'A complete data platform',
        tag: "Data Project",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon",
            technology: "Coming Soon",
        }
    },
    ctc: {
        name: 'Canadian Tire',
        reference: 'experience/ctc',
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
        reference: 'experience/opentext',
        description: 'EIM Engineering',
        tag: "Internship",
        about: "Coming Soon",
        content: {
            position: "Software Developer",
            technology: "Java (Spring), Maven, Docker, JavaScript (Node JS, Angular 2+), TypeScript, MongoDB, HTML/CSS, Bulma, Git, Jira, Postman",
            evaluation: "Very Good (letter of reference available)"
        }
    },
    freelance: {
        name: 'Freelance',
        reference: 'experience/freelance',
        description: 'My personal brand',
        tag: 'Freelance',
        about: 'Coming soon',
        content: {
            position: "Founder/Engineer",
            technology: "JavaScript (Node JS, React JS, Angular 2+), TypeScript, MongoDB, MySQL, HTML/CSS, Bootstrap, jQuery, AWS, Git, Postman",
            summary: "Coming Soon"
        }
    },
    uwblueprint: {
        name: 'UW Blueprint',
        reference: 'experience/uwblueprint',
        description: 'Coming Soon',
        tag: 'Design Team',
        about: 'Coming soon',
        content: {
            position: "Software Developer",
            technology: "Coming Soon",
            summary: "Coming Soon"
        }
    },
    lcbonext: {
        name: 'LCBO | next',
        reference: 'experience/lcbo-next',
        description: 'Coming Soon',
        tag: 'Internship',
        about: 'Coming soon',
        content: {
            position: "Full Stack Developer",
            technology: "Coming Soon",
            summary: "Coming Soon"
        }
    }
}
export default projects;