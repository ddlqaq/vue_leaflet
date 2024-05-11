<template>
  <div class="right-menu">
    <el-dropdown @command="handleCommand">
        <i class="el-icon-user-solid"></i><span class="name">zdl</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="useMessage">用户信息</el-dropdown-item>
        <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand (command) {
      if (command === 'loginOut') {
        // 退出登录：清空vuex和浏览器的token，执行登录页
        this.$store.dispatch('user/loginout')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.right-menu{
  width: 100px;
  height: 100px;
  background-color: rgb(211, 204, 204);
  margin: 15px 2000px;
  outline: 2px white dashed;
  outline-offset:-10px;
  border-radius:4%;
}
.el-icon-user-solid {
  font-size: 30px;
  margin-top: 30px;
}
.name{
  font-size: 20px;
}
</style>
