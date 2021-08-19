<template>
  <div class="intro">
      <div class="intro-inner">
        <h1>Daily<br/>Report</h1>
        <router-link
          class="button"
          :to="todayUrl"
        >
          Start
        </router-link>
      </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Intro',
  methods:{

  },
  computed:{
    todayUrl(){
      let todayUrl = moment(new Date()).format('YYYY-MM-DD');
      return `/day/${todayUrl}`;
    }
  },
  data(){
    return{
      
    }
  },
  props:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
