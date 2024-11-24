import {useSelector} from "react-redux";
import {RootState} from "../../redux/store.ts";
import 'animate.css';
import welcomeStyle from './Welcome.module.css';

const Welcome = () => {
    const isDarkMode = useSelector((state: RootState) => state.themeSwitch.isDarkMode);

    return (
        <div className={`${welcomeStyle.container} ${isDarkMode ? welcomeStyle.dark : welcomeStyle.light}`}>
            <div className={`animate__animated animate__bounceInUp ${welcomeStyle.test}`}>Hi, I'm Chengxin Deng</div>
            <div className={`animate__animated animate__bounceInUp`}>Full-stack Developer</div>
        </div>
    );
};

export default Welcome;