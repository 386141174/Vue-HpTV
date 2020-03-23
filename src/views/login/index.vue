<template>
  <div class="login-container1">
    <el-form ref="loginForm" :model="loginForm"  class="login-form" auto-complete="off" label-position="left" >

      <div class="title-container1">
        <h3 class="title">Hp教育资源共享平台</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container1">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="off"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container1">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
        <div>
          <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:10px;" @click.native.prevent="handleLogin" >登录</el-button>
        </div>
      <div>
        <el-button type="success" style="width:100%;margin-bottom:10px;" @click="goSignIn">注册</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" >
          <el-form :model="form" >
            <el-form-item label="活动名称" :label-width="formLabelWidth"  >
              <el-input v-model="form.name" autocomplete="off" ></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth" >
              <el-select v-model="form.region" placeholder="请选择活动区域" >
                <el-option label="区域一" value="shanghai" ></el-option>
                <el-option label="区域二" value="beijing" ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
<!--        <el-button type="success" style="width:100%;margin-bottom:10px;" @click="goSignIn">注册</el-button>-->
      </div>
    </el-form>



  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
// import {login,getInfo,singIn} from '@/api/user'
import {login} from "../../api/user";

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        radio: 'student'
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      userSignIn: {
        username: '',
        password: '',
      },
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'

    }

  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
          this.loading = true;
          login(this.loginForm).then( (res) => {
              // console.log(res.data.token === '')
              if (res.data.token === '') {
                  this.$message.error('密码错误');
              }
          })
          this.$store.dispatch('user/login', this.loginForm).then((res) => {
            // console.log("登录后:" + res);
            this.$router.push({ path: this.redirect || '/' ,query:{username:this.loginForm.username}})
            this.loading = false
          }).catch((re) => {
              this.$message({
                  message: '账户信息错误,请重新输入！',
                  type: 'warning'
              });
            this.loading = false
          })
    },
    goSignIn() {
      let routUrl =this.$router.resolve({
        path:"signIn",
      })
      window.open(routUrl.href)
    }




  }
}
</script>

<style lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#283443;
  $light_gray:#fff;
  $cursor: #fff;

  //@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
   // .login-container .el-input input {
   //   color: $cursor;
  //  }
 // }

  /* reset element-ui css */
  .login-container1 {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container1 {
    min-height: 100%;
    width: 100%;
    background-image: url("../../../static/backgroud1.jpg");

    background-size:100% 100%;



  overflow: hidden;

    .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container1 {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container1 {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }


</style>

