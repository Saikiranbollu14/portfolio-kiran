import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaSquareWhatsapp,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";


import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiSqlite } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";



export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "SAI KIRAN BOLLU",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "VibeZone",
    description:
      "Vibezone is a social platform similar to Omegle, designed for spontaneous and random video chatting with strangers from around the world. Users can connect with others in real-time, allowing for a dynamic and diverse social experience. Like Omegle, Vibezone emphasizes anonymity, providing a space where users can interact without the need to share personal information. This platform is ideal for those looking to meet new people, engage in interesting conversations, and explore different cultures and perspectives from the comfort of their own home.",
    image: projectImage1,
    githubLink: "https://github.com/shi-arch/Vibes-vibezone",
  },
  {
    id: 2,
    name: "Jobby-App",
    description:
      "The Jobby App aims to make the job search process as efficient and effective as possible by providing a suite of tools and features designed to meet the diverse needs of job seekers. Whether users are actively looking for new opportunities or just exploring potential career moves, Jobby App offers a seamless and intuitive experience to support their job search journey.",
    image: projectImage2,
    githubLink: "https://github.com/Saikiranbollu14/Jobby-App",
  },
  {
    id: 3,
    name: "ENHANCEMENT-OF-MOVIE-DATABASE-APP",
    description:
      "The Enhanced Movie Database App is designed to be the ultimate tool for movie lovers, offering a rich and immersive experience that caters to diverse interests and preferences. By integrating advanced features and providing a personalized touch, it aims to enhance the way users discover, explore, and engage with the world of cinema.",
    image: projectImage3,
    githubLink:
      "https://github.com/Saikiranbollu14/ENHANCEMENT-OF-MOVIE-DATABASE-APP",
  },
  {
    id: 4,
    name: "Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)",
    description:
      "The Nxt Trendz application is designed to be a powerful and user-centric e-commerce platform, offering a wide range of features to meet the needs of modern shoppers. By providing robust product discovery tools, personalized recommendations, and a streamlined shopping experience, Nxt Trendz aims to deliver a compelling and efficient online shopping journey.",
    image: projectImage4,
    githubLink: "https://github.com/Saikiranbollu14/Nxt-Trendz-main",
  },
  {
    id: 5,
    name: "Enhancement-of-Restaurant-App",
    description:
      "The Enhancement of Restaurant App project is designed to deliver a more efficient, engaging, and secure application experience for both restaurant operators and their customers. By addressing current pain points and integrating modern features, this project will contribute to increased customer satisfaction, improved operational efficiency, and overall business success.",
    image: projectImage5,
    githubLink:
      "https://github.com/Saikiranbollu14/Enhancement-of-Restaurant-App-main",
  },
  {
    id: 6,
    name: "Nxt Watch",
    description:
      "NxtWatch aims to set a new standard in video sharing by combining cutting-edge technology with an enhanced user experience. With its focus on personalization, engagement, and community building, NxtWatch is poised to become a leading platform for video content, catering to both viewers and creators alike.",
    image: projectImage6,
    githubLink: "https://github.com/Saikiranbollu14/NxtWatch-project-master",
  },
];

export const BIO = [
  "Sai Kiran Bollu is a dedicated Full Stack Developer with a strong foundation in both frontend and backend technologies. He completed his Bachelor of Technology in Electronics & Communication Engineering (ECE) from Guru Nanak Institute of Technology, Hyderabad, in 2023. His academic journey in technology began with a Diploma in Electronics & Communication Engineering from Warangal Institute of Technology and Science, followed by Secondary School education at Millenium Public School, Warangal.",
  "Since 2023, Sai Kiran has been pursuing an Industry Ready Certification in Full-Stack Development from Nxtwave Disruptive Technologies, enhancing his expertise in modern web technologies and development practices.",
  "With a keen interest in creating dynamic and user-centric web applications, Sai Kiran has worked on several noteworthy projects. Notable among these is Nxt Trendz, an eCommerce clone inspired by Amazon and Flipkart, where he implemented features such as user authentication, product search, and filtering. Another significant project, Todos Application, is a task management tool designed to simplify task tracking through a user-friendly interface. Additionally, the Jobby App showcases his ability to develop job listing platforms with advanced search and filtering options. His work on VibeZone, a social video chatting platform, highlights his skills in integrating real-time communication features and ensuring a seamless user experience.",
  "In early 2024, Sai Kiran completed an internship as a Full Stack Developer at VK Reddy Digital Solutions. During this internship, he contributed to the development of VibeZone, collaborating with cross-functional teams to implement new features and maintain high standards of code quality.",
  "Sai Kiran Bollu combines a solid technical foundation with practical experience to deliver innovative and effective web solutions. His expertise spans across frontend technologies such as React.js, JavaScript, and CSS, as well as backend technologies including Node.js and Python. His commitment to continuous learning and passion for frontend development positions him as a valuable asset in the tech industry.",
];

