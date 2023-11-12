import { useNavigate } from "react-router-dom";
const ThankYou = ({}) => {
  const navigate = useNavigate();
  return(<>
  <center>
    <h2 className=" text-5xl text-blue-800">Thank you</h2>
    <button
        className="bg-blue-700 p-4 text-white text-2xl rounded font-semibold"
        onClick={() => navigate("/")}
      >
        Back to the home page
      </button>
  </center>
  </>)
};

export default ThankYou;
