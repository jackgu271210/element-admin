<template>
  <el-container id="indexPage">
    <el-header style="height: 30vh;line-height: 17vh;background-color: rgba(255,255,255,0);padding: 13vh 0 0 0;">
      <h1>
        Element ui login
      </h1>
    </el-header>
    <el-main style="padding: 0;">
      <el-row type="flex" justify="center">
        <el-col :span="10">
          <el-form @submit.native.prevent="submitForm('userForm')" :model="userForm" :rules="rules" status-icon ref="userForm">
            <el-form-item prop="username">
              <el-input v-model="userForm.username" auto-complete="on" placeholder="用户名" clearable></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="userForm.password" auto-complete="off" placeholder="密码" clearable></el-input>
            </el-form-item>
            <el-form-item style="text-align: right;margin-bottom: 0;">
              <el-button type="text" size="mini">忘记密码</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" native-type="submit">登录</el-button>
              <el-button @click="resetForm('userForm')">重置</el-button>
            </el-form-item>
            <el-form-item style="text-align: left;margin-bottom: 0;">
              <el-button type="text" size="mini" @click="goRegister">注册账号</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      userForm: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 校验用户信息
          this.$http.post('/login', this.userForm).then(res => {
            this.$message({
              message: res.data.user.username + '用户登录成功',
              type: 'success'
            });
            localStorage.token = res.data.token;
            console.log(localStorage.token)
            this.$router.push({path: '/articles', query: {username: res.data.user.username}}) 
          }).catch(err => {
            if (err) {
              this.$message({
                message: '请输入正确的用户名和密码',
                type: 'warning'
              });
            }
            return false;
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goRegister() {
      this.$router.push('/Register')
    }
  }
}
</script>

<style>
  .el-container {
    padding: 0;
    margin: 0;
  }
  #indexPage {
    text-align: center;
  }
  h1 {
    margin: 0;
  }
  #indexPage .el-form {
    border: 1px solid #DCDFE6;
    border-radius: 5px;
    padding: 2vh;
  }
</style>
