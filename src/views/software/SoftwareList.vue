<template>
  <div class="card-body pb-0">
    <div class="row d-flex align-items-stretch">
      <SoftwareItem v-for="software in softwares" :key="software.uuid" :software="software"></SoftwareItem>
    </div>
  </div>
</template>

<script>
import SoftwareItem from './SoftwareItem'
import SoftwareData from './Softwares.json'
export default {
  name: 'SoftwareList',
  components: {
    SoftwareItem
  },
  data(){
    return{
      softwares: SoftwareData.data.softwares
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
