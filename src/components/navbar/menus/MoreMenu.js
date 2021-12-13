import React from 'react';
import { Link } from 'gatsby'

const MoreMenu = () => {

  return (
    <React.Fragment >  
       <div className="item">
        <a className="boka" href={'https://www.bokadirekt.se/places/neoskin-33692'} target="_blank" rel="noopener noreferrer">
              Boka Tid
        </a>  
      </div>
      <div className="item">
        <Link to="/om">  
              Om
        </Link>  
      </div>
      <div className="item">
        <Link to="/metod">
              Metod
        </Link>  
      </div>   
    </React.Fragment>
  )
}

export default MoreMenu;