// import React from "react";

interface SeriesData {
  name: string;
  id: string;
  img_url: string;
  rating: string;
  description: string;
  cast: string[];
  genre: string[];
  watch_url: string;
}

interface NetflixSeriesProps {
  dataSendToNetflixSeries: SeriesData[];
}

function NetflixSeries({ dataSendToNetflixSeries }: NetflixSeriesProps) {
  console.log("dataSendToNetflixSeries : ", dataSendToNetflixSeries);
  return (
    <div>
      <h1>Netflix Series</h1>
      {dataSendToNetflixSeries.map((series) => (
        <div
          key={series.id}
          style={{ margin: "20px", padding: "15px", border: "1px solid #ccc" }}
        >
          <h2>{series.name}</h2>
          <img
            src={series.img_url}
            alt={series.name}
            style={{ maxWidth: "300px", height: "auto" }}
          />
          <p>{series.description}</p>
          <p>Rating: {series.rating}</p>
          <p>Cast: {series.cast.join(", ")}</p>
          <p>Genre: {series.genre.join(", ")}</p>
          <a href={series.watch_url} target="_blank" rel="noopener noreferrer">
            Watch Now
          </a>
        </div>
      ))}
    </div>
  );
}

export default NetflixSeries;
