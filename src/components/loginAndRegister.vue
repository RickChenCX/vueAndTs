<template>
    <div class="sign-box">
        <div class="sign-title">
            <div class="login-title" :class="{active:loginStatus}" @click="changeLoginStatus()">登陆</div>
            <div class="register-title" :class="{active:!loginStatus}" @click="changeLoginStatus()">注册</div>
            <span @click="close()" >X</span>
        </div>
        <div class="errorMsg">{{errorMsg}}</div>

        <div class="login-body" v-show="loginStatus">
            <div>
                <label for="username">用户名：</label>
                <input type="text" id="username" />
            </div>
             <div>
                <label for="password">密码：</label>
                <input type="text" id="password" />
            </div>
            <button class="login-btn">登陆</button>
        </div>
        <div class="login-body" v-show="!loginStatus">
            <div>
                <label for="username">用户名：</label>
                <input type="text" v-model="register.username" id="username" />
            </div>
             <div>
                <label for="password">密码：</label>
                <input type="text" v-model="register.password" id="password" />
            </div>
            <div>
                <label for="confirmPassword">确认密码：</label>
                <input type="text" v-model="register.re_pass" id="confirmPassword" />
            </div>
            <div>
                <label for="">角色：</label>
                <select name="" id="" v-model="register.role">
                    <option value="" disabled>请选择</option>
                    <option>老师</option>
                    <option>学生</option>
                </select>
            </div>
            <button class="register-btn" @click="postRegister()">注册</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from "vue-property-decorator";
import {fetch, post} from "@/util/http.ts";
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';
import action from '../vuex/action';
interface LoginArg {
    username: string,
    password: string,
}
interface RegiserArg {
    username: string,
    password: string,
    re_pass: string,
    role: string,
}
@Component
export default class LoginAndRegister extends Vue {
    @Action("nameAsyc") public actionUser: any
    loginStatus: boolean;
    register: RegiserArg;
    errorMsg: string;
    login: LoginArg;
    constructor() {
        super()
        this.loginStatus = true;
        this.errorMsg = '';
        this.register = {
            username: '',
            password: '',
            re_pass: '',
            role: ''
        };
        this.login = {
            username: '',
            password: ''
        }
    }
   
    changeLoginStatus() {
        this.loginStatus = !this.loginStatus
    }
    close() {
        this.$emit("closeLogin")
    }
    postRegister() {
        let that = this;
        this.errorMsg = "";
        let {username, password, role, re_pass} = this.register;
        if (username == '' || password == '' || role == '' || re_pass == '') {
            this.errorMsg = "请输入完整信息";
            return false;
        }
        if (password !== re_pass ) {
            this.errorMsg = "两次密码不一致";
            return false;
        }
        this.register.role == '教师' ? this.register.role = 'teacher' : this.register.role = "student";
        console.log(this.register)
        post('/signup', this.register).then(data => {
            if (data) {
                that.actionUser(that.register.username);
                this.close();
            }
        }).catch( err => {
            console.log(err);
        })
    }
}
</script>

<style lang="scss" scoped>
$width:330px;
$height: 300px;
.sign-box{
    background-color: #fff;
    width: 330px;
    -webkit-box-shadow: 0 0 1px 1px #666;
    box-shadow: 0 0 1px 1px #666;
    border-radius: 5px;
    position: absolute;
    top: 0;
    bottom: 0;
    height: $height;
    left: 0;
    margin: auto;
    right: 0;
    z-index: 9;
    .sign-title{
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #eeeeee;
        margin-bottom: 20px;
        position: relative;
        span{
            position: absolute;
            padding: 5px;
            right: 10px;
            top: 5px;
            cursor: pointer;
        }
        div{
            cursor: pointer;
        }
    }
    .login-title{
        flex:1;
        border-right: 1px solid #eee;
    }
    .register-title{
        flex:1;
    }
    .login-body{
        padding-bottom: 20px;
        div{
            display: grid;
            grid-template-columns: 85px 130px;
            grid-template-rows: auto;
            /* display: flex; */
            justify-content: center;
            margin-bottom: 20px;
        }
        .login-btn, .register-btn{
            border: 0;
            border-radius: 5px;
            padding: 5px 15px;
            background-color: #83d669;
            color: #fff;
        }
    }
}

.active ,.errorMsg{
    color: #fa0707
}
</style>
