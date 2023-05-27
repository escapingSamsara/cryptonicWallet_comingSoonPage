import './Header.css'

const Header = () => {
  return (
    <div className="header-box">
      <div className="header-header-box">
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
      </div>
      <div className="header-text-box">
        <h2 className="header-text header1">
          the new all-in-one crypto wallet.
        </h2>
        <h2 className="header-text header2">coming soon.</h2>
      </div>
    </div>
  )
}
export default Header
