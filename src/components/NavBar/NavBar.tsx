import navBarStyle from './NavBar.module.css'
import Logo from "../Logo/Logo.tsx";
import NavigationList from "../ NavigationList/NavigationList.tsx";
import IconLinks from "../IconLinks/IconLinks.tsx";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.tsx";

function NavBar() {
    return (
        <div className={`${navBarStyle.container}`}>
            <div className={navBarStyle["content"]}>
                <Logo/>
                <div className={navBarStyle['nav-right']}>
                    <NavigationList/>
                    <ThemeSwitch/>
                    <IconLinks/>
                </div>
            </div>
        </div>
    );
}

export default NavBar;