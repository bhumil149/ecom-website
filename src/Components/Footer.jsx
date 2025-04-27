import { useState } from "react";
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { TfiGoogle } from "react-icons/tfi";
import { toast, ToastContainer } from "react-toastify";

function Footer() {
    const [email, setEmail] = useState("");

    const socialIcons = [
        { icon: FaTwitter, link: "" },
        { icon: FaFacebookF, link: "" },
        { icon: TfiGoogle, link: "" },
        { icon: FaPinterest, link: "" },
        { icon: ImInstagram, link: "" },
    ];

    const footerSections = [
        {
            title: "SUPPORT",
            links: ["Contact Us", "FAQs", "Size Guide", "Shipping & Returns"],
        },
        {
            title: "SHOP",
            links: ["Mens Shopping", "Womens Shopping", "Kids Shopping", "Discounts"],
        },
        {
            title: "COMPANY",
            links: [
                "Our Story",
                "Careers",
                "Terms & Conditions",
                "Privacy & Cookie policy",
            ],
        },
        {
            title: "CONTACT",
            links: ["1-202-555-0105", "1-202-555-0106", "help@bk.com"],
        },
    ];

    const handleClick = (e) => {
        e.preventDefault();
        if (email) {
            toast.success("Thank you for subscribing!")
        } else {
            toast.error("Please enter an email address")
        }

        setEmail("");
    }

    return (
        <footer className="bg-dark text-white pt-5 px-3 pb-4">
            <ToastContainer position="top-center" autoClose={2000} />

            <div className="container">
                <div className="row justify-content-between align-items-start text-center text-md-start">

                    {/* Social Icons Section */}
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <h4 className="text-warning mb-3">Follow us</h4>
                        <div>
                            {socialIcons.map((icon, index) => (
                                <icon.icon key={index} className="m-2 fs-4 social-icon" />
                            ))}
                        </div>
                    </div>

                    {/* Footer Links Sections */}
                    {footerSections.map((section, index) => (
                        <div className="col-6 col-md-2 mb-4 mb-md-0" key={index}>
                            <h6 className="text-warning mb-3">{section.title}</h6>
                            <ul className="list-unstyled">
                                {section.links.map((link, i) => (
                                    <li key={i} className="mb-2 footer-link">{link}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-top mt-5 pt-3">
                <p className="text-secondary text-center mb-0">
                    © 2025 All rights reserved. Designed by{" "}
                    <a href="#" className="text-primary text-decoration-none hover-underline">
                        Bhumil Kotadiya
                    </a>.
                </p>
            </div>

        </footer>

    );
}

export default Footer;
