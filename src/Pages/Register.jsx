import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import register1 from "../assets/regavif.avif";

function Register() {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.password !== inputValue.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        if (existingUsers.some((user) => user.email === inputValue.email)) {
            toast.error("User with this email already exists!");
            return;
        }

        const updatedUsers = [...existingUsers, inputValue];
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        toast.success("Registration Successful!");

        setInputValue({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });

        setTimeout(() => {
            navigate("/login", { replace: true });
        }, 2000);
    };

    return (
        <div className="container m-5">
            <ToastContainer position="top-right" autoClose={2000} />
            <div className="row m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="col-md-6 p-5">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name*</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                required
                                placeholder="Enter your First Name"
                                value={inputValue.firstName}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Last Name*</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                required
                                placeholder="Enter your Last Name"
                                value={inputValue.lastName}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your Email"
                                value={inputValue.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password*</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                required
                                placeholder="Enter your Password"
                                value={inputValue.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-5">
                            <Form.Label>Confirm Password*</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                required
                                placeholder="Enter your Confirm Password"
                                value={inputValue.confirmPassword}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <div>
                            <Button variant="warning" type="submit" className="w-100">
                                Register
                            </Button>
                        </div>
                    </Form>

                    <center className="m-5">
                        Already have an account? <Link to="/login">Login</Link>
                    </center>
                </div>

                <div className="col-md-6 p-5 d-flex justify-content-center align-items-center">
                    <img
                        src={register1}
                        alt="Loading..."
                        style={{
                            objectFit: "contain",
                            width: "100%",
                            mixBlendMode: "multiply",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Register;
