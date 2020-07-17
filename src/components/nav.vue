<template>
  <div>
    <section class="fdb-block p-2">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-md">
          <button class="navbar-toggler mr-auto ml-auto" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mt-2 mt-md-0" id="navbarNav0">
            <p class="m-auto">
              <router-link to="/" tag="a" class="btn btn-outline-primary m-1"
                >Home</router-link
              >
              <router-link
                to="/call-to-action"
                tag="a"
                class="btn btn-outline-primary m-1"
                >Call to action</router-link
              >

              <router-link
                to="/contacts"
                tag="a"
                class="btn btn-outline-primary m-1"
                >Contacts</router-link
              >

              <router-link
                to="/contents"
                tag="a"
                class="btn btn-outline-primary m-1"
                >Contents</router-link
              >

              <router-link
                to="/features"
                tag="a"
                class="btn btn-outline-primary m-1"
                >Features</router-link
              >

              <a class="btn btn-outline-primary m-1">Footers</a>
              <a class="btn btn-outline-primary m-1">Forms</a>
              <a class="btn btn-outline-primary m-1">Headers</a>
              <a class="btn btn-outline-primary m-1">Pricings</a>
              <a class="btn btn-outline-primary m-1">Teams</a>
              <a class="btn btn-outline-primary m-1">Testimonials</a>
            </p>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>
