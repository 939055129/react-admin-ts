/*
 * @Description: Night
 * @Date: 2021-02-22 11:23:03
 * @LastEditTime: 2021-02-25 16:43:21
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
import { router } from "@/utils/interface"
const normalRoter: router[] = [
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
    component: () => import("@/path/documentation"),
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
        component: () => import("@/path/permission/page"),
      },
      {
        name: "指令权限",
        path: "/directive",
        icon: "",
        component: () => import("@/path/permission/directive"),
      },
      {
        name: "角色权限",
        path: "/role",
        icon: "",
        component: () => import("@/path/permission/role"),
      },
    ]
  },
  {
    name: "图标",
    path: "/icon",
    icon: ItalicOutlined,
    component: () => import("@/path/icon"),
  },
  {
    name: "组件",
    path: "/components",
    icon: AppleOutlined,
    children: [
      {
        name: "富文本编辑器",
        path: "/braft-editor",
        icon: "",
        component: () => import("@/path/components/braft-editor"),
      },
      {
        name: "markdown",
        path: "/markdown",
        icon: "",
        component: () => import("@/path/components/markdown"),
      },
      {
        name: "JSON编辑器",
        path: "/json-editor",
        icon: "",
        component: () => import("@/path/components/json-editor"),
      },
      {
        name: "split-pane",
        path: "/split-pane",
        icon: "",
        component: () => import("@/path/components/split-pane"),
      },
      {
        name: "头像上传",
        path: "/avatar-upload",
        icon: "",
        component: () => import("@/path/components/avatar-upload"),
      },
      {
        name: "dropzone",
        path: "/dropzone",
        icon: "",
        component: () => import("@/path/components/dropzone"),
      },
      {
        name: "sticky",
        path: "/sticky",
        icon: "",
        component: () => import("@/path/components/sticky"),
      },
      {
        name: "count-to",
        path: "/count-to",
        icon: "",
        component: () => import("@/path/components/count-to"),
      },
      {
        name: "小组件",
        path: "/mixin",
        icon: "",
        component: () => import("@/path/components/mixin"),
      },
      {
        name: "返回顶部",
        path: "/back-to-top",
        icon: "",
        component: () => import("@/path/components/back-to-top"),
      },
      {
        name: "拖拽dialog",
        path: "/drag-dialog",
        icon: "",
        component: () => import("@/path/components/drag-dialog"),
      },
      {
        name: "拖拽select",
        path: "/drag-select",
        icon: "",
        component: () => import("@/path/components/markdown"),
      },
      {
        name: "列表拖拽",
        path: "/dnd-list",
        icon: "",
        component: () => import("@/path/components/dnd-list"),
      },
      {
        name: "可拖拽看板",
        path: "/drag-kanban",
        icon: "",
        component: () => import("@/path/components/drag-kanban"),
      },
    ]
  },
  {
    name: "图表",
    path: "/charts",
    icon: BarChartOutlined,
    children: [
      {
        name: "键盘图表",
        path: "/keyboard",
        icon: "",
        component: () => import("@/path/charts/keyboard"),
      },
      {
        name: "折线图",
        path: "/line",
        icon: "",
        component: () => import("@/path/charts/line"),
      },
      {
        name: "混合图表",
        path: "/mix-chart",
        icon: "",
        component: () => import("@/path/charts/mix-chart"),
      },
    ]
  },
  {
    name: "Table",
    path: "/table",
    icon: TableOutlined,
    children: [
      {
        name: "动态 Table",
        path: "/dynamic-table",
        icon: "",
        component: () => import("@/path/table/dynamic-table"),
      },
      {
        name: "拖拽 Table",
        path: "/drag-table",
        icon: "",
        component: () => import("@/path/table/drag-table"),
      },
      {
        name: "Table 内编辑",
        path: "/inline-edit-table",
        icon: "",
        component: () => import("@/path/table/inline-edit-table"),
      },
      {
        name: "综合Table",
        path: "/complex-table",
        icon: "",
        component: () => import("@/path/table/complex-table"),
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
        component: () => import("@/path/example/create"),
      },
      {
        name: "文章列表",
        path: "/list",
        icon: "",
        component: () => import("@/path/example/list"),
      },
    ]
  },
  {
    name: "Tab",
    path: "/Tab",
    icon: InsertRowAboveOutlined,
    component: () => import("@/path/Tab"),
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
        component: () => import("@/path/error/401"),
      },
      {
        name: "404",
        path: "/404",
        icon: "",
        component: () => import("@/path/error/404"),
      },
    ]
  },
  {
    name: "错误日志",
    path: "/error-log",
    icon: BugOutlined,
    component: () => import("@/path/error-log"),
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
        component: () => import("@/path/excel/export-excel"),
      },
      {
        name: "导出已选项",
        path: "/export-selected-excel",
        icon: "",
        component: () => import("@/path/excel/export-selected-excel"),
      },
      {
        name: "导出多级表头",
        path: "/export-merge-header",
        icon: "",
        component: () => import("@/path/excel/export-merge-header"),
      },
      {
        name: "上传excel",
        path: "/upload-excel",
        icon: "",
        component: () => import("@/path/excel/upload-excel"),
      },
    ]
  },
  {
    name: "zip",
    path: "/zip",
    icon: FileZipOutlined,
    component: () => import("@/path/zip"),
  },
  {
    name: "pdf",
    path: "/pdf",
    icon: FilePptOutlined,
    component: () => import("@/path/pdf"),
  },
  {
    name: "换肤",
    path: "/theme",
    icon: SkinOutlined,
    component: () => import("@/path/theme"),
  },
  {
    name: "国际化",
    path: "/i18n",
    icon: GlobalOutlined,
    component: () => import("@/path/i18n"),
  },
]
export default normalRoter