import { manageError, manageSuccess } from "../shared/helper";
import { FacebookLoginButton, LoginSocialFacebook } from "../shared";

const FaceBook = () => {
  return (
    <LoginSocialFacebook
      appId={process.env.REACT_APP_METAID}
      onResolve={(response) => manageSuccess(response.data, "Facebook")}
      onReject={() => manageError()} // There are some more props you can use
    >
      <FacebookLoginButton
        style={{
          width: "240px",
          fontSize: "15px",
          letterSpacing: "1px",
          fontFamily: "poppins",
          fontWeight: "500",
        }}
      />
    </LoginSocialFacebook>
  );
};

export default FaceBook;
