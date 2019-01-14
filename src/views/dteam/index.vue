<template>
  <div class="dteam">
    <div class="d">
      <div>
        <div v-for="(n, index) in getItemList" class="d__c" :key="n.key" v-if="index % 2 !== 1">
          <div class="d__c__i" style="height:462px;width:300px;background-size:100% 100%;" :style="n.bg"></div>
          <div class="d__c__t">
            <div>{{n.name}}</div>
            <div>{{n.job}}</div>
            <div v-for="item in n.desc" :key="item.key">{{ item }}</div>
          </div>
        </div>
      </div>
      <div>
        <div v-for="(n, index) in getItemList" class="d__c" :key="n.key" v-if="index % 2 === 1">
          <div class="d__c__i" style="height:462px;width:300px;background-size:100% 100%;" :style="n.bg"></div>
          <div class="d__c__t">
            <div>{{n.name}}</div>
            <div>{{n.job}}</div>
            <div v-for="item in n.desc" :key="item.key">{{ item }}</div>
          </div>
        </div>
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
    ...mapGetters(['getItemList']),
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.dteam
  max-width 1400px
  margin 0 auto
  .d
    display flex
    justify-content space-between
    &>div
      width 50%
    &__c
      // background-color #ffccff
      width 90%
      margin 10px auto
      &>div
        display inline-block
      &__t
        width 300px
        vertical-align top
        margin-left 20px
        line-height 2em
        max-height 462px
        &>div:nth-child(1)
          font-size 24px
          font-weight 600
        &>div:nth-child(2)
          font-size 18px
          margin 10px 0
</style>
