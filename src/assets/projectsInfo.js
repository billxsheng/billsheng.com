const ProjectsInfo = {
    headings: {
        projects: {
            title: "Projects",
            description: "A collection of projects & experiences"
        },
        webMobile: {
            title: "Web & Mobile",
            description: "Web/Mobile Development",
            order: ['blitz', 'munkee', 'vcuts'],
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
            order: ['opentext', 'canadian-tire'],
            link: 'experience'
        },
        hackathons: {
            title: "Hackathons",
            description: "Projects built during hackathons",
            order: ['ryse', 'moodify'],
            link: 'hackathons'
        },
        order: ['web-mobile', 'data-science', 'experience', 'hackathons']
    },
    ryse: {
        name: 'Ryse',
        description: 'Networking application for ex-criminals',
        technologies: 'JavaScript (Node.js, Express.js), MongoDB, HTML, CSS, Bootstrap',
        about: "Coming Soon",       
        tag: "Hackathon"

    },
    ctc: {
        name: 'Canadian Tire',
        link: 'canadian-tire',
        description: 'Improving IT productivity',
        technologies: 'PowerShell, VMWare, Jira, Confluence',
        tag: "Internship",
        about: "Coming Soon"    
    },
    blitz: {
        name: 'Blitz',
        description: 'Redefining sports notifications',
        technologies: 'JavaScript (Node.js, Express.js), MongoDB, HTML, CSS, Bootstrap',
        tag: "Side Project",
        about: "Coming Soon"    
    },
    munkee: {
        name: 'Munkee',
        description: 'Online multiplayer game',
        technologies: 'JavaScript (Node.js, Express.js, Socket.IO), MongoDB, HTML, CSS, Bootstrap',
        tag: "Side Project",
        about: "Coming Soon"    
    },
    moodify: {
        name: 'Moodify',
        description: 'Adding AI to the job search',
        technologies: 'Swift, Xcode, Objective-C, IBM Watson API',
        tag: "Hackathon",
        about: "Coming Soon"
    },
    vcuts: {
        name: 'VCuts',
        description: 'Freelance barber website',
        technologies: 'JavaScript (Angular 2+, Node.js, jQuery), TypeScript, HTML, CSS, MongoDB, Amazon Web Services (AWS)',
        tag: "Freelance Project",
        about: "Coming Soon"
    },
    opentext: {
        name: 'OpenText',
        description: 'Coming Soon',
        technologies: '',
        tag: "Internship",
        about: "Coming Soon"    
    }
}
export default ProjectsInfo;