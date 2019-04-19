<<template>
    <div class="personInfo">
        <div class="headerImg">
            <img src="@/assets/images/header.jpeg" alt="" />
        </div>
        <ul>
            <li><span>博主：</span>蹦擦擦</li>
            <li><span>地址：</span>上海浦东</li>
            <li><span>简介：</span>hahaha</li>
        </ul>
    </div >
</template>

<script lang="ts">
import { Component, Prop, Vue, } from "vue-property-decorator";

@Component
export default class Person extends Vue {
    
}
</script>

<style lang="scss" scoped>
.personInfo {
    font-size: 14px;
    .headerImg{
        text-align: center;
        margin-bottom: 20px;
        img{
            width: 100px;
            height:100px;
        }
    }
    ul{
        width: 50%;
        text-align: left;
        margin: 0 auto;
    }
}
</style>
