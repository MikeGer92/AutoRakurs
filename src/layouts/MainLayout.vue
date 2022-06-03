<template>
	<div class="main-layout-body">
    <Navbar></Navbar>
    <router-view></router-view>
	</div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue'
export default {
	name: 'main',
  components: { Navbar }
}

</script>


<style lang="scss">
.main-layout-body{
	display: flex;
	width: 2065px;
	background: #E5E5E5;
}
	
</style>