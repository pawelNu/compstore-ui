import { CategoryBar } from "./components/CategoryBar";
import { Navbar } from "../../layout/Navbar";
import { MainPageContentExample } from "./components/MainPageContentExample";
import { Footer } from "../../layout/Footer";
import { Baner } from "./components/Baner";

export const MainPage = () => {
    return (
        <div className="m-2">
            <Navbar />
            <Baner />
            <CategoryBar />
            <div className="container p-2">
                Welcome to CompStore. The best devices just for you!
            </div>
            <MainPageContentExample />
            <Footer />
        </div>
    );
};
