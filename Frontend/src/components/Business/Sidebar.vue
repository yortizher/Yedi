<script setup>

</script>

<template>
	
	<nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link to="/BusinessView" class="navbar-brand title" href="#"
          >Empresas</router-link
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
          <span class="navbar-toggler-icon icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <!-- separarlo ms-auto-->
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/CreateVacancyView" class="nav-link active" href="#"
                >Crear vacante</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/VacantHistoryView" class="nav-link active" href="#"
                >Historial</router-link
              >
            </li>
			<li class="nav-item">
              <router-link to="/TracingView" class="nav-link active" href="#"
                >Seguimiento</router-link
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
	<RouterView />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap");




nav{
  margin-bottom: 5%;
  background: #000;


}

.router-link-exact-active {
  background-color:gray ;
 
  border-radius: 2%;
}

.navbar-nav {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
}
.navbar-light .navbar-brand {
  color: rgb(248, 244, 244) !important;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: "Rubik Vinyl", cursive;
}


.nav-link {
  color: rgb(255, 250, 250) !important;
}

/* no funciona */
.icon{
  color: aliceblue !important;

}

</style>