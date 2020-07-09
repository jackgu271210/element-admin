<template>
  <el-container id="registerPage">
    <el-header style="height: 20vh;line-height: 12vh;background-color: rgba(255,255,255,0);padding: 8vh 0 0 0;">
      <h1>
        Element ui register
      </h1>
    </el-header>
    <el-main style="padding: 0;">
      <el-row type="flex" justify="center">
        <el-col :span="10">
          <el-form @submit.native.prevent="submitForm('userForm')" :rules="rules" :model="userForm" status-icon ref="userForm">
            <el-form-item prop="username">
              <el-input v-model="userForm.username" auto-complete="on" placeholder="用户名" clearable></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="userForm.phone" auto-complete="on" placeholder="手机" clearable></el-input>
            </el-form-item>
            <el-form-item prop="mail">
              <el-input v-model="userForm.mail" auto-complete="on" placeholder="邮箱" clearable></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="userForm.password" auto-complete="off" placeholder="密码" clearable></el-input>
            </el-form-item>
            <el-form-item prop="passwordConfirm">
              <el-input type="password" v-model="userForm.passwordConfirm" auto-complete="off" placeholder="确认密码" clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" native-type="submit">注册</el-button>
              <el-button @click="resetForm('userForm')">重置</el-button>
            </el-form-item>
            <el-form-item style="text-align: left;margin-bottom: 0;">
              <el-button type="text" size="mini" @click="goLogin">登录</el-button>
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
    var validatePhone = (rule, value, callback) => {
      // let reg = /^1[0-9]{10}$/
      if (value === '' || value.length !== 11/* || !reg.test(value)*/) {
        callback(new Error('请输入正确的联系方式'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.userForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      userForm: {
        username: '',
        phone: '',
        mail: '',
        password: '',
        passwordConfirm: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' }
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ],
        passwordConfirm: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/register', this.userForm).then(res => {
            // 成功、失败及提交时验证 TODO
            console.log(res.data)
            this.$message({
              message: '新建用户成功',
              type: 'success'
            });
            this.$router.push('/login')
          }).catch(err => {
            console.log(err)
            this.$message({
              message: '注册失败',
              type: 'warning'
            });
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
  .el-container {
    padding: 0;
    margin: 0;
  }
  #registerPage {
    text-align: center;
  }
  h1 {
    margin: 0;
  }
  #registerPage .el-form {
    border: 1px solid #DCDFE6;
    border-radius: 5px;
    padding: 2vh;
  }
</style>
