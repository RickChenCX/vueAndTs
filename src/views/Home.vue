<template>
  <div class="home">
      <Nav @Cover="Cover"></Nav>
      <SelectCard />
      <div class="cover-floor" v-show="coverFloor" @click="Cover">
      </div>
      <LoginAndRegister v-show="coverFloor"  @closeLogin="testCover"  />

      <div><h2>推荐课程</h2></div>
      <LiveList  />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { mapGetters, mapMutations, mapActions } from "vuex";
import LiveList from "@/components/live-list.vue";
import Nav from "@/components/Nav.vue";
import SelectCard from "@/components/selectCard.vue";
import LoginAndRegister from "@/components/loginAndRegister.vue";

import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';

@Component({
  components: {
    // CourseType,
    LiveList,
    Nav,
    SelectCard,
    LoginAndRegister
  },
  
})

export default class Home extends Vue {
  coverFloor: boolean;
  constructor() {
    super();
    this.coverFloor = false;
  }
  Cover() {
     this.coverFloor = !this.coverFloor;
  }
  testCover() {
      this.coverFloor = !this.coverFloor;

  }
  
}
</script>

<style lang="scss" scoped>
  .home{
    position: relative;
    height: 100%;
  }
  .cover-floor{
    height: 100%;
    top: 0;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 8;
  }
</style>

