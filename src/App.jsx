// import NetflixSeries from "./components/NetflixSeries";
// // import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// export const App = () => {
//   return (
//     <>
//     <section className="container">
//       {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
  
//       {/* <NetflixSeries /> */}
//       <EventHandling />
//       <EventProps />

//       </section>
//     </>
//   );
// };

// export default App;
// import "./components/Ev.css";
import { DerivedState } from "./components/hooks/DericedState";
import { State } from "./components/hooks/State";


export const App =() =>{
  return(
    <section className="container">
      <State/>
      <DerivedState/>
    </section>
  )
}