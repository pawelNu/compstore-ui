import { Link } from "react-router-dom";
import { CategoryBar } from "./components/CategoryBar";
import { Navbar } from "../../layout/Navbar";

export const MainPage = () => {
    return (
        <div className="m-2">
            <div>
                <Navbar/>
            </div>
            <h1>TODO Main Page</h1>
            <div>
                <Link to="/">
                <img
                    src={require("./../../images/store_logo.png")}
                    alt="Logo"
                    width={300}
                />
                </Link>
            </div>
            <div>
                <CategoryBar />
            </div>
        </div>
    );
};
