<template>
  <div>
    <div id="swiper1">
      <div class="swiper-container">
  　　  <div class="swiper-wrapper">
  <!-- 　　　　 <div class="swiper-slide" data-swiper-autoplay="5000" v-for="(item, index) in 8" :style="{backgroundImage: 'url('+domain+'banner-0'+(index+1)+'.png)'}" :key="item.key"> -->
  　　　　 <div class="swiper-slide" data-swiper-autoplay="5000" v-for="(item, index) in 13" :key="item.key">
            <img :src="domain+'banner-0'+(index+1)+'.png'" class="bannerimg" alt=""  oncontextmenu="return false" ondragstart="return false">
          </div>
  　　　</div>
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
      <div class="swiper-pagination"></div>
  　　</div>
    </div>
    <div id="chituo">
      <div class="chituo">
        <span>炽于<span style="color:red">心</span></span> <span>●</span> <span>拓于<span style="color:red">行</span></span>
        <div class="chituo__block chituo__top"></div>
        <div class="chituo__block chituo__bot"></div>
      </div>
      <div class="chituoen">
        {{ msg }}
        <span class="animated" :class="ind === true? 'fadeIn': 'fadeOut'">{{ icon }} </span>
        <!-- <span>Ｃｈì ｙú ｘīｎ</span>
        <span>.</span>
        <span>Ｔｕò ｙú ｘíｎｇ</span> -->
      </div>
    </div>
    <team-item></team-item>
    <work-show-item></work-show-item>
    <!-- <div id="swiper2">
      <div class="swiper-container" @mouseover="handlemouse">
  　　  <div class="swiper-wrapper">
  　　　　 <div class="swiper-slide" data-swiper-autoplay="1500" v-for="(n, index) in getBuildingList" :style="{backgroundImage: 'url('+n.img+')'}" :key="n.key" @click="navto(n, index)">
          <div class="title">
            <div>{{n.title}}</div>
           </div>
        </div>
  　　　</div>
      <div class="swiper-pagination"></div>
  　　</div>
    </div> -->
  </div>
</template>
<script>
import utils from '../../../public/utils'
import teamItem from '../../components/teamItem'
import workShowItem from '../../components/workShowItem'
import Swiper from "swiper"
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      msg: ``,
      icon: '_',
      ind: true,
      hands: '',
      domain: ''
    }
  },
  components: { //  引入组件
    teamItem,
    workShowItem
  },
  computed: {
    ...mapGetters(['getBuildingList'])
  },
  mounted () {
    var swiper1 = new Swiper("#swiper1 .swiper-container", {
      autoplay: true, //  自动播放
      speed: 1000, //  切换速度
      effect: 'slide', //  切换效果:渐隐
      grabCursor: true, //  鼠标经过切换为小手
      loop: true, //  循环
      pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: 'my-bullet-active',
        clickable :true,
      },
　　})
    this.swiper2 = new Swiper("#swiper2 .swiper-container", {
      autoplay: true, //  自动播放
      // speed: 500, //  切换速度
      slidesPerView : 3,
      centeredSlides : true,
      // effect: 'slide', //  切换效果:渐隐
      // grabCursor: true, //  鼠标经过切换为小手
      loop: true, //  循环
      // pagination: {
      //   el: '.swiper-pagination',
      //   bulletActiveClass: 'my-bullet-active',
      //   clickable :true,
      // },
　　})
this.domain = utils.domain
  },
  beforeMount () {
    let info = `Ｃｈì ｙú ｘīｎ . Ｔｕò ｙú ｘíｎｇ`
    setTimeout(() => {
      this.pt(info)
    }, 3000);
    var init = self.setInterval(() => { //  模拟打字机效果
      if (this.msg.length >= info.length-7) {
        clearInterval(init)
      }
      if (this.ind === true) {
        this.ind = false
      } else {
        this.ind = true
      }
    }, 200)
  },
  methods: {
    pt (t) { //  打印方法
      let index = 0
      var int = self.setInterval(() => {
        if (index > t.length) { //  判断当前的索引大于文字的长度
          clearInterval(int)
        } else {
          this.msg = t.substr(0, index)
          index++
        }
      }, 150)
    },
    handlemouse () {
      console.log(1)
    },
    navto (n, i) {
      console.log(n, i)
       //  图片生成规则： 0-0-0(模块，项目分类，项目详情图片)
       this.$router.push({ path: '/detail', query: {obj: n, currentIndex: 0, ind: i,}})
    },
  }
}
</script>
<style lang="stylus">
.bannerimg
  width 100%
  // height 1366px
#swiper1
  .swiper-pagination-bullet
    width 16px
    height 16px
    margin 0 5px
    opacity 0.5
  .my-bullet-active
    background-color #ececea
    opacity 1
  .swiper-container
    // height 908px
    height auto 
  .swiper-slide
    -webkit-background-size 100% 100%
    background-size 100% 100%
    width 100%
    height auto
#swiper2
  margin-top 100px
  .swiper-pagination-bullet
    width 16px
    height 16px
    margin 0 5px
    opacity 0.5
  .my-bullet-active
    background-color #ececea
    opacity 1
  .swiper-container
    height 380px
    // width 700px
    overflow visible !important
  .swiper-slide
    -webkit-background-size 100% 100%
    background-size 100% 100%
    position relative
    margin 0 10px
    width 700px !important
    .title
      position absolute
      bottom -50px
      width 100%
      font-size 18px
      text-align center

#chituo //  炽于心，拓于行
  margin 120px auto
  text-align center
  font-family 'Franklin Gothic Medium'
.chituoen
  margin-top 50px
  font-size 30px
  text-shadow 1px 0px 0px #000
  font-family 'monospace'
  display none
  // span:nth-child(2)
  //   margin 0 20px
  //   font-size 30px
.chituo
  width 400px
  padding 30px 0
  display inline-block
  // border 3px solid #000
  position relative
  z-index 2
  &__block
    position absolute
    width 80%
    height 60px
    background-color #fff
    z-index 3
  &__top
    top -4px
    left -4px
  &__bot
    bottom -4px
    right -4px
  span
    position relative
    z-index 4
    letter-spacing 2px
    font-size 34px
  // span:nth-child(1)
  span:nth-child(2)
    margin 0 20px
    font-size 30px
  // span:nth-child(3)
.wordkshow
  // max-width 980px
  margin 100px auto
  &__title
    text-align center
    position relative
    margin 50px auto
    max-width 980px
    &__text
      position relative
      font-size 40px
      margin 10px 0
      z-index 3
      background-color #fff
      display inline-block
      padding 30px 50px
    &__line
      position absolute
      width 100%
      height 2px
      background-color #000
      z-index 2
      top 50%
</style>
