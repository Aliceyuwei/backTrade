<template>
  <div class="basicInfo">
      basicInfo
    <!-- <div class="onlineUser">
      <div class="text">{{$t('TEXT_NOW_ONLINE_USER')}}</div>
      <div class="number">{{onlineUserCount['total_user_count'] | formatMoney}}</div>
    </div>
    <div class="block"></div>
    <div class="specialUser">
      <el-button
        class="member-tag-total-button"
        type="text"
        @click="dialogVisible = true"
      >{{$t('TEXT_USER_TAG_COUNT')}}</el-button>
    </div> -->

    <!-- <el-dialog
      :title="$t('TEXT_USER_TAG_COUNT')"
      :visible.sync="dialogVisible"
      width=400px
      :modalAppendToBody="false"
      @open="onOpen"
    >
      <div style="overflow-y: scroll; overflow-x: hidden; height: 400px; padding: 12px 0;">
        <div class="member-tag" v-for="tag in memberTagList" :key="tag.id">
          <div class="tag-color" :style="{backgroundColor: tag.color}"></div>
          <div class="tag-name">{{tag.name}}</div>
          <div class="tag-count">{{tag.count}}</div>
        </div>
      </div>
    </el-dialog> -->
  </div>
</template>
<script>
// import { memberApi } from 'common/apiKernel';
// import { mapState } from 'vuex';
// import store from 'store';

export default {
    // data () {
    //     return {
    //         dialogVisible: false
    //     };
    // },
    // computed: {
    //     ...mapState({
    //         onlineUserCount: state => state.overview.ajaxData.onlineUserCount || {},
    //         memberTagList: state => state.member.ajaxData.tagList.member_tag_list || []
    //     })
    // },
    // methods: {
    //     onOpen () {
    //         store.dispatch('actionCommonLoading', true);
    //         memberApi.getMemberTagList({
    //             success: () => {
    //                 store.dispatch('actionCommonLoading', false);
    //             }
    //         });
    //     }
    // }
};
</script>

<style scoped>
.member-tag-total-button {
  margin-left: auto;
  padding-right: 20px;
}

.member-tag {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1 0;
  -ms-flex: 1 0;
  flex: 1 0;
  padding: 0 21px 0 15px;
  margin-bottom: 6px;
}

.member-tag:hover {
  background-color: #c8e6fd;
}

.tag-color {
  display: block;
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 2px;
  margin: 2px 9px 0 0;
}

.tag-name {
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 13px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.tag-count {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 12px;
  margin-left: auto;
  word-break: break-all;
}
</style>