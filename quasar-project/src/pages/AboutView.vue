<template>
  <q-page>
    <q-sectoin class="banner">
      <q-img
          src="../assets/images/brand_top.avif"
          :ratio="16/9"
        />
    </q-sectoin>

    <q-scetion class="section02">
        <div class="box1">
          <h4>我是標題1我是標題1</h4>
          <h5>我是標題1我是標題1我是標題1</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsum cupiditate nihil ea totam labore, aut fuga facilis rerum ducimus.</p>
          <q-img
            width="200px"
            src="../assets/images/about_1.jpg"></q-img>
        </div>
        <div class="box2">
          <q-img
            width="70%"
            src="../assets/images/about_3.jpg"></q-img>
        </div>
        <div class="box3">
          <q-img
            width="100%"
            src="../assets/images/about_2.jpg"></q-img>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloremque quidem nesciunt optio laboriosam doloribus earum quam eaque quasi tenetur.</p>
          <q-btn outline rounded to="/lectures">查看近期活動</q-btn>
        </div>
    </q-scetion>

    <q-section class="section_timeline">
      <div class="q-pa-xl">
        <q-timeline :side="side" :layout="layout" color="accent">

          <q-timeline-entry
            title="初創茶飲事業"
            subtitle="February 22, 2013"
            side="left"
          >
            <div>
              <img src="../assets/images/coffee-rounded.png">
              <br>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 21, 2018"
            side="right"
          >
            <div>
              <img src="../assets/images/coffee-rounded.png">
              <br>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 2020"
            side="left"
          >
            <div>
              <img src="../assets/images/coffee-rounded.png">
              <br>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 2022"
            side="right"
          >
            <div>
              <img src="../assets/images/coffee-rounded.png">
              <br>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </q-section>

  <!-- 6. footer -->
    <q-section class="footer column flex-center text-center">
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
    </q-section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const side = ref('right')
const layout = ref('loose')
</script>
