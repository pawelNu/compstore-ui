import "../../../static/styles/CategoryBar.js";
import { categoryBarStyles } from "../../../static/styles/CategoryBar.js";

export const CategoryBar = () => {
    const categories: { name: string; link: string }[] = [
        { name: "PCs", link: "/pcs" },
        { name: "Laptops", link: "/laptops" },
        { name: "Smartphones", link: "/smartphones" },
        { name: "TVs", link: "/tvs" },
    ];

    return (
        <nav className="navbar navbar-expand-lg mt-2" style={categoryBarStyles}>
            <div className="container px-0">
                <div className="container-fluid px-0">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#categoryBar"
                        aria-controls="categoryBar"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="categoryBar">
                        <ul className="navbar-nav">
                            {categories.map((category, index) => (
                                <li key={index} className="nav-item">
                                    <a className="nav-link active text-red" href={category.link}>
                                        {category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
