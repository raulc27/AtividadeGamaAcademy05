import isAuthenticated from '../../service/isAuth.js'

let Nav = {
    render: async () => {
        let view = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/signup">Sign Up!</a>
            </li>

           
                
            <li class="nav-item">
            <a class="nav-link" href="/#/dashboard">Dashboard</a>
            
          </li>
        
          <button class="btn btn-outline-light" id="destroy_session">Desconectar</button>
          
          </ul>
        </div>
      </nav>
        `

        return view
    },
    after_render: async ()=>{

      document.getElementById('destroy_session').addEventListener('click',function(){
        localStorage.clear()
        window.location.replace('#/login')
           })

    }
}


export default Nav;