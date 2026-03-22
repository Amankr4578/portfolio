"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionWrapper } from "../section-wrapper"
import Image from "next/image"
import { motion } from "framer-motion"
import { ProjectModal } from "../project-modal"
import { cn } from "@/lib/utils"

export const projectsData = [
   {title: "EcoBazaarX",
  shortDescription: "A sustainable marketplace web app with eco-scoring, carbon footprint insights, rewards, analytics, and secure role-based authentication." , 
  longDescription: "EcoBazaarX is a full-featured e-commerce platform focused on sustainable shopping. It combines product browsing, cart, orders, rewards, and environmental impact analytics with eco-scoring and carbon tracking. The project includes separate user and admin capabilities, API documentation via Swagger, and AI-assisted features for a smarter marketplace experience." ,
  challenges: "Major challenges included designing a large multi-module app (user, admin, analytics, rewards), securing role-based routes with JWT, managing consistent TypeScript data flow across frontend and backend, and keeping performance smooth while rendering analytics-heavy views." , 
  learnings: "This project strengthened my full-stack architecture skills using React + TypeScript + Express, taught me practical JWT + bcrypt authentication and RBAC implementation, improved API design/documentation with Swagger, and gave me hands-on experience integrating AI and analytics into a production-style marketplace." ,
  stack: [ "React" , "TypeScript" , "Express" , "Node.js" , "SQLite" , "JWT" , "bcryptjs" , "Framer Motion" , "Recharts" , "Google Gemini API" , "RenderForest" ] , 
    image: "/images/eco.png", 
    screenshots: [
       "/images/eco.png",
       "/images/eco1.png",
       "/images/eco2.png",
       "/images/eco3.png",
       "/images/eco4.png",
       ],
    githubUrl: "https://github.com/Amankr4578/Ecobazaarx.git",
    liveUrl: "https://ecobazaarx.vercel.app/", 
    slug: "ecobazaarx"     
    },
   {
  title: "SkillBridge",
  shortDescription: "A full-stack platform that connects volunteers with NGOs through opportunity matching, role-based dashboards, applications, messaging, and notifications.",
  longDescription: "SkillBridge is a volunteer and NGO collaboration platform built during the Infosys Springboard Full Stack milestone. Volunteers can create profiles, add skills, browse and apply to opportunities, and communicate with NGOs. NGOs can create opportunities, manage applications, and connect with volunteers. The platform includes secure JWT authentication, role-based workflows, real-time messaging with Socket.IO, and match suggestions based on skills.",
  challenges: "Key challenges included implementing clean role-based access control across volunteer and NGO workflows, designing stable real-time communication with Socket.IO, and coordinating multiple backend modules (auth, opportunities, applications, messaging, notifications) while keeping frontend state and API integration consistent.",
  learnings: "This project strengthened my MERN-stack fundamentals, especially Express API structuring and MongoDB data modeling, secure JWT + bcrypt authentication, and building real-time features with Socket.IO. I also improved at creating scalable dashboard flows and modular service-based frontend architecture.",
  stack: ["React", "Vite", "JavaScript", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcryptjs", "Socket.IO", "React Router", "Axios"],
  image: "/images/skill.png",
  screenshots: [
    "/images/skill.png",
    "/images/skill1.png",
    "/images/skill3.png",
    "/images/skill4.png",
    "/images/skill5.png",
   
  ],
  githubUrl: "https://github.com/Amankr4578/infosysSkillBridgeNGO.git",
  liveUrl: "https://skillbridgex-3oxd.onrender.com/",
  slug: "skillbridge"
},
  {
    
    title:"EcoSync",
    shortDescription:"A modern waste management platform with pickup scheduling, interactive maps, admin analytics, and real-time notifications.",
    longDescription:"EcoSync is a full-stack waste management web app with separate user and admin experiences. Users can schedule waste pickups, select locations on an interactive map, track updates, and manage notifications. Admins can monitor users and pickups, manage platform settings, and view dashboard statistics. The project is built with a React + Vite frontend and an Express + MongoDB backend secured with JWT authentication.",
    challenges:"The main challenges were coordinating role-based flows for users and admins, implementing reliable pickup scheduling with map interactions, and keeping notification/status updates consistent between frontend and backend modules.",
    learnings:"This project improved my skills in building end-to-end MERN-style systems, implementing JWT-based authentication and protected routes, structuring scalable React components, and designing admin-oriented dashboards with clean data flow.",
    stack:["React","MongoDB","Node.js","Express","Mongoose","JWT","Tailwind CSS","Framer Motion","Leaflet"],
    image: "/images/syn.png",
    screenshots: [
      "/images/syn.png",
      "/images/syn1.png",
      "/images/syn2.png",
      "/images/syn3.png",
      "/images/syn4.png"
    ],
    githubUrl: "https://github.com/Amankr4578/ecoSync.git",
    // liveUrl: "https://taskprism.streamlit.app/",
    slug: "ecosync"
  },
  {
    title:"Crop Recommendation System",
    shortDescription:"An AI-powered agriculture system that recommends the best crop using soil and climate inputs, with additional plant disease detection and profit estimation modules.",
    longDescription:"This project predicts suitable crops using inputs like Nitrogen, Phosphorus, Potassium, temperature, humidity, pH, and rainfall. It combines data preprocessing, exploratory analysis, hypothesis testing, and model training across multiple machine learning algorithms. A Random Forest model was selected for deployment due to high accuracy and robustness, and the solution also includes deep learning-based leaf disease detection and a farmer-friendly profit calculator interface.",
    challenges:"Key challenges included cleaning noisy agricultural data (nulls, duplicates, outliers), comparing many ML algorithms fairly, tuning models for consistent accuracy, and integrating prediction, disease analysis, and profit calculation into a single usable workflow.",
    learnings:"This project improved my end-to-end ML pipeline skills: data preprocessing, EDA, statistical testing, model benchmarking, and deployment-focused model selection. I also gained practical experience in combining ML and DL modules into one applied agriculture use case.",
    stack:["Python","Scikit-learn","TensorFlow","Pandas","NumPy","Matplotlib","Seaborn","Gradio"],
    image: "/images/crop.png",
    screenshots: [
      "/images/crop.png",
      "/images/crop1.jpg",
      "/images/crop2.jpg",
      "/images/crop3.jpg",
      "/images/crop4.png"
    ],
    githubUrl: "https://github.com/Amankr4578/crop-recommendation-system.git",
    // liveUrl: "https://taskprism.streamlit.app/",
    slug: "crop-recommendation-system"
  },
  {
    title:"Secure File Management",
    shortDescription:"A secure file manager that supports user authentication, file upload/download, encryption/decryption, and protected API operations.",
    longDescription:"Secure File Management System is a Python-based application with both desktop GUI and web API flows. Users can register/login, upload and manage files, and perform encryption/decryption using password-derived keys with Fernet. The backend includes file operations, session handling, and security-focused endpoints, while data is stored in SQLite. The project is deployment-ready for Vercel with a local development workflow.",
    challenges:"Key challenges included implementing consistent security across authentication and file actions, handling encrypted binary file workflows safely, and supporting both local database mode and Vercel deployment constraints (in-memory SQLite behavior).",
    learnings:"This project improved my practical skills in backend security design, bcrypt-based password protection, cryptographic file handling with Fernet, and API route design for file lifecycle operations like upload, download, encryption, and deletion.",
    stack:["Python","Tkinter","SQLite","bcrypt","cryptography (Fernet)","Flask","Flask-CORS","Vercel"],
    image: "/images/sec.png",
    screenshots: [
      "/images/sec.png",
      "/images/sec1.png",
      "/images/sec2.png",
      "/images/sec3.png",
      "/images/sec4.png"
    ],
    githubUrl: "https://github.com/Amankr4578/Secure-File-Management-System.git",
    liveUrl: "https://secure-file-management-system.vercel.app/",
    slug: "secure-file-management-system"
  },
  {
    title:"Code Debugger",
    shortDescription:"An AI-powered debugging assistant that analyzes code across multiple languages with dedicated modes for debugging, performance, security, and explanation.",
    longDescription:"Code Guardian is an AI debugging tool built with Python that supports both desktop and web interfaces. Users can paste or load source files, select the programming language, and run one of four analysis modes: Standard Debugging, Performance Analysis, Security Review, or Code Explanation. The app integrates Google Gemini to generate structured feedback, code fixes, and explanations, and allows saving debugging sessions for future reference.",
    challenges:"The main challenges were designing prompts that produce reliable, structured outputs across different languages and debug modes, formatting AI responses clearly for end users, and keeping the UI responsive while processing longer code analyses.",
    learnings:"This project improved my skills in prompt engineering, AI-assisted developer tooling, and building practical debugging workflows with mode-specific analysis. I also gained experience in creating user-friendly interaction layers for both Tkinter desktop and Flask web delivery.",
    stack:["Python","Tkinter","Flask","Google Gemini API","Bootstrap","HTML/CSS","JavaScript"],    
    image: "/images/code.png",
    screenshots: [
      "/images/code.png",
      "/images/code1.png",
      "/images/code2.png",
    ],
    githubUrl: "https://github.com/Amankr4578/code-debugger.git",
    liveUrl: "https://code-debugger-shashwat-kashyaps-projects.vercel.app/",
    slug: "code-debugger"
  },
  {
    title:"Synthesia - Web Music Player",
    shortDescription:"A full-stack music streaming app with JWT auth, Jamendo-powered discovery, favorites management, and interactive playback controls.",
    longDescription:"WSA Synthesia is a MERN-based music platform where users can sign up, log in, browse tracks, search songs, load playlist tags, and manage favorites. It features a modern audio player with play/pause, seek, next/previous, loop, shuffle, speed, and volume controls. The app includes secure profile flows like edit profile, forgot password, and reset password, with backend APIs handling authentication, user data, and song interactions.",
    challenges:"The main challenges were coordinating frontend player state across many controls, handling secure JWT-based auth flows with profile and password reset features, and maintaining clean integration between Jamendo song data and MongoDB-backed user favorites.",
    learnings:"This project strengthened my MERN architecture skills, especially Redux state management for media controls, robust Express route structuring for auth and songs, and practical secure user-flow design using JWT, bcrypt, and email-based reset logic.",
    stack:["React","Redux Toolkit","Tailwind CSS","Node.js","Express","MongoDB","Mongoose","JWT","bcrypt","Nodemailer","Jamendo API"],
    image: "/images/mus.png",
    screenshots: [
      "/images/mus.png",
      "/images/mus2.png",
      "/images/mus3.png",
      "/images/mus4.png"
    ],
    githubUrl: "https://github.com/Amankr4578/wsa-synthesia-app.git",
    liveUrl: "https://wsa-synthesia-app.netlify.app/",
    slug: "wsa-synthesia-app"
  },
  {
    title:"Government-University Portal",
    shortDescription:"A role-based education governance platform connecting government officials and universities with dashboards, analytics, and centralized academic data management.",
    longDescription:"EduGov Connect is a full-stack web portal that streamlines education governance through separate workflows for government and university users. Government officials can monitor registered universities, review aggregate analytics, and download reports, while university admins can manage departments, courses, and student records through dedicated dashboards. The platform includes secure authentication flows, diagnostics utilities, and reporting APIs built on a PHP + MySQL backend.",
    challenges:"The core challenges were designing clear role-based experiences across two portals, maintaining reliable data consistency between universities, departments, courses, and students, and building reporting/analytics views that remain fast and readable as records scale.",
    learnings:"This project improved my backend and system-design skills in PHP, especially session-based authentication, modular API structuring, SQL schema planning, and dashboard-focused data aggregation. I also strengthened frontend implementation using Tailwind-driven responsive UI for admin workflows.",
    stack:["PHP","MySQL","JavaScript","CSS","Tailwind CSS","HTML","Chart.js","XAMPP/Apache"],
    image: "/images/edu.png",
    screenshots: [
      "/images/edu.png",
      "/images/edu1.png",
      "/images/edu2.png",
      "/images/edu3.png",
      "/images/edu4.png"
    ],
    githubUrl: "https://github.com/Amankr4578/Government-University-Portal.git",
    liveUrl: "",
    slug: "government-university-portal"
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const getInlineStack = (stack: string[]) => {
    const maxVisible = 2
    const visible = stack.slice(0, maxVisible)
    const moreCount = Math.max(stack.length - maxVisible, 0)

    return { visible, moreCount }
  }

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      checkScroll()
      scrollContainer.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        scrollContainer.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
      const targetScroll = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <SectionWrapper id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1.5, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center px-4 sm:px-6"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent work, demonstrating my expertise in full-stack development.
        </p>
      </motion.div>

      <div className="relative mt-8 sm:mt-12 px-4 sm:px-6">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 z-10",
            "w-6 h-12 sm:w-8 sm:h-16",
            "flex items-center justify-center",
            "text-muted-foreground/50 hover:text-primary/80",
            "transition-colors duration-200",
            !showLeftArrow && "opacity-0 pointer-events-none"
          )}
          aria-label="Scroll left"
        >
          <div className="w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-current rotate-[-45deg]" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 z-10",
            "w-6 h-12 sm:w-8 sm:h-16",
            "flex items-center justify-center",
            "text-muted-foreground/50 hover:text-primary/80",
            "transition-colors duration-200",
            !showRightArrow && "opacity-0 pointer-events-none"
          )}
          aria-label="Scroll right"
        >
          <div className="w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-current rotate-45" />
        </button>

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="relative flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {projectsData.map((project, index) => (
            (() => {
              const inlineStack = getInlineStack(project.stack)
              return (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="flex-none w-[280px] sm:w-[320px] snap-start"
            >
              <Card 
                className="group h-full hover:shadow-lg transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 280px, 320px"
                    priority={index < 2}
                  />
                </div>
                <CardHeader className="p-3 sm:p-6">
                  <CardTitle className="text-base sm:text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
                    {project.shortDescription}
                  </p>
                </CardHeader>
                <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 flex-nowrap overflow-hidden whitespace-nowrap">
                    {inlineStack.visible.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs shrink-0">
                        {tech}
                      </Badge>
                    ))}
                    {inlineStack.moreCount > 0 && (
                      <Badge variant="secondary" className="text-xs shrink-0">
                        +{inlineStack.moreCount} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm" asChild onClick={(e) => e.stopPropagation()}>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm" asChild onClick={(e) => e.stopPropagation()}>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> Live Link
                          </a>
                        </Button>
                      )}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      View More Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
              )
            })()
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </SectionWrapper>
  )
}
