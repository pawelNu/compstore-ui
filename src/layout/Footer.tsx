import "../static/styles/Footer.js";
import { footerStyles } from "../static/styles/Footer.js";

export const Footer = () => {
    return (
        <div className="card mt-2">
            <div className="card-body">
                <p className="card-text text-center" style={footerStyles}>
                    GitHub 2023 - Designed and implemented by @pawelnu & @grz55
                </p>
            </div>
        </div>
    );
};
