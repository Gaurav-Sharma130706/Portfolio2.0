import blogImg from '../assets/blog.png'
import backendImg from '../assets/BackendProject-1.png'
import weatherImg from '../assets/WeatherApp.png'
import rockImg from '../assets/RockPaperScissor.png'
export const projects = [
  {
    id: 1,
    title: "Blog Website",
    image: blogImg,
    description: "“Developed a full-stack blogging platform using React for the frontend and Appwrite as a Backend-as-a-Service (BaaS), implementing core features like authentication, content management, and API integration.”",
    techStack: ["React"],
    liveUrl: "https://blogger-project-beta.vercel.app/",
    githubUrl: "https://github.com/Gaurav-Sharma130706/Blogger-Project-"
  },
  {
    id: 2,
    title: "VideoTube",
    image: backendImg,
    description: "A YouTube-inspired backend application with a fully documented REST API, featuring JWT authentication, video uploads, playlists, subscriptions, and scalable MongoDB aggregation pipelines.",
    techStack: ["Node.js", "Express", "MongoDB"],
    liveUrl: "https://documenter.getpostman.com/view/51433090/2sBXinFVPn",
    githubUrl: "https://github.com/Gaurav-Sharma130706/BackendProject"
  },
  {
    id: 3,
    title: "Weather App",
    image: weatherImg,
    description: "A weather app that fetches real-time data using a weather API.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://gaurav-sharma130706.github.io/WeatherApp/",
    githubUrl: "https://github.com/Gaurav-Sharma130706/WeatherApp"
  },
  {
    id: 4,
    title: "Stone Paper Scissors",
    image: rockImg,
    description: "A fun browser-based rock paper scissors game.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://gaurav-sharma130706.github.io/Rock_Paper_Scissors_Game/",
    githubUrl: "https://github.com/Gaurav-Sharma130706/Rock_Paper_Scissors_Game"
  }
]