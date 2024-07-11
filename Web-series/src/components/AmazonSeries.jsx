import curElem from "../api/webseries.json"
    const AmazonSeries = () => {

    return (
        
        <ul>
            <h1><center>Filmfare OTT Award Winners</center></h1>
            {curElem.map((curElem) => {
                return (
                <li key={curElem.name}>
                    <div>
                        <img
                        src={curElem.img_url} 
                        alt={curElem.name}
                        width = "40%" 
                        height = "40%"
                        />
                    </div>
                    
                    <h2>Name: {curElem.name}</h2> 
                    <h3>IMDb: {curElem.IMDb}</h3>
                    <p>Summary: {curElem.description}</p>
                    <p>Genre: {curElem.genre}</p>
                    <p>Starring: {curElem.starring}</p>
                    <a href={curElem.watch_url} target = "_blank">
                        <button>Watch Now</button>
                    </a>
                </li>
                );
            })}
        
        </ul>
    );
  };

export default AmazonSeries;    
