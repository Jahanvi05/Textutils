import React from 'react'

const Navbar = (props) => {
  return (

    <>
    <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">{props.navhome}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">{props.navabout}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">{props.navcontact}</a>
            </li>
          </ul>
          {/* <div className="d-flex">
            <div style={{height:"20px",width:"20px"}} onClick={()=>{props.toggleMode('danger')}} className="bg-danger rounded mx-2" >
            </div>
            <div style={{height:"20px",width:"20px"}} onClick={()=>{props.toggleMode('warning')}} className="bg-warning rounded mx-2" >
            </div>
          </div> */}
          

          <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{props.mode==='light'?'Enale dark mode':'Enable light mode'}</label>
</div>
        </div>
      </div>
    </nav>
    </>
    
    )
}

export default Navbar