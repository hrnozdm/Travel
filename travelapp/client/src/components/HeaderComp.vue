<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img :src="header.logo" alt="Gezi Logo" width="50" height="50" >
               {{ header.title }}
            </a>
            
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/">{{ header.home }}</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/tours">{{ header.tours }}</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/reservation">{{ header.reservation }}</router-link>
               </li>

                <li class="nav-item">
                   <router-link class="nav-link" to="/login_register">{{ header.login_register }}</router-link>
                </li>

               
              
              </ul>
            </div>
          </div>
        </nav>
      </div>
</template>

<script>

export default {
    data() {
        return {
           
        }
    },
    props:['header']
}
</script>


<style>
.navbar {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-brand img {
    margin-right: 5px;
    border-radius: 50%;
  }
</style>