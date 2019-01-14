<template>
  <div class="about">
    <div class="about__item">
      <div v-for="(n,index) in itemlist" :key="n.key" class="about__item__nav" :class="index === currentIndex? 'active': ''" @click="handleChange(index)">{{ n.title }}</div>
    </div>
    <div class="introduceCompany">
      <div class="introduceCompany__title">{{ itemlist[currentIndex].title }}</div>
        <div v-show="currentIndex === 0">
           <div class="about">
            <div class="bdmap">
              <div ref="container"></div>
            </div>
            <div class="companyinfo">
              <div style="font-weight: 600">上海炽拓建筑设计有限公司</div>
              <div>地址: 上海市普陀区丹巴路99号苏宁天御国际广场2285弄B3座 1503-1505室</div>
              <div>电话: 021-52868133</div>
              <div>邮编：200062</div>
              <div>联系人：陆晓芸</div>
              <div>邮箱：184552044@qq.com</div>
            </div>
           </div>
        </div>
        <ul v-show="currentIndex === 1" style="text-align: left;font-size: 16px">
          <div class="introduceCompany__desc__info">{{ itemlist[currentIndex].info }}</div>
          <ol v-for="n in itemlist[currentIndex].list" :key="n.key" class="introduceCompany__desc__msg">
            {{ n }}
          </ol>
        </ul>
    </div>
  </div>
</template>
<script>
import utils from '../../../public/utils'
export default {
  data () {
    return {
      itemlist: [
        {
          title: '公司地址',
          info: '',
          list: []
        },
        {
          title: '版权说明',
          info: `非常感谢您对我们的网站感兴趣并访问我们的网站。在您使用本网站之前，请您仔细阅读本声明的所有条款。您一旦链接、使用本网站，即表示您无条件地接受本声明，您应该罪受本声明的相关法律规定。`,
          list: [
            `1. 本公司网站保留所有的权利：所有的文字，图片，有声文件，动画文件，和其他知识产权均受中国包括著作权法在内的所有相关工业产权和知识产权保护。不可复制用于商业目的或发行，也不可修改后在其他网站使用。`,
            `2. 本网站中出现的所有商标、标识和服务标识的所有权均归本公司网站。未经本公司网站司的书面许可，禁止将其以任何方式使用、永久下载、复制、分发。`,
            `3. 本网站的内容和软件均受《中华人民共和国民法通则》、《中华人民共和国著作权法》、国际公约中有关著作权保护的规定以及其它相关法律法规的保护。任何单位或个人均不得将本网站提供的内容与服务用于商业、盈利性活动；将本网站提供的内容与服务用于非商业用途时，应遵守著作权法以及其他相关法律法规的规定，不得侵犯网站所有者及相关权利人的权益。`,
            `4. 本公司网站保留根据业务需要随时对本声明内容进行更新的权利，请您在每次登陆本网站时访问此页，查看本网站的当前声明内容。`,
            `5. 版权归原作者所有如有侵权请立即与我们联系,我们将及时处理。`,
            `6. 以上声明内容的解释权归本公司网站所有。`
          ]
        }
      ],
      currentIndex: 0,
      domain: ''
    }
  },
  methods: {
    handleChange (ind) {
      console.log(ind)
      this.currentIndex = ind
    }
  },
  mounted () {
    this.domain = utils.domain
    var container = this.$refs.container
    var map = new BMap.Map(container)
    var point = new BMap.Point(121.386615,31.229526)
    map.centerAndZoom(point, 15)
    map.enableScrollWheelZoom(true) //  开启鼠标滚轮缩放
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    // var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
    map.addControl(top_left_control)      
		map.addControl(top_left_navigation)     
    // map.addControl(top_right_navigation)
    //  添加标注
    var marker = new BMap.Marker(point);        // 创建标注    
    map.addOverlay(marker);
    var opts = {    
        width : 250,     // 信息窗口宽度    
        height: 100,     // 信息窗口高度
        title : "上海炽拓建筑设计有限公司"  // 信息窗口标题   
    }    
    var infoWindow = new BMap.InfoWindow("地址: 上海市普陀区丹巴路99号苏宁天御国际广场2285弄B3座 1503室", opts);  // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
    map.closeInfoWindow(infoWindow,point); //关闭信息窗口
    marker.addEventListener("click", function(){          
      map.openInfoWindow(infoWindow,point); //开启信息窗口
    })
    // window.setTimeout(function () {  
    //     map.panTo(new BMap.Point(116.409, 39.918))
    // }, 2000)
  }
}
</script>
<style lang="stylus" scoped>
.pro
  .proimg
    img
    width 100%
  .prodesc
    margin-top 50px
    font-size 16px
    line-height 40px
    font-size 17px
    &>div:nth-child(1)
      display inline
      color red
      font-size 24px
    &>div:nth-child(2)
      display inline
.about
  width 1400px
  margin 0 auto
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
    margin-top 50px
    line-height 2em
    word-break break-all
    letter-spacing 4px
    &__info
      text-indent 2em
      font-size 14px
    &__msg
      margin 20px 0
      display inline-block
      font-size 16px
      img
        margin 0 35px
.proimglist
    display inline-block
    margin 20px
    //  margin 0 35px
// .proimglist:nth-child(3)>img
//     width 400px
//     height 120px
.about
  text-align center
  max-width 1400px
  margin 0 auto 0 auto
  display flex
  justify-content space-between
.bdmap
  height 600px
  width 1000px
  display inline-block
  &>div
    height 100%
.companyinfo
  text-align left
  margin-left 50px
  line-height 2em
.introduceCompany__desc__info
  line-height 2em
  word-break break-all
  letter-spacing 4px
  text-indent: 2em;
  font-size: 14px;
.introduceCompany__desc__msg
  margin 20px 0
  display inline-block
  font-size 16px
  line-height: 2em;
  word-break: break-all;
  letter-spacing: 4px;
.introduceCompany__title
  margin-bottom 50px
</style>

