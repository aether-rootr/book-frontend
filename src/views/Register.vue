<template>
  <div class="register">
      <div class="register-body register">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username1"
            name="username1"
            label="用户昵称"
            placeholder="用户昵称"
            :rules="[{ required: true, message: '请填写用户昵称' }]"
          />
          <van-field
            v-model="username1"
            name="username1"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password1"
            type="password"
            name="password1"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <div class="link-login">
              <router-link  to="./login">
                <span>已有登录账号</span>
              </router-link>
            </div>
            <van-button round block type="info" color="#1baeae" native-type="submit">注册</van-button>
          </div>
        </van-form>
      </div>
  </div>
</template>

<script>
import { register } from '../service/user'
import { Toast } from 'vant'
import Verify from 'vue2-verify'
export default {
  data() {
    return {
      username1: '',
      password1: '',
      type: 'register',
      verify: false
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
      const { data } = await register({
        "loginName": values.username1,
        "password": values.password1,
        "nickName": values.username1
      })
      Toast.success('注册成功')
      this.type = 'login'
    },
  },
}
</script>

<style lang="less">
.register {
  .register-body {
    border: 1px solid grey;
    width: 280px;
    height: 230px;
    margin: 80px auto auto;
    text-align: center;
    background-color: white;
  }
  .register {
    .link-login {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
}
</style>
