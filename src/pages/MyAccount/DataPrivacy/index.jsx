import AccountHeader from "../Header";
import AccountSideBar from "../../../components/AccountSideBar";
import AccountNavBar from "../../../components/AccountNavBar";
import { TrashIcon } from "@heroicons/react/outline";
import { Arrow } from "../Home";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { t } from "i18next";

import './style.css';

export default function DataPrivacy() {
  return (
    <>
      <Helmet>
        <title>{t("my-account.data-privacy.data_and_privacy")}</title>
      </Helmet>
      <main>
      <AccountHeader />
      <AccountNavBar />
        <section className="account-page-wrap">
          <AccountSideBar />
          <section className="account-flex">
            <div className="blue-wrap">
              <section className="account-main-wrap">
                <Heading />
                <Card />
                <DeleteAccount 
                  TrashIcon={TrashIcon}
                />
              </section>
              <div className="red-wrap" />
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

const Heading = () => (
  <>
    <div className="account-page-head align-center">Data and privacy</div>
    <div className="account-page-subhead data-subheading">In the key privacy options, you can choose what data is saved in your account, the ads you see, the information you share with others and much more.</div>
  </>
)

const Card = () => (
  <div className="personal-card-1">
    <div>
      <div className="account-page-head">Options</div>
      <div className="account-page-subhead">Other options to manage your data, such as choosing what happens to it if your account becomes inactive or is deleted.</div>
    </div>
    <div className="personal-scene-img-contain">
      <div className="data-scene-img" />
    </div>
  </div>
)

const DeleteAccount = ({ TrashIcon }) => (
  <div className="info-card info-card-no-pad account-bottom-marg">
    <button className="info-button">
    <Link to="/myaccount/deleteaccount/" className="no-deco">
        <div className="info-wrap info-wrap-bot-top">
          <TrashIcon className="trash-icon"/>
          <div className="wrap-column">
            <div className="info-title info-title-width data-title">
              Delete your Google Account
            </div>
            <div className="info-value data-value">
              Delete your account and all data
            </div>
          </div>
          <div className="wrap-row-space" />
          <Arrow />
        </div>
      </Link>
    </button>
  </div>
)