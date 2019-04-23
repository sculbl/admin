<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container"/>

    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <span class="el-dropdown-link">
          <div class="card__user__info"></div>
          <div class="head__btn" slot="reference">
            <img src="~@/assets/images/user.png" alt>
            <span>江三四</span>
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>完善个人信息</el-dropdown-item>
          <el-dropdown-item>完善公司信息</el-dropdown-item>
          <el-dropdown-item>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { VBreadcrumb as Breadcrumb, VHamburger as Hamburger } from "component";

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      visible: false,
      dialogVisible: false
    };
  },
  computed: {
    ...mapGetters(["sidebar", "name", "avatar", "device"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    changePass() {
      this.visible = false;
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss">
.avatar-container {
  padding: 0;
}
</style>

<style lang="scss" scoped>
.user__info {
  .head__btn {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  span {
    padding-left: 8px;
    font-size: 16px;
    color: #000;
  }
}
.card__user__info {
  ul {
    padding-bottom: 15px;
    li {
      padding-bottom: 10px;
    }
  }
  .btn-bottom {
    border-top: 1px solid #e7e7e7;
    display: flex;
    justify-content: space-between;
  }
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    .home-icon {
      color: #000;
      font-size: 30px;
    }

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      .head__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        height: 50px;
        img {
          width: 50px;
          height: 50px;
        }
      }

      .avatar-wrapper {
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        .user-avatar {
          cursor: pointer;
          width: 45px;
          height: 45px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
