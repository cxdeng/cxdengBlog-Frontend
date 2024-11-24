import iconLinksStyle from './IconLinks.module.css'
import githubDark from "../../assets/github-dark.png";
import githubLight from "../../assets/github-light.png"
import linkedin from "../../assets/linkedin.png";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store.ts";

function IconLinks() {
    const isDarkMode = useSelector((state: RootState) => state.themeSwitch.isDarkMode);
    return (
        <div className={iconLinksStyle["container"]}>
            <a href="https://github.com/cxdeng" target="_blank" rel="noreferrer">
                <img src={isDarkMode ? githubDark : githubLight} alt="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/chengxin-deng-669289256/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt=""/>
            </a>
        </div>
    );
}

export default IconLinks;