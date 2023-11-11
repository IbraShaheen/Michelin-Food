import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IoInformationCircle } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";
import scrollTo from "gatsby-plugin-smoothscroll";

const Home = () => {
  // Basic information form
  const [basicInfoData, setBasicInfoData] = useState({ landmarks: "" });
  const [form1Valid, setForm1Valid] = useState(false);

  {
    /* Basic information functions start */
  }
  const validateForm1 = () => {
    const isPhoneNumberValid =
      basicInfoData.phone_number &&
      basicInfoData.phone_number !== "+962" &&
      basicInfoData.phone_number.length > 10;

    const isTimeValid =
      basicInfoData.opening_hours_start < basicInfoData.opening_hours_end;

    // Check if all other required fields are filled
    const isForm1Valid =
      isPhoneNumberValid &&
      isTimeValid &&
      Object.values(basicInfoData).every((value) => !!value);

    setForm1Valid(isForm1Valid);
  };

  const handleLandmarksChange = (event) => {
    const landmarksArray = event.target.value
      .split(",")
      .map((item) => item.trim());
    setBasicInfoData({ ...basicInfoData, landmarks: landmarksArray });
    validateForm1();
  };

  const handlePhoneChange = (value) => {
    setBasicInfoData({ ...basicInfoData, phone_number: value });
    validateForm1();
  };
  const handleChange = (event) => {
    setBasicInfoData({
      ...basicInfoData,
      [event.target.name]: event.target.value,
    });
    validateForm1();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO scroll to the next form
    console.log("basicInfoData -->", basicInfoData);
    // scrollTo("#info");
  };
  {
    /* Basic information functions end */
  }

  return (
    <>
      {/* Basic information form section start */}
      <section id="info-form" className="my-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Basic Information
          <IoInformationCircle size={30} className=" ml-1 inline pb-1" />
        </h2>
        <div className="flex justify-center h-screen px-5">
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Restaurant Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Downtown Burger"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone_number"
                >
                  Phone Number
                </label>
                <PhoneInput
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none"
                  id="phone_number"
                  name="phone_number"
                  international
                  defaultCountry="JO"
                  placeholder="Enter phone number"
                  onChange={(value) => handlePhoneChange(value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="street_name"
                >
                  Street Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="street_name"
                  name="street_name"
                  type="text"
                  placeholder="123 Main Street"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="opening_hours_start"
                >
                  Opening Time
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="opening_hours_start"
                  name="opening_hours_start"
                  type="time"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="opening_hours_end"
                >
                  Closing Time
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="opening_hours_end"
                  name="opening_hours_end"
                  type="time"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="landmarks"
              >
                Nearby Landmarks
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                id="landmarks"
                name="landmarks"
                onChange={handleLandmarksChange}
                required
                placeholder="Enter landmarks, Separated by commas (a, b, c)"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className={`relative text-2xl w-full font-semibold h-14 ${
                  form1Valid
                    ? "bg-blue-500 hover:bg-blue-700 active:bg-blue-800"
                    : "bg-gray-400 cursor-not-allowed"
                } text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue`}
                disabled={!form1Valid}
              >
                <sub className=" absolute left-3 bottom-2 text-sm text-gray-100">
                  (1 of 3)
                </sub>
                NEXT
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Basic information form section end */}
    </>
  );
};

export default Home;
