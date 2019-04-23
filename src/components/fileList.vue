<template>
    <div class="fileItem">
        <ul v-if="fileList.length != 0">
            <li  v-for="(item, key) in fileList" :key="key" :dataId="item._id" v-on:click="getLink($event)">
                <h4>{{item.title}}</h4>
                <p>{{item.subtitle}}</p>
            </li>
        </ul>
        <ul v-else style="text-align:center">
            为查询到数据
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch} from "vue-property-decorator";
import { fetch, post } from "@/util/http";
import { File} from "@/config"


@Component
export default class FileList extends Vue {
    @Prop() tag!: string;
   
    fileList: File[];

    constructor() {
        super();
        this.fileList = [];
        console.log(this.tag)
    }
    @Watch('tag')
    onChildChanged(val: string, oldVal: string) { 
        this.getFileInfo(val)
    };
    public created() {
       this.getFileInfo(this.tag)
    }
    public getLink(event: any) {
        let el = event.currentTarget; 
        let dataId = el.getAttribute("dataid")
        this.$router.push({name: 'about', params: {fileId: dataId}});    
    }
    getFileInfo(msg: string) {
        let filter =  {};
        if (msg != "") {
            filter = {
                language: msg
            }
        }
        fetch("/controller/selectFile", filter).then( (data: any) => {
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
