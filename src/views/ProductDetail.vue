<template>
  <div class="product-detail">
    <van-nav-bar
    left-text="返回"
    left-arrow
    @click-left="goBack"
    />
    <div class="detail-content">
      <div class="detail-swipe-wrap">
        <van-swipe class="my-swipe" indicator-color="#1baeae">
          <van-swipe-item>
            <img :src="detail.goodsCoverImg" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="product-info">
        <div class="product-price">
          <span>价格：¥{{ detail.sellingPrice }}</span>
        </div>
      </div>
      <div class="product-intro">
        <van-tabs v-model="active">
          <van-tab title="书名">
            <span>{{ detail.goodsName }}</span>
          </van-tab>
          <van-tab title="作者">
            <span>{{ detail.goodsAuthor }}</span>
          </van-tab>
          <van-tab title="出版社">
            <span>{{ detail.goodsPress }}</span>
          </van-tab>
          <van-tab title="详情">
            <span>{{ detail.goodsDetailContent }}</span>
          </van-tab>
        </van-tabs>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" :info="!count ? '' : count" @click="goTo()" text="购物车"/>
        <van-goods-action-button type="warning" @click="addCart" text="加入购物车" />
        <van-goods-action-button type="danger" @click="goToCart" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { getDetail } from '../service/good'
import { addCart } from '../service/cart'
import { Toast } from 'vant'
import navBar from '@/components/NavBar'
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
  data() {
    return {
      detail: {
        goodsCarouselList: []
      }
    }
  },
  components: {
  },
  async mounted() {
    const { id } = this.$route.params;
    const { data } = await getDetail(id);
    this.detail = data;
  },
  methods: {
    goBack() {
      // this.$router.push('/user')
      this.$router.go(-1)
    },
    goTo() {
      this.$router.push({ path: '/cart' })
    },
    async addCart() {
      const { data, resultCode } = await addCart({ goodsCount: 1, goodsId: this.detail.goodsId })
      console.log(resultCode)
      if (resultCode == 200 ) Toast.success('添加成功')
      this.$store.dispatch('updateCart')
    },
    async goToCart() {
      const { data, resultCode } = await addCart({ goodsCount: 1, goodsId: this.detail.goodsId })
      await this.$store.dispatch('updateCart')
      this.$router.push({ path: '/cart' })
    }
  },
  computed: {
    count () {
      return this.$store.state.cartCount
    }
  }
}
</script>

<style lang="less">
  @import '../common/style/mixin';
  .product-detail {
    .detail-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      .fj();
      .wh(100%, 44px);
      line-height: 44px;
      padding: 0 10px;
      .boxSizing();
      color: #252525;
      background: #fff;
      border-bottom: 1px solid #dcdcdc;
      .product-name {
        font-size: 14px;
      }
    }
    .detail-content {
      margin-top: 44px;
      .detail-swipe-wrap {
        .my-swipe .van-swipe-item {
          img {
            width: 220px;
            height: 220px;
            margin-left: 20px;
            border:2px solid grey;
          }
        }
      }
      .product-info {
        padding: 0 10px;
        height:70px;
        width:170px;
        .product-title {
          font-size: 18px;
          text-align: left;
          color: #333;
        }
        .product-desc {
          font-size: 14px;
          text-align: left;
          color: #999;
          padding: 5px 0;
        }
        .product-price {
          .fj();
          span:nth-child(1) {
            color: #F63515;
            font-size: 20px;
            margin-left: 40px;
          }
        }
      }
      .product-intro {
        width: 400px;
        height: 220px;
        margin-top: -295px;
        border: 1px solid grey;
        margin-left: 300px;
        span{
          font-size: 16px;
        }
      }
    }
  }
</style>
