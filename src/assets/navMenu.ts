/*
 * @Description: Night
 * @Date: 2021-02-22 11:23:03
 * @LastEditTime: 2021-02-23 18:10:19
 * @Version: 
 */

import {
  HomeOutlined,
  FileTextOutlined,
  LockOutlined,
  ItalicOutlined,
  AppleOutlined,
  BarChartOutlined,
  InsertRowAboveOutlined,
  RadarChartOutlined,
  TableOutlined,
  ExclamationCircleOutlined,
  BugOutlined,
  FileExcelOutlined,
  FileZipOutlined,
  FilePptOutlined,
  SkinOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import { menu } from "@/utils/interface"
const menus: menu[] = [
  {
    name: "首页",
    path: "/app",
    icon: HomeOutlined,
    component: () => import("@/path/home"),
  },
  {
    name: "文档",
    path: "/documentation",
    icon: FileTextOutlined,
    component: () => import("@/path/home"),
  },
  {
    name: "权限测试页",
    path: "/permission",
    icon: LockOutlined,
    children: [
      {
        name: "页面权限",
        path: "/page",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "指令权限",
        path: "/directive",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "角色权限",
        path: "/role",
        icon: "",
        component: () => import("@/path/home"),
      },
    ]
  },
  {
    name: "图标",
    path: "/icon",
    icon: ItalicOutlined,
    component: () => import("@/path/home"),
  },
  {
    name: "组件",
    path: "/components",
    icon: AppleOutlined,
    children: [
      {
        name: "富文本编辑器",
        path: "/icon",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "markdown",
        path: "/markdown",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "JSON编辑器",
        path: "/json-editor",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "split-pane",
        path: "/split-pane",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "头像上传",
        path: "/avatar-upload",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "dropzone",
        path: "/dropzone",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "sticky",
        path: "/sticky",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "count-to",
        path: "/count-to",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "小组件",
        path: "/mixin",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "返回顶部",
        path: "/back-to-top",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "拖拽dialog",
        path: "/drag-dialog",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "拖拽select",
        path: "/drag-select",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "列表拖拽",
        path: "/dnd-list",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "可拖拽看板",
        path: "/drag-kanban",
        icon: "",
        component: () => import("@/path/home"),
      },
    ]
  },
  {
    name: "图表",
    path: "/charts",
    icon: BarChartOutlined,
    component: () => import("@/path/home"),
    children: [
      {
        name: "键盘图表",
        path: "/keyboard",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "折线图",
        path: "/line",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "混合图表",
        path: "/mix-chart",
        icon: "",
        component: () => import("@/path/home"),
      },
    ]
  },
  {
    name: "Table",
    path: "/table",
    icon: TableOutlined,
    component: () => import("@/path/home"),
    children: [
      {
        name: "动态 Table",
        path: "/dynamic-table",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "拖拽 Table",
        path: "/drag-table",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "Table 内编辑",
        path: "/inline-edit-table",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "综合Table",
        path: "/complex-table",
        icon: "",
        component: () => import("@/path/home"),
      },
    ]
  },
  {
    name: "综合实列",
    path: "/example",
    icon: RadarChartOutlined,
    children: [
      {
        name: "创建文章",
        path: "/create",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "文章列表",
        path: "/list",
        icon: "",
        component: () => import("@/path/home"),
      },
    ]
  },
  {
    name: "Tab",
    path: "/Tab",
    icon: InsertRowAboveOutlined,
    component: () => import("@/path/home"),
  },
  {
    name: "错误页面",
    path: "/error",
    icon: ExclamationCircleOutlined,
    children: [
      {
        name: "401",
        path: "/401",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "404",
        path: "/404",
        icon: "",
        component: () => import("@/path/home"),
      },
    ]
  },
  {
    name: "错误日志",
    path: "/error-log",
    icon: BugOutlined,
    component: () => import("@/path/home"),
  },
  {
    name: "excel",
    path: "/excel",
    icon: FileExcelOutlined,
    children: [
      {
        name: "导出excel",
        path: "/export-excel",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "导出已选项",
        path: "/export-selected-excel",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "导出多级表头",
        path: "/export-merge-header",
        icon: "",
        component: () => import("@/path/home"),
      },
      {
        name: "上传excel",
        path: "/upload-excel",
        icon: "",
        component: () => import("@/path/home"),
      },
    ]
  },
  {
    name: "zip",
    path: "/zip",
    icon: FileZipOutlined,
    component: () => import("@/path/home"),
  },
  {
    name: "pdf",
    path: "/pdf",
    icon: FilePptOutlined,
    component: () => import("@/path/home"),
  },
  {
    name: "换肤",
    path: "/theme",
    icon: SkinOutlined,
    component: () => import("@/path/home"),
  },
  {
    name: "国际化",
    path: "/i18n",
    icon: GlobalOutlined,
    component: () => import("@/path/home"),
  },
]
export default menus