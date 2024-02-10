import { links } from "../../../config/links";

export const Baner = () => {
    return (
        <div className="container mt-2">
            <a href={links.mainPage}>
                <img
                    src={require("./../../../static/images/logo/store_logo.png")}
                    alt="Logo"
                    width={300}
                />
            </a>
        </div>
    );
};
