import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import IndexArticle from '../views/IndexArticle.vue'

import CompanyInfo from '../views/company/CompanyInfo.vue'

import CreateArticle from '../views/article/CreateArticle.vue'
import ListArticle from '../views/article/ListArticle.vue'
import EditArticle from '../views/article/EditArticle.vue'
import ArticleDetail from '../views/article/ArticleDetail.vue'

import CreateUser from '../views/user/CreateUser.vue'
import ListUser from '../views/user/ListUser.vue'
import EditUser from '../views/user/EditUser.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/article',
    name: 'index-article',
    component: IndexArticle,
    children: [
      {
        path: '/company/info',
        name: 'company-info',
        component: CompanyInfo
      },
      {
        path: '/article/list',
        name: 'list-article',
        component: ListArticle
      },
      {
        path: '/article/create',
        name: 'create-article',
        component: CreateArticle
      },
      {
        path: '/article/:id/edit',
        name: 'edit-article',
        component: EditArticle
      },
      {
        path: '/article/:id/detail',
        name: 'detail-article',
        component: ArticleDetail
      },
      {
        path: '/user/list',
        name: 'list-user',
        component: ListUser
      },
      {
        path: '/user/create',
        name: 'create-user',
        component: CreateUser
      },
      {
        path: '/user/:id/edit',
        name: 'edit-user',
        component: EditUser
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
