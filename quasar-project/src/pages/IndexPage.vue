<template>
  <q-page>
    <!-- 1. banner -->
    <sectoin class="banner">
      <q-img
        src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        :ratio="16/9"
      />
    </sectoin>
    <!-- 2. 服務簡介 -->
    <section class="section02 column q-my-xl text-center">
      <q-col>
        <q-card class="my-card column items-center">
          <img src="../assets/images/coffee-rounded.png">
          <q-card-section>
            <div class="text-h6">講座空間</div>
            <div class="text-subtitle2">lecture space</div>
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit quae maxime sed voluptatum culpa iure placeat alias eveniet laboriosam!
          </q-card-section>
        </q-card>
      </q-col>
      <q-col>
        <q-card class="my-card column items-center">
          <img src="../assets/images/coffee-rounded.png">

          <q-card-section>
            <div class="text-h6">單人用餐</div>
            <div class="text-subtitle2">single seat</div>
          </q-card-section>
          <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit quae maxime sed voluptatum culpa iure placeat alias eveniet laboriosam!
          </q-card-section>
        </q-card>
      </q-col>
      <q-col>
        <q-card class="my-card column items-center">
          <img src="../assets/images/coffee-rounded.png">
          <q-card-section>
            <div class="text-h6">專欄分享</div>
            <div class="text-subtitle2">great topic</div>
          </q-card-section>

          <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit quae maxime sed voluptatum culpa iure placeat alias eveniet laboriosam!
          </q-card-section>
        </q-card>
      </q-col>
    </section>
    <!-- 3. 品牌簡介 -->
    <section class="section03">
      <q-card class="my-card row flex-center q-mx-xl">
        <img class="col-md-6" src="../assets/images/單人座.png">
        <q-card-section class="col-md-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ipsa libero veniam nemo obcaecati excepturi neque sapiente laudantium quas unde.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ipsa libero veniam nemo obcaecati excepturi neque sapiente laudantium quas unde.
        </q-card-section>
      </q-card>
    </section>
    <!-- 4. 活動報名 -->
    <section class="section04 row justify-center q-gutter-md">
      <q-card class="my-card col-md-3" flat bordered>
        <q-img
          src="https://static.accupass.com/eventbanner/2301160847292126205270.jpg"
        />

        <q-card-section>
          <div class="text-overline classification">生活風格</div>
          <div class="text-h5 q-mt-sm q-mb-x">
          整聊找回美好生活
          </div>
          <div class="text-caption text-grey">
            收納整理分享 x 空間利用秘訣 x 讓生活更美好
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="分享" />
          <q-btn flat color="warning" label="立即報名" />

          <q-space />

          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded1 = !expanded1"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded1">
            <q-separator />
            <q-card-section class="text-subitle2">
              {{ lorem }}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
      <q-card class="my-card col-md-3" flat bordered>
        <q-img
          src="https://static.accupass.com/eventbanner/2301160847292126205270.jpg"
        />

        <q-card-section>
          <div class="text-overline classification">生活風格</div>
          <div class="text-h5 q-mt-sm q-mb-x">
          整聊找回美好生活
          </div>
          <div class="text-caption text-grey">
            收納整理分享 x 空間利用秘訣 x 讓生活更美好
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="分享" />
          <q-btn flat color="warning" label="立即報名" />

          <q-space />

          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded2 = !expanded2"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded2">
            <q-separator />
            <q-card-section class="text-subitle2">
              {{ lorem }}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
      <q-card class="my-card col-md-3" flat bordered>
        <q-img
          src="https://static.accupass.com/eventbanner/2301160847292126205270.jpg"
        />

        <q-card-section>
          <div class="text-overline classification">生活風格</div>
          <div class="text-h5 q-mt-sm q-mb-x">
          整聊找回美好生活
          </div>
          <div class="text-caption text-grey">
            收納整理分享 x 空間利用秘訣 x 讓生活更美好
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="分享" />
          <q-btn flat color="warning" label="立即報名" />

          <q-space />

          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded3 = !expanded3"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded3">
            <q-separator />
            <q-card-section class="text-subitle2">
              {{ lorem }}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </section>
    <!-- 5. 形象照展示 -->
    <section class="section05 q-my-xl column flex-center">
      <div class="col-1">
        <div class="photo_box">
          <q-img class="rounded-borders" src="../assets/images/photo_1.avif">
          <div class="mask text-center row flex-center">介紹1</div>
          </q-img>
        </div>
        <div class="photo_box">
          <q-img class="rounded-borders" src="../assets/images/photo_2.avif">
          <div class="mask text-center row flex-center">介紹2</div></q-img>
        </div>
      </div>
      <div class="photo_box col-1">
        <q-img class="col-md-6 rounded-borders" src="../assets/images/photo_3.avif">
        <div class="mask text-center row flex-center">介紹3</div></q-img>
      </div>
      <div class="col-1">
        <div class="photo_box">
          <q-img class="rounded-borders" src="../assets/images/photo_4.jpg">
          <div class="mask text-center row flex-center">介紹4</div></q-img>
        </div>
        <div class="photo_box">
          <q-img class="rounded-borders" src="../assets/images/photo_5.jpg">
          <div class="mask text-center row flex-center">介紹5</div></q-img>
        </div>
      </div>
    </section>
    <!-- 6. footer -->
    <section class="footer column flex-center text-center q-my-xl">
      <div class="logo row flex-center">
        <div class="row justify-evenly">
          <img src="../assets/images/log＿方.png">
          <q-icon name="fa-brands fa-instagram"></q-icon>
          <q-icon name="fa-brands fa-facebook"></q-icon>
          <q-icon name="fa-brands fa-twitter"></q-icon>
        </div>
      </div>
      <div class="copyright row flex-center">
        Copyright © 2023 Yu-zhen,Su. All rights reserved.
      </div>
    </section>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      expanded1: ref(false),
      expanded2: ref(false),
      expanded3: ref(false),
      lorem: '本次課程將邀請整聊師-謝琪琳帶大家學習如何讓空間做最有效的利用。 居家整聊室致力於透過「整聊」概念，讓台灣家庭都能擁有美好生活，全台灣300+整聊師幫助超過5000+家庭找回家的秩序。 讓懂你的整理收納專家，傾聽你理解你，幫助你找回家的歸屬感。'
    }
  }
}
</script>
