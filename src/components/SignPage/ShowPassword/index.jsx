import { t } from 'i18next';

import './style.css';

function showPassword() {
  var x = document.getElementById("password", "password2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

export const ShowPassword = () => (
  <div>
    <label className="pass-container" onClick={showPassword}>{t("password_show")}
      <span className="checkmark-bg">
        <input className="password-checkbox" type="checkbox" onClick={showPassword}/>
        <span class="checkmark"/>
      </span>
    </label>
  </div>
);