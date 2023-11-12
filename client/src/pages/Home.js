import React, { useState } from "react";
import InfoForm from "../components/InfoForm";
import MenuForm from "../components/MenuForm";
import MaintenanceForm from "../components/MaintenanceForm";

const Home = () => {
  const [allData, setAllData] = useState({});
  const [done1, setDone1] = useState(false);
  const [done2, setDone2] = useState(false);

  console.log("From home-->", allData);

  return (
    <>
      <InfoForm allData={allData} setAllData={setAllData} done1={done1} setDone1={setDone1} />

      {done1 && <MenuForm allData={allData} setAllData={setAllData} done2={done2} setDone2={setDone2}  />}

      {done2 && <MaintenanceForm allData={allData} setAllData={setAllData} />}
    </>
  );
};

export default Home;