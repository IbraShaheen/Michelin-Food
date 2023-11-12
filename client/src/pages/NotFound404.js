import { useNavigate } from "react-router-dom";
import error404 from "../assets/404-error.jpg";

const NotFound404 = () => {
  const navigate = useNavigate();
  return (
    <center className="mt-20 mb-20">
      <img src={error404} alt="error 404" width="500px" />
      <button
        className="bg-blue-700 px-4 py-3 text-white text-2xl rounded-full font-semibold mt-10"
        onClick={() => navigate("/")}
      >
        Back to the home page
      </button>
    </center>
  );
};

export default NotFound404;
