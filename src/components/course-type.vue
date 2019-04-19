<template>
    <div class="course-list">
        <ul>
            <li v-for="(item, key) in courseType" :key="key"  v-on:click="toup($event,key)">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from "vue-property-decorator";


@Component
export default class CourseType extends Vue {
    private courseType: string[];
    constructor() {
        super();
        this.courseType = ["语文", "数学", "英语", "音乐"];
    }
    public toup(e: any, index: string) {
        // console.log(index);
        this.$emit("changeType", index)
    }


}
</script>

<style lang="scss" scoped>
.course-list{
    flex:1;
    ul{
        list-style-type: none;
        padding: 20px;
    }
    li{
        margin: 10px 0;
    }
}
</style>
