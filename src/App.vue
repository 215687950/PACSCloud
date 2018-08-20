<template>
  <div id="app">
    <Layout class="demo">
      <Header style="color: #ffffff;font-size: 26px">
        <div>组件demo</div>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="2-3" theme="light" width="auto" :open-names="['1', '2', '3']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Basic
              </template>
              <MenuItem name="1-1" to="demoButton">Button</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Form
              </template>
              <MenuItem name="2-1" to="demoInput">Input</MenuItem>
              <MenuItem name="2-2" to="demoSelect">Select</MenuItem>
              <MenuItem name="2-3" to="demoDatePicker">DatePicker</MenuItem>
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
        <Layout>
          <Content :style="{padding: '24px'}">
            <router-view v-wechat-title="$route.meta.title"/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/layout'
import Header from '@/components/header'
import Menu from '@/components/menu'
import Sider from '@/components/sider'
import Content from '@/components/content'
import Icon from '@/components/icon'
export default {
  name: 'App',
  components: {
    Layout,
    Header,
    Menu,
    MenuGroup: Menu.Group,
    MenuItem: Menu.Item,
    Submenu: Menu.Sub,
    Sider,
    Content,
    Icon
  }
}
</script>

<style>
  #app, .demo {
    height: 100%;
  }
</style>
