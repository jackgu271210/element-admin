<template>
  <el-table :data="article" border>
    <el-table-column prop="id" type="index" label="ID" width="160"></el-table-column>
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column prop="category" label="分类" width="300"></el-table-column>
    <el-table-column prop="time" label="日期" width="300"></el-table-column>
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
      article: []
    };
  },
  methods: {
    fetch() {
        this.$http.get("article").then(res => {
        this.article = res.data;
      });
    },
    edit(id) {
      this.$router.push(`/article/${id}/edit`)
    },
    remove(id) {
      this.$http.delete(`article/${id}`).then(res => {
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