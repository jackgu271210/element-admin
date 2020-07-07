<template>
  <el-form @submit.native.prevent="saveUser" ref="form" :model="user" label-width="120px">
    <el-form-item label="管理员账号">
      <el-input v-model="user.username"></el-input>
    </el-form-item>
    <el-form-item label="真实姓名">
      <el-input v-model="user.realname"></el-input>
    </el-form-item>
    <el-form-item label="管理员密码">
      <el-input v-model="user.password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="密码确认">
      <el-input v-model="user.rePassword" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
        user: {

        }
    };
  },
  methods: {
    saveUser() {
      this.$http.post('user', this.user).then(res => {
        console.log(res.data)
        this.$message({
          message: '管理员创建成功',
          type: 'success'
        });
        this.$router.push('/user/list')
      })
    }
  }
};
</script>