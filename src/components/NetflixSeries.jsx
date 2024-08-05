import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
import '../App.css';

const NetflixSeries = () => {
  return (
    <div className='card-container'>
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} curElem={curElem} />
      ))}
    </div>
  );
};

export default NetflixSeries;
