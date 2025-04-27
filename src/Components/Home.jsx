/* eslint-disable react/prop-types */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button, Card, Pagination, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AllCategory from "../Pages/AllCategory";
import mainImages from "../assets/landing1.avif";
import ecommerse_platform from "../assets/landing22.avif";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home({ handleClickAdd }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 50000]);
    const productsPerPage = 12;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const skip = (currentPage - 1) * productsPerPage;
            let url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`;

            if (selectedCategory) {
                url = `https://dummyjson.com/products/category/${selectedCategory}?limit=${productsPerPage}&skip=${skip}`;
            }

            if (searchQuery) {
                url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=${productsPerPage}&skip=${skip}`;
            }

            try {
                const response = await axios.get(url, { responseType: "json" });
                const { products, total } = response.data;
                const filteredProducts = products.filter(
                    (product) =>
                        product.price >= priceRange[0] && product.price <= priceRange[1]
                );
                setProducts(filteredProducts);
                setTotalPages(Math.ceil(total / productsPerPage));
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [currentPage, selectedCategory, searchQuery, priceRange, productsPerPage]);

    useEffect(() => {
        if (selectedCategory) {
            setSearchQuery("");
        }
    }, [selectedCategory]);

    const handlePageChange = (pageNumber) => {
        if (totalPages > 0 && pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleImageClick = useCallback(
        (id) => {
            const url = `/product/${id}`;
            navigate(url);
        },
        [navigate]
    );

    const handleSearch = useCallback((event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    }, []);

    const handlePriceChange = (event) => {
        setPriceRange(([min]) => [min, parseInt(event.target.value)]);
        setCurrentPage(1);
    };

    const renderPaginationItems = () => {
        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, start + 4);
        const items = [];

        if (start > 1) {
            items.push(
                <Pagination.Item key={1} onClick={() => handlePageChange(1)}>
                    1
                </Pagination.Item>
            );
            items.push(<Pagination.Ellipsis key="ellipsis1" />);
        }

        for (let i = start; i <= end; i++) {
            items.push(
                <Pagination.Item
                    key={i}
                    active={i === currentPage}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </Pagination.Item>
            );
        }

        if (end < totalPages) {
            items.push(<Pagination.Ellipsis key="ellipsis2" />);
            items.push(
                <Pagination.Item
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                >
                    {totalPages}
                </Pagination.Item>
            );
        }

        return items;
    };

    return (
        <div>
            <div style={{ height: "720px" }}>
                <div className="position-relative me-2">
                    <img
                        src={mainImages}
                        alt=""
                        className="w-100 opacity-50"
                        style={{ height: "400px" }}
                    />
                    <div
                        className="text-black"
                        style={{ position: "absolute", right: "27%", top: "25%" }}
                    >
                        <h1 className="m-3" style={{ fontSize: "50px" }}>
                            <strong>Welcome To Our Store</strong>
                        </h1>
                        <center>
                            <h5>
                                <strong>Look Good, Feel Good, Do Good</strong>
                            </h5>
                        </center>
                    </div>
                    {/* main container */}
                    <div
                        className="shadow-lg mb-5 bg-body-tertiary rounded w-75"
                        style={{ position: "absolute", left: "13%", top: "70%" }}
                    >
                        <div className="row">
                            <div className="col-md-6">
                                <center className="p-5 opacity-75">
                                    <div className="text-success">
                                        <h3>ECOMMERCE PLATFORM</h3>
                                    </div>
                                    <div className="mt-5">
                                        <span>
                                            Welcome to  your trusted destination for seamless online shopping.
                                            We are dedicated to connecting customers with a wide range of quality products, from fashion and electronics to home essentials and beyond.
                                        </span>
                                    </div>
                                </center>
                            </div>

                            <div className="col-md-6">
                                <img
                                    src={ecommerse_platform}
                                    alt="loading..."
                                    className="w-100 h-100 rounded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="input-group shadow rounded-3 overflow-hidden">
                                <input
                                    type="search"
                                    className="form-control border-0 py-3 px-4"
                                    placeholder="🔍 Search Products..."
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    style={{ fontSize: "1.1rem" }}
                                />
                                <button className="btn btn-success px-4" type="button">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 mb-4">
                        <div className="card shadow-sm border-0 rounded-4 p-4 bg-light">
                            {/* Category Section */}
                            <div className="mb-5">
                                <AllCategory onSelectCategory={setSelectedCategory} />
                            </div>

                            {/* Price Range Section */}
                            <div>
                                <h4 className="text-success fw-bold mb-4 text-center">Price Range</h4>
                                <div className="text-center mb-2">
                                    <p className="mb-0 fw-semibold">$0 - ${priceRange[1]}</p>
                                </div>
                                <input
                                    type="range"
                                    className="form-range"
                                    min="0"
                                    max="50000"
                                    value={priceRange[1]}
                                    onChange={handlePriceChange}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="col-md-9">
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
                            <div>
                                <div className="row">
                                    {products.length > 0 ? (
                                        products.map((item, index) => (
                                            <div
                                                key={index}
                                                className="col-md-4 mb-5 d-flex justify-content-center align-items-center"
                                            >
                                                <Card
                                                    style={{ width: "21rem", height: "18rem", transition: "transform 0.3s ease" }}
                                                    className="shadow-sm hover-effect"
                                                >
                                                    <center>
                                                        <Card.Img
                                                            variant="top"
                                                            src={item.images[0]}
                                                            className="object-fit-scale"
                                                            alt="Product"
                                                            style={{ height: "8rem" }}
                                                            onClick={() => handleImageClick(item.id)}
                                                        />
                                                    </center>
                                                    <Card.Body>
                                                        <Card.Title>{item.title}</Card.Title>
                                                        <Card.Text>$ {item.price}</Card.Text>
                                                        <div className="d-flex justify-content-center">
                                                            <Button
                                                                variant="warning"
                                                                onClick={() => {
                                                                    handleClickAdd(item);
                                                                    toast.success('Added to cart!', {
                                                                        position: "top-right",
                                                                        autoClose: 2000,
                                                                        hideProgressBar: false,
                                                                        closeOnClick: true,
                                                                        pauseOnHover: true,
                                                                        draggable: true
                                                                    });
                                                                }}
                                                            >
                                                                Add to Cart
                                                            </Button>
                                                        </div>


                                                    </Card.Body>
                                                </Card>

                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-md-12 text-center">
                                            <h3>No products found within selected price range.</h3>
                                        </div>
                                    )}
                                </div>

                                <div className="m-5">
                                    <Pagination className="d-flex justify-content-center">
                                        <Pagination.Prev
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        />
                                        {renderPaginationItems()}
                                        <Pagination.Next
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        />
                                    </Pagination>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
