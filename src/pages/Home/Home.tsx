import homeStyle from './Home.module.css'
import Welcome from "../../components/Welcome/Welcome.tsx";
import Profile from "../../components/Profile/Profile.tsx";

function Home() {


    return (
        <div className={homeStyle['container']}>
            <Welcome/>
            <Profile/>
        </div>
    );
}

export default Home;