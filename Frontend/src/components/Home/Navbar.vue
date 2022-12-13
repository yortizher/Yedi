<Script setup>
</Script>
<template>
  <section id="hero">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link to="/" class="navbar-brand title" href="#"
          >Yedi</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <!-- separarlo ms-auto-->
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/CheckInView" class="nav-link active" href="#"
                >Sign in</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/LoginView" class="nav-link active" href="#"
                >log in</router-link
              >
            </li>
            <!-- <li class="nav-item dropdown active">
            <a
              class="nav-link dropdown-toggle active"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Administrar
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link
                  to="/CategoryRegistration"
                  class="dropdown-item active"
                  href="#"
                  >Categorias</router-link
                >
              </li>
              <li>
                <router-link
                  to="/BreedRegistry"
                  class="dropdown-item active"
                  href="#"
                  >Razas</router-link
                >
              </li>
            </ul>
          </li> -->
          </ul>
        </div>
      </div>
    </nav>

    <div id="select1">
        <select class="form-select" aria-label="Default select example">
          <option selected>Seleccione area</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>


    
    <div style="height: 150px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-163.43,-105.09 C227.09,155.43 273.93,155.43 672.91,-110.03 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #fff"
        ></path>
      </svg>
    </div>
  </section>

  <RouterView />
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap");



#hero {
  width: 100%;
  background: url(https://images.pexels.com/photos/414548/pexels-photo-414548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-size: cover;
  background-repeat: no-repeat;
  position: initial;
}

nav{
  margin-bottom: 10%;
}

#hero #select1{
  max-width: 50%;
  margin: auto;
}

.router-link-exact-active {
  color: rgb(0, 255, 94) !important;
}

.navbar-nav {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
}
.navbar-light .navbar-brand {
  color: rgb(8, 8, 8) !important;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: "Rubik Vinyl", cursive;
}

img {
  width: 100%;
}
.nav-link {
  color: rgb(7, 7, 7) !important;
}
</style>