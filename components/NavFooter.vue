<template>
  <div id="footer">
    <el-row class="footer-top">
      <div class="container">
        <!-- <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="brand text-center"> -->
          <!-- <img srcset="@/assets/images/brand.png 1x, @/assets/images/brand@2x.png 2x" alt="banner"> -->
          <!-- <p style="font-size: 4rem; font-family:Comic Sans MS; color:#264d80">MINECODE</p> -->
        <!-- </el-col> -->
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="footer-content text-center">MINECODE 是由資深工程師及設計師組成的團隊，透過長期豐富的經驗，提供專業的服務及更經濟的價格，享受快速且可靠的專業服務。</div>
        </el-col>
      </div>
    </el-row>
    <!-- <el-row>
      <div class="container">
        <div class="footer">
          <div class="logo">
            <img src="@/assets/images/nav-logo-with-words-inverse.svg" alt="">
          </div>
          <div class="links">
            <div class="title">說明</div>
            <router-link v-scroll-to="'.terms-section'" class="item" to="/service">服務條款</router-link>
            <router-link v-scroll-to="'.terms-section'" class="item" to="/privacy">隱私權條款</router-link>
          </div>
          <div class="appdownload">
            <span class="title">下載</span>
            <a href="https://apps.apple.com/tw/app/id1458075685" target="_blank">
              <img src="@/assets/images/app-store.svg" alt="">
            </a>
          </div>
          <div class="contact">
            <span class="title">服務電話</span>
            <span class="phone">0800-809-888</span>
          </div>
        </div>
      </div>
    </el-row> -->
    <el-row class="footer-bottom">
      <div class="container">
        <div>© 2020 minecode, All Rights Reserved.</div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_flex.scss';
@import '@/assets/scss/_media.scss';
.footer {
  margin: 40px 0;
  @extend %flexbox;
  @include align-items(flex-start);
  height: 110px;
  .logo {
    width: 250px;
    text-align: left;
  }
  .links {
    width: 250px;
    height: 100%;
    @extend %flexbox;
    @include flex-direction(column);
    @include justify-content(space-between);
    @include align-items(flex-start);
    .item {
      color: #999;
    }
  }
  .title {
    color: #555;
  }
  .appdownload {
    width: 250px;
    height: 100%;
    @extend %flexbox;
    @include flex-direction(column);
    // @include justify-content(space-between);
    @include align-items(flex-start);
    img {
      padding-top: 16px;
    }
  }
  .contact {
    width: 250px;
    height: 100%;
    @extend %flexbox;
    @include flex-direction(column);
    // @include justify-content(space-between);
    @include align-items(flex-start);
    .phone {
      font-size: 20px;
      color: #555;
      line-height: 2.5;
    }
  }
}
@include mq-xs {
.footer {
  @include flex-direction(column);
  height: auto;
  padding: 0 25px;
  .logo {
    padding-bottom: 20px;
  }
  .links > .item {
    padding: 10px 0;
  }
  .appdownload {
    padding: 25px 0;
  }
}
.copyright {
  font-size: 10px;
  @include justify-content(space-evenly);
}
}
.footer-bottom .container {
  border-top: 1px solid #ddd;
  padding: 12px 0;
  text-align: center;
  color: #999;
}
</style>
