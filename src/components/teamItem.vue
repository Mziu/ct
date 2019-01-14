<template>
  <div class="team">
    <div class="team__content">
      <div class="team__content__nav">
        <div class="team__content__nav__title">" 设计 · 团队 "</div>
        <div class="team__content__nav__titleen">" DESIGN · TEAM"</div>
      </div>
      <div class="team__content__box">
        <div v-for="(n, index) in getItemList" :key="n.key" class="team__content__box__pcard" v-if="index < 4">
          <div class="team__content__box__pcard__box">
            <div class="team__content__box__pcard__box__img">
              <!-- <img :src="n.img" alt=""> -->
              <div style="height:462px;width:300px;background-size:100% 100%;" :style="n.bg"></div>
              <div class="team__content__box__pcard__box__img__info">
                <div>{{ n.name }}</div>
                <div class="team__content__box__pcard__box__img__info__job">{{ n.job }}</div>
              </div>
            </div>
            <!-- <div class="team__content__box__pcard__box__desc">
              <div>{{n.name}}</div>
              <div>&nbsp;</div>
              <div>{{n.job}}</div>
              <div>{{n.desc}}</div>
            </div> -->
          </div>
        </div>
      
      </div>
      <div class="team__more">
        <div class="team__more__en">SHOW MORE</div>
        <div class="team__more__box" @click="navto('dteam')"><div class="team__more__cn">+查看更多+</div></div>
        <div class="team__more__line"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['getItemList'])
  },
  methods: {
    navto (p) {
      this.$router.push({path: p})
    }
  }
}
</script>
<style lang="stylus" scoped>
.team
  background-color rgba(239,239,239,0.8)
  position relative
  &__content
    max-width 1400px
    margin 0 auto
    padding 30px
    &__nav
      text-align center
      margin-bottom 20px
      &__title
        font-size 20px
        line-height 40px
        font-family "microsoft YaHei"
        color #5a5a5a
        margin 30px 0 20px 0
      &__titleen
        font-size 24px
        font-family 'Microsoft YaHei'
        margin-bottom 30px
    &__box
      display flex
      justify-content space-between
      &__pcard
        display inline-block
        &__box
          margin 20px 0
          display flex
          justify-content space-between
          &__img
            position relative
            overflow hidden
            z-index 2
            &__info
              position absolute
              width 100%
              height 30px
              line-height 40px
              padding 10px 0
              bottom 0
              background-color rgba(0, 0, 0, 0.5)
              color #ccc
              z-index 3
              text-align center
              font-size 26px
              transition height 0.5s
              &__job
                font-size 20px
              &:hover
                height 120px
                cursor pointer
            img
              width 300px
              box-shadow 0px 0px 10px #8877dd
              vertical-align bottom
          &__desc
            font-size 15px
            padding 0 80px 0 40px
            div:nth-child(1)
              font-size 20px
              font-weight 600
            div:nth-child(2)
              font-size 16px
            div:nth-child(3)
              font-size 14px
.team__more
  width 500px
  position relative
  margin 50px auto
  text-align center
  &__en
    font-family 'Microsoft YaHei'
    font-size 14px
    color #434343
    font-weight normal
    font-style normal
  &__box
    display inline-block
    z-index 3
    padding 0 30px
    position relative
    background-color rgba(239,239,239,1)
  &__cn
    color #3b3b3b
    font-size 16px
    font-family 'Microsoft YaHei'
    border 1px solid #3b3b3b
    padding 5px 30px
    display inline-block
    &:hover {
      background-color #3b3b3b
      color #fff
      cursor pointer
    }
  &__line
    height 1px
    width 100%;
    z-index 1
    background #3b3b3b
    position absolute
    bottom 13px
</style>
