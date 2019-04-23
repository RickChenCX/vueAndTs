<template>
  <div class="home">
    <div class="banner">
      <div class="title">
          <p>一只小菜鸟的blog</p>
      </div>
    </div>

    <div class="main">
        <div class="left">
          <PersonInfo />
        </div>
        <div class="center">
              <Nav />
              <FileList :tag="tag" />
        </div>
        <div class="right">
          <tagBox @tagSelect="testFnc" />
        </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Nav from "@/components/Nav.vue";
import PersonInfo from "@/components/personInfo.vue";
import FileList from "@/components/fileList.vue";
import tagBox from "@/components/tagBox.vue"
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';

@Component({
  components: {
    HelloWorld,
    Nav,
    PersonInfo,
    FileList,
    tagBox
  },
  
})

export default class Home extends Vue {
  coverFloor: boolean;
  tag: string;
  constructor() {
    super();
    this.coverFloor = false;
    this.tag = ""
  }
  Cover() {
     this.coverFloor = !this.coverFloor;
  }
  testCover() {
      this.coverFloor = !this.coverFloor;
  }
  testFnc(msg: string) {
    console.log(msg);
    this.tag = msg;
  }
  
}
</script>

<style lang="scss" >
  @import "~@/assets/scss/parts/details.scss";
  @import "~@/assets/scss/parts/index.scss";


</style>

