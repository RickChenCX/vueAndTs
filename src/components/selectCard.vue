<template>
    <div class="selectCard">
        <div class="selectCard-content">
            <div class="first-select">
                <ul>
                    <li v-for=" (item, i) in testData" :key="i" :data-index="i" 
                    v-on:mouseover="switchCard($event)"
                    :class="{active:active && i==index}"
                    >
                        <span :data-index="i">{{item.first}}</span>
                    </li>
                </ul>
            </div>
            <div class="second-select">
                <ul v-show="i== index" class="second-content" v-for="(item, i) in testData" :key="i">
                    <li v-for="(obj, o) in item.second" :key="o">
                        {{obj.name}}
                    </li>
                </ul>
               
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from "vue-property-decorator";
import {fetch, post} from "@/util/http.ts"
interface ChildArg { 
    id: number,
    name: string
}
interface ArgList {
    first: string,
    second: ChildArg[]
}
@Component
export default class SelectCard extends Vue {
    index: number;
    active: boolean;
    private testData: ArgList[];
    constructor() {
        super()
        this.index = 0;
        this.active = false;
        this.testData = [
            {first: "test1", second: [{id: 1, name: "hehe"}, {id: 1, name: "hehe1"}]},
            {first: "test2", second: [{id: 2, name: "hehe2"}, {id: 3, name: "hehe3"}]}
            ]

    }
    public switchCard($event: any) {
        this.index = $event.target.dataset.index;
        this.active = true;
    }
    getApi() {
        // return fetch("/test", {})
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
        this.getApi()
    }
    public beforeDestroy() {
        console.log("this is beforeDestroy");
    }
    public destroyed() {
        console.log("this is destroyed");
    }
}
</script>

<style lang="scss" scoped>
.selectCard-content{
    display: flex;
    width: 980px;
    margin: 20px auto;
    border-radius: 5px;
    box-shadow: 0px 0px 2px 3px;
    .first-select{
        flex:1;
        text-align: center;
        padding: 15px;
        background: #2b333b;
        ul{
            margin: 0;
            padding: 0;
        }
        li{
            margin: 10px 0;
            padding: 10px 0; 
            // border-bottom: 1px solid #eeeeee;
            color:rgba(255,255,255,.6);
            cursor: pointer;
        }
    }
    .second-select{
        flex:3
    }
    .second-content{
        display: flex;
        flex-wrap: wrap;
        li{
            margin-right: 20px; 
            cursor: pointer;
        }
    }
}
.active{
    background-color:#e4e0e0 ;
    color: #000 !important;
}
</style>
