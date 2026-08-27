import { projectListItemType } from "../type/projectType.ts";

/**项目列表 */
export const MyProjectList: Record<string, projectListItemType[]> = {
  "zh-CN": [
    {
      id: "1",
      tech: ["Python3", "Pandas", "Matplotlib", "Seaborn", "Gooey"],
      title: "PGS送检单位质控报告",
      role: "负责人",
      description: "A simple Django Rest Framework project",
      achievements: [
        "Developed a simple Django Rest Framework project",
        "Used Django Rest Framework to develop a simple REST API",
        "Used Docker to containerize the project",
      ],
    },
  ],
  "en-US": [
    {
      id: "1",
      tech: ["Python3", "Pandas", "Matplotlib", "Seaborn", "Gooey"],
      title: "Django Rest Framework",
      role: "Developer",
      description: "A simple Django Rest Framework project",
      achievements: [
        "Developed a simple Django Rest Framework project",
        "Used Django Rest Framework to develop a simple REST API",
        "Used Docker to containerize the project",
      ],
    },
  ],
};
