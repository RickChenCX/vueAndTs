<template>
  <div class="nav">
      <div class="logo">
          <span>在线教育</span>
      </div>
      <ul class="navList">
          <li>首页</li>
          <li>免费课程</li>
      </ul>
      <div>
          <input type="text" placeholder="搜索" />
      </div>
      <div v-if="getterName == ''" class="login"  @click="openLogin">
          <span>登陆</span>
          <span>/</span>
          <span>注册</span>
      </div>
      <div class="login" v-else>
        <span>{{ getterName }}</span>
      </div>
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

@Component
export default class HelloWorld extends Vue {
  @Getter('username') getterName: any
  // constructor() {
  //   super();
  // }

  get userName() {
    console.log(this.getterName);
    return this.getterName; // 返回vuex store的数据
  }
  // public getName() { // 类似原本的data方法返回数据
  //   this.name
  // }
  openLogin() {
    this.$emit("Cover")
  }
  created() {
    console.log(this.getterName)
  }
 


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul{
    display: flex;
    list-style-type: none;
    margin: 0;
}
.nav{
    display: flex;
    justify-content: space-around;
    // padding: 5px 0;
    line-height: 50px;
    background-color: #9F9494;
    color: #fff;
    .navList{
        flex:4 1;
        li{
          margin-right: 15px;
          cursor: pointer;
        }
    }
    .logo{
        flex: 1
    }
    .login{
        flex: 1;
        span{
          cursor: pointer;
        }
    }
}

</style>
