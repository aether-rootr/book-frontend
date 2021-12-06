<template>
  <div>
    <van-nav-bar
      title="关于"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <p>大学当图书商城</p>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  }
}
</script>