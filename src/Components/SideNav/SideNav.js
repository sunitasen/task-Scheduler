import React from 'react';
import './SideNav.css';

const SideNav = () =>{
 
    return(
        <div className="sidenav">
            <div className="pointer content f2 tc pt2 pb2 mt5" href="/today">Overall</div>
            <div className="pointer content f2 tc pt2 pb2 mt5" href="/prof">Work</div>
            <div className="pointer content f2 tc pt2 pb2 mt5" href="/pers">Personal</div>

        </div>
    );
    
}

export default SideNav;