import React, { useEffect, useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import scrollTo from "gatsby-plugin-smoothscroll";

const MenuForm = ({ allData, setAllData, done2, setDone2 }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Classic Burger" },
    { id: 2, name: "Cheeseburger" },
    { id: 3, name: "Margherita Pizza" },
    { id: 4, name: "Pepperoni Pizza" },
    { id: 5, name: "Orange Juice" },
    { id: 6, name: "Apple Juice" },
  ]);

  const formValid = () => {
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
    setAllData({
      ...allData,
      menu_items_serving_times: menu_items_serving_times,
    });
    console.log("alldata from menu-->", allData);
    scrollTo("#maintenance-form");
  };

  useEffect(() => {
    setDone2(formValid);
  }, [formValid]);

  return (
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
              Items Selection <span className="text-red-600 font-extrabold">*</span>
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
                  </span>  <span className="text-red-600 font-extrabold">*</span>
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
                  </span>  <span className="text-red-600 font-extrabold">*</span>
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
              formValid()
                ? "bg-blue-500 hover:bg-blue-700 active:bg-blue-800"
                : "bg-gray-400 cursor-not-allowed"
            } text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue`}
            disabled={!formValid()}
          >
            <sub className=" absolute left-2 bottom-1 text-sm text-gray-100">
              (2 / 3)
            </sub>
            NEXT
          </button>
        </form>
      </div>
      <hr/>
    </section>
  );
};

export default MenuForm;
