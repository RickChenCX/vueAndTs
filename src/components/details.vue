<template>
    <div class="md" v-html="compiledMarkdown">
       
    </div>
</template>

<script lang="ts">
// import Vue from 'vue';
import { Component, Prop, Vue, } from "vue-property-decorator";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import Marked from "marked";
import { fetch, post } from "@/util/http";
import {File} from "@/config"

const rendererMD = new Marked.Renderer()
Marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight:  (code: any) => {
        return hljs.highlightAuto(code).value;
    }
})
@Component
export default class Mdtemp extends Vue {
    @Prop() fileId!: string
    msg: string ;
    fileObj: File[]
    constructor() {
        super()
        this.msg = ""
        this.fileObj = []
    }
    public created() {
        this.getFileMsg();
    }
    get compiledMarkdown() {
        if (this.fileObj.length > 0) {
            let data = this.fileObj.map( o => o.content)
            return  Marked(data[0], { sanitize: true });
        }
    }
    async getFileMsg() {
        let that = this
        await post("/controller/selectFile", {_id: this.fileId}).then((res: any) => {
            that.fileObj = res
            return  that.fileObj
        }).catch(error => {
            console.error(error);
        })
    }
};
</script>

<style lang="sass" scoped>

</style>


