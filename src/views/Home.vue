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
              <FileList />
        </div>
        <div class="right">

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
import { mapGetters, mapMutations, mapActions } from "vuex";
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
    FileList
  },
  
})

export default class Home extends Vue {

}
</script>

<style lang="scss" >
  @import "~@/assets/scss/parts/details.scss";
  @import "~@/assets/scss/parts/index.scss";

</style>

