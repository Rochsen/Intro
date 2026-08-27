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
        label: "私人邮箱",
        value: "rochsen1011@qq.com",
        link: "mailto:rochsen1011@qq.com",
        iconType: "qq",
      },
    ],
    personality: {
      label: "人格类型",
      value: "INFJ",
      desc: "鉴赏家",
      img: "https://pic1.imgdb.cn/i/0345mMFuVE5qWysT0qr39Z.svg",
    },
    sectionExpId: "经历", // 经历sectionID
    expTitle: "经历",
    experienceList: [
      {
        period: "2024.01 - 2026.01",
        title: "生物信息分析工程师",
        subtitle: "广州序源医学科技",
        detail: "负责公司样本数据运维、LIMS系统的前端开发，以及WES项目的维护",
        type: "work",
      },
      {
        period: "2022.06 - 2023.12",
        title: "生物信息助理工程师",
        subtitle: "广州序源医学科技",
        detail: "提供实验室数据统计自动化方案，以及WES变异位点检测流程的搭建",
        type: "work",
      },
      {
        period: "2022.06",
        title: "农学学士",
        subtitle: "仲恺农业工程学院",
        detail:
          "毕业论文：基于卷积神经网络的植物叶片病害识别——以马铃薯和玉米为例",
        type: "education",
      },
      {
        period: "2021.09 - 2022.05",
        title: "实验室安全管理实习",
        subtitle: "深圳华大研究院",
        detail:
          "负责实验室日常巡检，组织过研究院入职体检、实验室安全文明评比等活动",
        type: "work",
      },
      {
        period: "2020.09 - 2022.06",
        title: "仲华基因科技产业班",
        subtitle: "仲恺农业工程学院",
        detail:
          "与深圳华大基因联合培养，学习基因组学课程，扩充基因工程、细胞工程、生物信息学等知识",
        type: "education",
      },
      {
        period: "2018.09 - 2020.06",
        title: "种子科学与工程",
        subtitle: "仲恺农业工程学院",
        detail: "喜爱高等数学、生物遗传学等课程，并连续两年获取学院二等奖学金",
        type: "education",
      },
    ],
    sectionTechStackId: "技术栈", // 技术栈sectionID
    techTitle: "技术栈",
    techsList: [
      {
        title: "编程技术栈",
        icon: "💻",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        glowColor: "rgba(102, 126, 234, 0.3)",
        items: [
          { name: "Python", desc: "脚本语言" },
          { name: "Gooey", desc: "GUI构建" },
          { name: "FastApi", desc: "Web框架" },
          { name: "Vue3", desc: "渐进式框架" },
          { name: "Typescript", desc: "类型安全" },
        ],
      },
      {
        title: "生信技术栈",
        icon: "🧬",
        gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        glowColor: "rgba(56, 239, 125, 0.3)",
        items: [
          { name: "R", desc: "统计分析" },
          { name: "ACMG", desc: "变异解读" },
          { name: "VEP", desc: "注释工具" },
          { name: "ANNOVAR", desc: "注释流程" },
          { name: "GATK", desc: "变异检测" },
        ],
      },
      {
        title: "生信数据库",
        icon: "🗄️",
        gradient: "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
        glowColor: "rgba(238, 9, 121, 0.3)",
        items: [
          { name: "OMIM", desc: "遗传疾病" },
          { name: "Gencode", desc: "基因注释" },
          { name: "PUBMED", desc: "文献检索" },
          { name: "ClinVar", desc: "临床变异" },
          { name: "UCSC", desc: "基因组浏览" },
        ],
      },
    ],
    sectionProjectId: "项目", // 项目sectionID
    projectTitle: "项目",
    projectList: [],
    sectionInterestsId: "兴趣", // 个人评价sectionID
    interestsTitle: "兴趣",
    interestList: [],
    sectionWelcomeId: "联系", // 结尾欢迎
    welcomeTitle: "欢迎您与我联系",
    welcomeDescription: "",
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
        label: "PERSONAL EMAIL",
        value: "rochsen1011@qq.com",
        link: "mailto:1029143329@qq.com",
        iconType: "qq",
      },
    ],
    personality: {
      label: "PERSIONALITY",
      value: "INFJ",
      desc: "Connoisseur",
      img: "https://pic1.imgdb.cn/i/0345mMFuVE5qWysT0qr39Z.svg",
    },
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
        period: "Jun. 2022",
        title: "Bachelor of Agriculture",
        subtitle: "Zhongkai University of Agriculture and Engineering",
        detail:
          "Thesis: Plant Leaf Disease Recognition Based on Convolutional Neural Networks — A Case Study of Potato and Maize",
        type: "education",
      },
      {
        period: "Sep. 2021 - May. 2022",
        title: "Laboratory Management Intern",
        subtitle: "BGI Institute of Life Sciences, Shenzhen",
        detail:
          "Responsible for daily laboratory inspections; organized onboarding health checks and laboratory safety competitions",
        type: "work",
      },
      {
        period: "Sep. 2020 - Jun. 2022",
        title: "Zhonghua Gene Technology Industry Program",
        subtitle: "Zhongkai University of Agriculture and Engineering",
        detail:
          "Joint training with BGI Shenzhen to learn genomics courses and expand knowledge on genetic engineering, cell engineering, bioinformatics, etc.",
        type: "education",
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
    sectionTechStackId: "techs", // 技术栈sectionID
    techTitle: "TechStack",
    techsList: [
      {
        title: "Coding Tech",
        icon: "💻",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        glowColor: "rgba(102, 126, 234, 0.3)",
        items: [
          { name: "Python", desc: "Scripting Language" },
          { name: "Gooey", desc: "GUI Building" },
          { name: "FastApi", desc: "Web Framework" },
          { name: "Vue3", desc: "Progressive Framework" },
          { name: "Typescript", desc: "Type Safety" },
        ],
      },
      {
        title: "Bioinfo Tech",
        icon: "🧬",
        gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        glowColor: "rgba(56, 239, 125, 0.3)",
        items: [
          { name: "R", desc: "Statistical Analysis" },
          { name: "ACMG", desc: "Variant Interpretation" },
          { name: "VEP", desc: "Annotation Tool" },
          { name: "ANNOVAR", desc: "Annotation Pipeline" },
          { name: "GATK", desc: "Variant Calling" },
        ],
      },
      {
        title: "Bioinfo Databases",
        icon: "🗄️",
        gradient: "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
        glowColor: "rgba(238, 9, 121, 0.3)",
        items: [
          { name: "OMIM", desc: "Genetic Diseases" },
          { name: "Gencode", desc: "Gene Annotation" },
          { name: "PUBMED", desc: "Literature Search" },
          { name: "ClinVar", desc: "Clinical Variants" },
          { name: "UCSC", desc: "Genome Browser" },
        ],
      },
    ],
    sectionProjectId: "projects", // 项目sectionID
    projectTitle: "Project",
    projectList: [],
    sectionInterestsId: "interests", // 兴趣sectionID
    interestsTitle: "Interests",
    interestList: [],
    sectionWelcomeId: "welcome", // 结尾欢迎
    welcomeTitle: "Welcome",
    welcomeDescription: "",
  },
};
