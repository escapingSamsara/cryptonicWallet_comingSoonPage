import './Cta.css'

const Cta = () => {
  return (
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
  )
}
export default Cta
