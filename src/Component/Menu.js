import React from 'react';


export default function Menu({isLoggedIn, logout}){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
           <div className="container">

               <a href="#" className="navbar-brand " style={{fontFamily:"Futura", fontWeight: "bold"}}> <h3><span style={{color:'#ec8d00'}}>eben</span>Draw</h3></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse"
                       data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                       aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse " id="navbarSupportedContent">
                   <ul className="navbar-nav ml-auto">
                       <li className="nav-item active">

                           <a className="nav-link" href="#">Acceuil  </a>
                       </li>
                       <li className="nav-item">
                           <a className="nav-link" href="#">Categories </a>
                       </li>

                   </ul>

                   <button className="btn " style={{background:"#ec8d00", color:"#fff", width:"100px", borderRadius:"20px"}}> Trouver</button>
                   <span className="nav-item">
                       {
                           (isLoggedIn) ?
                               <>
                                    <button className="btn " style={{background:"#ec0037", color:"#fff", width:"100px", borderRadius:"20px"}} onClick={logout}> Logout</button>
                                </>
                           :''
                       }
                   </span>

               </div>

           </div>
        </nav>
    )
}