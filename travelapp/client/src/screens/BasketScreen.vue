<template>
    <div v-for="(item,index) in basket" :key="index">
        <h1>
        {{ item.id }}

        </h1>
    </div>
</template>


<script>

export default {
    data() {
        return {
            basket:null,
        }
    },

   created() {
     this.basket=localStorage.getItem('basket');
   },
}
</script>


<style>


</style>