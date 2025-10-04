import { defineAsyncComponent } from "vue";

export const tailwindNoteViewTabs = [
  {
    id: "tailwindStartNote",
    title: "開始使用",
    description: "本段以",
    descriptionComponent: null,
    lists: [
      {
        listTitle: "終端機的部分",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          terminalCode: 
`# 新建資料夾專案
mkdir tailwind-project-name
cd tailwind-project-name

# 初始化Vite專案 (選Vue + JavaScript/TypeScript依需求)
npm create vite@latest
# 選 Vue, 再選 JavaScript 或 TypeScript

# 安裝Tailwind v4 + Vite版本
npm install tailwindcss @tailwindcss/vite`,
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "ToDo List",
            detailSubtitle: "測試用文字<code>npm</code>fre",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          terminalCode: null,
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "ToDo List",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "複利計算器",
            detailSubtitle: null,
            detailContent: null,
            // detailComponent: defineAsyncComponent(() =>
            //   import("../../../components/WebNoteView/VuejsNoteView/VuejsSomeInterestingNote/CompoundInterestCalculator/CompoundInterestCalculator.vue")
            // ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsCardNote",
    title: "一些卡片",
    description: null,
    descriptionComponent: null,
    lists: [
      {
        listTitle: "小工具們",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          terminalCode: null,
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "ToDo List",
            detailSubtitle: null,
            detailContent: null,
            // detailComponent: defineAsyncComponent(() =>
            //   import("../../../components/WebNoteView/VuejsNoteView/VuejsSomeInterestingNote/ToDoApp.vue")
            // ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "複利計算器",
            detailSubtitle: null,
            detailContent: null,
            // detailComponent: defineAsyncComponent(() =>
            //   import("../../../components/WebNoteView/VuejsNoteView/VuejsSomeInterestingNote/CompoundInterestCalculator/CompoundInterestCalculator.vue")
            // ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsSomeInterestingNote",
    title: "一些卡片",
    description: null,
    descriptionComponent: null,
    lists: [
      {
        listTitle: "小工具們",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          terminalCode: null,
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "ToDo List",
            detailSubtitle: null,
            detailContent: null,
            // detailComponent: defineAsyncComponent(() =>
            //   import("../../../components/WebNoteView/VuejsNoteView/VuejsSomeInterestingNote/ToDoApp.vue")
            // ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "複利計算器",
            detailSubtitle: null,
            detailContent: null,
            // detailComponent: defineAsyncComponent(() =>
            //   import("../../../components/WebNoteView/VuejsNoteView/VuejsSomeInterestingNote/CompoundInterestCalculator/CompoundInterestCalculator.vue")
            // ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      }
    ]
  }
];