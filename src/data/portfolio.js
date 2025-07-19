import { FiDownload, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiTailwindcss, SiShadcnui, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiDjango, SiPostman, SiGit, SiGithub, SiVercel } from 'react-icons/si';

import Experience from '../containers/Experience';
import Projects from '../containers/Projects';
import Skills from '../containers/Skills';


export const SOCIAL_LINKS = [
    {
        id: 'github',
        title: 'Github',
        link: 'https://github.com/IshantSomani',
        icon: FiGithub
    },
    {
        id: 'linkedin',
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ishant-somani-973492217/',
        icon: FiLinkedin
    },
    {
        id: 'email',
        title: 'Email',
        link: 'mailto:ishantsomani2003@gmail.com',
        icon: FiMail
    },
    {
        id: 'instagram',
        title: 'Instagram',
        link: 'https://instagram.com/somani_ishant',
        icon: FiInstagram
    },
    {
        id: 'resume',
        title: 'Resume',
        link: 'https://drive.google.com/file/d/1PRpX0ZS3CqU9MirF-eQDzjDxZOL98Qig/preview',
        icon: FiDownload,
        // download: true
    },
]

export const PORTFOLIO_SECTION = [
    { id: 'projects', title: 'Projects', component: Projects },
    { id: 'experience', title: 'Experience', component: Experience },
    { id: 'skills', title: 'Skills', component: Skills },
    // { id: 'certification', title: 'Certifications' }

];

export const EXPERIENCE_SECTION = [
    {
        id: '1',
        title: 'Trainee',
        company: 'GRRAS Solution Pvt. Ltd',
        // location: 'Jaipur',
        date: 'June 2024 - July 2024',
        description: 'Worked in GRRAS Solution Pvt. Ltd as a Trainee MERN Stack Developer, gaining hands-on experience in building full-stack web applications. Strengthened my problem-solving skills and passion for development through real-world projects.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs', 'JWT']
    },
    {
        id: '2',
        title: 'Full Stack Developer',
        company: 'Space Soft',
        location: 'Indore',
        date: 'May 2025',
        description: 'Set up the Node.js environment on the server and resolved deployment issues during configuration.',
        tech: ['Node.js', 'Express.js', 'PM2', 'Nginx', 'Ubuntu Server', 'aaPanel']
    }

]

export const SKILLS_SECTION = [
    {
        id: '1',
        title: 'Frontend',
        skills: [
            { name: 'React', icon: SiReact, color: '#61DBFB' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
            { name: 'Shadcn UI', icon: SiShadcnui, color: '#ffffff' },
        ]
    },
    {
        id: '2',
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
            { name: 'Express.js', icon: SiExpress, color: '#000000' },
            { name: 'Django', icon: SiDjango, color: '#092e20' }
        ]
    },
    {
        id: '3',
        title: 'Database',
        skills: [
            { name: 'MySQL', icon: SiMysql, color: '#00758F' },
            { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D' }
        ]
    },
    {
        id: '4',
        title: 'Tools',
        skills: [
            { name: 'Git', icon: SiGit, color: '#F1502F' },
            { name: 'GitHub', icon: SiGithub, color: '#181717' },
            { name: 'Vercel', icon: SiVercel, color: '#000000' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' }
        ]
    }
];

export const PROJECT_SECTION = [
    {
        id: '1',
        title: 'Notes App',
        description: 'A notes app for managing tasks with features like create, edit, delete, tags and pinning notes.',
        tech: ['React', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
        code: 'https://github.com/IshantSomani/Notes-App/',
        video: '',
        link: 'https://notes-app-pearl-delta.vercel.app/'
    },
    {
        id: '2',
        title: 'Ai Video Script Generato',
        description: "Full-stack app using Groq's AI to generate video scripts from text, URLs and files. Features OCR, PDF export and script management with real-time feedback.",
        tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Python', 'Flask'],
        code: 'https://github.com/IshantSomani/ai_video_script_generator/',
        video: ''
    },
    {
        id: '3',
        title: 'Forever',
        description: "Full-stack e-commerce platform featuring responsive store, admin dashboard, Stripe payments, and Cloudinary image uploads.",
        tech: ['React', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'Cloudinary'],
        code: 'https://github.com/IshantSomani/forever/',
        link: 'https://forever-wheat.vercel.app/',
        video: '',
    },
    {
        id: '4',
        title: 'Glory',
        description: "Full-featured MERN e-commerce platform with authentication, product management, and Stripe payments. Includes responsive UI and admin dashboard.",
        tech: ['React', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
        code: 'https://github.com/IshantSomani/E-commerce/',
        link: 'https://glory-three.vercel.app/',
        video: ''
    },
    {
        id: '5',
        title: 'Password Manager',
        description: 'Secure password manager with generation, encryption and sync features. Built with MERN stack.',
        tech: ['React', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
        code: 'https://github.com/IshantSomani/Password-Manager/',
        link: 'https://password-manager-nine-chi.vercel.app/login',
        video: ''
    },
    {
        id: '6',
        title: 'TechTrove',
        description: 'A MERN stack platform for discovering AI tools with authentication, admin controls, theme switching and search functionality.',
        tech: ['React', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
        link: 'https://techtrove-six.vercel.app/',
        video: ''
    },
]