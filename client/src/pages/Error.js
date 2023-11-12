import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <center className="h-96 mt-40">
        <p className=" text-5xl text-red-500 my-2 font-bold">
          Something went wrong
          <AiOutlineCloseCircle
            size={58}
            className="inline text-red-500 pl-2"
          />
        </p>
        <p className=" text-3xl mt-2 mb-20 font-semibold">
          Your data wasn't submitted correctly
        </p>

        <button
          className="bg-blue-700 px-4 py-3 text-white text-2xl rounded-full font-semibold mt-10"
          onClick={() => navigate("/")}
        >
          Try again
        </button>
      </center>
    </>
  );
};

export default ErrorPage;
