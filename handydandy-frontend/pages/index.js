import NavBar from "../components/NavBar";
import Dashboard from '../components/dashboard/Dashboard';
import { useUser } from "@auth0/nextjs-auth0";
import SideNav from "../components/SideNav";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";

export default function Home() {
    const { user } = useUser();

    return (
        <div>

            {user ?
                <> <NavBar />
                    <div className="min-h-screen">
                        <div className="py-10">
                            <div
                                className="max-w-3xl mx-auto sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-6 lg:gap-8 lg:px-8">

                                <SideNav />
                                <Dashboard />

                            </div>
                        </div>
                    </div>

                </>

                : <><NavBar /> <LandingPage /></>

            }

            <Footer />
        </div>

    )
}
