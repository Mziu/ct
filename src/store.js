import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let domain = 'http://chituo.santo-archi.com/'
export default new Vuex.Store({
  state: {
    itemList: [
      {
        name: '刘宏斌',
        job: '国家一级注册建筑师 炽拓建筑创始人 设计总监',
        // desc: [`合肥禹洲天玺`, `上海新城香溢都荟`, `合肥禹洲中央城`, `上海三湘森林海尚`, `海南恒大海花岛`,` 苏州建发独墅湾`, `济南新城香溢紫郡`, `上海新城樾山璟里`, `嘉兴海宁公园道壹号`, `杭州天阳凤起`, `莱芜孝义楼村地块`, `济南新城刘志远地块`, `厦门建发禾山地块`, `苏州东原吴中地块`, `福州建发央玺`, `厦门大唐世家`, `杭州建发三墩北`, `新城青岛山大产业园`, `湖北建发玺院`],
        desc: [`恒大海花岛`, `建发福州央玺`, `建发苏州独墅湾`, `新城青岛山大产业园`, `新城济南香溢紫郡`,` 建发杭州三墩北`, `大唐世家厦门`, `建发湖北玺院`],
        img: `${domain}team-01.jpeg`,
        bg: `background-image: url('${domain}team-01.png?imageslim');`
      },
      {
        name: '苏坛洪',
        job: '设计总监',
        desc: [`建发张家港央誉`, `龙湖天津禧瑞郦城`,
        `中南嘉兴悦府`,
        `恒大山水城`,
        `天正南京天御溪岸`],
        img: `${domain}timg.jpeg`,
        bg: `background-image: url('${domain}team-02.png?imageslim');`
      },
      {
        name: '廖郡郡',
        job: '设计总监',
        desc: [`建发苏州独墅湾`,
        `建发长沙央著`,
        `建发厦门央玺`,
        `富力无锡运河十号`,
        `新城济南香溢紫郡`],
        img: `${domain}timg.jpeg`,
        bg: `background-image: url('${domain}team-03.png?imageslim');`
      },
      {
        name: '龙航明',
        job: '主创设计师',
        desc: [`建发张家港央誉`,
        `龙湖天津禧瑞郦城`,
        `中南嘉兴悦府`,
        `恒大山水城`,
        `天正南京天御溪岸`],
        img: `${domain}timg.jpeg`,
        bg: `background-image: url('${domain}team-04.png?imageslim');`
      },
      {
        name: '楼天明',
        job: '主创设计师',
        desc: [`中海南通上林公馆`,
        `中海广州广钢新城`,
        `中海重庆紫御江山`,
        `成都龙之梦鹏瑞利新城D地块`,
        `沈阳龙之梦亚太中心P区办公楼`],
        img: `${domain}timg.jpeg`,
        bg: `background-image: url('${domain}team-05.png?imageslim');`
      },
      {
        name: '严晨',
        job: '主创设计师',
        desc: [`北京泰禾`,
        `广州华发荔湾项目`,
        `青岛恒生度假村`,
        `大唐漳州角美世家`,
        `建发武汉花山`],
        img: `${domain}timg.jpeg`,
        bg: `background-image: url('${domain}team-06.png?imageslim');`
      },
      {
        name: '李森炯',
        job: '主创设计师',
        desc: [`建发苏州独墅湾`,
        `杭州东站西子国际`,
        `建发福州领峰花园`,
        `大唐漳州角美世家`,
        `建发杭州三墩北`,],
        img: `${domain}timg.jpeg`,
        bg: `background-image: url('${domain}team-07.png?imageslim');`
      },
      {
        name: '张银斌',
        job: '主创设计师',
        desc: [`建发厦门央玺`,
        `建发苏州独墅湾`,
        `济南新城C4`,
        `建发福州央玺`,
        `建发杭州三墩北`,
        `建发武汉花山`,
        `新城青岛山大产业园`],
        img: `${domain}timg.jpeg`,
        bg: `background-image: url('${domain}team-08.png?imageslim');`
      },
    ],
    designCityList: [ //  城市设计
      {
        title: '巢州忆园概念规划项目',
        img: `${domain}xm-24.png?imageslim`,
        path: 'detail',
        xm: 2, //  模块
        xmnum: 0, //  项目分类
        num: 4 // 图片数量
      },
      {
        title: '襄阳长寿岛概念规划项目',
        img: `${domain}xm-25.png?imageslim`,
        path: 'detail',
        xm: 2, //  模块
        xmnum: 1, //  项目分类
        num: 3 // 图片数量
      },
      {
        title: '雪融谷大目湾生命健康项目',
        img: `${domain}xm-26.png?imageslim`,
        path: 'detail',
        xm: 2, //  模块
        xmnum: 2, //  项目分类
        num: 6 // 图片数量
      },
    ],
    publicBuildList: [
      {
        title: '东阳建筑博物馆项目(个人业绩)',
        img: `${domain}xm-20.png?imageslim`,
        path: 'detail',
        xm: 1, //  模块
        xmnum: 5, //  项目分类
        num: 4 // 图片数量
      },
      {
        title: '恒大海花岛项目(个人业绩)',
        img: `${domain}xm-21.png?imageslim`,
        path: 'detail',
        xm: 1, //  模块
        xmnum: 6, //  项目分类
        num: 9 // 图片数量
      },
      {
        title: '新城-青岛山大产业园项目',
        img: `${domain}xm-22.png?imageslim`,
        path: 'detail',
        xm: 1, //  模块
        xmnum: 7, //  项目分类
        num: 7 // 图片数量
      },
      {
        title: '海南香格里拉酒店概念设计项目',
        img: `${domain}xm-15.png?imageslim`,
        path: 'detail',
        xm: 1, //  模块
        xmnum: 0, //  项目分类
        num: 4 // 图片数量
      },
      {
        title: '柬埔寨西哈努克度假酒店项目',
        img: `${domain}xm-16.png?imageslim`,
        path: 'detail',
        xm: 1, //  模块
        xmnum: 1, //  项目分类
        num: 7 // 图片数量
      },
      {
        title: '江苏苏奥电商产业园项目',
        img: `${domain}xm-17.png?imageslim`,
        path: 'detail',
        xm: 1, //  模块
        xmnum: 2, //  项目分类
        num: 10 // 图片数量
      },
      {
        title: '山东绮丽创谷产业园项目',
        img: `${domain}xm-18.png?imageslim`,
        path: 'detail',
        xm: 1, //  模块
        xmnum: 3, //  项目分类
        num: 6 // 图片数量
      },
      {
        title: '珠海联合赛尔产业园项目',
        img: `${domain}xm-23.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 8, //  项目分类
        num: 6 // 图片数量
      },
      {
        title: '中国农业科学院合肥食品创新研究院项目',
        img: `${domain}xm-19.png?imageslim`,
        path: 'detail',
        xm: 1, //  模块
        xmnum: 4, //  项目分类
        num: 7 // 图片数量
      },
    ],
    buildingList: [
      {
        title: '建发福州央玺项目',
        img: `${domain}xm-01.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 0, //  项目分类
        num: 4 // 图片数量
      },
      {
        title: '建发苏州独墅湾后期服务项目',
        img: `${domain}xm-02.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 1, //  项目分类
        num: 5 // 图片数量
      },
      {
        title: '建发厦门央玺立面改造项目',
        img: `${domain}xm-03.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 2, //  项目分类
        num: 7 // 图片数量
      },
      {
        title: '建发杭州三墩北项目',
        img: `${domain}xm-04.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 3, //  项目分类
        num: 13 // 图片数量
      },
      {
        title: '建发建阳项目',
        img: `${domain}xm-05.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 4, //  项目分类
        num: 11 // 图片数量
      },
      {
        title: '建发金茂武汉P66项目',
        img: `${domain}xm-06.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 5, //  项目分类
        num: 7 // 图片数量
      },
      {
        title: '建发厦门薛岭项目',
        img: `${domain}xm-07.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 6, //  项目分类
        num: 18 // 图片数量
      },
      {
        title: '建发太仓项目',
        img: `${domain}xm-08.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 7, //  项目分类
        num: 12 // 图片数量
      },
      {
        title: '建发武汉花山项目',
        img: `${domain}xm-09.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 8, //  项目分类
        num: 22 // 图片数量
      },
      {
        title: '建发张家港项目',
        img: `${domain}xm-10.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 9, //  项目分类
        num: 13 // 图片数量
      },
      {
        title: '朗诗亨通吴江项目',
        img: `${domain}xm-11.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 10, //  项目分类
        num: 18 // 图片数量
      },
      {
        title: '大唐漳州角美项目',
        img: `${domain}xm-12.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 11, //  项目分类
        num: 5 // 图片数量
      },
      {
        title: '芜湖世茂健康小镇项目',
        img: `${domain}xm-13.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 12, //  项目分类
        num: 3 // 图片数量
      },
      {
        title: '雅居乐-漳州项目',
        img: `${domain}xm-14.png?imageslim`,
        path: 'detail',
        xm: 0, //  模块
        xmnum: 13, //  项目分类
        num: 13 // 图片数量
      },
    ],
    proimg: `${domain}pro.png?imageslim` //  公司介绍图片
  },
  getters: {
    getItemList: state => {
      return state.itemList
    },
    getBuildingList: state => {
      return state.buildingList
    },
    getpublicBuildList: state => {
      return state.publicBuildList
    },
    getproimg: state => {
      return state.proimg
    },
    getdesignCityList: state => {
      return state.designCityList
    }
  },
  mutations: {
    // changePosition (state) {
    //   console.log(state.itemList)
    //   let x = 0
    //   for (let i = 0; i < state.itemList.length; i++) {
    //     if (i < 4) {
    //       state.itemList[i].styls = 'left:' + 220 * i +'px;top:' + 0 + 'px;transition-delay:'+ 0.2 * i + 's'
    //     } else if (i > 3) {
    //       state.itemList[i].styls = 'left:' + 220 * x +'px;top:' + 300 + 'px;transition-delay:'+ 0.2 * i + 's'
    //       x++
    //     }
    //   }
    // }
  },
  actions: {
    changePosition (state) {
      setTimeout(() => {
        console.log(state.state.itemList)
        let x = 0
        for (let i = 0; i < state.state.itemList.length; i++) {
          if (i < 4) {
            state.state.itemList[i].styls = 'left:' + 220 * i +'px;top:' + 0 + 'px;transition-delay:'+ 0.2 * i + 's'
          } else if (i > 3) {
            state.state.itemList[i].styls = 'left:' + 220 * x +'px;top:' + 300 + 'px;transition-delay:'+ 0.2 * i + 's'
            x++
          }
        }
      }, 100);
    }
  }
})
