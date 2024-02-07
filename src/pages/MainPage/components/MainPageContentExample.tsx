import { links } from "../../../config/links";
import { mainPageDataContent } from "../../../data/MainPageDataContent";

export const MainPageContentExample = () => {
    return (
        <div className="container p-2 mb-2">
            <div className="container mb-2 px-0">
                Welcome to CompStore. The best devices just for you!
            </div>
            <div className="row">
                {mainPageDataContent.map((data, index) => (
                    <div key={index + 1} className="col-sm-6 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{data.cartTitle}</h5>
                                <p className="card-text">{data.cartContent}</p>
                                <a
                                    href={links.mainPage}
                                    className="btn btn-primary"
                                >
                                    {data.buttonName}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
