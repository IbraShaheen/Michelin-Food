import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IoInformationCircle } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import scrollTo from "gatsby-plugin-smoothscroll";

const Home = () => {
  // Basic information form
  const [allData, setAllData] = useState({});
  const [basicInfoData, setBasicInfoData] = useState({ landmarks: "" });
  const [form1Valid, setForm1Valid] = useState(false);

  //Menu items form
  const [selectedItems, setSelectedItems] = useState([]);
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Classic Burger" },
    { id: 2, name: "Cheeseburger" },
    { id: 3, name: "Margherita Pizza" },
    { id: 4, name: "Pepperoni Pizza" },
    { id: 5, name: "Orange Juice" },
    { id: 6, name: "Apple Juice" },
  ]);

  // Basic information functions start
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
  const handleChangeForm1 = (event) => {
    setBasicInfoData({
      ...basicInfoData,
      [event.target.name]: event.target.value,
    });
    validateForm1();
  };

  const handleSubmitForm1 = (event) => {
    event.preventDefault();
    console.log("basicInfoData -->", basicInfoData);
    setAllData({ ...allData, ...basicInfoData });
    scrollTo("#menu-form");
  };
  //Basic information functions end

  // Menu items functions
  const validateForm2 = () => {
    // Check if any options and times are selected
    return (
      selectedItems.length > 0 &&
      menuItems.some((item) => item.startTime && item.endTime)
    );
  };

  const handleItemChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );
    setSelectedItems(selectedOptions);
  };

  const handleTimeChange = (index, field, value) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index][field] = value;
    setMenuItems(newMenuItems);
  };

  const handleSubmitForm2 = (event) => {
    event.preventDefault();
    let filteredList = menuItems.filter(
      (item) => item.startTime && item.endTime
    );
    let menu_items_serving_times = filteredList.map((item) => ({
      item_name: item.name,
      serving_times: [`${item.startTime}-${item.endTime}`],
    }));
    console.log("menu items data-->", menu_items_serving_times);
    setAllData({
      ...basicInfoData,
      menu_items_serving_times: menu_items_serving_times,
    });
    console.log("alldata-->", allData);
  };

  return (
    <>
      {/* Basic information form section start */}
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
                  Restaurant Name
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
                  Opening Time
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
                  Closing Time
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
      <br />
      <br />
      <hr />
      {/* Menu items form section start */}
      <section id="menu-form" className="my-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Menu Items
          <IoFastFoodOutline size={30} className=" ml-1 inline pb-1" />
        </h2>
        <div className="flex justify-center h-screen px-5">
          <form onSubmit={handleSubmitForm2} className="max-w-md mx-auto mt-8 ">
            <div className="mb-6">
              <label
                htmlFor="itemSelect"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Item Selection
              </label>
              <select
                multiple
                className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="itemSelect"
                onChange={handleItemChange}
                value={selectedItems}
                required
              >
                {menuItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedItems.map((itemId) => (
              <div key={itemId} className="mb-6 ">
                <div>
                  <label
                    htmlFor={`startTime-${itemId}`}
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Serving Start Time for
                    <span className=" text-blue-600 ml-1">
                      {menuItems.find((item) => item.id === itemId)?.name}
                    </span>
                  </label>
                  <input
                    type="time"
                    id={`startTime-${itemId}`}
                    className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    onChange={(e) =>
                      handleTimeChange(itemId - 1, "startTime", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`endTime-${itemId}`}
                    className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                  >
                    Serving End Time for
                    <span className=" text-blue-600 ml-1">
                      {menuItems.find((item) => item.id === itemId)?.name}
                    </span>
                  </label>
                  <input
                    type="time"
                    id={`endTime-${itemId}`}
                    className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    onChange={(e) =>
                      handleTimeChange(itemId - 1, "endTime", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
            ))}

            <button
              type="submit"
              className={`relative text-2xl w-full font-semibold h-14 ${
                validateForm2()
                  ? "bg-blue-500 hover:bg-blue-700 active:bg-blue-800"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue`}
              disabled={!validateForm2()}
            >
              <sub className=" absolute left-2 bottom-1 text-sm text-gray-100">
                (2 of 3)
              </sub>
              NEXT
            </button>
          </form>
        </div>
      </section>
      {/* Menu items form section end */}
    </>
  );
};

export default Home;
