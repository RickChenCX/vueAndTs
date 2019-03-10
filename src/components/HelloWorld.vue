<template>
  <div class="hello">
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from "vue-property-decorator";
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';
import { mapGetters, mapMutations, mapActions } from 'vuex';
// const helloState = namespace("../vuex/index");
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private name: string = "";
  constructor() {
    super();
    this.name = this.userName;
  }
  get userName() {
    return this.$store.getters.name; // 返回vuex store的数据
  }
  public getName() { // 类似原本的data方法返回数据
    return this.name
  }
  // 生命周期函数
  public beforeCreate() {
    console.log("this is beforeCreate"); 
  }
  public created() {
    console.log("this is created");
  }
  public beforeMount() {
    console.log("this is beforeMount");
  }
  public mounted() {
    console.log("this is mounted");
  }
  public beforeDestroy() {
    console.log("this is beforeDestroy");
  }
  public destroyed() {
    console.log("this is destroyed");
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
