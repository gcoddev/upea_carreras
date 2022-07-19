<template>
  <div class="navbar-area">
    <!-- navbar top start -->
    <div class="navbar-top">
      <div class="container">
        <div class="row">
          <div class="col-6 align-self-center text-md-left text-center">
            <ul>
              <li><a href="about.html">Sobre nosotros</a></li>
              <li><a href="contact.html">Soporte</a></li>
              <li class="d-none d-md-inline-block">
                <p>
                  <i class="fa fa-envelope-o"></i>
                  {{ Institucion.institucion_correo1 }}
                </p>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <ul class="text-right">
              <li class="d-lg-inline-block d-none">
                <p>
                  <i class="fa fa-phone"></i>
                  +591
                  {{ Institucion.institucion_celular1 }}
                </p>
              </li>
              <li class="d-lg-inline-block d-none">
                <p>
                  <i class="fa fa-phone"></i>
                  +591 {{ Institucion.institucion_telefono1 }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-area-1 navbar-area navbar-expand-lg">
      <div class="container nav-container">
        <div class="responsive-mobile-menu">
          <button
            class="menu toggle-btn d-block d-lg-none"
            data-target="#edumint_main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-left"></span>
            <span class="icon-right"></span>
          </button>
        </div>
        <div class="logo">
          <router-link to="/">
            <div class="logo_carrera">
              <img
                :src="
                  url_api + '/InstitucionUpea/' + Institucion.institucion_logo
                "
                alt="img"
                width="70"
                height="70"
              />
              <h3>{{ Institucion.institucion_nombre }}</h3>
            </div></router-link
          >
        </div>
        <!-- <div class="nav-left-part nav-right-part-desktop">
          <label class="single-input-inner right-side-icon">
            <input type="text" placeholder="Search Courses" />
            <i class="fa fa-search"></i>
          </label>
        </div> -->
        <div class="nav-right-part nav-right-part-mobile">
          <a class="search-bar-btn" href="#"><i class="fa fa-search"></i></a>
        </div>
        <div class="collapse navbar-collapse" id="edumint_main_menu">
          <ul class="navbar-nav menu-open">
            <li class="menu-item-has-children current-menu-item">
              <a href="#">INICIO</a>
              <ul class="sub-menu">
                <li><a href="index.html">Home 01</a></li>
                <li><a href="home-2.html">Home 02</a></li>
                <li><a href="home-3.html">Home 03</a></li>
              </ul>
            </li>

            <li class="menu-item-has-children">
              <a href="#">CONVOCATORIAS</a>
              <ul class="sub-menu">
                <li v-for="(mc, id_mc) of MenuConv" :key="id_mc">
                  <router-link to="/">{{
                    mc.tipo_conv_comun_titulo
                  }}</router-link>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#">CURSOS</a>
              <ul class="sub-menu">
                <li v-for="(mc, id_mc) of MenuCur" :key="id_mc">
                  <router-link :to="'/' + mc.tipo_conv_curso_nombre">{{
                    mc.tipo_conv_curso_nombre
                  }}</router-link>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#">RECURSOS</a>
              <ul class="sub-menu">
                <li><a href="about.html">Servicios</a></li>
                <li><a href="course.html">Ofertas academicas</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="nav-right-part nav-right-part-desktop style-white">
          <ul class="mb-0">
            <li class="ml-2">
              <a
                class="btn btn-red"
                href="http://administracionpaginas.upea.bo/login"
                target="_blank"
                >Iniciar Sesion</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.logo_carrera {
  display: flex;
  align-items: center;
}
.logo_carrera h3 {
  color: white;
  padding: 5px;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["url_api", "MenuConv", "MenuCur", "Institucion"]),
  },
};
</script>