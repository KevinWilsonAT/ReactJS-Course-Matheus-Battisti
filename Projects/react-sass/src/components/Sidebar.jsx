import Avatar from "../img/eu.jpeg";
import "../styles/components/sidebar.sass";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Kevin Teixeira" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">Baixar Currículo</a>
    </aside>
};

export default Sidebar;