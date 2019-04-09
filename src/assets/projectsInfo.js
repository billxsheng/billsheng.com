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
        description: 'EIM Engineering',
        technologies: '',
        tag: "Internship",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon"
        }    
    },
    freelance: {
        name: 'Freelance',
        description: 'My personal brand',
        technologies: '',
        tag: 'Freelance',
        about: 'Coming soon',
        content: {
            summary: "Coming Soon"
        }
    },
    huddle: {
        name:'Huddle',
        description: 'A new way to connect fans',
        technologies: '',
        tag: "Project",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon"
        }  
    },
    airdrums: {
        name:'AirDrums',
        description: 'Computer vision drum kit',
        technologies: '',
        tag: "Hackathon",
        about: "Coming Soon",
        content: {
            summary: "Coming Soon"
        } 
    }
}
export default ProjectsInfo;