<template>
  <div>
    <Header class="page-header">
      <div class="page-header-left">
        华卓影像云平台
      </div>
      <div class="page-header-right">
        <nav class="page-header-nav">
          <Menu mode="horizontal" theme="primary" active-name="1">
            <MenuItem name="1">数据共享</MenuItem>
            <MenuItem name="2">远程诊断</MenuItem>
          </Menu>
        </nav>
        <router-link to="/" class="help">帮助</router-link>
        <div class="user-center">
          <Avatar style="margin-right: 14px">U</Avatar>
          <Dropdown>
            <a href="javascript:void(0)">
              UserName
              <Icon type="ios-arrow-down"></Icon>
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  </div>
</template>
<script>
import Header from '@/components/header'
import Menu from '@/components/menu'
import Avatar from '@/components/avatar'
import Dropdown from '@/components/dropdown'
import Icon from '@/components/icon'
export default {
  components: {
    Header,
    Menu,
    MenuItem: Menu.Item,
    Avatar,
    Dropdown,
    Icon
  }
}
</script>
<style lang="less">
.page-header {
  position: absolute;
  left: 0;
  right: 0;
  height: 40px;
  padding: 0 20px;
  background-image: linear-gradient(0deg, #43B8AD 0%, #16CCBB 63%);
  box-shadow: 0 0 6px 0 rgba(128,128,128,0.50);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  .page-header-left {
    font-size: 18px;
  }
  .page-header-right {
    display: flex;
    align-items: center;
    .help {
      margin-left: 38px;
      margin-right: 54px;
    }
    .user-center {
      display: flex;
      align-items: center;
    }
    .ivu-avatar {
      width: 24px;
      height: 24px;
      & > * {
        line-height: 24px;
      }
    }
    .ivu-menu-primary.ivu-menu-horizontal {
      background: rgba(0, 0, 0, 0);
      .ivu-menu-item-active, .ivu-menu-item:hover {
        background: none;
        background-image: linear-gradient(-179deg, #43B9AD 0%, #16CBBA 100%);
      }
    }
    .ivu-menu, .help, .ivu-dropdown-rel a {
      color: #ffffff;
      font-size: 14px;
    }
    .ivu-menu-item {
      padding: 0 12px;
      margin-left: 16px;
    }
  }
}
</style>
