/* eslint-disable react/prop-types */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import {
    FaFacebookF,
    FaInstagram,
    FaPinterest,
    FaStar,
    FaTwitter,
} from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TfiGoogle } from "react-icons/tfi";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails({ handleClickAdd }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [rating, setRating] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    `https://dummyjson.com/products/${id}`
                );
                setProduct(data);
                setRating(data?.rating || 0);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleImageClick = useCallback((imageUrl) => {
        setModalImage(imageUrl);
        setShowModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);

    return (
        <div>
            {isLoading ? (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "80vh" }}
                >
                    <Spinner
                        animation="border"
                        variant="dark"
                        style={{ width: "3rem", height: "3rem" }}
                    />
                </div>
            ) : (
                <>
                    <div className="mt-4 me-5 d-flex justify-content-end container">
                        <button
                            className="bg-body border-0 text-dark"
                            onClick={() => navigate(-1)}
                        >
                            <IoIosArrowRoundBack size={30} className="m-2" />
                            Go Back
                        </button>
                    </div>

                    <div className="row container m-auto">
                        <div className="col-md-6 p-auto m-auto">
                            <img
                                src={product?.images[0] || ""}
                                alt="Product"
                                className="shadow-lg p-3 mb-5 bg-body rounded"
                                id="product_img"
                                onClick={() => handleImageClick(product?.images[0])}
                                style={{ cursor: "pointer" }}
                            />
                        </div>

                        <div className="col-md-6 p-5">
                            <div>
                                <div>
                                    <h2 className="my-3">{product?.title}</h2>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <div>
                                        {[...Array(5)].map((_, index) => {
                                            const currentRate = index + 1;
                                            return (
                                                <label key={index} htmlFor={`star-${currentRate}`}>
                                                    <input
                                                        type="radio"
                                                        id={`star-${currentRate}`}
                                                        name="rate"
                                                        className="d-none"
                                                        value={currentRate}
                                                        checked={currentRate === rating}
                                                        onChange={() => setRating(currentRate)}
                                                    />
                                                    <FaStar
                                                        size={15}
                                                        color={currentRate <= rating ? "#FFD700" : "gray"}
                                                        style={{ cursor: "pointer" }}
                                                    />
                                                </label>
                                            );
                                        })}
                                    </div>
                                    <div className="mx-3 d-flex justify-content-center align-items-center">
                                        <p>
                                            {product?.reviews?.length || 0} reviews
                                            <span className="vr mx-2"></span>
                                        </p>
                                        <p>Write your review</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="my-3">$ {product?.price}</h3>
                                </div>
                                <div>
                                    <span>{product?.description}</span>
                                </div>
                            </div>
                            <div className="my-4">
                                <Button
                                    variant="outline-dark"
                                    onClick={() => handleClickAdd(product)}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                            <div className="mt-3">
                                <p>
                                    <strong>Categories :</strong> {product?.category}
                                </p>
                                <p>
                                    <strong>TAGS :</strong>{" "}
                                    {product?.tags?.map((tag, index) => (
                                        <span key={index} className="me-2">
                                            {tag},
                                        </span>
                                    ))}
                                </p>
                                <p>
                                    <strong>SHARE :</strong>
                                    <FaTwitter className="m-2" />
                                    <FaFacebookF className="m-2" />
                                    <TfiGoogle className="m-2" />
                                    <FaPinterest className="m-2" />
                                    <FaInstagram className="m-2" />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex m-5">
                        {product?.images?.length > 1 &&
                            product?.images?.slice(1).map((image, index) => (
                                <div key={index} onClick={() => handleImageClick(image)}>
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="mx-4 object-fit-contain"
                                        style={{
                                            width: "250px",
                                            height: "250px",
                                            cursor: "pointer",
                                            mixBlendMode: "multiply",
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>
                            ))}
                    </div>

                    {/* Modal for larger image */}
                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        <Modal.Body className="text-center">
                            <img src={modalImage} alt="Large Image" className="img-fluid" />
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </div>
    );
}

export default ProductDetails;
