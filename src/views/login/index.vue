<template>
  <div class="container">
          <div class="login-wrapper">
              <div class="header">Login</div>
              <!-- 登录表单 -->
              <el-form ref="form" :model="loginForm" :rules="loginRules">
                <el-form-item prop="mobile">
                  <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item prop="isAgree">
                  <el-checkbox v-model="loginForm.isAgree">用户平台协议</el-checkbox>
                </el-form-item>
                <el-form-item>
                  <div class="btn" @click="login">Login</div>
                </el-form-item>
              </el-form>
          </div>
      </div>
</template>

<script>
// import request from '@/utils/request'
export default {
  name: 'LoginIndex',
  data () {
    return {
      loginForm: {
        mobile: '13800000002',
        password: 'hm#qd@23!',
        isAgree: true
      },
      loginRules: {
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }, {
          pattern: /^1[3-9]\d{9}$/,
          message: '手机号格式不正确',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }, {
          min: 6,
          max: 16,
          message: '密码格式不正确',
          trigger: 'blur'
        }],
        isAgree: [{
          validator: (rule, value, callback) => {
            value ? callback() : callback(new Error('您必须勾选'))
          }
        }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.form.validate(async (isOk) => {
        if (isOk) {
          await this.$store.dispatch('user/login', this.loginForm)
          this.$router.push('/')
        }
      })
    }
  }
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
  height: 1500px;
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
