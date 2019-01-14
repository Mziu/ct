<template>
  <div>
    <div class="add">
      <div class="job">
        <div>
          <div class="title">建筑设计师(住宅方向)</div>
          <div>  任职资格：</div>
          <div>1、建筑学专业五年制本科或以上学历，从事建筑设计工作3年以上，住宅设计经验2年以上</div>
          <div>2、具有大中型工程项目从方案至扩初、施工图设计主要参与者的经验</div>
          <div>3、具有本专业一定的理论基础，了解基本建设程序,技术标准、规范、规程</div>
          <div>4、熟练使用计算机绘图技术（Cad、 天正、Sketch up、Indesign、Photoshop），掌握其他基本计算机工作软件（Word、 PPT）。</div>
        </div>
        <div>
          <div class="title">助理建筑设计师</div>
          <div>  任职资格：</div>
          <div>1、建筑学专业五年制本科或以上学历，从事建筑设计工作1-2年</div>
          <div>2、具有大中型工程项目从方案至扩初、施工图设计主要参与者的经验</div>
          <div>3、具有本专业一定的理论基础，了解基本建设程序,技术标准、规范、规程</div>
          <div>4、熟练使用计算机绘图技术（Cad、 天正、Sketch up、Indesign、Photoshop），掌握其他基本计算机工作软件（Word、 PPT）。</div>
        </div>
      </div>
      <div class="email">
        <div class="title">简历投递方式：</div>
        <div>应聘人员请将个人简历、期望薪酬、</div>
        <div>期望工作地点、作品图片、</div>
        <div>在校成绩单等相关资料（请注明要应聘的职位）</div>
        <div>E-mail至我司，</div>
        <div>公司将择优及时通知面试。</div>
        <div class="imp">邮箱：184552044@qq.com</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
.add
  max-width 1400px
  margin 0 auto
  display flex
  justify-content space-between
  .job
    border-right 1px solid #3b3b3b
    padding 0 20px
    font-size 16px
    line-height 2em
  .email
    padding 0 20px
    font-size 17px
    line-height 2em
    .imp
      font-weight 600
.title 
  font-size 20px
  line-height 40px
  font-weight 600
  &:nth-child(1)
    margin-top 30px
</style>
