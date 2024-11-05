<template>
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <footer class="bg-dark text-light py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h4 class="mb-4">{{ footer.contactInfoTitle }}</h4>
              <p class="mb-2"><i class="fas fa-envelope"></i> Email: {{ footer.email }}</p>
              <p><i class="fas fa-phone"></i> Telefon: {{ footer.phone }}</p>
            </div>
            <div class="col-md-4">
              <h4 class="mb-4">{{ footer.followTitle }}</h4>
              <div class="social-icons">
                <a
                  v-for="(icon, index) in footer.socialIcons"
                  :key="index"
                  :href="icon.link"
                  class="text-light mr-3"
                >
                  <i :class="icon.iconClass" style="font-size: 32px;"></i>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <h4 class="mb-4">Hızlı Bağlantılar</h4>
              <ul class="list-unstyled">
                <li> <router-link class="nav-link" to="/">Anasayfa</router-link></li>
                <li><router-link class="nav-link" to="/tours">Turlar</router-link></li>
                <li><router-link class="nav-link" to="/reservation">Rezervasyon</router-link></li>
                <li> <router-link class="nav-link" to="/login_register">Giriş Yap/Kayıt Ol</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    props: ['footer']
  }
  </script>
  
  <style>
  footer {
    background-color: #333;
    color: #fff;
    position: relative;
    bottom: 0;
    width: 100%;
    z-index: 1000; 
  }
  
  .social-icons i {
    font-size: 32px;
  }
  
  .social-icons a:hover {
    color: #55acee;
  }
  
  .social-icons a i {
    margin-left: 20px;
  }
  
  .list-unstyled {
    padding: 0;
    list-style: none;
  }
  
  .list-unstyled a {
    color: #fff;
    text-decoration: none;
  }
  
  .list-unstyled a:hover {
    color: #55acee;
  }
  </style>
  