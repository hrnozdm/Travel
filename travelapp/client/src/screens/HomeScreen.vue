<template>
    <div class="body">
         <HeaderComp :header="header"/>
         <BannerComp :banner="banner"/>
         <CategoryComp :category="category"/>
         <FavoriteCountry :favoriteCountry="favoriteCountry"/>
         <BookingComp :booking="booking"/>
         <FooterComp :footer="footer" class="footer"/>
    </div>
</template>


<script>
import HeaderComp from '@/components/HeaderComp.vue';
import data from "../api/data.json";
import FooterComp from "../components/FooterComp.vue";
import CategoryComp from "../components/CategoryComp.vue";
import FavoriteCountry from '@/components/FavoriteCountry.vue';
import BookingComp from '@/components/BookingComp.vue';
import BannerComp from '@/components/BannerComp.vue';
export default{
    name:'HomeScreen',
    components: {
    BannerComp,
    HeaderComp,
    FooterComp,
    CategoryComp,
    FavoriteCountry,
    BookingComp,
},


  data() {
    return {
        header:data.header,
        footer:data.footer,
        banner:data.banner,
        category:data.category,
        favoriteCountry: data.favoriteCountry,
        booking:data.booking,
        
    }
  },
}
</script>


<style>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  margin-bottom: 0px;
}

.body{
  overflow: hidden;
}
</style>