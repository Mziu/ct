<template>
  <div style="max-width:1400px; overflow:hidden;margin:0 auto">
    <div class="wordkshow">
      <!-- <div class="wordkshow__title">
        <div class="wordkshow__title__text">住宅建筑</div>
        <div class="wordkshow__title__line"></div>
        <div>Residential building</div>
      </div> -->
       <el-carousel :interval="3000" type="card" height="380px">
        <!-- <el-carousel-item v-for="(n, index) in getBuildingList" :key="n.key" :label="n.title"> -->
        <el-carousel-item v-for="(n, index) in getBuildingList" :key="n.key">
          <div class="swiper-slide"  :style="{backgroundImage: 'url('+n.img+')'}" @click="navto(n, n.xmnum)">
          </div>
          <div class="mytitle">{{n.title}}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Swiper from "swiper"
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    navto (n, i) {
       //  图片生成规则： 0-0-0(模块，项目分类，项目详情图片)
       this.$router.push({ path: '/detail', query: {obj: n, currentIndex: 0, ind: i,}})
    },
  },
  computed: {
    ...mapGetters(['getBuildingList'])
  }
}
</script>
<style lang="stylus">
.swiper-container
.swiper-slide
  -webkit-background-size 100% 100%
  background-size 100% 100%
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
  .mytitle
    position: absolute;
    text-align: center;
    bottom: 0px !important;
    width: 100%;
    height: 30px;
    font-size: 16px;
    z-index: 100;
    line-height: 30px;
    color: #fff;
    background: rgba(0,0,0,0.5);
    padding: 8px 0;
.el-carousel__indicators--labels
  margin-top 30px
  text-align left
.el-carousel__indicators--labels .el-carousel__indicator
  margin 10px 55px
  width 231px
.el-carousel__indicators--labels .el-carousel__button
  font-size 14px
  width 100%
</style>
