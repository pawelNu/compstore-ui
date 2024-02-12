import { Route, Routes } from "react-router-dom";
import { links } from "../../config/links";
import { MainPage } from "./MainPage";

export const FrontPage = () => {
    return (
        <Routes>
            <Route path={links.mainPage} element={<MainPage />} />
        </Routes>
    );
};
