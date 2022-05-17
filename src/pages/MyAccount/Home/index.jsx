import { Link } from "react-router-dom";

export default function Account() {
  return (
      <center>
      <button>
        <Link to="/myaccount/personalinfo/">
          Personal Info
        </Link>
      </button>
      <br />
      <button>
        <Link to="/myaccount/data-and-personalization">
          Data & Privacy
        </Link>
      </button>
      </center>
  );
}