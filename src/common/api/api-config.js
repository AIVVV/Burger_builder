export const settings = {
  protocol: "https://",
  apiKey: "AIzaSyCgPk31FgHVng7S81xQB5CKnLd875UKHN0",
  serverOne: "react-burger-2678f.firebaseio.com/",
  serverTwo: "burger-project-ad34f.firebaseio.com/",
  authSingUp:
    "www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=",
  authSingIn:
    "www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key="
};

export const config = Object.freeze({
  baseURL: (protocol, url) => `${protocol}${url}`,
  authURL: (protocol, server, apiKey) => `${protocol}${server}${apiKey}`
});
