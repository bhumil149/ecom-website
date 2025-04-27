import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../assets/contact.avif";

function Contact() {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const isFormEmpty = Object.values(inputValue).some((value) => !value);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormEmpty) {
            toast.error("Please fill in all fields");
        } else {
            toast.success("Thank you for your message!");
            setInputValue({
                name: "",
                email: "",
                title: "",
                message: "",
            });
        }
    };

    return (
        <>
            <div className="container py-5">
                <ToastContainer position="top-center" autoClose={2000} />
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Contact Us</h1>
                    <p className="text-muted">We would love to hear from you!</p>
                </div>

                <div className="row align-items-center">
                    {/* Contact Form */}
                    <div className="col-md-8 mb-5 mb-md-0">
                        <div className="p-4 p-md-5 shadow rounded-4 bg-white">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-4">
                                    <input
                                        className="form-control p-3"
                                        name="name"
                                        type="text"
                                        placeholder="Your Name *"
                                        required
                                        value={inputValue.name}
                                        onChange={handleChange}
                                        aria-label="Your Name"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <input
                                        className="form-control p-3"
                                        name="email"
                                        type="email"
                                        placeholder="Your Email *"
                                        required
                                        value={inputValue.email}
                                        onChange={handleChange}
                                        aria-label="Your Email"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <input
                                        className="form-control p-3"
                                        name="title"
                                        type="text"
                                        placeholder="Subject *"
                                        required
                                        value={inputValue.title}
                                        onChange={handleChange}
                                        aria-label="Subject"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <textarea
                                        className="form-control p-3"
                                        rows={5}
                                        name="message"
                                        placeholder="Your Message *"
                                        required
                                        value={inputValue.message}
                                        onChange={handleChange}
                                        aria-label="Message"
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-dark px-5 py-2 fw-bold" type="submit">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="col-md-4 text-center">
                        <img
                            src={img}
                            alt="Contact Illustration"
                            className="img-fluid rounded-4 shadow"
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}
                        />
                    </div>

                </div>
            </div>

        </>
    );
}

export default Contact;
