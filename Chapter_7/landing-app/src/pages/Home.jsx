import { Link, Navigate } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";

function Home() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check status user login
        // 1. Get token from localStorage
        const token = localStorage.getItem("token");

        // 2. Check token validity from API
        const currentUserRequest = await axios.get(
          "http://localhost:2000/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const currentUserResponse = currentUserRequest.data;

        if (currentUserResponse.status) {
          // Set user data to redux state
          dispatch(
            addUser({
              user: currentUserResponse.data.user,
              token: token,
            })
          );

          setUser(currentUserResponse.data.user);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);
    setUser({});
  };

  return isLoggedIn ? (
    <div className="p-3">
      <Button className="my-3" variant="danger" onClick={(e) => logout(e)}>
        Logout
      </Button>

      <Alert>Selamat datang {user.name}</Alert>
      <Link to="/about">
        <Button variant="success">Go to about page</Button>
      </Link>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default Home;
