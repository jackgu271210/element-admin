<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-tickets"></i>内容管理</template>
          <el-menu-item index="/articles/list">文章列表</el-menu-item>
          <el-menu-item index="/articles/create">新建文章</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span style="margin-right: 10px;">{{username}}</span>
        <el-button type="danger" size="mini" @click="logout()">退出</el-button>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
  html, body {
    padding: 0;
    margin: 0;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      return {
        username: this.$route.query.username
      }
    },
    methods: {
      logout() {
        localStorage.token = "";
        this.$router.push('/') 
      }
    }
  };
</script>
