import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  React.useEffect(() => {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      window.location.href =
        "https://accounts.spotify.com/authorize?client_id=1d75bef451bc4368b0c957c842eb7fda&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000";
    } else {
      localStorage.setItem("token", hashParams.access_token);
      history.push("/app");
    }
  }, [history]);

  return (
    <div>
      <h2>Login</h2>
    </div>
  );
};

export default Login;
