<template>
<q-page>
  <q-sectoin class="banner">
    <q-img
      src="../../assets/images/brand_top.avif"
      :ratio="21/4"
    />
  </q-sectoin>
  <q-section class="container">
    <div class="title text-primary">
      <h5>門市資訊 Location</h5>
    </div>
    <div class="row justify-between q-px-xl">
      <div class="col-1"></div>
      <div style="width:400px" class="text column justify-center col-5">
        <h5>象山概念店</h5>
        <br>
        <p>地址：110台北市信義區信義路五段95號</p>
        <p>聯絡電話：02-1234 5678</p>
        <div class="row">
          <p>營業時間：</p>
          <p>週一至週五 09:00 - 21:00 <br>週六至週日 10:00 - 22:30 (國定假日公休)</p>
        </div>
      </div>
      <div class="map col-6">
        <!-- <div class="bg-positive map-bg"></div> -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28918.130462713456!2d121.531805515625!3d25.04200360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abffdfbedb59%3A0x334f5c67dafa8f65!2z6Lev5piT6I6O5ZKW5ZWhIOixoeWxseiXneaWh-mWgOW4gg!5e0!3m2!1szh-TW!2stw!4v1676000831294!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </q-section>
  <!-- footer -->
  <section class="footer row justify-between q-px-xl q-mt-xl">
    <div class="footer_map row items-center col-3">
      <div class="row">
        <div class="row col-6">
          <p class="col-12">網站導覽</p>
          <a class="col-6" href="/">回首頁</a>
          <a class="col-6" href="/menu">餐飲介紹</a>
          <a class="col-6" href="/about">品牌故事</a>
          <a class="col-6" href="/about/location">線上MENU</a>
          <a class="col-6" href="/products">所有活動</a>
          <a class="col-6" href="/about/location">門市位址</a>
          <a class="col-6" href="/articles">專欄好文</a>
        </div>
        <div class="col-6 q-pl-md">
          <p>支援服務</p>
          <a href="/myaccount/myevents">報名查詢</a>
          <a href="/servicce">常見問題</a>
          <a href="/service/contactus">聯絡我們</a>
          <a href="/privacy-policy">隱私權政策</a>
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
      <p>訂閱電子報即時掌握最新消息</p>
      <q-input placeholder="your Email" type="email" bg-color="black" color="accent" :input-style="{ color: '#E1BF77' }">
        <template v-slot:prepend>
          <q-icon name="mail" class="q-px-sm"/>
        </template>
        <template v-slot:append>
          <q-icon name="send" class="cursor-pointer q-px-sm" />
        </template>
      </q-input>
      <!-- <div class="q-gutter-sm q-mt-md" style="width:100%"  >
        <q-icon name="fa-brands fa-instagram" size="1rem"></q-icon>
        <q-icon name="fa-brands fa-facebook" size="1rem"></q-icon>
        <q-icon name="fa-brands fa-twitter" size="1rem"></q-icon>
      </div> -->
    </div>
  </section>
  <section class="copyright row flex-center">
    Copyright © 2023 Yu-zhen,Su. All rights reserved.
  </section>
</q-page>
</template>

<style>

/* .map-bg{
  width: 600px;
  height: 450px;
  position: absolute;
  z-index: -1;
  top: 354px;
  left: 738px;
} */
</style>
