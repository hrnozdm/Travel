<template>
    <div>
      <HeaderComp :header="header"/>
     
        <div class="container mt-5">
            <h1 class="mb-4">Rezervasyon Sayfası</h1>
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    Tarih Seçimi
                  </div>
                  <div class="card-body">
                    <div class="form-group">
                      <label for="reservationDate">Tarih Seçin:</label>
                      <input type="date" class="form-control" v-model="reservationDate" id="reservationDate" required>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    Rezervasyon Bilgileri
                  </div>
                  <div class="card-body">
                    <div class="form-group">
                      <label for="fullName">Ad Soyad:</label>
                      <input type="text" class="form-control" v-model="fullName" id="fullName" required>
                    </div>
                    <div class="form-group">
                      <label for="email">E-posta Adresi:</label>
                      <input type="email" class="form-control" v-model="email" id="email" required>
                    </div>
                    <div class="form-group">
                      <label for="phone">Telefon Numarası:</label>
                      <input type="tel" class="form-control" v-model="phone" id="phone" required>
                    </div>
                    <button class="btn btn-primary" @click="makeReservation">Rezervasyon Yap</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
     
  
      <PopupComp ref="popupComp"/>
      
      <FooterComp :footer="footer" class="footer"/>
    </div>
  </template>
  
  <script>
  import HeaderComp from '@/components/HeaderComp.vue';
  import FooterComp from '@/components/FooterComp.vue';
  import PopupComp from '@/components/PopupComp.vue';
  import data from "../api/data.json";
  
  export default {
    data() {
      return {
        reservationDate: '',
        fullName: '',
        email: '',
        phone: '',
        header: data.header,
        footer: data.footer,
      };
    },
    methods: {
      makeReservation() {
        // Rezervasyon işlemleri burada yapılabilir
  
        // Popup mesajını aç
        this.$refs.popupComp.openPopup();
      },
    },
    components: {
      HeaderComp,
      FooterComp,
      PopupComp,
    },
  };
  </script>
  
  <style>
  .footer {
    position: relative;
    bottom: 0;
  }
  </style>
  