<template>
  <el-form @submit.native.prevent="saveCompany" ref="form" :model="company" label-width="120px">
    <el-row :gutter="20">
      <el-col :span="10">
        <el-form-item label="公司名称">
          <el-input v-model="company.companyName"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="company.telephone"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="company.postCode"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item label="联系人">
          <el-input v-model="company.contact"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="company.email"></el-input>
        </el-form-item>
        <el-form-item label="网址">
          <el-input v-model="company.website"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
        company: {

        }
    };
  },
  methods: {
    saveCompany() {
      this.$http.post('company', this.article).then(res => {
        console.log(res.data)
        this.$message({
          message: '文章创建成功',
          type: 'success'
        });
        this.$router.push('/article/list')
      })
    }
  }
};
</script>