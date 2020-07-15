<template>
  <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="120px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="article.category" placeholder="请选择新闻分类">
        <el-option label="公司新闻" value="公司新闻"></el-option>
        <el-option label="行业资讯" value="行业资讯"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章内容">
      <quill-editor ref="myTextEditor" v-model="article.content" :options="editorOption"></quill-editor>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';
export default {
  data() {
    return {
        editorOption: {
          placeholder: 'hello world'
        },
        article: {

        }
    };
  },
  components: {
    quillEditor
  },
  methods: {
    saveArticle() {
      this.$http.post('article', this.article).then(res => {
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

<style>
 .ql-container {
   height: 400px;
 }
</style>