<template>
   <div id="wrap">
      <div id="header" class="check">
         <div id="container" class="inner">

               <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active" @click="goRecommend">
                        <img src="@/assets/001.png" class="d-block w-100" alt="...">
                     </div>
                     <div class="carousel-item" @click="goMap">
                        <img src="@/assets/002.png" class="d-block w-100" alt="...">
                     </div>
                     <div class="carousel-item" @click="goDeposit">
                        <img src="@/assets/003.png" class="d-block w-100" alt="...">
                     </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Next</span>
                  </button>
               </div>

            <div id="content" class="content">
               <div class="main_top_inner">
                  <div class="top_quick_list">
                     <div class="comp_quick_list">
                        <div class="top_quick_title">
                           <h2><strong>고객님,
                              <br>
                              어떤 상품을 찾으시나요?
                           </strong>
                           </h2>
                           <img class="investment" src="@/assets/investment.png" alt="기본인사">
                        </div>

                     
                        <div class="card-wrapper">
                           <div class="card">
                              <RouterLink :to="{ name: 'DepositProductsView' }" class="card-content"><strong>예금</strong></RouterLink>
                              <span class="card-hover">
                                 <img src="@/assets/bauble.png" alt="" class="card-img">
                              </span>
                           </div>

                           <div class="card">
                              <RouterLink :to="{ name: 'InstallmentProductsView' }" class="card-content"><strong>적금</strong></RouterLink>
                              <span class="card-hover">
                                 <img src="@/assets/reindeer.png" alt="" class="card-img">
                              </span>
                           </div>
                        </div> 
                     </div>

                     <div class="my_finance">
                        <div class="comp_quick_list2">
                           <div class="divbox">
                              <h2>내가 가입한 금융 상품</h2>
                              <img class="investment" src="@/assets/target.png" alt="기본인사">
                           </div>
                              <div class="card3">
                                 <div class="comp_quick_title">
                                    <h2><strong>내가 가입한 금융 상품</strong></h2>
                                    <div class="investment_div">d</div>
                                 </div>

                                 <div class="card-wrapper">
                                    <div class="card2">
                                       <RouterLink :to="{ name: 'MydepositView' }" class="card-content"><strong>예금</strong></RouterLink>
                                       <span class="card-hover">
                                          <img src="@/assets/snow-globe.png" alt="" class="card-img1">
                                       </span>
                                    </div>

                                    <div class="card2">
                                       <RouterLink :to="{ name: 'MyinstallmentView' }" class="card-content"><strong>적금</strong></RouterLink>
                                       <span class="card-hover">
                                          <img src="@/assets/mitten.png" alt="" class="card-img1">
                                       </span>
                                    </div>
                                 </div>
                              </div>

                        </div>
                     </div>
                  </div>
                        
                        <div class="comps">
                           <ul>
                              <li class="menu-item">
                                 <RouterLink :to="{ name: 'MapView' }" class="menu-link">
                                    <span class="menu-img">
                                       <img src="@/assets/3d-map.png" alt="">
                                    </span>
                                    <strong class="comps_text">은행찾기</strong>
                                 </RouterLink>
                              </li>
                              <li class="menu-item">
                                 <RouterLink :to="{ name: 'ExchangeView' }" class="menu-link">
                                    <span class="menu-img">
                                       <img src="@/assets/calculator.png" alt="">
                                    </span>
                                    <strong class="comps_text">환율계산기</strong>
                                 </RouterLink>
                              </li>
                              <li class="menu-item">
                                 <RouterLink :to="{ name: 'PostView' }" class="menu-link">
                                    <span class="menu-img">
                                       <img src="@/assets/newspaper.png" alt="">
                                    </span>
                                    <strong class="comps_text">커뮤니티</strong>
                                 </RouterLink>
                              </li>
                              <li class="menu-item">
                                 <RouterLink :to="{ name: 'MyPageView' }" class="menu-link">
                                    <span class="menu-img">
                                       <img src="@/assets/google.png" alt="">
                                    </span>
                                    <strong class="comps_text">마이페이지</strong>
                                 </RouterLink>
                              </li>
                              <li class="menu-item">
                                 <RouterLink :to="{ name: 'RecommendView' }" class="menu-link">
                                    <span class="menu-img">
                                       <img src="@/assets/folder.png" alt="">
                                    </span>
                                    <strong class="comps_text">금융상품추천</strong>
                                 </RouterLink>
                              </li>
                           </ul>
                        </div>
                     
                  
               </div>
            </div>
            <div class="">
               <p>Cha JunSeock | Seo MinJi</p>
               <P>010-6649-5142 | 010-4123-5537</P>
               <p>FinanceFitMate</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from '@/stores/modules/counter'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

