<template>
  <div class="about">
    <div class="about__item">
      <div v-for="(n,index) in itemlist" :key="n.key" class="about__item__nav" :class="index === currentIndex? 'active': ''" @click="navto(index)">{{ n.title }}</div>
    </div>
    <div class="introduceCompany">
      <div class="introduceCompany__desc">
       <div class="introduceCompany__desc__box">
         <h1 style="text-align: center; margin-bottom: 50px">{{title}}</h1>
         <div v-for="(n, index) in picimgs" :key="n.key" class="introduceCompany__desc__box__item">
            <div class="introduceCompany__desc__box__item__img" v-if="currentIndex === 0">
              <img :src="domain+'xmxq-' + currentIndex +'-'+ ind + '-'+ index +'.png?imageslim'" oncontextmenu="return false" ondragstart="return false">
            </div>
            <div class="introduceCompany__desc__box__item__img" v-else-if="currentIndex === 1 && (ind === 5 || ind === 6 || ind === 7)">
              <img :src="domain+'xmxq-' + currentIndex +'-'+ ind + '-'+ index +'.png?imageslim'" oncontextmenu="return false" ondragstart="return false">
            </div>
            <div class="introduceCompany__desc__box__item__img" v-else>
              <img :src="domain+'xmxq-' + currentIndex +'-'+ ind + '-'+ index +'.jpg?imageslim'" oncontextmenu="return false" ondragstart="return false">
            </div>
         </div>
       </div>
      </div>
    </div>
    <div style="height: 200px"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import utils from '../../../public/utils'
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
        }
      ],
      currentIndex: 0,
      title: '',
      ind: '',
      picimgs: '',
      domain: ''
    }
  },
  created () {
    const e = this.$router.app._route.query
    console.log(e)
    this.title = e.obj.title
    this.currentIndex = parseInt(e.currentIndex)
    this.ind = parseInt(e.ind)
    this.picimgs = e.obj.num
  },
  mounted () {
    this.domain = utils.domain
  },
  methods: {
    navto () {
      this.$router.push({ path: '/exclassic', query: {type: this.currentIndex}})
    }
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
        width 100%
        height 100%
        margin 10px 0
        &__img
          transition all 0.5s
          position relative
          z-index 0
          img
            width 100%
            vertical-align top
        &__title
          font-size 13px
          padding  0px 0 5px 5px
          line-height 3em
</style>

