import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import { GiAutoRepair } from "react-icons/gi";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";

const MaintenanceForm = ({ allData, setAllData }) => {
  const navigate = useNavigate();

  const [allMaintenanceData, setAllMaintenanceData] = useState({
    maintenance_date_start: null,
    maintenance_date_end: null,
  });
  const [maintenanceDate, setMaintenanceDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (event) => {
    setAllMaintenanceData({
      ...allMaintenanceData,
      [event.target.name]: event.target.value,
    });
  };
  const handleDateChange = (newValue) => {
    setMaintenanceDate(newValue);
    setAllMaintenanceData({
      ...allMaintenanceData,
      maintenance_date_start: newValue.startDate,
      maintenance_date_end: newValue.endDate,
    });
  };

  useEffect(() => {
    const isFormValid =
      allMaintenanceData.maintenance_date_start &&
      allMaintenanceData.maintenance_impact &&
      allMaintenanceData.maintenance_price;

    setFormValid(isFormValid);
  }, [allMaintenanceData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/restaurants",
        allData
      );
      if (response.status === 201 || response.status === 200) {
        navigate("/thank-you");
      }
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  //Keep updating the allData state which is the parent store for the data that will be submitted
  useEffect(() => {
    setAllData({ ...allData, ...allMaintenanceData });
  }, [allMaintenanceData]);

  return (
    <section id="maintenance-form" className="my-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
        Maintenance History
        <GiAutoRepair size={30} className=" ml-1 inline pb-1" />
      </h2>
      <div className="flex justify-center h-screen px-5">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="maintenance_date"
              >
                Maintenance Date
                <span className="text-red-600 font-extrabold">*</span>
              </label>
              <Datepicker
                classNames=" block w-full mt-1/2 border-blue-200 border-b focus:border-none pl-3 py-1 focus:outline-none "
                placeholder="Start date - End date"
                id="maintenance_date"
                name="maintenance_date"
                useRange={false}
                value={maintenanceDate}
                maxDate={Date.now()}
                onChange={(newValue) => handleDateChange(newValue)}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="maintenance_impact"
              >
                Maintenance Impact
                <span className="text-red-600 font-extrabold">*</span>
              </label>
              <select
                className="  w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="maintenance_impact"
                name="maintenance_impact"
                onChange={handleChange}
                required
              >
                <option value="" className=" text-gray-500">
                  Options
                </option>
                <option value="Complete_shutdown">Complete shutdown</option>
                <option value="Partial_shutdown">Partial shutdown</option>
                <option value="Normal_operations">Normal operations</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="maintenance_price"
              >
                The price of the maintenance
                <span className="text-red-600 font-extrabold">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="maintenance_price"
                name="maintenance_price"
                type="number"
                min="1"
                placeholder="Enter the price in JOD "
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="maintenance_comments"
            >
              Maintenance Comments
            </label>
            <textarea
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Do you have any comments regarding this maintenance"
              id="maintenance_comments"
              name="maintenance_comments"
              onChange={handleChange}
              rows="6"
            ></textarea>
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
                (3 / 3)
              </sub>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MaintenanceForm;