import presentationImage from '@/assets/presentation.png'
import bankImage from '@/assets/bank.png'
import routeImage from '@/assets/route.png'
import moneybagImage from '@/assets/money-bag.png'

const store = useCounterStore()
const router = useRouter()
const currentIndex = ref(0)
const items = [
  { image: presentationImage, text: '금융상품 조회에 상품추천까지' },
  { image: bankImage, text: '오늘의 환율 정보' },
  { image: routeImage, text: '가까운 은행 찾기' },
  { image: bankImage, text: '커뮤니티' },
  { image: moneybagImage, text: 'financefitmate 만나고 부자되자' },
]

const goDeposit = function( ) {
   router.push({
         name: 'DepositProductsView',
     })
}

const goRecommend = function( ) {
   router.push({
         name: 'RecommendView',
     })
}

const goMap = function( ) {
   router.push({
         name: 'MapView',
     })
}


let interval

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % items.length
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})



</script>

<style scoped>
.top_quick_list {
   display: flex;
}
.comp_quick_list{
   border-radius: 30px;
   width: 50%;
}

.top_quick_title {
  position: relative; 
  display: flex; 
  align-items: center;
  padding-bottom: 20px;
}

.top_quick_title h2 {
  font-size: 20px;
  margin: 0;
  line-height: 30px;
}

.top_quick_title::after {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
}

.top_quick_title img.investment {
  max-width: 70px;
  order: -1;
  margin-right: 10px;
  margin-left: 10px;
  padding-inline-start: 15px;
}

.card-wrapper {
  display: flex;
  justify-content: space-around;
  
}

.card {
  width: 45%;
  height: 150px;
  border-radius: 20px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}

.card-content {
   text-decoration: none;
   color: #333;
   width: 100%;
   height: 100%;
   position: relative;
   display: inline-block;
   z-index: 2;
}

.card-content > strong{
   font-size: 20px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
}

.card-hover {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
}

.card-content:hover + .card-hover {
  display: block;
}

.card-content:hover strong {
  opacity: 0; 
}

.my_finance {
   width: 50%;
}
.my_finance h2 {
   font-size: 20px; 
   margin: 0;
}
.my_finance img.investment {
  max-width: 70px;
  margin-right: 10px;
  margin-left: 10px;
}
.investment_div{
   height: 60px;
   visibility: hidden;
}

.comp_quick_title {
  position: relative;
  display: flex;
  align-items: center; 
  margin-inline-start: 10px;
}
.comp_quick_title > h2 {
  padding-inline-start: 10px;
}
.card2 {
   width: 45%; 
   height: 85px;
  border-radius: 20px;
  border: 1px solid #ddd;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 10px;
}
.card2:hover {
   border: 1px solid #ddd;
  transform: translateY(-5px);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2); 
}

.card-img {
   width: 100px;
   justify-content: center;
}
.card-img1 {
   width: 60px;
   justify-content: center;
}

.divbox {
  position: relative;
  display: flex;
  align-items: center;
  visibility: hidden;
  padding-bottom: 14.2px;
}

@media screen and (max-width: 1260px) {
  .my_finance,
  .comp_quick_list {
    width: 100%;
    box-sizing: border-box;

    margin-bottom: 50px;
  }
  .top_quick_list {
   display: inline;
  }
  .divbox{
   display: none;
  }
  .card2 {
   width: 45%;
  height: 150px;
  border-radius: 20px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border: 1px solid #ddd;

  box-sizing: border-box;
  position: relative;
}
.card2:hover {
   border: 1px solid #ddd;
  transform: translateY(-5px);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2); 
}

.my_finance img.investment {
  max-width: 70px; 
  order: -1;
  margin-right: 10px;
  margin-left: 10px;
}
.comp_quick_title {
  position: relative;
  display: flex; 
  align-items: center;
}
.comps ul {
  list-style-type: none; 
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
}

.card-img1 {
   width: 100px;
   justify-content: center;
}
.card-content > strong{
   font-size: 20px;
   padding: 25px;
}
}

.comps{
   border-radius: 30px;
}

.comps ul {
  list-style-type: none;
  padding: 20px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
}

.comps ul li {
  margin-bottom: 10px;
  margin-right: 20px;
}

.menu-link {
  text-decoration: none; 
  color: inherit; 
  font-weight: bold;
  padding: 10px;
}

.comps img {
   max-width: 70px; 
   order: -1; 
   margin-right: 10px;
   margin-left: 10px;
}

.menu-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.menu-img {
  max-width: 70px;
}

.comps_text {
   text-align: center;
   margin-bottom: 0;
   display: block;
   margin-top: 15px;
}

.card-content strong {
   margin-left: 20px;
   margin-top: 10px;
   display: block;
}

.carousel {
   margin-bottom: 70px;
}

.carousel:hover {
    cursor: pointer;
}
</style>