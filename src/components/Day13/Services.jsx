import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();

  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Services</h1>
        <button onClick={() => navigate("/")}
          className="bg-green-600 text-white px-4 py-2 rounded"> Go Home</button>
    </div>
  )
}

export default Services;