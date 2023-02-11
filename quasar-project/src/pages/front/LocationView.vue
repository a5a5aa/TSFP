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
