import './index.css'

const About = () => (
  <div className="about-container">
    <img
      src="https://i.ibb.co/FmQCgH7/Back.png"
      alt="Back"
      border="0"
      className="img1"
    />
    <img src="https://i.ibb.co/qJbKH8L/Front.png" alt="Front" border="0" />

    <div className="section">
      <div className="matter">
        <h1 className="about-heading">About US</h1>
        <p className="about-paragraph">
          Our tour plan is to fulfil your dream wish
        </p>
        <p>
          Understand to achieve anything requires faith and belief in yourself,
          vision, hard work, determination, and dedication.
        </p>
      </div>

      <div className="likes">
        <div className="views">
          <h1 className="heading">15</h1>
          <p className="feedback"> Years of Experience</p>
        </div>
        <div className="views">
          <h1 className="heading">1k</h1>
          <p className="feedback">Successful Trips</p>
        </div>
        <div className="views">
          <h1 className="heading">20K</h1>
          <p className="feedback">Happy Customers</p>
        </div>
        <div className="views">
          <h1 className="heading">4.9</h1>
          <p className="feedback">Overall Rating</p>
        </div>
      </div>
    </div>
  </div>
)

export default About
