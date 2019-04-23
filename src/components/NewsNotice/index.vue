<template>
  <el-popover
    popper-class="notification_popover"
    placement="bottom-end"
    width="260"
    :offset="100"
    v-model="notificationVisible"
  >
    <div class="notification_content">
      <ul v-if="notificationVisible">
        <li v-for="(item, index) in 10" :key="index">
          <h5>数据治理</h5>
          <p>
            目前尚有
            <span>23</span>条数据等待治理，请尽快前往处理
          </p>
        </li>
      </ul>
      <div class="tips" v-else>消息为空！</div>

      <el-button type="text" v-if="notificationVisible">清空消息</el-button>
    </div>
    <span class="notification" slot="reference">
      <svg-icon class-name="notification-icon" icon-class="gonggao"/>
      <i class="n noselect">2</i>
    </span>
  </el-popover>
</template>

<script>
export default {
  name: "newsNotice",
  data() {
    return {
      notificationVisible: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.notification_popover {
  padding: 0;
}
.notification_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .tips {
    color: #999;
    font-size: 12px;
    text-align: center;
    line-height: 50px;
  }
  ul {
    max-height: 400px;
    overflow-y: auto;
    @include scrollBar;
    li {
      border-bottom: 1px solid #e7e7e7;
      padding: 10px;
      &:last-child {
        border: none;
      }
      &:hover {
        background-color: rgba(230, 247, 255, 1);
      }
      h5 {
        font-size: 14px;
        color: #444;
        font-weight: 600;
        margin-bottom: 5px;
      }
      p {
        font-size: 12px;
      }
      span {
        color: #f56c6c;
      }
    }
  }
  button {
    border-top: 1px solid #e7e7e7;
    padding: 0;
    padding-top: 10px;
  }
}
.notification {
  position: relative;
  & > .n {
    text-align: center;
    min-width: 18px;
    min-height: 18px;
    line-height: 18px;
    font-size: 12px;
    position: absolute;
    right: 5px;
    top: -3px;
    color: #fff;
    font-style: normal;
    background: #ff4b4b;
    border-radius: 100%;
    transform: translate(50%, -50%);
  }
  .notification-icon {
    color: #000;
    font-size: 30px;
  }
}
</style>