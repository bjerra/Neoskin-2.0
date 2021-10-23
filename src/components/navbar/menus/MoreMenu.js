import React from 'react';
import { Link } from 'gatsby'
import { BokaButton} from '../../../components'

const MoreMenu = () => {

  return (
    <React.Fragment >  
      <div className="item">
        <Link to="/om">  
              Om
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