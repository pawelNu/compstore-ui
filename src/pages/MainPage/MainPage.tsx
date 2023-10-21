import { Link } from "react-router-dom";
import { CategoryBar } from "./components/CategoryBar";
import { Navbar } from "../../layout/Navbar";
import { MainPageContentExample } from "./components/MainPageContentExample";

export const MainPage = () => {
    return (
        <div className="m-2">
            <div>
                <Navbar />
            </div>

            <div>
                <Link to="/">
                    <img
                        src={require("./../../images/store_logo.png")}
                        alt="Logo"
                        width={300}
                    />
                </Link>
            </div>
            <div>Welcome to CompStore. The best devices just for you!</div>
            <div>
                <CategoryBar />
            </div>
            <div>
                <MainPageContentExample />
            </div>
        </div>
    );
};
