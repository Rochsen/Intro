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
    sectionExpId: "经历", // 经历sectionID
    expTitle: "经历",
    experienceList: [
      {
        period: "2024.01 - 2026.01",
        title: "生物信息分析工程师",
        subtitle: "广州序源医学科技有限公司",
        detail: "负责公司样本数据运维、LIMS系统的前端开发，以及WES项目的维护",
        type: "work",
      },
      {
        period: "2022.06 - 2023.12",
        title: "生物信息助理工程师",
        subtitle: "广州序源医学科技有限公司",
        detail: "提供实验室数据统计自动化方案，以及WES变异位点检测流程的搭建",
        type: "work",
      },
      {
        period: "2021.10 - 2022.05",
        title: "农学学士",
        subtitle: "仲恺农业工程学院",
        detail:
          "毕业论文：基于卷积神经网络的植物叶片病害识别——以马铃薯和玉米为例",
        type: "education",
      },
      {
        period: "2021.09 - 2022.05",
        title: "实验室管理实习",
        subtitle: "深圳华大生命科学研究院",
        detail:
          "负责实验室日常巡检，组织过研究院入职体检、实验室安全文明评比等活动",
        type: "work",
      },
      {
        period: "2020.09 - 2021.06",
        title: "仲华基因科技产业班",
        subtitle: "仲恺农业工程学院",
        detail: "交叉学习生物技术课程，如基因工程、细胞工程、生物信息学等",
        type: "education",
      },
      {
        period: "2018.09 - 2020.06",
        title: "新闻媒体部助理/部长",
        subtitle: "农业与生物学院团委",
        detail:
          "协助提供学院各项活动的新闻素材，如稿件和照片等，以及部门内部培训",
        type: "work",
      },
      {
        period: "2018.09 - 2020.06",
        title: "种子科学与工程",
        subtitle: "仲恺农业工程学院",
        detail: "喜爱高等数学、生物遗传学等课程，并连续两年获取学院二等奖学金",
        type: "education",
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
    sectionExpId: "experience", // 经历sectionID
    expTitle: "Experience",
    experienceList: [
      {
        period: "Jan. 2024 - Jan. 2026",
        title: "Bioinformatics Engineer",
        subtitle: "Guangzhou Xuyuan Medical Technology Co., Ltd.",
        detail:
          "Responsible for sample data operations, front-end development of the LIMS system, and WES project maintenance",
        type: "work",
      },
      {
        period: "Jun. 2022 - Dec. 2023",
        title: "Junior Bioinformatics Engineer",
        subtitle: "Guangzhou Xuyuan Medical Technology Co., Ltd.",
        detail:
          "Provided laboratory data statistics automation solutions and built the WES variant detection pipeline",
        type: "work",
      },
      {
        period: "Oct. 2021 - May 2022",
        title: "Bachelor of Agriculture",
        subtitle: "Zhongkai University of Agriculture and Engineering",
        detail:
          "Thesis: Plant Leaf Disease Recognition Based on Convolutional Neural Networks — A Case Study of Potato and Maize",
        type: "education",
      },
      {
        period: "Sep. 2021 - May 2022",
        title: "Laboratory Management Intern",
        subtitle: "BGI Institute of Life Sciences, Shenzhen",
        detail:
          "Responsible for daily laboratory inspections; organized onboarding health checks and laboratory safety competitions",
        type: "work",
      },
      {
        period: "Sep. 2020 - Jun. 2021",
        title: "Zhonghua Gene Technology Industry Program",
        subtitle: "Zhongkai University of Agriculture and Engineering",
        detail:
          "Interdisciplinary study of biotechnology courses including genetic engineering, cell engineering, and bioinformatics",
        type: "education",
      },
      {
        period: "Sep. 2018 - Jun. 2020",
        title: "Assistant / Head of News & Media Department",
        subtitle:
          "Youth League Committee, College of Agriculture and Life Sciences",
        detail:
          "Assisted in providing news materials for college events, including manuscripts and photographs, as well as internal department training",
        type: "work",
      },
      {
        period: "Sep. 2018 - Jun. 2020",
        title: "Seed Science and Engineering",
        subtitle: "Zhongkai University of Agriculture and Engineering",
        detail:
          "Enrolled in advanced mathematics and biological genetics courses; received the college second-class scholarship for two consecutive years",
        type: "education",
      },
    ],
    sectionProjectId: "project", // 项目sectionID
    sectionSkillId: "skill", // 技术栈sectionID
    sectionEvaluteId: "evalute", // 个人评价sectionID
  },
};
