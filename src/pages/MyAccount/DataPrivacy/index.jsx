import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import AccountHeader from "../Header"
import AccountSideBar from "../../../components/AccountSideBar"

export default function DataPrivacy() {
  return (
    <>
      <Helmet>
        <title>Data & privacy</title>
      </Helmet>
      <AccountHeader />
      <section className="account-page-wrap">
        <AccountSideBar />
        <section className="account-flex">
          <div>
            <button>
              <Link to="/myaccount/deleteaccount/">
                Delete your Google Account
              </Link>
            </button>
          </div>
        </section>
      </section>
    </>
  )
}