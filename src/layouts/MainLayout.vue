<template>
	<div class="main-layout-body">
    <ModalWindow v-if="showModal"/>
    <Navbar 
      @modal="changeModal"
      
    >
    </Navbar>
    <BrandsWindow 
      v-if="showModal"
      @isShow="changeModal"
    />
    <router-view v-else></router-view>
    <Footer 
      :brands="brandList"
    />
	</div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue'
import Footer from '@/components/app/Footer.vue'
import BrandsWindow from '@/components/modals/BrandsWindow.vue'
import ModalWindow from '@/components/modals/ModalWindow.vue'
export default {
	name: 'main',
  components: {  Footer, BrandsWindow, Navbar, ModalWindow },
  data() {
    return {
      showModal: false,
      brandList: [
        {name: 'KIA', logo: '../assets/images/brands-logo/kia.svg'},
        {name: 'HYUNDAI', logo: '../assets/images/brands-logo/hundai.svg'},
        {name: 'TOYOTA', logo: '../assets/images/brands-logo/toyota.svg'},
        {name: 'SKODA', logo: '../assets/images/brands-logo/skoda.svg'},
        {name: 'VOLKSWAGEN', logo: '../assets/images/brands-logo/volkswagen.svg'},
        {name: 'FORD', logo: '../assets/images/brands-logo/ford.svg'},
        {name: 'CHEVROLET', logo: '../assets/images/brands-logo/chevrolet.svg'},
        {name: 'MITSUBISHI', logo: '../assets/images/brands-logo/mitsubishi.svg'},
        {name: 'NISSAN', logo: '../assets/images/brands-logo/nissan.svg'},
        {name: 'MAZDA', logo: '../assets/images/brands-logo/mazda.svg'},
        {name: 'HONDA', logo: '../assets/images/brands-logo/honda.svg'},
        {name: 'LADA', logo: '../assets/images/brands-logo/lada.svg'},
        {name: 'OPEL', logo: '../assets/images/brands-logo/opel.svg'},
        {name: 'RENAULT', logo: '../assets/images/brands-logo/renault.svg'},
        {name: 'JAC', logo: '../assets/images/brands-logo/jac.svg'},
        {name: 'SUZUKI', logo: '../assets/images/brands-logo/suzuki.svg'},
        {name: 'PEUGEOT', logo: '../assets/images/brands-logo/peugeot.svg'},
        {name: 'UAZ', logo: '../assets/images/brands-logo/uaz.svg'},
        {name: 'SSANG YONG', logo: '../assets/images/brands-logo/ssangyong.svg'},
        {name: 'HAVAL', logo: '../assets/images/brands-logo/haval.svg'},
        {name: 'GEELY', logo: '../assets/images/brands-logo/geely.svg'},
        {name: 'LIFAN', logo: '../assets/images/brands-logo/lifan.svg'},
        {name: 'CHERY', logo: '../assets/images/brands-logo/chery.svg'},
        {name: 'DATSUN', logo: '../assets/images/brands-logo/datsun.svg'},
        {name: 'CITROEN', logo: '../assets/images/brands-logo/citroen.svg'},
        {name: 'DONGFENG', logo: '../assets/images/brands-logo/dongfeng.svg'},
        {name: 'CHANGAN', logo: '../assets/images/brands-logo/chagan.svg'},
        {name: 'ZOTYE', logo: '../assets/images/brands-logo/zotve.svg'},
        {name: 'DWHOWER', logo: '../assets/images/brands-logo/dwhover.svg'},
        {name: 'FOTON', logo: '../assets/images/brands-logo/foton.svg'},
        {name: 'GREAT WALL', logo: '../assets/images/brands-logo/great_wall.svg'},
        {name: 'RAVON', logo: '../assets/images/brands-logo/ravon.svg'},
        {name: 'BRILLIANCE', logo: '../assets/images/brands-logo/brilliance.svg'},
        {name: 'FAW', logo: '../assets/images/brands-logo/faw.svg'},
        {name: 'HAIMA', logo: '../assets/images/brands-logo/haima.svg'}
      ]
    }
  },
  methods: {
    changeModal() {
      this.showModal = !this.showModal
    }
  }
}

</script>


<style lang="scss">
.main-layout-body{
  width: 100%;
  max-width: 2065px;
	display: flex;
  flex-direction: column;
	background: #FFF
}
@media (min-width: 1280px) and (max-width: 1920px) {
  .main-layout-body {
    max-width: 1920px;
  }
}	
</style>