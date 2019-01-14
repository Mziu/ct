<template>
  <div>
    <div style="height: 500px"></div>
    <div class="carousel">
      <div class="carouselbox" :style="s">
        <div v-for="n in imglist" :key="n.key" :style="n.styls" class="carouselimg">
          {{ n.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imglist: [
        {
          title: '1'
        },
        {
          title: '2'
        },
        {
          title: '3'
        },
        {
          title: '4'
        },
      ],
      speed: 5000, //  每次切换的速度
      width: 300, //  元素宽度
      currentindex: 0, //  索引
      s: '', //  样式
    }
  },
  created () {
    this.changePosition(this.imglist, 320)
    // let a = self.setInterval( () => {
      
    //   this.width = this.width + 10
    //   if (this.width >= this.imglist.length * 320 -320){
    //     this.changePosition(this.imglist, this.width)
    //   }
    //   console.log(this.width)
    //   this.s = 'left:' + -this.width +'px;top:' + 0 + 'px'
    //   // if (this.currentindex === this.imglist.length) {
    //   //   this.currentindex = 0
    //   // } else {
    //   //   this.s = 'left:' + -this.width * this.currentindex +'px;top:' + 0 + 'px'
    //   //   this.currentindex++
    //   // }
    // }, this.speed)
    // let a = self.setInterval( () => {
    //   this.s = 'transform:translateX(' + -this.width * this.currentindex +'px)' // 偏移
    //   this.currentindex = parseInt(this.currentindex + 1) //  当前索引加1
    //   console.log(1)
    //   this.imglist[this.currentindex - 1].styls = 'transform:translateX(' + 320 * this.currentindex +'px);top:' + 0 + 'px'
    // }, this.speed)
  },
  mounted () {
  },
  methods: {
    changePosition (s, w) { //  对象与宽度
        for (let i = 0; i < s.length; i++) {
          s[i].styls = 'transform:translateX(' + w * i +'px);top:' + 0 + 'px'
        }
    }
  }
}
</script>
<style lang="stylus" scoped>
*
  transition all 0.5s
.carousel
  text-align center
  width 300px
  overflow hidden
  position relative
  height  200px
  margin 0 auto
.carouselbox
  color #000
  width 100%
  height 100%
  position absolute
  left 0
.carouselimg
  width 300px
  height 200px
  background-color #fffccf
  position absolute

</style>

