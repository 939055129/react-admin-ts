/*
 * @Description: Night
 * @Date: 2021-02-20 16:18:01
 * @LastEditTime: 2021-02-20 16:33:50
 * @Version: 
 */
import { menu } from "./index"
export const normalRouter: menu[] = [
  {
    path: "/app",
    name: "主页",
    auth: ["normal"],
    components: () => import('@/path/home'),
  },
  {
    path: "/movie",
    name: "电影",
    auth: ["normal"],
    children: [
      {
        path: "/FMovie",
        name: "热门电影",
        auth: ["normal"],
        components: () => import('@/path/movie'),
      },
      {
        path: "/RMovie",
        name: "电影排行",
        auth: ["normal"],
        components: () => import('@/path/movie'),
      },
    ]
  },
]