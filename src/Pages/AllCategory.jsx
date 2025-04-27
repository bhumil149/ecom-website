/* eslint-disable react/prop-types */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function AllCategory({ onSelectCategory }) {
    const [categorys, setCategorys] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products/categories");
                setCategorys(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleCategoryClick = useCallback(
        (slug) => {
            setActiveCategory(slug);
            onSelectCategory(slug);
        },
        [onSelectCategory]
    );

    return (
        <div>
            <div className="">
                <div className="d-flex justify-content-center mb-3">
                    <h3>categories</h3>
                </div>
                <div className="overflow-y-scroll border border-2" style={{ height: "60vh" }}>
                    <div className="m-2">
                        <Button
                            variant={activeCategory === "" ? "dark" : "outline-dark"}
                            className="w-100"
                            onClick={() => handleCategoryClick("")}
                        >
                            All Products{" "}
                        </Button>
                    </div>
                    <div>
                        {categorys?.map((item, index) => (
                            <div key={index} className="m-2 mt-4">
                                <Button
                                    variant={
                                        activeCategory === item.slug ? "dark" : "outline-dark"
                                    }
                                    className="w-100 border border-secondary"
                                    onClick={() => handleCategoryClick(item.slug)}
                                >
                                    {item.name}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllCategory;
