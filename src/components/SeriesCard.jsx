import '../App.css';

import styled from "styled-components";
const SeriesCard = (props) => {
  const { curElem } = props;

  // Determine the CSS class based on the rating
  const ratingClass = curElem.rating >= 9 ? 'high-rating' : 'low-rating';

  return (
    <li className='SeriesCard' key={curElem.id}>
      <div className='image-container'>
        <img 
          src={curElem.img_url}
          alt=""
          className='series-image'
        />
      </div>
      <div className='series-details'>
        <h2>Name: {curElem.name}</h2>
        <p>Summary: {curElem.description}</p>
        <p>Genre: {curElem.Genre}</p>
        <p>Cast: {curElem.cast}</p>
       
        <a className='row'
          href={curElem.watch_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Watch Now</button>
        </a>

        {/* Rating with conditional CSS class */}
        <p className={`Ra ${ratingClass}`}>Rating: {curElem.rating}</p>
      </div>
    </li>
  );
};

export default SeriesCard;
