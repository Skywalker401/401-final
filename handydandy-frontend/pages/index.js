import styles from '../styles/Home.module.css'
import NavBar from "../components/NavBar";
import Dashboard from "../components/dashboard/Dashboard";
import AboutUs from "../components/AboutUs";
import { useUser } from "@auth0/nextjs-auth0";
import SideNav from "../components/SideNav";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";


export default function Home() {
    const { user } = useUser();

    return (
        <>
            {user ? <> <NavBar />
                <div className="min-h-full">
                    <div className="py-10">
                        <div
                            className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">

                            <SideNav/>
                            <Dashboard/>

                        </div>
                        <Footer/>
                    </div>
                </div>
            </>

                : <><NavBar/> <LandingPage/><Footer/></>

            }
        </>
    )
}
