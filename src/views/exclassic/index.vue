<template>
  <div class="about">
    <div class="about__item">
      <div v-for="(n,index) in itemlist" :key="n.key" class="about__item__nav" :class="index === currentIndex? 'active': ''" @click="handleChange(index)">{{ n.title }}</div>
    </div>
    <div class="introduceCompany">
      <div class="introduceCompany__desc">
       <div class="introduceCompany__desc__box">
         <div v-for="(n, index) in list" :key="n.key" class="introduceCompany__desc__box__item" @click="navto(n, n.xmnum)">
            <div class="introduceCompany__desc__box__item__img">
              <div :style="'background-image: url('+n.img+')'" style="height:160px;width:240px;background-size:100% 100%;"></div>
              </div>
            <div class="introduceCompany__desc__box__item__title">{{n.title}}</div>
         </div>
       </div>
      </div>
    </div>
    <div style="height: 200px"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      itemlist: [
        {
          title: '住宅建筑'
        },
        {
          title: '公共建筑'
        },
        {
          title: '城市设计'
        },
      ],
      currentIndex: 0,
      list: []
    }
  },
  mounted () {
    const e = this.$router.app._route.query
    console.log(Object.keys(e).length === 0)
    if (Object.keys(e).length !== 0) {
      this.currentIndex = parseInt(e.type)
    }
    this.handleChange(this.currentIndex)
  },
  methods: {
    navto (n, i) {
       //  图片生成规则： 0-0-0(模块，项目分类，项目详情图片)
       this.$router.push({ path: '/detail', query: {obj: n, currentIndex: this.currentIndex, ind: i,}})
    },
    handleChange (ind) {
      this.currentIndex = ind
      switch (ind) {
        case 0:
          this.list = this.getBuildingList
        break
        case 1:
          this.list = this.getpublicBuildList
        break
        case 2:
          this.list = this.getdesignCityList
        break
      }
    }
  },
  computed: {
    ...mapGetters(['getBuildingList', 'getpublicBuildList', 'getdesignCityList'])
  }
}
</script>
<style lang="stylus" scoped>
.about
  width 1400px
  margin 0 auto
  margin-bottom 200px
  display flex
  justify-content flex-start
  &__item
    // display inline-block
    &__nav
      color #434343
      background-color rgb(239, 239, 239)
      font-size 16px
      width 185px
      line-height 64px
      text-align center
      margin-bottom 20px
      transition all 0.3s
      &:hover
        cursor pointer
        background-color rgb(102, 102, 102)
        color #fff
  .active
    background-color rgb(102, 102, 102)
    color #fff
.introduceCompany
  margin-left 150px
  width 80%
  &__title
    text-align center
    font-size 26px
    letter-spacing 6px
    line-height 28px
    color #5a5a5a
    font-weight 600
  &__desc
    // margin-top 30px
    &__box
      color #000
      &__item
        display inline-block
        width 240px
        height 180px
        margin 0px 10px 40px 10px
        &__img
          transition all 0.5s
          position relative
          z-index 0
          &:hover
            cursor pointer
            transform scale(1.3, 1.3)
            z-index 2
            box-shadow 0px 0px 15px #000000
          img
            width 100%
            vertical-align top
        &__title
          font-size 13px
          padding  0px 0 5px 5px
          line-height 3em
</style>

