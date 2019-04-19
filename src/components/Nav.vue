<template>
    <div class="nav">
        <ul class="navList">
            <!-- :class="key == index? 'active': '' " -->
            <li v-for="(item,key) in data" v-bind:key="key" 
                
                @click="navJump($event)"
                >
                <a :data-TargetUrl="item.url" :data-Index="key" >{{ item.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts"> 
// import Vue from 'vue'
import { Component, Prop, Vue, } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
    index: number = 0;
    data: any = [
        {name: "主页", url: "/"},
        {name: "精选", url: "/"}
    ];
    public getData() {
        return this.data;
    }
    navJump(event: any) {
        this.$router.push(event.target.dataset.targeturl)

    }
    

}
</script>

<style lang="scss" scoped>
    .nav{
        margin-bottom:20px; 
        border-radius:5px;
    }
    .navList {
        display: flex;
        justify-content: flex-start;
        line-height: 35px;
        background-color: #FFFFF0;
        li:active{
            background-color: #FFE7BA;
        }
        a{
            text-align: center;
            font-size: 18px;
            padding: 0 20px;
        }
    }
    .active{
        background-color: #f0f8ff;
    }
</style>
