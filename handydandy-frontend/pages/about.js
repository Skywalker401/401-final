import AboutUs from "../components/AboutUs";
import SideNav from "../components/SideNav";
import {useUser} from "@auth0/nextjs-auth0";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function About() {
    const {user} = useUser();

    return (
        <>


            <NavBar/>
            {user ? <div className="min-h-full">
                    <div className="py-10">
                        <div
                            className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                            <SideNav/>
                            <div className="col-span-9">
                                <AboutUs/></div>

                        </div>
                    </div>
                    <Footer/>
                </div>
                :
                <><AboutUs/> <Footer/></>
            }


        </>
    )
}