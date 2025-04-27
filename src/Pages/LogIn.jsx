import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login1 from "../assets/login.avif";

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please enter both email and password");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email address");
            return;
        }

        const existingUsersJSON = localStorage.getItem("users");

        if (existingUsersJSON) {
            try {
                const existingUsers = JSON.parse(existingUsersJSON);
                const existingUser = existingUsers.find(
                    (user) => user.email === email && user.password === password
                );

                if (existingUser) {
                    localStorage.setItem("currentUser", JSON.stringify(existingUser));
                    toast.success("Login Successful!");
                    setTimeout(() => {
                        setEmail("");
                        setPassword("");
                        navigate("/", { replace: true });
                    }, 2000);
                } else {
                    toast.error("Invalid email address or password");
                }
            } catch (error) {
                console.error("Error parsing user data from localStorage:", error);
                toast.error("An error occurred. Please try again later.");
            }
        } else {
            toast.warn("No users found. Please sign up first.");
        }
    };

    return (
        <div className="container">
            <ToastContainer position="top-right" autoClose={2000} />
            <div className="row m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="col-md-7 pe-5">
                    <center>
                        <div>
                            <strong>
                                <h1>Welcome to Ecommerce-Platform</h1>
                            </strong>
                            <br/>
                        </div>
                        <div>
                            <img
                                src={login1}
                                alt="Loading..."
                                style={{ objectFit: "contain", width: "100%" }}
                            />
                        </div>
                    </center>
                </div>

                <div className="col-md-5 mt-4">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-label="Email address"
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Password*</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                placeholder="Enter your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-label="Password"
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Check
                                type="checkbox"
                                label="Remember me"
                                aria-label="Remember me"
                            />
                        </Form.Group>

                        <Button
                            variant="warning"
                            type="submit"
                            className="w-100"
                            aria-label="Login"
                        >
                            Login
                        </Button>
                    </Form>

                    <center className="mt-4">
                        <div>
                            <p>Forgot password?</p>
                        </div>

                        <div>
                            <p>
                                Don&apos;t have an account?{" "}
                                <Link to="/signup">Sign Up Now</Link>
                            </p>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
