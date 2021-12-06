<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link class="login" tag="li" to="/login" v-if="!isLogin"><span>登录</span></router-link>
      <router-link class="login" tag="li" to="/user" v-else>
        <van-icon name="manager-o"><span> 欢迎： {{ nickName }}</span></van-icon>
      </router-link>
      <router-link tag="li" class="nav-list-item active" to="/home">
        <i class="nbicon nblvsefenkaicankaoxianban-1" ><span> 首页</span></i>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="/cart">
        <van-icon  name="shopping-cart-o" :info="!count ? '' : count" ><span> 购物车</span></van-icon>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="/user">
        <i class="nbicon nblvsefenkaicankaoxianban-"><span> 个人中心</span></i>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import { getLocal } from '../common/js/utils'
  import {getUserInfo} from "@/service/user";
  export default {
    return(){
    },
    async mounted() {
      const token = getLocal('token')
      if (token) {
        this.isLogin = true
        const {data} = await getUserInfo()
        this.nickName = data.nickName
      }
    },
    data() {
      return {
        isLogin: false,
        nickName: '',
      }
    },
    computed: {
      count () {
        return this.$store.state.cartCount
      }
    }
  }
</script>

<style lang="less" scoped >
    @import '../common/style/mixin';
    .nav-bar{
      position: fixed;
      left: 0;
      margin-top: 0;
      width: 100%;
      height: 15px;
      padding: 5px 0;
      z-index: 1000;
      background: white;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
      .nav-list {
        width: 100%;
        .fj();
        flex-direction: row;
        padding: 0;
        .nav-list-item {
          display: flex;
          flex: 1;
          flex-direction: column;
          text-align: center;
          color: #000000;
          &.router-link-active {
            color: @primary;
          }
          i {
            text-align: center;
            font-size: 10px;
          }
          span{
            font-size: 8px;
            cursor: pointer;  //鼠标一只手的形状
          }
          .van-icon-shopping-cart-o {
            margin: 0 auto 2px;
          }
        }
        .login{
          display: flex;
          flex: 1;
          flex-direction: column;
          text-align: center;
          color: #000000;
          cursor: pointer;
          span{
            font-size: 8px;
          }
        }
      }
    }
</style>
