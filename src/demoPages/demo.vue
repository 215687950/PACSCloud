<template>
  <Layout class="demo">
    <Header style="color: #ffffff;font-size: 26px">
      <div>组件demo</div>
    </Header>
    <Layout>
      <Sider hide-trigger :style="{background: '#fff'}">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Basic
            </template>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              Form
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              View
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
    </Layout>
  </Layout>
</template>
<script>
import Layout from '@/components/layout'
import Header from '@/components/header'
import Menu from '@/components/menu'
import Sider from '@/components/sider'
import Icon from '@/components/icon'
export default {
  components: {
    Layout,
    Header,
    Menu,
    MenuGroup: Menu.Group,
    MenuItem: Menu.Item,
    Submenu: Menu.Sub,
    Sider,
    Icon
  }
}
</script>
<style>
  .demo {
    height: 100%;
  }
</style>
