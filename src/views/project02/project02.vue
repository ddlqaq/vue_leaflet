<template>
  <div class="mainbox">
    <el-breadcrumb style="height: 40px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学生信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="function">
      <el-form>
        <el-row >
          <el-col :span="16">
            <el-form-item label="请输入查询条件:">
              <el-input v-model="inputString" placeholder="请输入查询条件"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="text-align: right;">
            <el-button-group>
              <el-button @click="queryStudens()" type="primary" icon="el-icon-search">查询</el-button>
              <el-button type="primary" icon="el-icon-folder">全部</el-button>
              <el-button type="primary" icon="el-icon-circle-plus">添加</el-button>
            </el-button-group>
          </el-col>
          <el-col :span="2" style="text-align: right;padding-right: 5px;">
            <el-upload action="#">
              <el-button  type="primary">导入Excel</el-button>
            </el-upload>
          </el-col>
          <el-col :span="2">
            <el-button  type="primary">导出Excel</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="studentTable">
      <el-table :data="pageStudents" border style="width: 100%">
        <el-table-column  width="60px" type="selection"></el-table-column>
        <el-table-column width="100px"  type="index" label="序号"></el-table-column>
        <el-table-column
          prop="sno"
          label="学号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column width="100px"
          prop="gender"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="birthday"
          label="出生日期">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column width="180px" label="操作">
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-row style="margin-top: 10px;">
        <el-col :span="8" style="text-align: left;">
          <el-button type="primary" icon="el-icon-delete" >批量删除</el-button>
        </el-col>
        <el-col :span="16" style="text-align: right;">
          <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalMessage">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { getStudents, queryStudents } from '@/api/student'

export default {
  name: 'studentIndex',
  data () {
    return {
      students: [], // 所有学生信息
      pageStudents: [], // 当前页面学生的信息
      totalMessage: 0, // 总共的记录
      currentPage: 2, // 当前的页码
      pageSize: 10, // 每页多少条记录
      inputString: ''
    }
  },
  async mounted () {
    await this.getStudentsdata()
    this.getpageStudents()
  },
  methods: {
    // 获取所有学生数据
    async getStudentsdata () {
      const response = await getStudents()
      this.students = response
      this.totalMessage = this.students.length
    },
    // 获取当前页面数据
    getpageStudents () {
      this.pageStudents = []
      for (let i = (this.currentPage - 1) * this.pageSize; i < this.totalMessage; i++) {
        this.pageStudents.push(this.students[i])
        if (this.pageStudents.length === this.pageSize) break
      }
    },
    // 每页多少条记录
    handleSizeChange (val) {
      this.pageSize = val
      this.getpageStudents() // 重新获取当前页面数据
    },
    // 当前的页码
    handleCurrentChange (val) {
      this.currentPage = val
      this.getpageStudents()
    },
    // 查询
    async queryStudens () {
      const response = await queryStudents(this.inputString)
      this.pageStudents = response
    }
  }

}
</script>

<style scoped>
.el-form-item .el-input {
  width: 500px;
}

</style>
