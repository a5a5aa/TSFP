<template>
<q-page>
  <q-sectoin class="banner row">
    <q-img
      src="../../assets/images/brand_top.avif"
      style="max-height:35vh; width:100vw;"
    />
    <div class="bg-mask mask-text col-12 column flex-center">
      <p class="col-2 text-h3">ABOUT US</p>
      <p class="col-2 text-h5">關於我們</p>
    </div>
  </q-sectoin>
  <section class="section_1 location_section_1">
    <h5 class="field-title q-mb-xl">－ 門市資訊 LOCATION －</h5>
    <div class="row justify-between q-px-xl">
      <div class="column justify-center col-5" style="width:400px">
        <h5 class="q-my-md">象山概念店</h5>
        <p>地址：110台北市信義區信義路五段95號</p>
        <p>聯絡電話：02-1234 5678</p>
        <div class="row">
          <p>營業時間：</p>
          <p>週一至週五 09:00 - 21:00 <br>週六至週日 10:00 - 22:30 (國定假日公休)</p>
        </div>
        <div style="width: 100px" class="q-gutter-sm q-mt-lg">
          <img style="width: 35%" src="../../assets/images/wifi_icon.png">
          <img style="width: 35%" src="../../assets/images/plug_icon.png">
        </div>
      </div>
      <div class="col-6 q-my-lg">
        <!-- <div class="bg-positive map-bg"></div> -->
        <iframe class="google_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28918.130462713456!2d121.531805515625!3d25.04200360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abffdfbedb59%3A0x334f5c67dafa8f65!2z6Lev5piT6I6O5ZKW5ZWhIOixoeWxseiXneaWh-mWgOW4gg!5e0!3m2!1szh-TW!2stw!4v1676000831294!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
  <!-- footer -->
  <section class="footer">
    <div class="row justify-between footer_container q-px-xl">
      <div class="footer_map row items-center col-3">
        <div class="row">
          <div class="row col-6">
            <p class="col-12">網站導覽</p>
            <router-link class="col-6" to="/">回首頁</router-link>
            <router-link class="col-6" to="/menu">餐飲介紹</router-link>
            <router-link class="col-6" to="/about">品牌故事</router-link>
            <router-link class="col-6" to="/" >線上MENU</router-link>
            <router-link class="col-6" to="/products">講座活動</router-link>
            <router-link class="col-6" to="/about/location">門市位址</router-link>
            <router-link class="col-6" to="/articles">專欄好文</router-link>
            <router-link to="/myaccount/orders">會員專區</router-link>
          </div>
          <div class="col-6 q-pl-md">
            <p>支援服務</p>
            <router-link to="/myaccount/orders">報名查詢</router-link>
            <router-link to="/service">常見問題</router-link>
            <router-link to="/service/contactus">聯絡我們</router-link>
            <router-link to="/">隱私權政策</router-link>
          </div>
        </div>
      </div>
      <div class="footer_center q-pa-md" style="width: 170px">
        <img style="width:100%" src="../../assets/images/logo/logo_1-1-text.png">
        <div style="width:100%" class="text-center">
          <q-icon name="fa-brands fa-instagram" size="1rem" class="q-mr-sm"></q-icon>
          <q-icon name="fa-brands fa-facebook" size="1rem" class="q-mr-sm"></q-icon>
          <q-icon name="fa-brands fa-twitter" size="1rem"></q-icon>
        </div>
      </div>
      <div class="subscribe column justify-center col-3" style="max-width: 300px;">
        <p>訂閱電子報即時掌握活動消息</p>
        <q-input dense v-model="text" placeholder="your Email" type="email" bg-color="black" color="accent" :input-style="{ color: '#E1BF77' }">
          <template v-slot:prepend>
            <q-icon name="mail" class="q-px-sm"/>
          </template>
          <template v-slot:append>
            <q-icon name="send" class="cursor-pointer q-px-sm" />
          </template>
        </q-input>
      </div>
    </div>
  </section>
  <section class="copyright row flex-center">
    泰山職訓前端網頁專題(僅作學術使用) by SU-YU-ZHEN
  </section>
</q-page>
</template>
