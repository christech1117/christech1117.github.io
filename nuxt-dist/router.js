import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _961fd0f0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3bc529db = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _218ea858 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "pages/Home" */))
const _5b7cc3a8 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _fc213ada = () => interopDefault(import('../pages/PageNotFound.vue' /* webpackChunkName: "pages/PageNotFound" */))
const _da1d957a = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _73370c20 = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _46d50cfd = () => interopDefault(import('../pages/works.vue' /* webpackChunkName: "pages/works" */))
const _56b01b66 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _961fd0f0,
    name: "about"
  }, {
    path: "/contact",
    component: _3bc529db,
    name: "contact"
  }, {
    path: "/Home",
    component: _218ea858,
    name: "Home"
  }, {
    path: "/news",
    component: _5b7cc3a8,
    name: "news"
  }, {
    path: "/PageNotFound",
    component: _fc213ada,
    name: "PageNotFound"
  }, {
    path: "/privacy",
    component: _da1d957a,
    name: "privacy"
  }, {
    path: "/service",
    component: _73370c20,
    name: "service"
  }, {
    path: "/works",
    component: _46d50cfd,
    name: "works"
  }, {
    path: "/",
    component: _56b01b66,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
