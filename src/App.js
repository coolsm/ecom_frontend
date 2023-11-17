import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Navigation from "./customer/components/Navigation/navigation";
import HomePages from "./customer/pages/HomePages/HomePages";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ecom-backiend.vercel.app/users"
      );
      setData(response.data);
      console.log(response, "respponse");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <Navigation />
      <div>
        <HomePages />
      </div>
    </div>
  );
}

export default App;
