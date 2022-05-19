import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <p>This is about page.</p>
      <Link to="/">Go to home page</Link>
    </div>
  );
}

export default About;
