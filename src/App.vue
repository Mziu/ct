<template>
  <div id="app">
    <div class="nav">
      <div class="nav__bg"></div>
      <div class="nav__box">
        <div class="nav__img">
          <img  v-if="currentpage.path === 'home' || currentpage.path === ''" src="../public/logoboai.png" alt="">
          <img  v-if="currentpage.path !== 'home' && currentpage.path !== ''" src="../public/logoheei.png" alt="">
        </div>
        <div class="nav__bar">
          <div v-for="n in pathList" :key="n.key" class="nav__bar__title" @click="navto(n.path)">
            <span>{{ n.title }}</span>
          </div>
        </div>
      </div>
      <div class="navi" v-if="currentpage.path !== 'home' && currentpage.path !== ''">
        <div class="nav_nav">
          <span @click="navto('home')">首页</span> > {{currentpage.name}}
        </div>
      </div>
    </div>
    <div style="height: 150px" v-if="currentpage.path !== 'home' && currentpage.path !== ''"></div>
    <router-view/>
    <div style="height:150px"></div>
    <div class="app__foot" :style="currentpage.path !== 'home' && currentpage.path !== ''? 'position:fixed': 'position:relative'">
      <div>Copyright @ santo-archi.com 2019 沪ICP备16038457号-2</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pathList: [
        {
          title: '首页',
          path: 'home'
        },
        {
          title: '关于炽拓',
          path: 'about'
        },
        {
          title: '经典案例',
          path: 'exclassic'
        },
        {
          title: '设计团队',
          path: 'dteam'
        },
        {
          title: '加入我们',
          path: 'add'
        },
        {
          title: '联系我们',
          path: 'contact'
        }
      ],
      currentpage: {
        name: '',
        path: ''
      }
    }
  },
  mounted () {
    this.getpath()
  },
  updated () {
    this.getpath()
  },
  methods: {
    navto (p) {
      this.$router.push({path: p})
      this.getpath()
    },
    getpath () {
      let cpage = this.$router.app._route.name
      switch (cpage) {
        case 'home' || 'index':
          this.currentpage.name = '首页'
          this.currentpage.path = 'home'
        break
        case 'about':
          this.currentpage.name = '关于炽拓'
          this.currentpage.path = 'about'
        break
        case 'exclassic':
          this.currentpage.name = '经典案例'
          this.currentpage.path = 'exclassic'
        break
        case 'dteam':
          this.currentpage.name = '设计团队'
          this.currentpage.path = 'dteam'
        break
        case 'add':
          this.currentpage.name = '加入我们'
          this.currentpage.path = 'add'
        break
        case 'contact':
          this.currentpage.name = '联系我们'
          this.currentpage.path = 'contact'
        break
        case 'detail':
          this.currentpage.name = '案例详情'
          this.currentpage.path = 'detail'
        break
      }
    }
  }
}
</script>

<style lang="stylus">
*
  padding 0
  margin 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
.navi
  padding-top 40px
  background-color #fff
.nav_nav
  width 1400px
  font-size 18px
  line-height 2em
  margin 0px auto
  cursor pointer
.nav
  position absolute
  top 0
  width 100%
  // background-color #000
  // opacity 0.4
  z-index 15
  &__bg
    position absolute
    z-index -1
    background-color #000
    opacity 0.4
    width 100%
    height 75px
    top 0
  &__box
    display flex
    justify-content space-between
    max-width 1400px
    margin 0 auto
  &__img
    height 75px
    width 138px
    display inline-block
    img
      width 100%
  &__bar 
    opacity 1
    z-index 16
    font-size 15px
    display flex
    height 75px
    justify-content flex-end
    max-width 980px
    margin 0 auto
    &__title
      color #d9d9d9
      text-shadow 0px 0 1px #000
      width 120px
      height 75px
      line-height 75px  
      text-align center
      font-weight 600
      &:hover
        color #fff
        font-size 18px
        cursor pointer
.app__foot
  position fixed
  bottom 0px
  width 100%
  background-color rgb(204, 204, 204)
  text-align center
  div
    // left 50%
    // width: 478px;
    // margin-left -239px
    line-height 4em
    font-size 13px
@media screen and (max-width: 1920px){
    body{
        zoom: 0.8
    }
}
</style>
