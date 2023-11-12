import { useNavigate } from "react-router-dom";
import { MdDoneOutline } from "react-icons/md";
const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <>
      <center className="h-96 mt-40">
        <p className=" text-5xl text-green-500 my-2 font-bold">
          THANK YOU
          <MdDoneOutline color="#22c55e" size={58} className="inline pl-2" />
        </p>
        <p className=" text-3xl mt-2 mb-20 font-semibold">
          Your data was submitted successfully
        </p>

        <button
          className="bg-green-500 px-4 py-3 text-white text-2xl rounded-full font-semibold mt-10"
          onClick={() => navigate("/")}
        >
          Back to the home page
        </button>
      </center>
    </>
  );
};

export default ThankYou;
