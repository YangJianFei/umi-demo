/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-21 11:06:00
 * @LastEditTime: 2023-04-21 13:49:12
 * @LastEditors: YangJianFei
 * @FilePath: \umi-demo\.umirc.ts
 */
import { defineConfig } from '@umijs/max';
import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from '@ant-design/icons';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      path: '/admin',
      name: '管理页',
      component: './Admin',
      routes: [
        {
          name: '权限演示',
          path: '/admin/access',
          component: './Access',
        },
        {
          name: ' CRUD 示例',
          path: '/admin/table',
          component: './Table',
        }
      ],
    },
  ],
  npmClient: 'pnpm',
});

