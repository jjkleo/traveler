<template>
  <header>
    <div class="header-container">
      <el-row>
        <el-col :span="5" class="header-logo">
          <img src="../assets/logo.png" width="180px" height="50px" @click="toHome()" />
        </el-col>
        <el-col :span="9" class="header-nav">
          <router-link to="/home" class="nav-link">个人主页</router-link>
          <router-link to="/resource" class="nav-link">资源库</router-link>
        </el-col>
        <el-col :span="5" class="header-search">
          <el-input v-model="search_text" size="small" placeholder="请输入内容">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
        <el-col :span="3" class="header-profile">
          <el-avatar shape="square" size="small" :src="avatar_image"></el-avatar>
          <span class="username"> username </span>
        </el-col>
        <el-col :span="2" class="header-icons">
          <font-awesome-icon icon="sign-out-alt" class="header-icon" />
          <font-awesome-icon icon="cog" class="header-icon" />
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
import avatar_image from "@/assets/avatar_default.png";
export default {
  name: "HeaderTop",
  data() {
    return {
      search_text: "",
      avatar_image
    };
  },
  methods: {
    toHome() {
      if (this.$route.path != "/home") {
        this.$router.push("/home");
      }
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
}
.header-container {
  width: 1050px;
  height: 50px;
  margin: 0 auto;
}

.el-col {
  display: flex;
  align-items: center;
  height: 50px;
}

.header-logo img:hover {
  cursor: pointer;
}

.header-nav .nav-link {
  color: #8590a6;
  border: solid 1px #f6f6f6;
  font-size: 15px;
  display: block;
  height: 30px;
  width: 80px;
  border-radius: 20px;
  padding: 2px;
  text-align: center;
  line-height: 27px;
  margin: 0 5px;
}

.header-nav .nav-link:hover {
  border: solid 1px #c09373;
}

.header-nav .nav-link.router-link-active {
  background: #c09373;
  color: #ffffff;
}

.header-search .el-input {
  width: 200px;
  margin: 0 10px 0 5px;
}

.header-profile .el-avatar {
  margin: 0 10px 0 18px;
}

.header-profile:hover {
  background: #e2e2e2;
  cursor: pointer;
}

.header-profile .username {
  text-align: center;
  max-width: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: #8590a6;
}

.header-icons .header-icon {
  margin-left: 10px;
  color: #8590a6;
}
.header-icons .header-icon:hover {
  cursor: pointer;
  color: #76839b;
}
</style>
