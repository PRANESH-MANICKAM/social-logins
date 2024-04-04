import { manageError, manageSuccess } from "../shared/helper";
import { LoginSocialInstagram, InstagramLoginButton } from "../shared";

const Instagram = () => {
  return (
    <LoginSocialInstagram
      client_id={process.env.REACT_APP_METAID}
      client_secret={process.env.REACT_APP_METASECRET}
      onResolve={(response) => manageSuccess(response.data, "Instagram")}
      onReject={() => manageError()} // There are some more props you can use
    >
      <InstagramLoginButton
        style={{
          width: "240px",
          fontSize: "15px",
          letterSpacing: "1px",
          fontFamily: "poppins",
          fontWeight: "500",
        }}
      />
    </LoginSocialInstagram>
  );
};

export default Instagram;
