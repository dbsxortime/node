<template>
  <div class="hello">
    <new :msg ="msg"
    ></new>
<!--
    <h1>{{ msg }}</h1>
    <h2>{{ author }}</h2>
    <p v-html="article"></p>
    <p v-if="seen">보인다</p>
    <p v-else>보이지 않는다</p>
    <p v-show="seen">show</p>
    <p v-show="!seen">not show</p>

    <a v-bind:href="url">google!</a>
    <p v-bind:class="{actice: isActive}"> actived!  </p>
    <p v-bind:style="{color : textColor}">style!</p>
    <ul>
      <li v-for="item in items" v-bind:key="item.name">
        {{item.name}}-{{item.age}}
      </li>
    </ul>

    <ul>
      <li v-for="(val,key,index) in person" v-bind:key="index">
        {{index}}_{{key}}:{{val}}
      </li>
    </ul>
-->
<!--
    <div>
      <h1>score = {{score}}</h1>
      <button @click="updateScore(1)">Click!</button>
      <button @click.once="updateScore(1)">Click once!</button>
      <input type="text" @keyup.enter="keyUp()"/>
      <h2>오늘 : {{today}}</h2>
    </div>
-->

    <h1>{{msg}}</h1>
    <input type="text" v-model="msg" placeholder="insert here"/> <br/>
    <input type="checkbox" v-model="seen"/>
    <p v-if="seen">보인다</p>
    <p v-else>보이지 않는다</p>

    <input type="radio" v-model="age" value="30"/>
    <input type="radio" v-model="age" value="20"/>
    <input type="radio" v-model="age" value="10"/>
    <p>{{age}}</p>

    <select v-model="age">
      <option value="30">30</option>
      <option value="20">20</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import New from './New.vue';

export default {
  name: 'HelloWorld',
  components:{
    New
  },
  methods:{
    updateScore(score){
      console.log('score='+score);
      this.score=score;
    },
    keyUp(){
      console.log('enter');
    }
  },
  computed:{
    today(){
      let date = new Date();
      return date.getDate();
    }
  },
  data(){
    return{
      score:0,
      msg : "hello",
      author : "Park",
      age : 30,
      article :`
      <strong>Hello</strong> world!
      `,
      seen : true,
      url:'http://www.google.com',
      isActice: true,
      textColor: 'red',
      items:[
        {name : 'red', age : 15},
        {name : 'green', age : 25},
        {name : 'blue', age : 35},
        {name : 'white', age : 45},
        {name : 'black', age : 56}
      ],
      person:{
        name : "Park",
        age : 26,
        location:'Seoul'
      }
    }
  },
  beforeCreate(){
    console.log('before create');
    console.log(this.score);
  },
  created(){
    console.log('created');
    console.log(this.score);
  },
  beforeMount(){
    console.log('before mount');
    console.log(this.score);
  },
  mounted(){
    console.log('mounted');
    console.log(this.score);
  },
  
  //props: {
  //  msg: String
  //}
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
