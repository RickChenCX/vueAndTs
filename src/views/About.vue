<template>
  <div class="about">
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
            <Details :fileId="fileId" />
        </div>
        <div class="right">

        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from "vue-property-decorator";
import Details from "@/components/details.vue";
import Nav from "@/components/Nav.vue";
import PersonInfo from "@/components/personInfo.vue";
import FileList from "@/components/fileList.vue";
@Component({
  components: {
    Details,
    Nav,
    PersonInfo,
  }
})
export default class Person extends Vue {
    fileId: string;
    constructor() {
      super();
      this.fileId = ""
    }
    created() {
      console.log(this.$route.params)
      this.fileId = this.$route.params.fileId
    }
}
</script>

<style lang="scss" scoped>

</style>

