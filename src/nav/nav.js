import logo from './logo1.png';
import avatar from './pngwing.com.png';
import integrantes from './2b06c531-0866-42a5-bf79-5080876f287e.png';
import './css.css';


function Nav() {
  return (
    <div class="falso-body fondo">

    <header>
      <nav class="navbar navbar-expand-lg navbar-dark nav-style">
        <div class="container-fluid">
            <a class="navbar-brand" href=""><img class="img-fluid altura-logo"  src={logo}></img></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-white overflow-auto" id="navbarNav">
                <ul class="navbar-nav text-center">
                
              <li class="nav-item dropdown">
                        <a class="nav-link text-white menu letra" href="" aria-haspopup="true" aria-expanded="false">INICIO</a>
                    </li>
    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white menu letra" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">GESTIONAR EDITORES</a>
                        <div class="dropdown-menu bg-darkg" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item menu " href="">CREAR EDITORES</a>
                            <a class="dropdown-item menu" href="">ELIMINAR EDITORES</a>
                        </div>
                    </li>
    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white menu letra" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PLANTILLA</a>
                        <div class="dropdown-menu bg-darkg" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item menu" href="">PLANTILLA BASICA</a>
                            <a class="dropdown-item menu" href="">PLANTILLA MEDIA</a>
                            <a class="dropdown-item menu" href="">PLANTILLA GRANDE</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown bg-guia-compra px-2">
                        <a class="nav-link text-white menu guia-compra color" href="" aria-haspopup="true" aria-expanded="false">GESTIONAR FESTIVALES</a>
                    </li>
    
                </ul>
    
                <div class="menu-idioma ml-auto d-lg-block">
    
                        <ul class="navbar-nav lengua text-center">
    
                            <li class="nav-item dropdown">
                              <div class="dropdown">
                              <a class="dropdown-toggle" href="" aria-haspopup="true" aria-expanded="false" id="navbarDropdownMenuLink" data-toggle="dropdown"><img class="altura" src={avatar} ></img></a>
                              <div class="dropdown-menu">
                                <form class="ps-4 pe-4 area">
                                  <div class="mb-3">
                                    <label for="nombre" class="form-label">Usuario:</label>
                                    <input type="text" class="form-control" id="nombre" name="nombre"></input>
                                  </div>
                                  <div class="mb-3">
                                    <label for="clave" class="form-label">Contraseña:</label>
                                    <input type="password" class="form-control" id="clave" name="clave"></input>
                                  </div>
                                  <button type="submit" class="btn btn-primary">Iniciar</button>
                                </form>
                            </div>
                            </div>
                          </li>
                          <li class="idioma">
                            <div class="">
                              <p class="redes">
                              <a class="icono rosa" href="">ES</a>
                              <a class="icono" href="">|</a>
                              <a class="icono rosa" href="">EN</a>
                            </p>
                            </div>
                          </li>
                        </ul>
            </div>
        </div>
        </div>
      </nav>
    </header>

    <div class="todo">
      
      
    <div class="registro">
          <div class="card">
            <div class="card-header">
              <h3>Registrate</h3>
            </div>
            <div class="card-body">
              <form>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="username"></input>
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                  </div>
                  <input type="email" class="form-control" placeholder="email"></input>
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-unlock-alt"></i></span>
                  </div>
                  <input type="password" class="form-control" placeholder="password"></input>
                </div>
                <div class="row align-items-center remember">
                 
                </div>
                <div class="form-group">
                  <input type="submit" value="Crear" class="btn float-right login_btn text-white"></input>
                </div>
              </form>
            </div>
          </div>
        </div>

        </div>

<div class="sticky-container colored-icons">
  <ul class="sticky">

  <li>
    <a class="icono" href=""><i class="fa fa-facebook-square rrss rosa">&nbsp;</i></a>
  </li>
  <li>
    <a class="icono" href=""><i class="fa fa-twitter rrss rosa">&nbsp;</i></a>
    </li>
  <li>
    <a class="icono" href=""><i class="fa fa-instagram rrss rosa"></i> </a>
    </li>
  <li>
    <a class="icono" href=""><i class="fa fa-youtube-play rrss rosa">&nbsp;</i></a>
  </li>
  </ul>
  </div>





<section class="about-us color-section">

      <div class="row mb-4 contact-us" >
        <div class="col-lg-5">
          <h2 class="display-4 font-weight-light text-white">Contac Us</h2>
          <p class="font-italic text-muted text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
  <div >
    <div class="container blanco rounded shadow-sm py-5 px-4 col-6 automatico" >
      <form class="contancto-flex">
        <div class="col-md-5 form-line">
            <div class="form-group">
              <label class="color-negro" for="exampleInputUsername " >Your name</label>
              <input type="text" class="form-control" id="" placeholder=" Enter Name"></input>
            </div>
            <div class="form-group">
              <label class="color-negro"  for="exampleInputEmail" >Email Address</label>
              <input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email "></input>
            </div>	
            <div class="form-group">
              <label class="color-negro"  for="telephone" >Mobile</label>
              <input type="tel" class="form-control" id="telephone" placeholder=" Enter 9-digit mobile."></input>
            </div>
            <div class="form-group">
              <label class="color-negro"  for ="description" > Message</label>
               <textarea  class="form-control text-area" id="description" placeholder="Enter Your Message" ></textarea>
            </div>
            <div>
              <input type="submit" value="Enviar" class="btn float-right login_btn text-white boton-enviar"></input>
            </div>
          </div>
          <div class="col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.737422031492!2d-1.9699647179876918!3d43.32808905029765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a54183b87fed%3A0x6b3f34b4f0c14472!2sIES%20Xabier%20Zubiri%20Manteo%20BHI!5e0!3m2!1ses!2ses!4v1671545437515!5m2!1ses!2ses" class="col-12 mapa" width="600px" height="500px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </form>
      </div>
    </div>


    <div class="row mb-4 contact-us">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light text-white">Our team</h2>
        <p class="font-italic text-muted text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  
  <div class="container col-6 automatico">
    <div class="row text-center ">
      <div class="col-xl-4 col-sm-4 mb-4">
        <div class="blanco rounded shadow-sm py-5 px-4"><img src={integrantes} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
          <h5 class="mb-0 color-negro" >Marshmello</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f rosa"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter rosa"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram rosa"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin rosa"></i></a></li>
          </ul>
        </div>
      </div>
  
        <div class="col-xl-4 col-sm-4 mb-4">
          <div class="blanco rounded shadow-sm py-5 px-4"><img src={integrantes} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
            <h5 class="mb-0 color-negro" >Marshmello</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f rosa"></i></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter rosa"></i></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram rosa"></i></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin rosa"></i></a></li>
            </ul>
          </div>
        </div>
  
          <div class="col-xl-4 col-sm-4 mb-4">
            <div class="blanco rounded shadow-sm py-5 px-4"><img src={integrantes} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
              <h5 class="mb-0 color-negro" >Marshmello</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f rosa"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter rosa"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram rosa"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin rosa"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


  </section>




  




  </div>
  );
}

export default Nav;
