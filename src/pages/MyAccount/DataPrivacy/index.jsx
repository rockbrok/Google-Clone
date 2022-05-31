import AccountHeader from "../Header";
import AccountSideBar from "../../../components/AccountSideBar";
import AccountNavBar from "../../../components/AccountNavBar";
import { TrashIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
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
                <Card />
                <DeleteAccount 
                  TrashIcon={TrashIcon}
                  ChevronRightIcon={ChevronRightIcon}
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

const Card = () => (
  <div className="personal-card-1 data-no-marg">
    <div>
      <div className="account-page-head">More options</div>
      <div className="account-page-subhead">Other options to manage your data, such as choosing what happens to it if your account becomes inactive or is deleted.</div>
    </div>
    <div className="personal-scene-img-contain">
      <div className="data-scene-img" />
    </div>
  </div>
)

const DeleteAccount = ({ TrashIcon, ChevronRightIcon }) => (
  <div className="info-card info-card-no-pad">
    <button className="info-button">
    <Link to="/myaccount/deleteaccount/" className="no-deco">
        <div className="info-wrap info-wrap-bot-top">
          <div className="info-title info-title-width data-title">
            <TrashIcon className="trash-icon"/>
            Delete your Google Account
          </div>
          <div className="info-value data-value">
            Delete your account and all data
          </div>
          <div className="info-arrow">
            <ChevronRightIcon className="chevron-arrow"/>
          </div>
        </div>
      </Link>
    </button>
  </div>
)