import {
    DiHtml5, DiCss3, DiJsBadge, DiBootstrap, DiSass, DiReact,
    DiNodejsSmall, DiPhp, DiCodeigniter, DiMysql, DiPython, DiJava,
    DiWordpress,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass"

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "bootstrap", name: "Bootstrap 5", icon: <DiBootstrap /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "php", name: "PHP", icon: <DiPhp /> },
    { id: "codeigniter", name: "Code Igniter 3", icon: <DiCodeigniter /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "python", name: "Python", icon: <DiPython /> },
    { id: "java", name: "Java", icon: <DiJava /> },
    { id: "wordpress", name: "WordPress", icon: <DiWordpress /> },
];

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) =>(
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesContainer;