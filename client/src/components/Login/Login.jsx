import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

import "./Login.scss";

function Login() {
  const { login } = useContext(AuthContext);

  return (
    <section className="LoginComponent">
      <section className="auth">
        <h1>Spotify Lyric</h1>
        <button
          id="login_button"
          className="button --big --bg-dark"
          onClick={() => login()}
        >
          Log in with Spotify
        </button>
      </section>
      <section className="photo_credits">
        <div className="artwork_credit">
          <span className="artwork_credit --artist_name">
            Photo by 
            <a
              href="https://unsplash.com/@yannispap"
              target="_blank"
              rel="noopener noreferrer"
            >Yannis Papanastasopoulos</a></span>
          <br />
          <span className="artwork_credit --service">Unsplash</span>
        </div>
      </section>
    </section>
  );
}

export default Login;
