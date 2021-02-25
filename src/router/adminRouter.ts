/*
 * @Description: Night
 * @Date: 2021-02-20 16:18:58
 * @LastEditTime: 2021-02-25 17:02:46
 * @Version: 
 */
import { router } from "@/utils/interface"
import {
  SettingOutlined
} from '@ant-design/icons';
export const adminRouter: router[] = [
  {
    path: "/admin",
    name: "admin",
    auth: ["admin"],
    icon: SettingOutlined,
    component: () => import("@/path/admin/admin")
  }
]