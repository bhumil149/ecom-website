import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import imgSrc1 from "../assets/about11.avif";
import imgSrc2 from "../assets/about2222.avif";
import imgSrc3 from "../assets/about3.avif";
import download1 from "../assets/modern.avif";
import download3 from "../assets/sor.avif";
import download4 from "../assets/flex.avif";
import productDrop2 from "../assets/images.jpg";
import productDrop3 from "../assets/images.png";
import productDrop4 from "../assets/images1.jpg";
import download2 from "../assets/fast.avif";
import productDrop from "../assets/product-drop.jpg";

const blogItems = [
    {
        src: imgSrc1,
        alt: "First slide",
    },
    {
        src: imgSrc2,
        alt: "Second slide",
    },
    {
        src: imgSrc3,
        alt: "Third slide",
    },
];

function Blog() {
    return (
        <>
            <div>
                <Carousel data-bs-theme="dark">
                    {blogItems.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={item.src}
                                alt={item.alt}
                                style={{
                                    height: "90vh",
                                    objectFit: "cover",
                                }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <div className="container my-5">
                <div className="row g-4">

                    {/* Left Big Image */}
                    <div className="col-12 col-md-6 position-relative">
                        <img
                            src={productDrop}
                            alt="Loading..."
                            className="img-fluid w-100 rounded opacity-75"
                            style={{ height: "424px", objectFit: "cover" }}
                        />
                        <div className="position-absolute text-black" style={{ top: "10px", left: "50px" }}>
                            <h3><strong>25%</strong></h3>
                            <h3><strong>off everything</strong></h3>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-12 col-md-6">
                        <div className="row g-3">

                            {/* Top Half Image */}
                            <div className="col-12 position-relative">
                                <img
                                    src={productDrop2}
                                    alt=""
                                    className="img-fluid w-100 rounded opacity-50"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="position-absolute text-black" style={{ top: "10px", left: "50px" }}>
                                    <h3><strong>Meet the trends</strong></h3>
                                    <h3><strong>of the season</strong></h3>
                                </div>
                            </div>

                            {/* Bottom Half Two Images */}
                            <div className="col-6 position-relative">
                                <img
                                    src={productDrop4}
                                    alt=""
                                    className="img-fluid w-100 rounded opacity-75"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="position-absolute text-black" style={{ top: "10px", left: "20px" }}>
                                    <h3><strong>25%</strong></h3>
                                    <h3><strong>off everything</strong></h3>
                                </div>
                            </div>
                            <div className="col-6 position-relative">
                                <img
                                    src={productDrop3}
                                    alt=""
                                    className="img-fluid w-100 rounded"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* OUR PROMISE SECTION */}
            <div className="container my-5">
                <div className="bg-light p-5 rounded-4 shadow-sm text-center">
                    <h4 className="mb-3 text-primary fw-bold text-uppercase letter-spacing">
                        Our Promise
                    </h4>
                    <p className="text-muted lead px-2 px-md-5">
                        We promise to deliver only the finest — quality you can trust, service you can rely on.<br />
                        Your satisfaction is our priority; your happiness, our mission.
                    </p>
                </div>
            </div>


            {/* PROMISE CARDS */}
            <div className="container my-5">
                <div className="row g-4 justify-content-center">

                    {/* Card 1 */}
                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <Card
                            className="shadow-lg p-3 border-0 bg-light h-100 rounded-4 card-hover"
                            style={{ width: "18rem", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                        >
                            <Card.Img
                                variant="top"
                                src={download1}
                                style={{ mixBlendMode: "darken", objectFit: "cover", height: "13rem", borderRadius: "1rem" }}
                            />
                            <Card.Body>
                                <Card.Title className="text-center fw-bold text-primary">A Modern Approach</Card.Title>
                                <Card.Text className="text-center text-muted">
                                    We pride ourselves on sourcing on-trend flowers.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Card 2 */}
                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <Card
                            className="shadow-lg p-3 border-0 bg-light h-100 rounded-4 card-hover"
                            style={{ width: "18rem", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                        >
                            <Card.Img
                                variant="top"
                                src={download2}
                                style={{ mixBlendMode: "darken", objectFit: "cover", height: "13rem", borderRadius: "1rem" }}
                            />
                            <Card.Body>
                                <Card.Title className="text-center fw-bold text-primary">Fast Delivery</Card.Title>
                                <Card.Text className="text-center text-muted">
                                    Coast-to-coast next-day delivery and same-day delivery.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Card 3 */}
                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <Card
                            className="shadow-lg p-3 border-0 bg-light h-100 rounded-4 card-hover"
                            style={{ width: "18rem", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                        >
                            <Card.Img
                                variant="top"
                                src={download3}
                                style={{ mixBlendMode: "darken", objectFit: "cover", height: "13rem", borderRadius: "1rem" }}
                            />
                            <Card.Body>
                                <Card.Title className="text-center fw-bold text-primary">Sourced at the Farm</Card.Title>
                                <Card.Text className="text-center text-muted">
                                    No middlemen. No cutting corners. Just happiness.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Card 4 */}
                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <Card
                            className="shadow-lg p-3 border-0 bg-light h-100 rounded-4 card-hover"
                            style={{ width: "18rem", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                        >
                            <Card.Img
                                variant="top"
                                src={download4}
                                style={{ mixBlendMode: "darken", objectFit: "cover", height: "13rem", borderRadius: "1rem" }}
                            />
                            <Card.Body>
                                <Card.Title className="text-center fw-bold text-primary">Flexible</Card.Title>
                                <Card.Text className="text-center text-muted">
                                    Customize each delivery for your needs and timing.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>


        </>
    );
}

export default Blog;
