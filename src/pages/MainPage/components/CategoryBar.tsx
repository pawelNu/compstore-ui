import "./../../../static/styles/CategoryBar.css";

export const CategoryBar = () => {
    return (
        <nav className="navbar navbar-expand-lg category-bar mt-2">
            <div className="container px-0">
                <div className="container-fluid px-0">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#categoryBar"
                        aria-controls="categoryBar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="categoryBar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active text-red"
                                    href="/pcs"
                                >
                                    PCs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Laptops
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Smartphones
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    TVs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
