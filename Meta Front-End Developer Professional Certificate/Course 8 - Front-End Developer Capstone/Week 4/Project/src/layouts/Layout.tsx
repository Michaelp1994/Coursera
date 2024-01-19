import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Toaster } from "@/components/ui/sonner";

interface Props {}

const layout: React.FC<Props> = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Toaster data-testid="toaster" />
            <Footer />
        </>
    );
};

export default layout;
