import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IoInformationCircle } from "react-icons/io5";
import scrollTo from "gatsby-plugin-smoothscroll";

const InfoForm = ({ allData, setAllData, done1, setDone1 }) => {
  const [basicInfoData, setBasicInfoData] = useState({ landmarks: "" });
  const [formValid, fosetFormValid] = useState(false);

  const validateForm = () => {
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

    fosetFormValid(isForm1Valid);
  };

  const handleLandmarksChange = (event) => {
    const landmarksArray = event.target.value
      .split(",")
      .map((item) => item.trim());
    setBasicInfoData({ ...basicInfoData, landmarks: landmarksArray });
    validateForm();
  };

  const handlePhoneChange = (value) => {
    setBasicInfoData({ ...basicInfoData, phone_number: value });
    validateForm();
  };
  const handleChangeForm1 = (event) => {
    setBasicInfoData({
      ...basicInfoData,
      [event.target.name]: event.target.value,
    });
    validateForm();
  };

  const handleSubmitForm1 = (event) => {
    event.preventDefault();
    console.log("allData from basicInfo -->", allData);
    scrollTo("#menu-form");
  };

  useEffect(() => {
    setAllData({ ...allData, ...basicInfoData });
  }, [basicInfoData]);

  useEffect(() => {
    setDone1(formValid);
  }, [formValid]);

  return (
    <section id="info-form" className="my-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
        Basic Information
        <IoInformationCircle size={30} className=" ml-1 inline pb-1" />
      </h2>
      <div className="flex justify-center h-screen px-5">
        <form className="w-full max-w-lg" onSubmit={handleSubmitForm1}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Restaurant Name <span className="text-red-600 font-extrabold">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                name="name"
                type="text"
                placeholder="Downtown Burger"
                onChange={handleChangeForm1}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone_number"
              >
                Phone Number <span className="text-red-600 font-extrabold">*</span>
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
                Street Name <span className="text-red-600 font-extrabold">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="street_name"
                name="street_name"
                type="text"
                placeholder="123 Main Street"
                onChange={handleChangeForm1}
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
                Opening Time <span className="text-red-600 font-extrabold">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="opening_hours_start"
                name="opening_hours_start"
                type="time"
                onChange={handleChangeForm1}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="opening_hours_end"
              >
                Closing Time <span className="text-red-600 font-extrabold">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="opening_hours_end"
                name="opening_hours_end"
                type="time"
                onChange={handleChangeForm1}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="landmarks"
            >
              Nearby Landmarks <span className="text-red-600 font-extrabold">*</span>
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
                formValid
                  ? "bg-blue-500 hover:bg-blue-700 active:bg-blue-800"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue`}
              disabled={!formValid}
            >
              <sub className=" absolute left-3 bottom-2 text-sm text-gray-100">
                (1 / 3)
              </sub>
              NEXT
            </button>
          </div>
        </form>
      </div>
      <hr/>
    </section>
  );
};

export default InfoForm;
