<template>
  <div class="login">
    <div  class="login-body login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" color="orangered" native-type="submit">登录</van-button>
          <div class="link-register">
            <router-link  to="./register">
              <span>立即注册</span>
            </router-link>
          </div>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { login, register, getUserInfo } from '../service/user'
import { setLocal, getLocal } from '@/common/js/utils'
import { Toast } from 'vant'
export default {
  data() {
    return {
      username: '',
      password: '',
      type: 'login',
    }
  },
  components: {
  },
  methods: {
    toggle(v) {
      this.verify = false
      this.type = v
    },
    async onSubmit(values) {
      const { data, resultCode } = await login({
        "loginName": values.username,
        "passwordMd5": this.$md5(values.password)
      })
      setLocal('token', data)
      window.location.href = '/'
    },
  },
}
</script>

<style lang="less">
  .login {
    .login-body {
      border: 1px solid grey;
      width: 280px;
      height: 200px;
      margin: 100px auto auto;
      text-align: center;
      background-color: white;
    }
    .login {
      .link-register {
        font-size: 10px;
        margin-top: 30px;
        margin-left: 140px;
        color: grey;
      }
    }
    .register {
      .link-login {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        display: inline-block;
      }
    }
    .verify-bar-area {
      margin-top: 24px;
      .verify-left-bar {
        border-color: #1baeae;
      }
      .verify-move-block {
        background-color: #1baeae;
        color: #fff;
      }
    }
    .verify {
      >div {
        width: 100%;
      }
      display: flex;
      justify-content: center;
      .cerify-code-panel {
        margin-top: 16px;
      }
      .verify-code {
        width: 40%!important;
        float: left!important;
      }
      .verify-code-area {
        float: left!important;
        width: 54%!important;
        margin-left: 14px!important;
        .varify-input-code {
          width: 90px;
          height: 38px!important;
          border: 1px solid #e9e9e9;
          padding-left: 10px;
          font-size: 16px;
        }
        .verify-change-area {
          line-height: 44px;
        }
      }
    }
  }
</style>
