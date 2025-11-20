import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <p>If you see this, routing and layout are working correctly.</p>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
};

export default Home;
