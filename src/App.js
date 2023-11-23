import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setLoading } from "./features/userSlice";
import Homepage from "./pages/Homepage/Homepage";
import Authenticate from "./authenticate/Authenticate/Authenticate";
import "./App.css";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  // }, []);

  // const user = useSelector((state) => state.data.user.user);
  // const isLoading = useSelector((state) => state.data.user.isLoading);
  const user = {
    username: "prova",
    email: "qkLZs@ciao.com",
    password: "123456",
  };
  
  return (
    <div className="app">
      {/* {isLoading ? (
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authenticate />}</>
      )} */}
      <>{user ? <Homepage /> : <Authenticate />}</>
    </div>
  );
}

export default App;
