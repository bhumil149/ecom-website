import { useCallback } from "react";
import { Button, Table } from "react-bootstrap";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    clearCart,
    decrementItem,
    incrementItem,
    removeItems,
} from "../Redux/cartSlice";
import Checkout from "./Checkout";

function CartItem() {
    const products = useSelector((state) => state.carts.products) || [];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeItem = useCallback(
        (id) => {
            dispatch(removeItems(id));
        },
        [dispatch]
    );

    const handleIncrement = useCallback(
        (id) => dispatch(incrementItem({ id })),
        [dispatch]
    );

    const handleDecrement = useCallback(
        (id) => {
            dispatch(decrementItem({ id }));
        },
        [dispatch]
    );

    const handleClearCart = useCallback(() => {
        dispatch(clearCart());
    }, [dispatch]);

    const handleImageClick = useCallback(
        (id) => {
            navigate(`/product/${id}`);
        },
        [navigate]
    );

    return (
        <div className="container">
            <div className="my-5 text-center">
                <h1 className="text-success mb-3">Shopping List</h1>
            </div>


            <Table>
                <thead className="text-center align-middle">
                    <tr>
                        <th className="text-info">Product Name</th>
                        <th className="text-info">Price</th>
                        <th className="text-info">Quantity</th>
                        <th className="text-info">Total</th>
                        <th className="text-info">Remove</th>
                    </tr>
                </thead>


                <tbody>
                    {products.length === 0 && (
                        <tr>
                            <td
                                colSpan={5}
                                className="text-center align-middle"
                                style={{ height: "45vh" }}
                            >
                                <h1>No items in cart</h1>
                            </td>
                        </tr>
                    )}
                    {products.map((item) => (
                        <tr key={item.id} className="text-center align-middle">
                            <td style={{ width: "40%" }} className="align-middle">
                                {item.images && item.images.length > 0 && (
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="w-25 ms-2 object-fit-scale"
                                        style={{ height: "150px", cursor: "pointer" }}
                                        onClick={() => handleImageClick(item.id)}
                                    />
                                )}
                                <span className="ms-2">{item.title}</span>
                            </td>
                            <td className="align-middle">$ {item.price}</td>
                            <td className="align-middle">
                                <div className="d-flex justify-content-center align-items-center">
                                    <button
                                        className="btn"
                                        onClick={() => handleDecrement(item.id)}
                                    >
                                        -
                                    </button>
                                    <span className="mx-3">{item.quantity}</span>
                                    <button
                                        className="btn"
                                        onClick={() => handleIncrement(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className="align-middle">$ {(item.price * item.quantity).toFixed(2)}</td>
                            <td className="align-middle">
                                <button
                                    className="bg-body background-transparent border-0 btn_delete"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <MdOutlineDeleteForever size={30} />
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>

            <div className="d-flex justify-content-between mb-5 mx-4">
                <div>
                    <Button
                        variant="dark"
                        className="me-3"
                        onClick={() => navigate("/", { replace: true })}
                    >
                        Continue Shopping
                    </Button>
                    <Button variant="danger" onClick={handleClearCart}>
                        Clear Cart
                    </Button>
                </div>
                <div>
                    <div>
                        <h3 className="text-success">CART TOTALS</h3>
                    </div>
                    <hr />
                    <div className="mb-4">
                        <div className="d-flex justify-content-between">
                            <span className="text-primary">Subtotal :</span>
                            <span>
                                ${" "}
                                {products
                                    .reduce((a, b) => a + b.price * b.quantity, 0)
                                    .toFixed(2)}
                            </span>
                        </div>
                        <br />
                        <div className="d-flex justify-content-between">
                            <span className="text-primary">Shipping : </span>
                            <span>$ 0.00</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <span className="text-success">Total : </span>
                            <span>
                                ${" "}
                                {products
                                    .reduce((a, b) => a + b.price * b.quantity, 0)
                                    .toFixed(2)}
                            </span>
                        </div>
                    </div>
                    <div>
                        <Checkout products={products} />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default CartItem;
