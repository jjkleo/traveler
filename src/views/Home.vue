<template>
  <div>
    <header-top />
    <main>
      <div class="main-container">
        <router-view></router-view>
      </div>
      <div class="aside-container">
        <div class="aside-item aside-hi">
          <say-hi></say-hi>
        </div>
        <div class="aside-item aside-record">
          <record-list></record-list>
        </div>
        <div class="aside-item aside-recent">Recent</div>
        <div class="aside-item aside-recommand">Recommend</div>
        <div class="aside-copyright">copyright</div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTop from "@/components/HeaderTop.vue";
import SayHi from "@/components/SayHi.vue";
import RecordList from "@/components/RecordList.vue";

export default {
  name: "Home",
  components: {
    HeaderTop,
    SayHi,
    RecordList
  }
};
</script>

<style scoped>
main {
  width: 1050px;
  height: 100%;
  margin: 0 auto;
  min-height: 400px;
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
}

.main-container {
  background: #ffffff;
  width: 740px;
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
  font-size: 14px;
}

.aside-container {
  width: 300px;
  height: 100%;
  margin: 0 0 0 10px;
  font-size: 14px;
}

.aside-item {
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
}

.aside-container .aside-item:not(:first-child) {
  margin-top: 10px;
}

.aside-hi {
  height: 60px;
}

.aside-record {
  height: 100px;
}

.aside-recent {
  height: 300px;
}

.aside-recommand {
  height: 200px;
}

.aside-copyright {
  height: 200px;
}
</style>
