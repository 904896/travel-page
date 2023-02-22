import './index.css'

const Price = () => (
  <div className="bg-container">
    <h1 className="heading-section">
      We can do anything we want to if we stick to it long enough{' '}
    </h1>
    <p className="cont">Do what you can, with what you have, where you are. </p>
    <div className="parent-container">
      <button className="button-tour" type="button">
        See All Tours
      </button>
    </div>
    <div className="card-container-page">
      <div className="tourism-container">
        <img src="https://i.ibb.co/S3kJGtK/Image-6.png" alt="Image6" />
        <h1 className="tour-name"> Portu, Portugal </h1>{' '}
        <p className="tour-details">
          <span className="price-dollar"> $150 </span>{' '}
          <span className="duration"> 7 days tour </span>{' '}
        </p>
      </div>

      <div className="tourism-container">
        <img src="https://i.ibb.co/VQ5bLjM/Image-7.png" alt="Image7" />
        <h1 className="tour-name"> Paris, France </h1>
        <p className="tour-details">
          <span className="price-dollar"> $100 </span>
          <span className="duration"> 5 days tour </span>
        </p>{' '}
      </div>

      <div className="tourism-container">
        <img src="https://i.ibb.co/GFznksG/Image-8.png" alt="Image8" />
        <h1 className="tour-name"> Paris, France </h1>
        <p className="tour-details">
          <span className="price-dollar"> $250 </span>
          <span className="duration"> 6 days tour </span>
        </p>
      </div>

      <div className="tourism-container">
        <img src="https://i.ibb.co/ZSh0G24/Image-9.png" alt="Image9" />
        <h1 className="tour-name"> Amsterland, Netherland </h1>
        <p className="tour-details">
          <span className="price-dollar"> $150 </span>
          <span className="duration"> 10 days tour </span>
        </p>
      </div>
    </div>
  </div>
)
export default Price
