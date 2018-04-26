<template>
<div class="container">
  <div class="topic-title">{{topic.title}}</div>
  <div class="topic-num">1楼</div>
  <div class="topic-info">
    <div class="topic-info-item">
      <img src="/static/assets/quan_hit.png" class="topic-info-icon">
      <span class="topic-info-text"> {{topic.vc}}</span>
    </div>
    <div class="topic-info-item">
      <img src="/static/assets/quan_comment.png" class="topic-info-icon">
      <span class="topic-info-text"> {{topic.rc}}</span>
    </div>
  </div>
  <div class="topic-content" v-html="topic.content"></div>
  <div class="comment-wrap">
    <comment-item
      v-for="comment of topic.reply"
      :key="comment.id"
      :comment="comment"></comment-item>
  </div>
</div>
</template>

<script>
import api from '@/utils/api'
import commentItem from '@/components/comment-item'
import { formatComment } from '@/utils'

export default {
  components: {
    commentItem
  },
  data () {
    return {
      loading: false,
      topic: {}
    }
  },
  mounted () {
    Object.assign(this.$data, this.$options.data())
    this.getTopic()
  },
  onReachBottom () {
    this.getComments()
  },
  methods: {
    async getTopic () {
      const { query } = this.$route
      const topic = await api.getTopic(query.id)
      if (!topic) return
      topic.content = topic.content.replace('!--IMG_1--', `img src="${topic.imgs[0]}" width="100%" /`)
      topic.reply = topic.reply.map(formatComment)
      this.topic = Object.assign({
        title: query.title,
        vc: query.vc
      }, topic)
    },
    async getComments () {
      if (this.loading) return
      this.loading = true
      const { query } = this.$route
      const comments = this.topic.reply
      const lastComment = comments[comments.length - 1]
      const newComments = await api.getTopicComments(query.id, lastComment.id)
      if (!newComments) return
      const formatedComments = newComments.map(formatComment)
      this.topic.reply = this.topic.reply.concat(formatedComments)
      this.loading = false
    }
  }
}
</script>

<style lang="less">
.topic-title {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 22px;
}
.topic-num {
  font-size: 12px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.topic-info {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
.topic-info-item {
  margin-right: 10px;
  font-size: 12px;
  color: #aaa;
  display: flex;
  align-items: center;
}
.topic-info-icon {
  width: 15px;
  height: 15px;
  margin-right: 4px;
}
.topic-content {
  width: 100%;
  font-size: 16px;
  padding: 10px;
  line-height: 1.6;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  min-height: 100px;
}

.comment-wrap {
  width: 100%;
}
</style>
