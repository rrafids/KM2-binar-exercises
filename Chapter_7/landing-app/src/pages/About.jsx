import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { useState } from "react";

function About() {
  const userRedux = useSelector(selectUser);
  const [user, setUser] = useState(userRedux.creds);

  return (
    <div>
      <p>Halo, {user.name}. Selamat datang di halaman about.</p>
      <Link to="/">Go to home page</Link>
    </div>
  );
}

export default About;
