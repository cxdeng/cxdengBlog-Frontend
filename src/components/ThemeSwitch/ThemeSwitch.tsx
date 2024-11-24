import {useDispatch, useSelector} from 'react-redux';
import themeSwitchStyle from './ThemeSwitch.module.css';
import {AppDispatch, RootState} from "../../redux/store.ts";
import {ChangeEvent} from "react";
import {changeTheme} from "../../redux/Slices/ThemeSwitchSlice.ts";

function ThemeSwitch() {

    const dispatch = useDispatch<AppDispatch>(); // 获取 Dispatch 函数
    const isDarkMode = useSelector((state: RootState) => state.themeSwitch.isDarkMode);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const newTheme = event.target.checked;
        // 改变 Redux 状态
        dispatch(changeTheme(newTheme));
    }

    return (
        <div className={themeSwitchStyle["container"]}>
            <div className={themeSwitchStyle["content"]}>
                <label className={themeSwitchStyle["switch"]}>
                    <input type="checkbox" checked={isDarkMode} onChange={handleChange}/>
                    <span className={themeSwitchStyle["slider"]}></span>
                </label>
            </div>
        </div>
    );
}

export default ThemeSwitch;