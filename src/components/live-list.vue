<template>
    <div class="live-wrap">
        <!-- <CourseType v-on:changeType="getChild" /> -->
        <ul class="live-list">
            <li v-for="(item, key) in liveMsg" :key="key">
                <img :src="item.img" width="100%" />
                <p class="title">{{item.title}}</p>
                <p class="subtitle">{{item.subtitle}}</p>

            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from "vue-property-decorator";
import CourseType from "@/components/course-type.vue";


@Component({
    components: {
        CourseType
    }
})
export default class LiveList extends Vue {
    num: string;
    liveMsg: object[];
    @Prop() private listMsg!: string; 
    constructor() {
        super();
        this.liveMsg = [
            {img: "https://img1.mukewang.com/szimg/5c7e6835087ef3d806000338.jpg", title: "嘻嘻heheh", subtitle: "heheh" },
            {img: "https://img1.mukewang.com/szimg/59b8a486000107fb05400300.jpg", title: "嘻嘻", subtitle: "heheh" },
            {img: "https://img1.mukewang.com/szimg/5c7e6835087ef3d806000338.jpg", title: "嘻嘻", subtitle: "heheh" },
            {img: "https://img1.mukewang.com/szimg/59b8a486000107fb05400300.jpg", title: "嘻嘻", subtitle: "heheh" },
        ];
        this.num = "0";
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
        // this.getProp()
    }
    public mounted() {
        console.log("this is mounted");
    }
    // public getProp() {
       
    // }
    public getChild(data: string) {
        console.log(data);
        this.num = data;
    }

   


}
</script>

<style lang="scss" scoped>
$color: #eeeeee;
$width:980px;
p{
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 14px;
}
.live-wrap{
    display: flex;
    width:$width;
    margin: 0 auto;

    ul{
        list-style-type: none;
        padding: 20px;
    }
    li{
        margin: 10px 0;
        
    }
}
.live-list{
    flex: 5;
    display: grid;
    grid-template-columns: 240px 240px 240px 240px;
    grid-template-rows: auto;
    
    li{
        margin:  0 20px;
        background-color: $color;
        padding: 10px;
        border-radius: 5px; 
        
    }
    .title{
        font-size: 15px;
    }
    .subtitle{
        font-size: 13px;
        color: #666
    }
}
</style>
