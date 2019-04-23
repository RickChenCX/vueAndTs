<template>
    <div class="tag-box"> 
        <div class="tag-title">分类标签</div>
        <ul>
            <li v-for=" (key, i) in tagList" :key="key._id" :data-index="i" 
            @click="handleClick($event)"
            :class="active == i? 'active':''"
            >{{key.name}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from "vue-property-decorator";
import { fetch, post } from "@/util/http";
import { Tag } from "@/config";

@Component
export default class TagBox extends Vue {
    tagList: Tag[]
    active: number
    constructor() {
        super()
        this.tagList = []
        this.active = -1
    }
    created() {
        this.getTagList()
    }
    async getTagList() {
        let that = this;
        fetch("controller/selectTag", {}).then( (data: any)  => {
            console.log(data);
            return that.tagList =  data
        })
    }
    handleClick(event: any) {
        console.log(event)
        if (this.active != event.target.dataset.index) {
            this.active = event.target.dataset.index;
            this.$emit("tagSelect", event.target.innerHTML)
        } else {
            this.active = -1;
            this.$emit("tagSelect", "")
        }
        
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
        .active{
            background-color: #eee;
        }
    }
</style>