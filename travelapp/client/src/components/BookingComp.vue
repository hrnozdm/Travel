<template>
    <div>
        <section id="booking">

            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="mb-4 text-start">
                    <h5 class="text-secondary">Kolay ve Hızlı </h5>
                    <h3 class="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">Bir Sonraki Seyahatinizin Rezervasyonunu 3 Kolay Adımda Yapın</h3>
                  </div>
                  <div class="d-flex align-items-start mb-5">
                    <div class="bg-primary me-sm-4 me-3 p-3" style="border-radius: 13px"> <img src="../assets/selection.svg" width="22" alt="steps" /></div>
                    <div class="flex-1">
                      <h5 class="text-secondary fw-bold fs-0">{{ booking.selectLocation }}</h5>
                      <p>{{ booking.selectLocationInfo }}<br class="d-none d-sm-block">{{  booking.selectLocationInfo2  }}</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-start mb-5">
                    <div class="bg-danger me-sm-4 me-3 p-3" style="border-radius: 13px"> <img src="../assets/water-sport.svg" width="22" alt="steps" /></div>
                    <div class="flex-1">
                      <h5 class="text-secondary fw-bold fs-0">{{ booking.toPay }}</h5>
                      <p>{{ booking.toPayInfo }}<br class="d-none d-sm-block"> {{ booking.toPayInfo2 }}</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-start mb-5">
                    <div class="bg-info me-sm-4 me-3 p-3" style="border-radius: 13px"> <img src="../assets/taxi.svg" width="22" alt="steps" /></div>
                    <div class="flex-1">
                      <h5 class="text-secondary fw-bold fs-0">{{ booking.airpotDate }}</h5>
                      <p>{{ booking.airpotDateInfo }}<br class="d-none d-sm-block">{{ booking.airpotDateInfo2 }}</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
    
        </section>
    </div>
</template>



<script>

export default {
   props:['booking'],
    data() {
        return {
           
        }
    },
}
</script>


<style>
    
</style>