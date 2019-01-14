<template>
  <div class="about">
    <div class="about__item">
      <div v-for="(n,index) in itemlist" :key="n.key" class="about__item__nav" :class="index === currentIndex? 'active': ''" @click="handleChange(index)">{{ n.title }}</div>
    </div>
    <div class="introduceCompany">
      <div class="introduceCompany__title">{{ itemlist[currentIndex].title }}</div>
      <div class="introduceCompany__desc">
        <div class="introduceCompany__desc__info">{{ itemlist[currentIndex].info }}</div>
        <!-- <ul v-if="currentIndex === 2">
          <ol v-for="n in itemlist[currentIndex].list" :key="n.key" class="introduceCompany__desc__msg">
            {{ n }}
          </ol>
        </ul> -->
        <div v-if="currentIndex === 1">
          <div v-for="n in 9" :key="n.key" class="proimglist">
            <img :src="domain+'hz-' + n +'.png'" oncontextmenu="return false" ondragstart="return false">
          </div>
        </div>
         <div v-if="currentIndex === 0" class="pro">
           <div class="proimg">
              <img :src="domain+'comp.png'" oncontextmenu="return false" ondragstart="return false" style="width: 100%">
           </div>
           <div class="prodesc">
              <div v-for="n in itemlist[currentIndex].list" :key="n.key" >
                {{n}}
              </div>
           </div>
        </div>
      </div>
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
          title: '公司介绍',
          info: '',
          list: [`炽拓`,`建筑是一个致力于建筑精品化设计的团队，具备为客户提供全专业、全过程设计的服务能力`, `在城市综合体、商业建筑、办公楼、酒店、高端住宅等设计领域均有涉猎对于高端住宅及配套示范区设计有自我的一套理解。`, `公司成立之初就决定走精品化，个性化路线.致力于将优质服务带给我们的合作伙伴。`, `炽拓建筑目前团队成员为50人，配备3名总监、5名主创设计师、40名建筑设计师；
`, `炽拓建筑目前服务客户主要为房企销售前100强，分别为：中国恒大（第1名）、新城控股（第15名）、建发房产（第47名）、禹洲集团（第64名）、三湘地产、东原地产。`]
        },
        {
          title: '合作伙伴',
          info: '',
          list: ['建发房产 新城地产 大唐地产 金茂地产 世贸地产 福昇集团 雅居乐地产 三盛宏业 朗诗集团']
        },
        // {
        //   title: '版权说明',
        //   info: `非常感谢您对我们的网站感兴趣并访问我们的网站。在您使用本网站之前，请您仔细阅读本声明的所有条款。您一旦链接、使用本网站，即表示您无条件地接受本声明，您应该罪受本声明的相关法律规定。`,
        //   list: [
        //     `1. 本公司网站保留所有的权利：所有的文字，图片，有声文件，动画文件，和其他知识产权均受中国包括著作权法在内的所有相关工业产权和知识产权保护。不可复制用于商业目的或发行，也不可修改后在其他网站使用。`,
        //     `2. 本网站中出现的所有商标、标识和服务标识的所有权均归本公司网站。未经本公司网站司的书面许可，禁止将其以任何方式使用、永久下载、复制、分发。`,
        //     `3. 本网站的内容和软件均受《中华人民共和国民法通则》、《中华人民共和国著作权法》、国际公约中有关著作权保护的规定以及其它相关法律法规的保护。任何单位或个人均不得将本网站提供的内容与服务用于商业、盈利性活动；将本网站提供的内容与服务用于非商业用途时，应遵守著作权法以及其他相关法律法规的规定，不得侵犯网站所有者及相关权利人的权益。`,
        //     `4. 本公司网站保留根据业务需要随时对本声明内容进行更新的权利，请您在每次登陆本网站时访问此页，查看本网站的当前声明内容。`,
        //     `5. 版权归原作者所有如有侵权请立即与我们联系,我们将及时处理。`,
        //     `6. 以上声明内容的解释权归本公司网站所有。`
        //   ]
        // }
      ],
      currentIndex: 0,
      domain: ''
    }
  },
  methods: {
    handleChange (ind) {
      this.currentIndex = ind
    }
  },
  mounted () {
    this.domain = utils.domain
    console.log(utils.domain)
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
</style>

