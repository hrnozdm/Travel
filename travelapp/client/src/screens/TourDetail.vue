<template>
  <div>
    <HeaderComp :header="header" />

    <section class="pt-5" id="tour-detail">
      <div class="container">
        <div class="mb-7 text-center">
          <h1>Tur Detayları</h1>
        </div>
        <div v-if="tour" class="card border-0 rounded-3 overflow-hidden shadow mx-auto" style="max-width: 600px;">
          <img :src="tour.image" class="card-img-top" alt="Tur Resmi" />
          <div class="card-body py-4 px-3">
            <h5 class="card-title">{{ tour.name }}</h5>
            <p class="card-text"><strong>Açıklama:</strong>{{ tour.description }}</p>
            <p class="card-text"><strong>Fiyat:</strong> ${{ tour.price }}</p>
            <p class="card-text">{{ tour.info }}</p>
            <div class="card-text btn btn-primary" @click="addToCart">Sepete Ekle</div>
          </div>
          <div class="card-footer bg-light d-flex justify-content-center">
            <slot></slot>
          </div>
        </div>
        <div v-else>
          <p>Tur bulunamadı.</p>
        </div>
      </div>
    </section>

    
    <FooterComp :footer="footer" />
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import data from "@/api/data.json";
export default {
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      header: data.header,
      footer: data.footer,
      tour: {},
      basket:[]
    };
  },
  methods: {
    addToCart() {
    const tourId = this.$route.params.id;
    const selectedTour = data.country.find((tour) => tour.id === tourId);
    this.basket.push(selectedTour);
    localStorage.setItem('basket',this.basket);
    alert("Turu sepetinize eklediniz");
  },
  },
  created() {
    const tourId = this.$route.params.id;
    this.tour = data.country.find((tour) => tour.id === tourId);

    if (!this.tour) {
      this.$router.push('/');
      return;
    }
  },
 
};
</script>

<style scoped>
.card {
  margin: 0 auto;
  max-width: 900px;
}
</style>
