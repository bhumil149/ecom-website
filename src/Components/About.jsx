import about2 from "../assets/about_us_1.jpg";
import about1 from "../assets/about_us_2.webp";
import abo from "../assets/mission.avif";
import abo1 from "../assets/vission.avif";

function About() {
    return (
        <div className="container my-5">
            {/* About Image and Description */}
            <div className="row align-items-center mb-5">
                <div className="col-12 col-md-6 mb-4 text-center">
                    {about1 && (
                        <img
                            src={about1}
                            alt="About Us"
                            className="img-fluid rounded shadow"
                            style={{ maxWidth: "80%", mixBlendMode: "multiply" }}
                        />
                    )}
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="mb-3 fw-bold text-primary">About Us</h1>
                    <p className="text-muted">
                        We are passionate about making online shopping a joyful and effortless experience for everyone.
                        Our journey began with a simple vision: to create a platform where quality, affordability, and
                        convenience meet. We specialize in offering a wide range of carefully selected products across
                        fashion, electronics, beauty, and home essentials — ensuring that no matter what you’re looking for,
                        you can find it here. Every item we feature is handpicked for its quality and value because we
                        believe our customers deserve only the best.
                    </p>
                </div>
            </div>

            {/* Extra Description */}
            <div className="p-4 shadow-lg rounded bg-light mb-5">
                <p className="fs-5 fst-italic text-center text-secondary">
                    We bring you premium, handpicked products designed to inspire and elevate your everyday life.
                    From exclusive new arrivals to trusted bestsellers, we offer unmatched quality, fast delivery,
                    and easy returns — all at unbeatable prices. Shop with confidence and discover the perfect blend
                    of style, value, and convenience.
                </p>
            </div>

            {/* Mission and Vision */}
            <div className="row justify-content-center">
                {/* Mission Card */}
                <div className="col-lg-6 col-md-10 mb-5">
                    <div className="card shadow border-0 h-100 rounded-4 hover-shadow">
                        <img
                            src={abo}
                            className="card-img-top rounded-top-4"
                            alt="Our Mission"
                            style={{ height: "300px", objectFit: "cover" }}
                        />
                        <div className="card-body p-4">
                            <h2 className="text-center text-primary mb-4">Our Mission</h2>
                            <ul className="list-unstyled">
                                {[
                                    {
                                        icon: "bi-check-circle-fill",
                                        color: "text-dark",
                                        text: "Deliver Quality: Offer only premium, authentic, and reliable products to our customers.",
                                    },
                                    {
                                        icon: "bi-check-circle-fill",
                                        color: "text-dark",
                                        text: "Customer First: Focus on providing a smooth, enjoyable, and satisfying shopping experience every time.",
                                    },
                                    {
                                        icon: "bi-check-circle-fill",
                                        color: "text-dark",
                                        text: "Accessibility: Make great products available to everyone at fair and affordable prices.",
                                    },
                                    {
                                        icon: "bi-check-circle-fill",
                                        color: "text-dark",
                                        text: "Innovation: Continuously update our collection with the latest trends, technologies, and styles.",
                                    },
                                    {
                                        icon: "bi-check-circle-fill",
                                        color: "text-dark",
                                        text: "Trust & Transparency: Build long-term relationships by being honest, clear, and committed to excellent service.",
                                    },
                                ].map((item, index) => (
                                    <li key={index} className="d-flex align-items-start mb-3">
                                        <i className={`bi ${item.icon} ${item.color} me-3`} style={{ fontSize: '1.5rem' }}></i>
                                        <span className={item.color}>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Vision Card */}
                <div className="col-lg-6 col-md-10 mb-5">
                    <div className="card shadow border-0 h-100 rounded-4 hover-shadow">
                        <img
                            src={abo1}
                            className="card-img-top rounded-top-4"
                            alt="Our Vision"
                            style={{ height: "300px", objectFit: "cover" }}
                        />
                        <div className="card-body p-4">
                            <h2 className="text-center text-primary mb-4">Our Vision</h2>
                            <ul className="list-unstyled">
                                {[
                                    {
                                        icon: "bi-lightbulb-fill",
                                        color: "text-dark",
                                        text: "Innovation: To constantly innovate and offer products that inspire creativity and improve daily lives.",
                                    },
                                    {
                                        icon: "bi-heart-fill",
                                        color: "text-dark",
                                        text: "Community Impact: Contributing to community well-being through meaningful initiatives and sustainability.",
                                    },
                                    {
                                        icon: "bi-check-circle-fill",
                                        color: "text-dark",
                                        text: "Excellence: Striving for excellence in every product, service, and interaction.",
                                    },
                                ].map((item, index) => (
                                    <li key={index} className="d-flex align-items-start mb-3">
                                        <i className={`bi ${item.icon} ${item.color} me-3`} style={{ fontSize: '1.5rem' }}></i>
                                        <span className={item.color}>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
