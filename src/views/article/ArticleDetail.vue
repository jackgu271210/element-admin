<template>
    <div id="detailPage">
        <h1>{{article.title}}</h1>
        <div id="detailInfo">
            <span style="margin-right: 5px;">{{article.article_created_time}}</span>
            <span style="margin-right: 5px;">创建用户</span>
            <span style="margin-right: 5px;">浏览：{{article.article_view_count}}</span>
            <span style="margin-right: 5px;">分类</span>
            <el-button size="mini" @click="back">返回</el-button>
            <el-button size="mini" @click="handleEdit(article._id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(article._id)">删除</el-button>
        </div>
        <el-divider></el-divider>
        <span>版权声明</span>
        <h2>{{article.body}}</h2>
    </div>
</template>

<style>
    #detailPage .el-divider{
        margin: 7px 0;
    }
</style>

<script>
    export default {
        data() {
            return {
                article: {}
            }
        },
        methods: {
            fetch() {
                this.$http.get(`/articles/${this.$route.params.id}`).then(res => {
                    this.article = res.data;
                })
            },
            handleDelete(id) {
                this.$http.delete(`articles/${id}`).then(res => {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                    this.$router.push(`/articles/list`)
                })
            },
            handleEdit(id) {
                this.$router.push(`/articles/${id}/edit`)
            },
            back(){
                this.$router.push(`/articles/list`)
            }
        },
        created(){
            this.fetch()
        }
    };
</script>
