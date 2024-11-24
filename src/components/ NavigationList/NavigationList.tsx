import navigationStyle from './NavigationList.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store.ts";

function NavigationList() {

    const isDarkMode = useSelector((state: RootState) => state.themeSwitch.isDarkMode);

    return (
        <div className={navigationStyle["container"]}>
            <div className={`${navigationStyle.items} ${isDarkMode ? navigationStyle.dark : navigationStyle.light}`}>
                <div className={`${navigationStyle.item}`}>Home</div>
                <div className={`${navigationStyle.item}`}>BackEnd</div>
                <div className={`${navigationStyle.item}`}>FrontEnd</div>
                <div className={`${navigationStyle.item}`}>Computer Basic</div>
                <div className={`${navigationStyle.item} `}>Other</div>
            </div>
        </div>
    );
}

export default NavigationList;