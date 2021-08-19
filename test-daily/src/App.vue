<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import axios from 'axios';
import { mapGetters, mapActions} from 'vuex';

export default {
  components:{
    Nav
  },
  methods: {
    ...mapActions(['saveSettings']),
    init() {
      if (this.savedSettings.starttime ==undefined){
        this.getSettings();
      }
    },
    getSettings(){
      let url =`https://my-daily-384f1-default-rtdb.firebaseio.com/settings.json`;
      axios.get(url, this.settings).then((res)=> {
        this.saveSettings(res.data);
        console.log('setting getted');
        console.log(this.saveSettings(res.data));
      });
    }
  },
  created(){
    this.init();
    console.log('App.vue created')
  },
  computed: {
    ...mapGetters(['savedSettings']),
  }
}
</script>

<style lang="scss" src="./assets/css/style.scss">
</style>
