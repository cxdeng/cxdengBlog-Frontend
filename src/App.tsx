import './App.css'
import {useSelector} from "react-redux";
import {RootState} from "./redux/store.ts";
import {useEffect} from "react";
import {useRoutes} from "react-router-dom";
import routes from "./routes/routes.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";

function App() {
    const routeTable = useRoutes(routes)
    const isDarkMode = useSelector((state: RootState) => state.themeSwitch.isDarkMode);

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? "rgb(30, 30, 32)" : "rgb(255, 255, 255)";
    }, [isDarkMode]); // 监听 isDarkMode 的变化

    return (
        <div className="App">
            <NavBar/>

            {/*
                    注册路由: 路由表
                */}
            {routeTable}

        </div>
    )
}

export default App