const ProjectsInfo = {
    headings: {
        projects: {
            title: "Projects",
            description: "A collection of projects & experiences"
        },
        webMobile: {
            title: "Web & Mobile",
            description: "Web/Mobile Development",
            order: ['huddle', 'blitz', 'munkee', 'vcuts'],
            link: 'web-mobile'
        },
        ds: {
            title: "Data Science",
            link: 'data-science',
            description: "Projects coming soon",
            order: []
        },
        experience: {
            title: "Experience",
            description: "Internships, Design Teams, Clubs",
            order: ['opentext', 'freelance', 'canadian-tire'],
            link: 'experience'
        },
        hackathons: {
            title: "Hackathons",
            description: "Projects built during hackathons",
            order: ['airdrums', 'ryse', 'moodify'],
            link: 'hackathons'
        },
        order: ['experience', 'web-mobile', 'data-science', 'hackathons']
    },
    ryse: {
        name: 'Ryse',
        description: 'Networking application for ex-criminals',
        technologies: 'JavaScript (Node.js, Express.js), MongoDB, HTML, CSS, Bootstrap',
        about: "Coming Soon",       
        tag: "Hackathon",
        content: {
            summary: "Coming Soon"
        } 
    },
    ctc: {
        name: 'Canadian Tire',
        link: 'canadian-tire',
        description: 'Improving IT productivity',
        technologies: 'PowerShell, VMWare, Jira, Confluence',
        tag: "Internship",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon"
        }    
    },
    blitz: {
        name: 'Blitz',
        description: 'Redefining sports notifications',
        technologies: 'JavaScript (Node.js, Express.js), MongoDB, HTML, CSS, Bootstrap',
        tag: "Side Project",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon"
        }     
    },
    munkee: {
        name: 'Munkee',
        description: 'Online multiplayer game',
        technologies: 'JavaScript (Node.js, Express.js, Socket.IO), MongoDB, HTML, CSS, Bootstrap',
        tag: "Side Project",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon"
        }     
    },
    moodify: {
        name: 'Moodify',
        description: 'Adding AI to the job search',
        technologies: 'Swift, Xcode, Objective-C, IBM Watson API',
        tag: "Hackathon",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon"
        } 
    },
    vcuts: {
        name: 'VCuts',
        description: 'Freelance barber website',
        technologies: 'JavaScript (Angular 2+, Node.js, jQuery), TypeScript, HTML, CSS, MongoDB, Amazon Web Services (AWS)',
        tag: "Freelance Project",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon"
        } 
    },
    opentext: {
        name: 'OpenText',
        description: 'Software Engineering',
        technologies: '',
        tag: "Internship",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon"
        }    
    },
    freelance: {
        name: 'Freelance',
        description: 'Personal Brand',
        technologies: '',
        tag: 'Freelance',
        about: 'Coming soon',
        content: {
            summary: "Coming Soon"
        }
    },
    huddle: {
        name:'Huddle',
        description: 'A new way to connect NFL fans',
        technologies: '',
        tag: "Side Project",
        about: "Coming Soon",
        date: "January 2019 - April 2019",
        content: {
            summary: "Huddle is a modern social media application that connects NFL fans while supporting local venues. The primary functionalities of Huddle are to allow fans to make picks on games, bet on games, and watch live games being streamed at local venues promoted by Huddle. This connects like-minded fans while promoting local restaurants/bars at the same time. ",
            technologies: 'React Native, Java (Spring), Maven, MySQL',
            problem: 'Talking sports is a huge topic of conversation that can connect anyone regardless of age, gender, or race. Likewise, they can begin in any setting, whether it\'s the office or the classroom. It is a concept that is very undermined, yet so powerful. We wanted to utilize the product of sports by coming up with a way to quantify its fan-fueled competitive aspect while selling it for what it really is, a social excitement.',
            solution: 'Our brainstorming initially began with the concept of bringing people together. We realized that fans don’t usually care about where they watch games, only who they were watching with and whether or not the game was on. This led us to the idea of promoting local venues. Local venues could advertise the games they were streaming on specific nights to connect fans while supporting their venue. This was a great start, however, there was still no real motivation for fans to use our application. To resolve this issue, we would have to deliver a motivational aspect to Huddle. We decided to use a system that would associate a  “rating” with each user. The rating would be based on the accuracy of the user’s picks. It inclines users to continue to use Huddle in order to broadcast their ability to make correct picks. This can be compared to Stack Overflow, where users feel the need to ask/answer questions to increase their Stack Overflow “reputation”.',
            delivery: 'During the creation of the project, I built all of the server-side capabilities while writing some JavaScript using the React-Native framework. My frontend tasks involved writing authentication views, HTTP requests, as well as some form logic. Having previously used both React and Swift, React Native’s lack of control was prevalent throughout the project. The UX was not very smooth and the framework was constantly throwing errors caused by NPM. Though this was the case, I can definitely see its potential if a web-based team was short of native developers. On the other hand, the Spring framework',
        }  
    },
    airdrums: {
        name:'AirDrums',
        description: 'Computer vision drum kit',
        technologies: '',
        tag: "Hackathon Winner",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon"
        } 
    }
}
export default ProjectsInfo;