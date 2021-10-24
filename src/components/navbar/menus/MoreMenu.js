import React from 'react';
import { Link } from 'gatsby'

const MoreMenu = () => {

  return (
    <React.Fragment >  
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
      <div className="item">
        <Link to="/nyhetsbrev">
              Nyhetsbrev
        </Link>  
      </div>
     
    </React.Fragment>
  )
}

export default MoreMenu;