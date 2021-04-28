const projects = {
    experiences: [
        {
            name: "Shopify",
            position: "Backend Engineer Intern",
            duration: "Jan 2021 - Apr 2021",
            image_name: "shopify",
        },
        {
            name: "NVIDIA",
            position: "Software Engineer Intern",
            duration: "May 2020 - Aug 2020",
            image_name: "nvidia"
        },
        {
            name: "LCBO|next",
            position: "Full Stack Developer Intern",
            duration: "Sept 2019 - Dec 2019",
            image_name: "lcbo"
        },
        {
            name: "UW Blueprint",
            position: "Software Developer",
            duration: "Sept 2019 - Dec 2019",
            image_name: "blueprint"
        },
        {
            name: "OpenText",
            position: "Software Developer Intern",
            duration: "Jan 2019 - Apr 2019",
            image_name: "opentext"
        },
        {
            name: "Canadian Tire",
            position: "Technical Specialist Intern",
            duration: "May 2018 - Aug 2018",
            image_name: "ctc"
        }
    ],
    headings: {
        projects: {
            title: "Projects",
            description: "A collection of projects & experiences"
        },
        webMobile: {
            title: "Side Projects",
            link: 'side-projects',
            description: "Learning & Innovation",
        },
        ds: {
            title: "Data",
            link: 'data',
            description: "Designing Data-Intensive Applications",
        },
        experience: {
            title: "Experience",
            link: 'experience',
            description: "Internships, Design Teams, Clubs",
        },
        hackathons: {
            title: "Hackathons",
            link: 'hackathons',
            description: "Projects built during hackathons",
        },
        order: ['experience', 'side-projects', 'data', 'hackathons'],
        projectOrder: ['experience/nvidia', 'experience/lcbo-next', 'experience/uwblueprint', 'experience/opentext', 'experience/freelance', 'experience/ctc', 'side-projects/shell-chatbot', 'side-projects/huddle', 'side-projects/blitz', 'side-projects/munkee', 'data/oubre-sentiment-analysis', 'data/sql-media-platform' , 'hackathons/airdrums', 'hackathons/ryse', 'hackathons/moodify']
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
            problem: 'Professional sports is a product that connects people regardless of age, gender, or race. This can occur in any setting, whether it\'s the office or the classroom. It is a concept that is very undermined, yet so powerful. We wanted to utilize the product of sports by coming up with a way to quantify its fan-fueled competitive aspect while selling it for what it is, a social event.',
            solution: 'Our brainstorming initially began with the concept of bringing people together. We realized that fans don’t prioritize where they watch games, only who they are watching with and whether or not the game is on. This led us to the idea of promoting local venues. Through Huddle, local venues could advertise the games they were streaming to increase business while connecting fans at the same time. A win-win situation. For the motivational aspect of Huddle, we decided to use a system that would associate a “rating” with each user. The rating would be based on the accuracy of the user’s picks. It inclines users to continue to use Huddle to broadcast their ability to make picks correctly. This can be compared to Stack Overflow, where users ask/answer questions to increase their Stack Overflow “reputation”.'
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
            technology: "Node (Express, PassportJS), MongoDB, Mongoose, Twilio SMS Microservice, MySportsFeeds API. HTML/CSS, Postman",
            problem: "Digital media apps (ESPN, theScore) are great at keeping fans up to date on their favorite teams and players. The problem is that they heavily rely on internet connection. If a user does not have consistent access to the web, obtaining the final score of an important game could be a very frustrating process.",
            solution: 'Sports notifications are different because users do not have to further view the content to know the context of the situation. Consider a notification similar to “John Smith commented on your post.” Users must open the application in order to know exactly what was said. A sports notification as simple as “Toronto wins 5-3.” contains all the information the user needs. No further action would be required. The solution I came up with utilized SMS texting. Texts are extremely accessible and possess all requirements necessary when passing an immutable piece of data. By incorporating several external APIs, I created a service that would send SMS notifications to users.'
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
            technology: "Node (Express, PassportJS), MongoDB, Mongoose, HTML/CSS, Postman"
        }
    },
    shellChatbot: {
        name: 'Shell Chatbot',
        reference: 'side-projects/shell-chatbot',
        description: 'A Tour of Go',
        tag: "Side Project",
        about: "Coming Soon",
        content: {
            summary: "This project is a work in progress. If you have any burning questions, feel free to contact me.",
            technology: "Golang, PostgreSQL"
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
            summary:'Munkee is a cross-platform multiplayer game that runs the classic game of pig. The game can be played locally on one computer or online through private game lobbies. When a player creates a game, a unique hexatridecimal game ID is created and saved to a NoSQL database. The player can then invite their friends by sharing the ID. My usage of web sockets allows for real-time games to be played. Being a fan of console-based sports games (2K, Madden, NHL), I have always been curious about how online matches took place. This inspired me to implement my own real-time matchmaking architecture.',
            technology: "Node (Express, SocketIO), jQuery, Bootstrap, MongoDB, Mongoose, HTML/CSS, Heroku"
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
            summary: "A complete data platform that performs sentiment analysis on filtered tweets ingested from the Twitter API. Data is sent to a Kafka topic where it is consumed by a Spark job where tweets are analyzed and sent to a Time Series Cassandra database. From there, a periodic Spark job (run every 24 hours) aggregates and writes the data into another Cassandra database. Finally, the data can be consumed by clients through a Node API.",
            technology: "Apache Kafka, Apache Spark, Cassandra, Java, MapReduce",
        }
    },
    mmp: {
        name: 'SQL Media Platform',
        reference: 'data/sql-media-platform',
        description: 'MSCI346 Project',
        tag: "Data Project",
        about: "Coming Soon",
        content: {
            summary: 'This project was a web application I made for my MSCI346 databases course. The web application interacts with a MySQL database designed and managed on PHPMyAdmin. My team and I developed an ER diagram and relational schema before populating our database with data that mocks a music management platform similar to Genius. As part of our project, we wrote complex SQL queries to provide functionality within our application.',
            technology: "PHP, MySQL, PHPMyAdmin",
        }
    },
    ctc: {
        name: 'Canadian Tire',
        reference: 'experience/ctc',
        description: 'Improving IT productivity',
        tag: "Internship",
        about: "Coming Soon",
        content: {
            position: "Infrastructure Specialist",
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
            team: 'Appworks Web/Mobile Engineering Team',
            technology: "Java (Spring), Maven, Docker, Node, Angular, TypeScript, MongoDB, HTML/CSS, Bulma, Git, Jira, Postman",
        }
    },
    freelance: {
        name: 'Freelance',
        reference: 'experience/freelance',
        description: 'My Personal Work',
        tag: 'Freelance',
        about: 'Coming soon',
        content: {
            position: "Founder/Engineer",
            technology: "Node, Angular, TypeScript, MongoDB, MySQL, HTML/CSS, Bootstrap, jQuery, AWS, Git, Postman",
            summary: "Coming Soon"
        }
    },
    uwblueprint: {
        name: 'UW Blueprint',
        reference: 'experience/uwblueprint',
        description: 'Tech for Nonprofits',
        tag: 'Design Team',
        about: 'Coming soon',
        content: {
            position: "Software Developer",
            team: 'Social Venture Partners',
            technology: "React, Node, MongoDB",
            summary: "Coming Soon"
        }
    },
    lcbonext: {
        name: 'LCBO | next',
        reference: 'experience/lcbo-next',
        description: 'Startup Experience',
        tag: 'Internship',
        about: 'Coming soon',
        content: {
            position: "Full Stack Developer and Technical Product Manager",
            team: 'Innovation Lab',
            technology: "React, Node, ElasticSearch, ETL Pipelines, Azure, Docker",
            summary: "Coming Soon"
        }
    },
    nvidia: {
        name: 'NVIDIA',
        reference: 'experience/nvidia',
        description: 'Coming Soon',
        tag: 'Internship',
        about: 'Coming soon',
        content: {
            position: "Web/Database Applications Architect",
            team: 'Hardware Infrastructure Metrics Team',
            technology: "Java (Eclipse Vert.x), Python, Apache Kafka, Docker, Jenkins, Kubernetes",
            summary: "Coming Soon"
        }
    }
}
export default projects;