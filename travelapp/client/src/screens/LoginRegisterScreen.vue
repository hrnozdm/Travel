<template>
    <div>
      <HeaderComp :header="header"/>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h2 class="mb-4">{{ action === 'login' ? 'Giriş Yap' : 'Kayıt Ol' }}</h2>
                <form @submit.prevent="handleFormSubmit">
                  <div class="mb-3">
                    <label for="username" class="form-label">Kullanıcı Adı:</label>
                    <input v-model="username" type="text" class="form-control" id="username" required>
                  </div>
  
                  <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input v-model="email" type="email" class="form-control" id="email" required>
                  </div>
  
                  <div class="mb-3">
                    <label for="password" class="form-label">Şifre:</label>
                    <input v-model="password" type="password" class="form-control" id="password" required>
                  </div>
  
                  <div v-if="action === 'register'" class="mb-3">
                    <label for="repeatPassword" class="form-label">Şifre Tekrar:</label>
                    <input v-model="repeatPassword" type="password" class="form-control" id="repeatPassword" required>
                  </div>
  
                  <button type="submit" class="btn btn-primary">{{ action === 'login' ? 'Giriş Yap' : 'Kayıt Ol' }}</button>
                </form>
  
                <div class="mt-3">
                  {{ action === 'login' ? "Hesabınız yok mu? " : "Zaten bir hesabınız var mı? " }}
                  <button @click="toggleAction" class="btn btn-link">{{ action === 'login' ? 'Kayıt Ol' : 'Giriş Yap' }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <FooterComp :footer="footer" class="footer"/>
    </div>
  </template>
  
  <script>
  import HeaderComp from '@/components/HeaderComp.vue';
  import data from "../api/data.json";
  import FooterComp from '@/components/FooterComp.vue';
  export default {
    data() {
      return {
        action: 'login',
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        header:data.header,
        footer:data.footer,
      };
    },
    methods: {
      handleFormSubmit() {
        console.log('Form gönderildi:', this.action);
      },
      toggleAction() {
        this.action = this.action === 'login' ? 'register' : 'login';
      },
    },
    components:{
      HeaderComp,
      FooterComp,
    }
  };
  </script>
  
  <style> 

  .footer{
    margin-top: 120px;
  }
  </style>
  