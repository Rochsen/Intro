import { I18nLocale } from "../type/index.ts";
import { MyContacts } from "./contactData.ts";
import { MyPersonality } from "./personalityData.ts";
import { MyExperience } from "./experenceData.ts";
import { MyTechsList } from "./techData.ts";
import { MyProjectList } from "./projectData.ts";

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
    contactList: MyContacts["zh-CN"],
    personality: MyPersonality["zh-CN"],
    sectionExpId: "经历", // 经历sectionID
    expTitle: "经历",
    experienceList: MyExperience["zh-CN"],
    sectionTechStackId: "技术栈", // 技术栈sectionID
    techTitle: "技术栈",
    techsList: MyTechsList["zh-CN"],
    sectionProjectId: "项目", // 项目sectionID
    projectTitle: "项目",
    projectList: MyProjectList["zh-CN"],
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
    contactList: MyContacts["en-US"],
    personality: MyPersonality["en-US"],
    sectionExpId: "experience", // 经历sectionID
    expTitle: "Experience",
    experienceList: MyExperience["en-US"],
    sectionTechStackId: "techs", // 技术栈sectionID
    techTitle: "TechStack",
    techsList: MyTechsList["en-US"],
    sectionProjectId: "projects", // 项目sectionID
    projectTitle: "Project",
    projectList: MyProjectList["zh-CN"],
    sectionInterestsId: "interests", // 兴趣sectionID
    interestsTitle: "Interests",
    interestList: [],
    sectionWelcomeId: "welcome", // 结尾欢迎
    welcomeTitle: "Welcome",
    welcomeDescription: "",
  },
};
