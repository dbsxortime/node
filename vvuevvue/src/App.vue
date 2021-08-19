<template>
  <div class="menu">
    <a v-for="menu in menu_title" :key="menu" > {{menu}} </a>
  </div>

  <h1 class="red" :style="title_style">윤택샵</h1>

  <div class="black-bg" v-if="modal_state==1" @click="modal_state=0">
    <div class="white-bg">
      <h2>This is detail page</h2>
      <p>detail contents</p>
    </div>

  </div>

  
  <div v-for="(product,i) in oneroom_data" :key="product">
    <img :src="oneroom_data[i].image" class="icon"/>
    <h4 @click="modal_state = 1">{{oneroom_data[i].title}}</h4>
    <p>{{oneroom_data[i].price}} 원</p>
  </div>
  
  <!-- <div>
    <h4>{{products[0]}}</h4>
    <p>{{price[0]}}만 원</p>
    <button @click="increase">허위매물 신고</button> <span>신고 수 : {{count}}</span>
  </div>
  <div>
    <h4>{{products[1]}}</h4>
    <p>{{price[1]}}만 원</p>
    <button @click="increase">허위매물 신고</button> <span>신고 수 : {{count}}</span>
  </div>
  <div>
    <h4>{{products[2]}}</h4>
    <p>{{price[2]}}만 원</p>
  </div> -->
</template>

<script>
import data from './assets/data.js';

export default {
  name: 'App',
  data(){
    return{
      products: ['박윤택','안태균','유정은'],
      price: ['10','20','30'],
      menu_title : ['Home','Product','About'],
      count : [0,0,0],
      modal_state : 0,
      oneroom_data : data,
    }
  },
  methods : {
    increase(i){
      this.count[i]++
    }
  },
  components: {
    
  }
}
</script>

<style>
body{
  margin:0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width:100%; height:100%;
  background: rgba(0,0,0,0.5);
  position:fixed;
  padding:20px;
}
.white-bg{
  width:100%;
  background-color : white;
  border-radius : 8px;
  padding:20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu{
  background : darkslateblue;
  padding:15px;
  border-radius : 5px;
}
.menu a{
  color:#fff;
  padding:10px;
}

.icon{
  width:500px;
  margin-top:50px;
}

</style>
