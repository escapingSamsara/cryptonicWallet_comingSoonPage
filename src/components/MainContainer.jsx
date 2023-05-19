const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="text-container">
        <h1 className="header-header">
          cryptonic
          <span
            style={{
              color: '#fbfbfb',
              textShadow: '1px 1px 20px #48484851',
            }}
          >
            .
          </span>
          wallet
        </h1>
        <h2 className="header-text header1">
          the new all-in-one crypto wallet.
        </h2>
        <h2 className="header-text header2">coming soon.</h2>

        <div className="cta-text">
          <p>
            stay tuned for the launch and join us on this journey to <br />
            be one of the first to embrace the future of crypto safety
          </p>
        </div>
      </div>
      <div className="cta-container">
        <div className="socials">
          <div className="socials-icons">
            <a href="https://instagram.com">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="socials-icons">
            <a href="https://instagram.com">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="socials-icons">
            <a href="https://instagram.com">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="cta-btn">
          <button type="button" className="btn">
            subscribe for updates
          </button>
        </div>
      </div>
    </div>
  )
}
export default MainContainer
