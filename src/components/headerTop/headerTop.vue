<template>
  <div class="nav-container">
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo nav-box"
    mode="horizontal"
    @select="handleSelect"
  >     
        <el-menu-item index="99">
          <router-link to="/" tag="h1">
            Eend商城
          </router-link>
        </el-menu-item>
        <el-menu-item index="1">
          <router-link to="/login" tag="span">
            登录
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/Register" tag="span">
            注册
          </router-link>
        </el-menu-item>
        <el-menu-item index="3">我的订单</el-menu-item>
        <el-submenu index="4">
        <template slot="title">
          <router-link to="/personal" tag="span">
            个人中心
          </router-link>
        </template>
        <el-menu-item index="4-1">购物车</el-menu-item>
        <el-menu-item index="4-2">积分商城</el-menu-item>
        <el-menu-item index="4-3">我的会员</el-menu-item>
        </el-submenu>
        <el-menu-item index="5" disabled>在线客服</el-menu-item>
        <el-input class="input-container"
            placeholder="请输入内容"
            v-model="input10"
            clearable>
        </el-input>
        <el-button class="search-btn" type="success">搜索</el-button>
  </el-menu>
   </div>
</template>

<script>
export default {
    name: "headerTop",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input10: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>


<style lang="scss" scoped>
.nav-box{
    background: #000;
    padding: 30px;
    .input-container{
        width: 20%;
        margin-top:10px;
        margin-left: 28%;
    }
}

</style>
