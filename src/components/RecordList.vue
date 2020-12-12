<template>
  <div class="container">
    <el-row>
      <el-col :span="6">
        <router-link class="record-link picture-link" :to="{ name: 'Images' }">
          <div class="circle">
            <font-awesome-icon icon="image" class="link-icon" />
          </div>
          <span>相册</span>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link class="record-link video-link" :to="{ name: 'Videos' }">
          <div class="circle">
            <font-awesome-icon icon="video" class="link-icon" />
          </div>
          <span>视频</span>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link class="record-link diary-link" :to="{ name: 'Diaries' }">
          <div class="circle">
            <font-awesome-icon icon="file" class="link-icon" />
          </div>
          <span>日志</span>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link class="record-link comment-link" :to="{ name: 'Comments' }">
          <div class="circle">
            <font-awesome-icon icon="comment" class="link-icon" />
          </div>
          <span>评论</span>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "RecordList",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.container {
  padding: 10px;
  background: #ffffff;
}

.record-link {
  display: block;
  height: 80px;
  text-align: center;
  color: #000;
}

.record-link .circle {
  margin: 5px auto;
  width: 40px;
  height: 40px;
  border-radius: 20px;
}

.record-link .circle .link-icon {
  width: 20px;
  height: 20px;
  margin-top: 10px;
}

.record-link:hover span {
  color: #175199;
}

.picture-link .circle {
  background: #e0f0ff;
  color: #0084ff;
}

.video-link .circle {
  background: #fff2e0;
  color: #ff9607;
}

.diary-link .circle {
  background: #fef9e0;
  color: #f4c807;
}

.comment-link .circle {
  background: #e4f7f7;
  color: #26bfbf;
}
</style>
