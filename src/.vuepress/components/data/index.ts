import { I18nLocale } from "../type/index.ts";
import { MyContacts } from "./contact.ts";
import { MyPersonality } from "./personality.ts";
import { MyExperience } from "./experence.ts";
import { MyTechsList } from "./tech.ts";
import { MyProjectList } from "./project.ts";
import { MyInterests } from "./interest.ts";

/** 语言包 */
export const Myi18n: Record<string, I18nLocale> = {
  "zh-CN": {
    sectionProfileId: "档案", // 档案sectionID
    profileTitle: "档案",
    education: "毕业院校",
    position: "职业",
    contacts: "联系方式",
    positionValue: "生物信息分析工程师",
    educationValue: "仲恺农业工程学院",
    contactList: MyContacts["zh-CN"], // 联系方式数组
    personality: MyPersonality["zh-CN"], // 16人格类型
    sectionExpId: "经历", // 经历sectionID
    expTitle: "经历",
    experienceList: MyExperience["zh-CN"], // 经历项数组
    sectionTechStackId: "技术栈", // 技术栈sectionID
    techTitle: "技术栈",
    techsList: MyTechsList["zh-CN"],
    sectionProjectId: "项目", // 项目sectionID
    projectTitle: "项目",
    projectList: MyProjectList["zh-CN"], // 项目项数组
    sectionInterestsId: "兴趣", // 个人评价sectionID
    interestsTitle: "研究兴趣 / 个人学习方向",
    interestList: MyInterests["zh-CN"],
    sectionWelcomeId: "联系", // 结尾欢迎
    welcomeTitle: "欢迎您与我联系",
  },
  "en-US": {
    sectionProfileId: "profile", // 档案sectionID
    profileTitle: "Profile",
    education: "EDUCATION",
    position: "POSITION",
    contacts: "CONTACTS",
    positionValue: "Bioinformatics Engineer",
    educationValue: "Zhongkai University of Agriculture and Engineering",
    contactList: MyContacts["en-US"],
    personality: MyPersonality["en-US"],
    sectionExpId: "experience", // 经历sectionID
    expTitle: "Experience",
    experienceList: MyExperience["en-US"],
    sectionTechStackId: "tech", // 技术栈sectionID
    techTitle: "TechStack",
    techsList: MyTechsList["en-US"],
    sectionProjectId: "project", // 项目sectionID
    projectTitle: "Project",
    projectList: MyProjectList["en-US"],
    sectionInterestsId: "interest", // 兴趣sectionID
    interestsTitle: "Research Interest / What I want to learn",
    interestList: MyInterests["en-US"],
    sectionWelcomeId: "welcome", // 结尾欢迎
    welcomeTitle: "Welcome",
  },
};