export const SKILLS = [
  {
    icon:<FaHtml5 className="text-4xl text-cyan-400 lg:text-5xl"/>,
    name:"HTML",

  },
  {
    icon:<FaCss3  className="text-4xl text-cyan-400 lg:text-5xl"/>,
    name:"CSS",

  },
  {
    icon:<TbBrandJavascript  className="text-4xl text-cyan-400 lg:text-5xl" />,
    name:"JavaScript",

  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon :<SiRedux className="text-4xl text-cyan-400 lg:text-5xl" />,
    name:"Redux",
  },
  {
    icon:<RiTailwindCssLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name:"TailwindCss"

  },
  {
    icon:<SiSqlite className="text-4xl text-cyan-400 lg:text-5xl"/>,
    name:"SqLite",
  },
  {
    icon: <FaPython className="text-4xl text-green-600 lg:text-5xl"  />,
    name: "Python",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    
  },
  {
   icon : <SiExpress className="text-4xl text-green-600 lg:text-5xl" />,
   name:"Express.js",

  },
];

export const EXPERIENCES = [
  {
    title: "Frontend Developer[Intern]",
    company: "Vk Reddy Digital Solutions",
    duration: "February 2024 - August 2024",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like JavaScript,React, Redux,Material.Ui and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Guru Nanak Institute Of Technology, Hyderabad",
    duration: "August 2020 - July 2023",
    description:"Pursued a B.Tech. in Electronics and Communication Engineering, with a strong focus on electronic circuit design, communication systems, and embedded systems. Actively participated in technical clubs and engineering competitions, where I gained hands-on experience in designing and implementing electronic projects. Successfully completed a senior project on developing a smart home automation system, integrating IoT technologies for enhanced control and monitoring. Graduated with distinction, achieving a high GPA and demonstrating a solid foundation in both theoretical knowledge and practical skills.",
  },
  {
    degree:"Diploma in Electronics and Communication Engineering",
    institution:"Warangal Institute Of Technology And Science, Warangal",
    duration:"June 2017 - June 2020",
    description:"Completed a Diploma in Electronics and Communication Engineering, focusing on core areas such as electronic circuits, communication systems, and signal processing. Engaged actively in practical workshops and technical clubs, where I gained hands-on experience in building and troubleshooting electronic devices. Successfully undertook a final project on developing a wireless communication system for remote data transfer. Graduated with commendation, demonstrating a strong grasp of both theoretical concepts and practical applications in the field of electronics and communication.",

  },
  {
    degree:"Board Of Secondary Education(SSC)",
    institution:"Millenium Public School, Warangal",
    duration:"June 2016 - May 2017",
    description:"Completed the Board of Secondary Education (SSC) with a focus on foundational subjects including Mathematics, Science, and English. Actively participated in extracurricular activities and school projects, demonstrating strong problem-solving skills and a commitment to academic excellence. Achieved high marks in core subjects, which provided a solid foundation for further studies in Electronics and Communication Engineering.",

  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61557266254143&mibextid=ZbWKwL",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "https://www.instagram.com/sai_kiran_bollu_?igsh=bzNsbXNoMTF1Z2M",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/Saikiran1141?t=bVUBtoGfHr9pZvEnhveV6Q&s=09",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Saikiranbollu14",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/bollu-sai-kiran-579789251",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href:"https://wa.me/+919705166962",
    icon: <FaSquareWhatsapp fontSize={30} className="hover:opacity-80" />,


  },
];
