import React from 'react';
import {Link} from 'react-router-dom';

const navStyle = {
    backgroundColor: '#DBCA1C',
}

export const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={navStyle}>
              <Link className="navbar-brand" to='/routes/beerInfo'>The Afternoon Pub</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">
                      <Link className="nav-item nav-link" to='/routes/beerInfo'>Beer Info <span className="sr-only">(current)</span></Link>
                      {/* <Link className="nav-item nav-link" to='/routes/topAfriCap'>Comparison</Link> */}
                      <Link className="nav-item nav-link" to='/routes/Notes'>Notes</Link>
                 </div>
              </div>
            </nav>
        </div>
    )
}

