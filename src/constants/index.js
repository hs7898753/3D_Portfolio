import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    GIS,
    skyscanner,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Open Source Contributor",
        company_name: "GIS.OPS (Valhalla App)",
        icon: GIS,
        iconBg: "white",
        date: "March 2023 - April 2023",
        points: [
            "Collaborated with other Developers to improve the user interface and expercience of Valhalla App",
            "Utilized Skills in React, JavaScript, and CSS , worked with OpenStreet map library and  received positive feedback from maintainers",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "SkyScanner Virtual Experience Program ",
        company_name: "(Forage)",
        icon: skyscanner,
        iconBg: "white",
        date: "Jan 2023 - Feb 2023",
        points: [`
          Completed a job simulation where I built a web application using React as a
           front-end engineer at Skyscanner.`,
          `Developed a page for picking a travel date using Skyscanner’s open-source
           Backpack React library.`,
        ` Customised my application and ran automated tests to ensure it rendered
           properly.`
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/hs7898753',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/hs7898753/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'AI Art Generator',
        description: 'A SaaS application that leverages AI to do Coversation, Write Code, Generate Images, and Produce Videos/Music for you.',
        link: 'https://github.com/hs7898753/AIArtGenerator',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'AgroCart E-Commerce Platform',
        description: 'Built a full-stack e-commerce platform for farmers to sell their produce, and for customers to purchase fresh produce directly from farmers.',
        link: 'https://github.com/hs7898753/AgroCart',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Student Dropout Dashboard',
        description: 'Developed a dashboard to help Policy makers identify students at risk of dropping out, and to help them to implement/make Student Policies.',
        link: 'https://github.com/hs7898753/Student_Dropout_Dashboard',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: '3D Personal Portfolio',
        description: 'Developed a 3D Personal Portfolio using three.js and React to showcase my skills and projects, and to connect with other developers.',
        link: 'https://github.com/hs7898753/3D_Portfolio',
    },
    
]