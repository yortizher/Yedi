<script setup>
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img
          src="https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-pagina-inicio-sesion_335657-2242.jpg?w=2000"
          alt=""
        />
      </div>
      <div class="col">
        <form class="formulario">
            <h3 class="text-center mb-4">Welcome</h3>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">Log in</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container img {
  width: 100%;
  height: 100vh;
}
.container .formulario {
  margin-top: 20%;
  padding: 6%;
}
</style>