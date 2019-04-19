<template>
    <div class="fileItem">
        <ul>
            <li v-for="(item, key) in fileList" :key="key" :dataId="item._id" v-on:click="getLink($event)">
                <h4>{{item.title}}</h4>
                <p>{{item.subtitle}}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from "vue-property-decorator";
import { fetch, post } from "@/util/http";
import { File} from "@/config"


@Component
export default class FileList extends Vue {
    fileList: File[]
    constructor() {
        super();
        this.fileList = [];
    }
    public created() {
       this.getFileInfo()
    }
    public getLink(event: any) {
        let el = event.currentTarget; 
        let dataId = el.getAttribute("dataid")
        console.log(dataId);
        this.$router.push({name: 'about', params: {fileId: dataId}});    
    }
    getFileInfo() {
        fetch("/controller/selectFile", {}).then( (data: any) => {
            console.log(data);
            this.fileList = data;
        })
    }
    
}
</script>

<style lang="scss" scoped >
.fileItem {
    li{
        -webkit-box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
        margin: 15px 0 ;
        padding: 20px 0;
        border-radius: 10px;
        text-align: left;
        h4{
            margin-left: 20px;
        }
        p{
            margin-left: 20px;
            font-size: 13px;
            margin: 5px 20px 0 ;
        }
    }
   
}
</style>
