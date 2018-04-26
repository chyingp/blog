<template>
<div class="comment-item">
  <div class="comment-header">
    <div class="comment-author">{{comment.author}}</div>
    <div class="comment-phone">{{comment.phone}}</div>
    <div class="comment-floor">{{comment.floor}}</div>
  </div>
  <div class="comment-content" v-html="comment.content"></div>
</div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.comment-item {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px dashed #eee;
}
.comment-item:last-child {
  border: none;
}
.comment-header {
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 8px;
  font-size: 15px;
}
.comment-author {
  color: #4769b0;
  margin-right: 5px;
}
.comment-floor {
  font-size: 12px;
  flex: 1;
  text-align: right;
}
.comment-content {
  line-height: 1.6;
  font-size: 16px;
}
</style>
