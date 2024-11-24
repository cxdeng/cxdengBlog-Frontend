import profileStyle from './Profile.module.css';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store.ts";

function Profile() {
    const isDarkMode = useSelector((state: RootState) => state.themeSwitch.isDarkMode);

    return (
        <div className={`${profileStyle.container} ${isDarkMode ? profileStyle.dark : profileStyle.light}`}>
            <div className={profileStyle.content}>
                <div>
                    👋 Hi, I’m Chengxin Deng, a graduate in Cyber Security from the University of York,
                    with a background in Software Engineering. My work focuses on designing and building secure,
                    scalable systems, particularly in the finance and logistics industries.
                </div>
                <div>
                    🌟 I am passionate about crafting solutions that prioritize security and reliability,
                    from developing advanced risk management platforms to implementing robust system architectures.
                    My academic and professional journey has equipped me to tackle complex challenges at the intersection of technology and security.
                </div>
                <div>
                    🚀 I thrive on exploring innovative approaches to solve modern problems
                    and am committed to driving impactful and secure solutions.
                </div>
            </div>
        </div>
    );
}

export default Profile;