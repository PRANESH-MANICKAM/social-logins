import { manageError, manageSuccess } from "../shared/helper";
import { LoginSocialGoogle, GoogleLoginButton } from "../shared";

const Google = () => {
  return (
    <LoginSocialGoogle
      client_id={process.env.REACT_APP_GOOGLEID}
      onResolve={(response) => manageSuccess(response.data, "Google")}
      onReject={() => manageError()} // There are some more props you can use
    >
      <GoogleLoginButton
        style={{
          width: "240px",
          fontSize: "15px",
          letterSpacing: "1px",
          fontFamily: "poppins",
          fontWeight: "500",
        }}
      />
    </LoginSocialGoogle>
  );
};

export default Google;
