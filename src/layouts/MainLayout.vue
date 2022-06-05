<template>
	<div class="main-layout-body">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer />
    
	</div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue'
import Footer from '@/components/app/Footer.vue'
export default {
	name: 'main',
  components: { Navbar, Footer }
}

</script>


<style lang="scss">
.main-layout-body{
	display: flex;
  flex-direction: column;
	background: #FFF
}
	
</style>