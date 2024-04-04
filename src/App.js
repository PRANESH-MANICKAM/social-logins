import "./App.css";
import variables from "./shared/const";
import { FaceBook, Google, Instagram } from "./logins";

const App = () => {
  return (
    <div className="socialLogins">
      <div className="socialLoginModal">
        <p>{variables.title}</p>
        <FaceBook />
        <Google />
        <Instagram />
      </div>
    </div>
  );
};

export default App;
