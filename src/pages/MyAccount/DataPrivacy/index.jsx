import { Link } from "react-router-dom"

export default function DataPrivacy() {
  return (
    <>
    <div>
      <button>
        <Link to="/myaccount/deleteaccount/">
          Delete your Google Account
        </Link>
      </button>
    </div>
    </>
  )
}