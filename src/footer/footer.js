import './css.css';


function Footer() {
  return (

<footer class="text-white  text-lg-start footer-style" >

<div class=" p-4">

  <div class="row mt-4">

    <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
      <h5 class="text-uppercase mb-4">About company</h5>

      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti.
      </p>

      <p>
        Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
        molestias.
      </p>

      <div class="mt-4">
          <a class="icono" href=""><i class="fa fa-facebook-square rrss rosa">&nbsp;</i></a>
          <a class="icono" href=""><i class="fa fa-twitter rrss rosa">&nbsp;</i></a>
          <a class="icono" href=""><i class="fa fa-instagram rrss rosa"></i> </a>
          <a class="icono" href=""><i class="fa fa-youtube-play rrss rosa">&nbsp;</i></a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4 mb-md-0" >
      <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

      <div class="form-outline form-white col-12" >
        <div class="search" >
        <input type="text" id="formControlLg" class="form-control form-control-lg" placeholder="Seach"/>
        <input type="submit" value="Buscar" class="btn login_btn text-white boton-enviar "  ></input>
      </div>
      </div>

      <ul class="fa-ul contacto-footer">
        <li class="mb-3">
          <a class="icono" href=""><i class="fa fa-home rrss rosa">&nbsp;</i></a><span class="ms-2">Warsaw, 00-967, Poland</span>
        </li>
        <li class="mb-3">
          <a class="icono" href=""><i class="fa fa-envelope rrss rosa">&nbsp;</i></a><span class="ms-2">contact@example.com</span>
        </li>
        <li class="mb-3">
          <a class="icono" href=""><i class="fa fa-phone rrss rosa">&nbsp;</i></a><span class="ms-2">+ 48 234 567 88</span>
        </li>
      </ul>
    </div>


    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
      <h5 class="text-uppercase mb-4">Opening hours</h5>

      <table class="table text-center text-white">
        <tbody class="fw-normal">
          <tr>
            <td>Mon - Thu:</td>
            <td>8am - 9pm</td>
          </tr>
          <tr>
            <td>Fri - Sat:</td>
            <td>8am - 1am</td>
          </tr>
          <tr>
            <td>Sunday:</td>
            <td>9am - 10pm</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

</div>



<div class="text-center p-3 copy" >
  © 2022 Copyright:
  <a class="text-white" href="">Sergio Mateos</a>
</div>

</footer>

    );
}

export default Footer;