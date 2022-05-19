import AccountHeader from "../Header";
import AccountSideBar from "../../../components/AccountSideBar";
import AccountNavBar from "../../../components/AccountNavBar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function DataPrivacy() {
  return (
    <>
      <Helmet>
        <title>Data & privacy</title>
      </Helmet>
      <main>
      <AccountHeader />
      <AccountNavBar />
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
      </main>
    </>
  )
}