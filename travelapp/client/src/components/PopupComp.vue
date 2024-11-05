<template>
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <p>Rezervasyon başarıyla yapıldı!</p>
        <button @click="closePopup">Kapat</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPopup: false,
      };
    },
    methods: {
      openPopup() {
        this.showPopup = true;
      },
      closePopup() {
        this.showPopup = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 20px;
    border: 1px solid #ced4da;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .popup-content {
    text-align: center;
  }
  
  .popup button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
  
  .popup button:hover {
    background-color: #0056b3;
  }
  </style>
  