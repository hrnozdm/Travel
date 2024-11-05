<template>
    <div>
        <section class="pt-5" id="destination">

            <div class="container" >
              
              <div class="mb-7 text-center">
                <h5 class="text-secondary">En Çok Satanlar </h5>
                <h3 class="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">En Popüler Turlar</h3>
              </div>
              <div class="row" >
                <div class="col-md-4 mb-4" v-for="(item,index) in favoriteCountry" :key="index">
                  <div class="card overflow-hidden shadow"> <img class="card-img-top" :src="item.img" alt="Rome, Italty" />
                    <div class="card-body py-4 px-3">
                      <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                        <h4 class="text-secondary fw-medium"><a class="link-900 text-decoration-none stretched-link" href="#!">{{ item.name }}</a></h4><span class="fs-1 fw-medium">${{ item.price }}</span>
                      </div>
                      <div class="d-flex align-items-center"> <img src="../assets/navigation.svg" style="margin-right: 14px" width="20" alt="navigation" /><span class="fs-0 fw-medium">{{ item.howManyDays }}</span></div>
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
   props:['favoriteCountry'],
    data() {
        return {
          
        }
    },
}
</script>



<style>
    
</style>