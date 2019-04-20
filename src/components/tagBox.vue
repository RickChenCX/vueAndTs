<template>
    <div class="tag-box"> 
        <div class="tag-title">分类标签</div>
        <ul>
            <li>java</li>
            <li>javascript</li>
             <li>java</li>
            <li>javascript</li>
             <li>java</li>
            <li>javascript</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from "vue-property-decorator";

@Component
export default class TagBox extends Vue {
    @Prop() tagList!: []
    constructor() {
        super()

    }
} 
</script>
<style lang="scss">
    .tag-box{
        border: 1px solid #eee;
        margin:  0 20px;
        ul{
            display: flex;
            flex-wrap: wrap;
            padding: 10px;
        }
        li{
            border: 1px solid #eee;
            padding: 0px 10px;
            border-radius: 10px;
            margin-right: 10px;
            margin-top:5px;
        }
        .tag-title{
            background-color: #eae9e7
        }
    }
</style>