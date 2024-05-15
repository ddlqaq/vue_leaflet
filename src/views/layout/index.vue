<template>
  <div class="svg-wrapper">
    <el-container class="maxContain">
      <el-aside width="200px">
        <!-- sidebar -->
        <Sidebar></Sidebar>
      </el-aside>
      <el-container>
        <el-header height="120px">
          <!-- navbar -->
          <Navebar></Navebar>
        </el-header>
        <el-main>
          <!-- appmain -->
          <AppMain>

          </AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppMain from './components/AppMain/AppMain.vue'
import Navebar from './components/Navebar/Navebar.vue'
import Sidebar from './components/Sidebar/Sidebar.vue'
export default {
  name: 'LayoutIndex',
  components: {
    AppMain,
    Navebar,
    Sidebar
  }
}
</script>

<style scoped>
.maxContain{
  width: 2400px;
  height: 1300px;
  margin: 20px auto;
  outline: 2px white dashed;
  outline-offset:-10px;
  border-radius:4%;

}
 .el-header {
    background-color: #B3C0D1;
    text-align: center;
    line-height: 60px;
    border-bottom: 2px white dashed;
  }

  .el-aside {
    background-color: #D3DCE6;
    text-align: center;
    line-height: 500px;
    border-right: 2px white dashed;
  }

  .el-main {
    background-color: #E9EEF3;
  }
</style>
