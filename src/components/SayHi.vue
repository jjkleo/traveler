<template>
  <div class="container">
    <div class="sign">
      <span>签到</span>
    </div>
    <div class="count">
      <span>签到总次数</span>
      <span>{{ count }}次</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SayHi",
  data() {
    return {
      count: 3
    };
  },
  methods: {}
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  color: #ca824e;
}

.container:hover {
  cursor: pointer;
}

.sign {
  position: absolute;
  left: 0;
  top: 0;
  height: 60px;
  width: 80px;
  background: #ecbc9a;
  text-align: center;
}

.sign span {
  display: block;
  font-size: 20px;
  margin-top: 16px;
  letter-spacing: 2px;
}
.count {
  position: absolute;
  right: 0;
  left: 80px;
  top: 0;
  height: 60px;
  background: #e6d4c8;
  text-align: center;
}

.count:hover {
  background: #dfccc0;
}

.count span:first-child {
  position: absolute;
  display: block;
  left: 30px;
  top: 10px;
  font-size: 13px;
}

.count span:nth-child(2) {
  position: absolute;
  display: block;
  left: 30px;
  top: 30px;
  font-size: 18px;
  font-weight: bold;
}
</style>
