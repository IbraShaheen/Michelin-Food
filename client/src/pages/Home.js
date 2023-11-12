import React, { useState } from "react";
import InfoForm from "../components/InfoForm";
import MenuForm from "../components/MenuForm";
import MaintenanceForm from "../components/MaintenanceForm";
import Hero from "../components/Hero";

const Home = () => {
  // allData is the Global state that stores the data that will be submitted to the backend
  const [allData, setAllData] = useState({});

  // done1 & done2 states used to show the forms in the correct sequence first to last
  const [done1, setDone1] = useState(false);
  const [done2, setDone2] = useState(false);

  return (
    <>
      <Hero />

      <InfoForm allData={allData} setAllData={setAllData} done1={done1} setDone1={setDone1} />

      {done1 && <MenuForm allData={allData} setAllData={setAllData} done2={done2} setDone2={setDone2}  />}

      {done2 && <MaintenanceForm allData={allData} setAllData={setAllData} />}
    </>
  );
};

export default Home;
