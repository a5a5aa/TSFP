<template>
<q-page>
  <q-sectoin class="banner row">
    <q-img
      src="../../assets/images/banner_menu.jpg"
      style="max-height:35vh; width:100vw;"
    />
    <div class="bg-mask mask-text col-12 column flex-center">
      <p class="col-2 text-h3">MENU</p>
      <p class="col-2 text-h5">門市餐點</p>
    </div>
  </q-sectoin>
  <section class="section_1 q-px-xl q-pa-md row justify-center">
    <div style="max-width: 1000px" class="q-px-md">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="accent"
        active-bg-color="primary"
        align="justify"
        indicator-color="accent"
      >
        <q-tab class="main_tab" name="drinks">
          <div class="bg-transparent q-py-md" flat>
            <div class="col-sm-8">
              <q-img
                src="../../assets/images/menu/cafe_4.png"
              />
            </div>
            <div class="col-sm-2">
              <div class="text-h5 q-mt-sm q-mb-xs">飲品</div>
              <div class="text-caption text-grey">
                DRINKS
              </div>
            </div>
          </div>
        </q-tab>
        <q-tab class="main_tab" name="dessert">
          <div class="bg-transparent q-py-md" flat>
            <div class="col-sm-8">
              <q-img
                src="../../assets/images/menu/pancake.png"
              />
            </div>
            <div class="col-sm-2">
              <div class="text-h5 q-mt-sm q-mb-xs">甜點</div>
              <div class="text-caption text-grey">
                DESSERT
              </div>
            </div>
          </div>
        </q-tab>
        <q-tab class="main_tab" name="main">
          <div class="bg-transparent q-py-md" flat>
            <div class="col-sm-8">
              <q-img
                src="../../assets/images/menu/pasta_1.png"
              />
            </div>
            <div class="col-sm-2">
              <div class="text-h5 q-mt-sm q-mb-xs">主餐</div>
              <div class="text-caption text-grey">
                MAIN
              </div>
            </div>
          </div>
        </q-tab>
      </q-tabs>

      <div class="q-gutter-y-sm q-mt-xl">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
          class="bg-transparent text-primary text-center"
        >
          <q-tab-panel class="row row justify-center" name="drinks">
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="../../assets/images/menu/black.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">經典美式</div>
                <div class="text-caption text-grey">AMERICANO</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="../../assets/images/menu/drink_1.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">拿鐵咖啡</div>
                <div class="text-caption text-grey">LATTE</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="../../assets/images/menu/drink_1.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">拿鐵咖啡</div>
                <div class="text-caption text-grey">LATTE</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="../../assets/images/menu/drink_1.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">拿鐵咖啡</div>
                <div class="text-caption text-grey">LATTE</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="../../assets/images/menu/drink_1.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">拿鐵咖啡</div>
                <div class="text-caption text-grey">LATTE</div>
              </q-card-section>
            </q-card>

          </q-tab-panel>

          <q-tab-panel name="dessert">
            <div class="text-h6">Alarms</div>
            Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.
          </q-tab-panel>

          <q-tab-panel class="row" name="main">
            <q-card dense class="col-6 col-sm-3 bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="../../assets/images/menu/pasta.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">辣番茄蛤利義大利麵</div>
                <div class="text-caption text-grey">LATTE</div>
              </q-card-section>
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
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

<script setup>

import { ref } from 'vue'

const tab = ref('drinks')

</script>

<style lang="scss">

.main_tab{
  background: white;
  width:150px;
  // width: calc(100% / 3);
  @media(min-width:576px){
    flex-direction: row;
    width: 500px;
  }
}
</style>
