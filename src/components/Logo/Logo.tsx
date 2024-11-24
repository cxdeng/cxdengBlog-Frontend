import logoStyle from './Logo.module.css'
import logo from '../../assets/personalLogo.jpg'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store.ts";

function Logo() {
    const isDarkMode = useSelector((state: RootState) => state.themeSwitch.isDarkMode);

    return (
        <div className={logoStyle['container']}>
            <img src={logo} alt="logo"/>
            <div id={logoStyle['blog-name']} className={`${isDarkMode ? logoStyle[`dark`] : logoStyle['light']}`}>cxdengBlog</div>
        </div>
    );
}

export default Logo;