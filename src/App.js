import React from "react";
/*import "./styles.css";*/
import ReactDOM from "react-dom";

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image:
    "https://pics.filmaffinity.com/avengers_infinity_war-181539353-large.jpg",
  overview:
    "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to 2012's The Avengers and 2015's Avengers: Age of Ultron, and the nineteenth film in the Marvel Cinematic Universe (MCU). It was directed by Anthony and Joe Russo, written by Christopher Markus and Stephen McFeely, and features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldana, Josh Brolin, and Chris Pratt."
};

function Image(props) {
  /*console.log("Image props= ", props);*/
  return <img src={props.src} alt={props.alt} />;
}

 /*function MovieItem(props) {
--   console.log("MovieItem props= ", props);
--   const {
--     data: { title, vote_average, image, overview }
--   } = props;
--   return (
--     <div>
--       <Image src={image} alt={title} />
--       <p>{title}</p>
--       <p>{overview}</p>
--       <p>{vote_average}</p>
--     </div>
--   );
-- }*/

class MovieItem extends React.Component {
  render() {
    const {
    data: { title, vote_average, image, overview }
  } = this.props;
  console.log(this);
    return (
    <div>
      <Image src={image} alt={title} />
      <p>{title}</p>
      <p>{overview}</p>
      <p>{vote_average}</p>
    </div>
  );
  }
}


/*Component App, which in layout returns the divs */
function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
