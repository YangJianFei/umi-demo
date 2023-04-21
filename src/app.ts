/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-21 11:06:00
 * @LastEditTime: 2023-04-21 13:47:10
 * @LastEditors: YangJianFei
 * @FilePath: \umi-demo\src\app.ts
 */
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    layout: 'mix',
    splitMenus: true
  };
};
