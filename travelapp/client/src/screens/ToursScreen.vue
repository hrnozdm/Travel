<template>
  <div>
    <HeaderComp :header="header" />
    <section class="pt-5" id="tours">
      <div class="container">
        <div class="mb-7 text-center">
          <h5 class="text-secondary">Tours</h5>
          <h3 class="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">
            Explore
          </h3>
        </div>
        <div class="row">
          <div v-for="(item, index) in country" :key="index" class="col-md-4 mb-4">
            <div class="card border-0 rounded-3 overflow-hidden shadow">
              <img :src="item.image" class="card-img-top" alt="Tour Image" />
              <div class="card-body py-4 px-3">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">{{ item.description }}</p>
                <p class="card-text"><strong>Price:</strong> ${{ item.price }}</p>
              </div>
              <div class="card-footer bg-light d-flex justify-content-center">
                <router-link :to="{ name: 'tour-detail', params: { id: item.id }}">
                  <button class="btn btn-success w-100">İncele</button>
                </router-link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <FooterComp :footer="footer" />
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import data from "../api/data.json";
import FooterComp from "@/components/FooterComp.vue";

export default {
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      country: data.country,
      header: data.header,
      footer: data.footer,
    };
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card-body {
  text-align: center;
}

.card-footer {
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
}

.btn-success {
  background-color: #28a745;
  color: #fff;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}
</style>
