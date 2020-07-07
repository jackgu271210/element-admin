<template>
  <el-table :data="user" border>
    <el-table-column prop="username" label="管理员账号"></el-table-column>
    <el-table-column prop="realname" label="真实姓名" width="300"></el-table-column>
    <el-table-column prop="password" label="管理员密码" width="300"></el-table-column>
    <el-table-column fixed="right" label="操作" width="200">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row._id)" type="primary" size="small" round>编辑</el-button>
        <el-button @click="remove(scope.row._id)" type="danger" size="small" round>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      user: []
    };
  },
  methods: {
    fetch() {
        this.$http.get("user").then(res => {
        this.user = res.data;
      });
    },
    edit(id) {
      this.$router.push(`/user/${id}/edit`)
    },
    remove(id) {
      this.$http.delete(`user/${id}`).then(res => {
        console.log(res);
        this.$message({
          message: '文章删除成功',
          type: 'success'
        });
        this.fetch();
      })
    }
  },
  created() {
    this.fetch();
  }
};
</script>