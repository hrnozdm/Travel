<template>
    <div>
        <section class="pt-5 pt-md-9" id="service">

            <div class="container">
            
              <div class="mb-7 text-center">
                <h5 class="text-secondary">Servislerimiz</h5>
                <h3 class="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">En iyi Hizmetleri Sunuyoruz</h3>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-6 mb-6">
                  <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                    <div class="card-body p-xxl-5 p-4"> <img src="../assets/icon1.png" width="75" alt="Service" />
                      <h4 class="mb-3">{{ category.weatherTitle }}</h4>
                      <p class="mb-0 fw-medium">{{ category.weatherInfo }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-6">
                  <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                    <div class="card-body p-xxl-5 p-4"> <img src="../assets/icon2.png" width="75" alt="Service" />
                      <h4 class="mb-3">{{ category.flight }}</h4>
                      <p class="mb-0 fw-medium">{{ category.flightInfo }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-6">
                  <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                    <div class="card-body p-xxl-5 p-4"> <img src="../assets/icon3.png" width="75" alt="Service" />
                      <h4 class="mb-3">{{ category.localEvents }}</h4>
                      <p class="mb-0 fw-medium">{{  category.localEventsInfo  }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-6">
                  <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                    <div class="card-body p-xxl-5 p-4"> <img src="../assets/icon4.png" width="75" alt="Service" />
                      <h4 class="mb-3">{{ category.customization }}</h4>
                      <p class="mb-0 fw-medium">{{ category.customizationInfo}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
          </section>
    </div>
</template>








<script>

export default{
  props:['category'],
   data() {
    return {
       
    }
   },
}

</script>



<style>
</style>