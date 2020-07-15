<template>
  <el-container style="height: 100vh;">
    <el-header style="height: 80px; text-align: right; font-size: 12px">
      <span style="font-size:16px; margin-right: 10px;">欢迎回来 {{username}}</span>
      <el-button type="danger" size="mini" @click="logout()">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(56, 60, 72)">
        <el-menu router :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-tickets"></i>内容管理
            </template>
            <el-menu-item index="/article/list">文章列表</el-menu-item>
            <el-menu-item index="/article/create">新建文章</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>系统管理
            </template>
            <el-menu-item index="/user/list">管理员设置</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-tickets"></i>公司信息
            </template>
            <el-menu-item index="/company/info">公司资料</el-menu-item>
            <el-menu-item index="/user/list">独立频道SEO</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-tickets"></i>产品管理
            </template>
            <el-menu-item index="/user/list">产品类别设置</el-menu-item>
            <el-menu-item index="/user/list">产品管理</el-menu-item>
            <el-menu-item index="/user/list">添加产品</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-tickets"></i>询盘管理
            </template>
            <el-menu-item index="/user/list">询盘管理</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-tickets"></i>新闻管理
            </template>
            <el-menu-item index="/user/list">公司新闻类别</el-menu-item>
            <el-menu-item index="/user/list">公司新闻管理</el-menu-item>
            <el-menu-item index="/user/list">添加公司新闻</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-tickets"></i>链接管理
            </template>
            <el-menu-item index="/user/list">友情链接管理</el-menu-item>
            <el-menu-item index="/user/list">热门产品管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
html,
body {
  padding: 0;
  margin: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 80px;
  padding: 0 80px !important;
}
.el-aside {
  color: #333;
}
.el-menu {
  background-color: #383c48 !important;
  border-right: none;
}
.el-menu-item {
    color: #fff !important;
}
.el-submenu__title {
    color: #fff !important;
}
.el-submenu__title i {
    color: #fff !important;
}
.el-submenu .el-menu-item {
    padding-left: 60px !important;
}
.el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #03988a !important;
}
.el-submenu__title:hover {
    background-color: #03988a !important;
}
</style>

<script>
export default {
  data() {
    return {
      username: this.$route.query.username
    };
  },
  methods: {
    logout() {
      localStorage.token = "";
      this.$router.push("/");
    }
  }
};
</script>
