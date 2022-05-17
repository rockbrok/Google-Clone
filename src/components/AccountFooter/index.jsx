import './style.css';

export default function AccountFooter() {
  return (
    <>
    <div className="account-footer">
      <a className="account-footer-items" href="https://policies.google.com/privacy" target="_blank">
        Privacy
      </a>
      <a className="account-footer-items" href="https://policies.google.com/terms" target="_blank">
        Terms
      </a>
      <a className="account-footer-items" href="https://myaccount.google.com/support" target="_blank">
        Help
      </a>
      <a className="account-footer-items" href="https://www.google.com/account/about/" target="_blank">
        About
      </a>
    </div>
    </>
  )
}