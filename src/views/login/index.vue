<template>
  <div class="container">
          <div class="login-wrapper">
              <div class="header">Login</div>
              <!-- <div>
                  <input type="text" name="username" placeholder="username" class="input-item">
                  <input type="password" name="password" placeholder="password" class="input-item">
                  <div class="btn">Login</div>
              </div> -->
              <!-- 登录表单 -->
              <el-form>
                <el-form-item>
                  <el-input placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-checkbox>用户平台协议</el-checkbox>
                </el-form-item>
                <el-form-item>
                  <div class="btn">Login</div>
                </el-form-item>
              </el-form>
          </div>
      </div>
</template>

<script>
export default {
  name: 'LoginIndex'
}
</script>

<style scoped>

html {
  height: 100%;
}
body {
  height: 100%;
}
.container {
  /* margin-top: 5%; */
  height: 1300px;
  width: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-wrapper {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}
.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
.input-item:placeholder {
  text-transform: uppercase;
}
.btn {
  text-align: center;
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}
.msg {
  text-align: center;
  line-height: 88px;
}
a {
  text-decoration-line: none;
  color: #abc1ee;
}

</style>
