import { I18nLocale } from "./type.ts";

// 语言包
export const Myi18n: Record<string, I18nLocale> = {
  "zh-CN": {
    sectionProfileId: "档案", // 档案sectionID
    profileTitle: "档案",
    education: "毕业院校",
    position: "职业",
    contacts: "联系方式",
    positionValue: "生物信息分析工程师",
    educationValue: "仲恺农业工程学院",
    contactList: [
      {
        label: "谷歌邮箱",
        value: "rochsen1011@gmail.com",
        link: "mailto:rochsen1011@gmail.com",
        iconType: "google",
      },
      {
        label: "QQ邮箱",
        value: "1029143329@qq.com",
        link: "mailto:1029143329@qq.com",
        iconType: "qq",
      },
    ],
    sectionCareerId: "生涯", // 生涯sectionID
    careerSummary: [
      {
        period: "2024.01 - 2026.01",
        title: "生物信息分析工程师 | 广州序源医学科技有限公司",
        description: "负责公司样本数据运维、LIMS系统的前端开发，以及WES项目的维护",
      },
      {
        period: "2022.06 - 2023.12",
        title: "生物信息助理工程师 | 广州序源医学科技有限公司",
        description: "提供实验室数据统计自动化方案，以及WES变异位点检测流程的搭建",
      },
      {
        period: "2021.10 - 2022.05",
        title: "农学学士 | 仲恺农业工程学院",
        description: "毕业论文：基于卷积神经网络的植物叶片病害识别——以马铃薯和玉米为例",
      },
      {
        period: "2021.09 - 2022.05",
        title: "实验室管理实习 | 深圳华大生命科学研究院",
        description:
          "负责实验室日常巡检，组织过研究院入职体检、实验室安全文明评比等活动",
      },
      {
        period: "2020.09 - 2021.06",
        title: "仲华基因科技产业班 | 仲恺农业工程学院",
        description: "交叉学习生物技术课程，如基因工程、细胞工程、生物信息学等",
      },
      {
        period: "2018.09 - 2020.06",
        title: "新闻媒体部助理/部长 | 农业与生物学院团委",
        description:
          "协助提供学院各项活动的新闻素材，如稿件和照片等，以及部门内部培训",
      },
      {
        period: "2018.09 - 2020.06",
        title: "种子科学与工程 | 仲恺农业工程学院",
        description:
          "喜爱高等数学、生物遗传学等课程，并连续两年获取学院二等奖学金",
      },
    ],
    sectionProjectId: "项目", // 项目sectionID
    sectionSkillId: "技术栈", // 技术栈sectionID
    sectionEvaluteId: "个人评价", // 个人评价sectionID
  },
  "en-US": {
    sectionProfileId: "profile", // 档案sectionID
    profileTitle: "Profile",
    education: "EDUCATION",
    position: "POSITION",
    contacts: "CONTACTS",
    positionValue: "Bioinformatics Engineer",
    educationValue: "Zhongkai University of Agriculture and Engineering",
    contactList: [
      {
        label: "GOOGLE EMAIL",
        value: "rochsen1011@gmail.com",
        link: "mailto:rochsen1011@gmail.com",
        iconType: "google",
      },
      {
        label: "QQ EMAIL",
        value: "1029143329@qq.com",
        link: "mailto:1029143329@qq.com",
        iconType: "qq",
      },
    ],
    sectionCareerId: "career", // 生涯sectionID
    careerSummary: [

    ],
    sectionProjectId: "project", // 项目sectionID
    sectionSkillId: "skill", // 技术栈sectionID
    sectionEvaluteId: "evalute", // 个人评价sectionID
  },
};
