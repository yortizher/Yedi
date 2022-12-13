<script setup>
</script>
<template>
  <form>

    <h4 class="mb-2 text-center">Crear vacantes</h4>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit"  class="custom-btn btn-3"><span>Enviar</span></button>
  </form>
</template>
<style>
form {
  width: 50%;
  margin: auto;
  padding: 2% 5%;
  background: rgba(140,156,149,0.5);
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    border: 1px solid rgba(140,156,149,0.25);
  border-radius: 5%;
}

/* boton */
.custom-btn{
  width: 100%;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  background: transparent;
  cursor: pointer;
  position: relative;
  display: inline-block;
  outline: none;
  transition: all 0.3s ease;
}
.btn-3 {
  background: rgb(0, 172, 238);
  background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
  width: 100%;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;

}

.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: rgba(2, 126, 251, 1);
  transition: all 0.3s ease;
}

.btn-3:before {
  height: 0%;
  width: 2px;
}

.btn-3:after {
  width: 0%;
  height: 2px;
}

.btn-3:hover {
  background: transparent;
  box-shadow: none;
}

.btn-3:hover:before {
  height: 100%;
}

.btn-3:hover:after {
  width: 100%;
}

.btn-3 span:hover {
  color: rgba(2, 126, 251, 1);
}

.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: rgba(2, 126, 251, 1);
  transition: all 0.3s ease;
}

.btn-3 span:before {
  width: 2px;
  height: 0%;
}

.btn-3 span:after {
  width: 0%;
  height: 2px;
}

.btn-3 span:hover:before {
  height: 100%;
}

.btn-3 span:hover:after {
  width: 100%;
}

/* termina boton */
</style>