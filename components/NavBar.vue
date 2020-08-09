<template>
  <header>
    <nav>
      <div id="logo">

      </div>
      <div class="menu">
        <ul>
          <li><a href="news.php">最新消息</a></li>
          <li><a href="teachers.php">導師群</a></li>
          <li><a href="about.php">服務模式</a></li>
          <li><a href="about.php#story">關於我們</a></li>
          <li class="active"><a>報名體驗</a></li>
          <li><a href="#"><i class="icon-fb"></i></a></li>
        </ul>
        <p>Phone - 02 2311 3731<br> Email - canwho.tw@gmail.com<br>
          Address - 台北市中正區重慶南路一段122號</p>
        <p>Copyright © 2017 Canwho All rights reserved.</p>
      </div>
      <div class="hamberger-container">
        <a class="hamburger hamburger--collapse pull-right nav-buttons">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </a>
      </div>
      <div class="navigation">
        <ul>
          <li>
            <router-link to="/news">最新消息</router-link>
          </li>
          <li>
            <router-link to="/works">專案列表</router-link>
          </li>
          <li>
            <router-link to="/about">關於我們</router-link>
          </li>
          <li>
            <router-link to="/contact">專案詢問</router-link>
          </li>
        </ul>
      </div>
      <div class="mask">
        <img src="@/assets/images/mask-header.png" alt="">
      </div>
    </nav>

    <!-- <router-link class="nav-item nav-link scrollactive-item" to="/#advantage" @click="handleNavToggle">我們的優勢</router-link>
    <router-link class="nav-item nav-link scrollactive-item" to="/#service" @click="handleNavToggle">服務簡介</router-link>
    <router-link class="nav-item nav-link scrollactive-item" to="/#calculation" @click="handleNavToggle">運費試算</router-link>
    <router-link class="nav-item nav-link scrollactive-item" to="/#transmit" tabindex="-1" aria-disabled="true" @click="handleNavToggle">我想寄件</router-link> -->
  </header>
</template>

<script>
import FixedHeader from 'vue-fixed-header'

export default {
  components: {
    FixedHeader
  },
  methods: {
    handleNavToggle() {
      const toggle = document.querySelector('.navbar-toggler')
      toggle.click()
    }
  }
}
</script>
<style lang="scss" scoped>
#nav-bar {
  color: #fff;
}
</style>
