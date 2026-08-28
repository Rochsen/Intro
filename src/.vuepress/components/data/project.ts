import type { projectListItemType } from "../type/project.ts";

/** 项目列表 - 多语言版本 */
export const MyProjectList: Record<string, projectListItemType[]> = {
  "zh-CN": [
    {
      id: "1",
      tech: ["Python3", "Pandas", "Matplotlib", "Seaborn", "Gooey"],
      title: "PGS 送检单位质控报告软件",
      role: "项目负责人",
      description:
        "自动化生成送检单位的质量控制报告，支持数据校验、图表生成与一键导出",
      achievements: [
        "从 0 到 1 主导系统架构设计与开发",
        "设计可视化报告模板，支持 20+ 种质检指标图表",
        "封装 Pandas + Matplotlib 数据处理流水线，报告生成效率提升 80%",
        "获国家版权局计算机软件著作权",
      ],
      background:
        "某第三方检测机构每日需处理 200+ 份送检报告，传统人工制作方式耗时且易出错，急需自动化工具提效。",
      result:
        "上线后单份报告制作时间从 45 分钟缩短至 3 分钟，错误率归零，已服务 50+ 家送检单位。",
    },
    {
      id: "2",
      tech: ["Python3", "Snakemake", "VEP", "DeepVariant"],
      title: "全外显子测序分析流程",
      role: "核心参与者",
      description: "基于Snakemake搭建的二代测序分析流程的全外显子测序",
      achievements: ["引入 致病性分级排序", "从繁多的表型文本中提取关注的表型"],
      background: "从0到1开发，扩宽公司产品业务线。",
      result:
        "系统重构后，注释流程时长从 6 小时缩短至 2 小时，检测位点数量相比 GATK 提升至 96%。",
    },
    {
      id: "3",
      tech: ["Java", "SpringBoot", "Vue3", "Typescript", "VbenAdmin", "Antd"],
      title: "常规临床检验信息管理系统",
      role: "前端开发",
      description: "用于管理样本数据，支持样本管理、报告生成与一键导出。",
      achievements: [
        "从 0 到 1 主导系统架构设计与开发",
        "设计可视化报告模板，支持 20+ 种质检指标图表",
        "封装 Pandas + Matplotlib 数据处理流水线，报告生成效率提升 80%",
        "获国家版权局计算机软件著作权",
      ],
      background:
        "某第三方检测机构每日需处理 200+ 份送检报告，传统人工制作方式耗时且易出错，急需自动化工具提效。",
      result:
        "上线后单份报告制作时间从 45 分钟缩短至 3 分钟，错误率归零，已服务 50+ 家送检单位。",
    },
    {
      id: "4",
      tech: ["Java", "SpringBoot", "Vue3", "Typescript", "VbenAdmin", "Antd"],
      title: "生物信息分析系统",
      role: "前端开发",
      description:
        "用于管理NGS测序分析流程，支持样本管理、报告生成与一键导出。",
      achievements: [
        "从 0 到 1 主导系统架构设计与开发",
        "设计可视化报告模板，支持 20+ 种质检指标图表",
        "封装 Pandas + Matplotlib 数据处理流水线，报告生成效率提升 80%",
        "获国家版权局计算机软件著作权",
      ],
      background:
        "某第三方检测机构每日需处理 200+ 份送检报告，传统人工制作方式耗时且易出错，急需自动化工具提效。",
      result:
        "上线后单份报告制作时间从 45 分钟缩短至 3 分钟，错误率归零，已服务 50+ 家送检单位。",
    },
  ],
  "en-US": [
    {
      id: "1",
      tech: ["Python3", "Pandas", "Matplotlib", "Seaborn", "Gooey"],
      title: "PGS Quality Control Report Generator",
      role: "Project Lead",
      description:
        "Automated quality control report generation for testing labs, supporting data validation, charting, and one-click export.",
      achievements: [
        "Led the system architecture design and development from 0 to 1",
        "Designed visual report templates supporting 20+ quality metric charts",
        "Built a Pandas + Matplotlib data processing pipeline, boosting report generation efficiency by 80%",
        "Obtained National Copyright Bureau Computer Software Copyright",
      ],
      background:
        "A third-party testing lab processes 200+ test reports daily; manual creation was time-consuming and error-prone, urgently requiring automation.",
      result:
        "Report generation time reduced from 45 minutes to 3 minutes per report, zero error rate, serving 50+ client labs.",
    },
    {
      id: "2",
      tech: ["Python3", "Snakemake", "VEP", "DeepVariant"],
      title: "Whole Exome Sequencing Analysis Pipeline",
      role: "Core Contributor",
      description:
        "A next-generation sequencing analysis pipeline built with Snakemake for whole exome sequencing.",
      achievements: [
        "Introduced pathogenicity grading and ranking",
        "Extracted phenotypes of interest from numerous phenotype texts",
      ],
      background:
        "Developed from scratch to expand the company's product service lines.",
      result:
        "After system refactoring, annotation pipeline runtime was reduced from 6 hours to 2 hours, and the number of detected variants increased to 96% compared with GATK.",
    },
    {
      id: "3",
      tech: ["Vue3", "Typescript", "Java", "VbenAdmin", "Antd"],
      title: "Routine Clinical Laboratory Information Management System",
      role: "Front-end Developer",
      description:
        "Used for managing sample data, supporting sample management, report generation, and one-click export.",
      achievements: [
        "Led system architecture design and development from 0 to 1",
        "Designed visual report templates supporting 20+ types of quality control indicator charts",
        "Encapsulated Pandas + Matplotlib data processing pipeline, improving report generation efficiency by 80%",
        "Obtained computer software copyright from the National Copyright Administration",
      ],
      background:
        "A third-party testing institution needs to process 200+ inspection reports daily. The traditional manual method is time-consuming and error-prone, urgently requiring automated tools to improve efficiency.",
      result:
        "After launch, the production time per report was reduced from 45 minutes to 3 minutes, error rate dropped to zero, and it has served 50+ inspection units.",
    },
    {
      id: "4",
      tech: ["Vue3", "Typescript", "Java", "VbenAdmin", "Antd"],
      title: "Next General Sequence Analysis System",
      role: "Front-end Developer",
      description:
        "Used for managing sample data, supporting sample management, report generation, and one-click export.",
      achievements: [
        "Led system architecture design and development from 0 to 1",
        "Designed visual report templates supporting 20+ types of quality control indicator charts",
        "Encapsulated Pandas + Matplotlib data processing pipeline, improving report generation efficiency by 80%",
        "Obtained computer software copyright from the National Copyright Administration",
      ],
      background:
        "A third-party testing institution needs to process 200+ inspection reports daily. The traditional manual method is time-consuming and error-prone, urgently requiring automated tools to improve efficiency.",
      result:
        "After launch, the production time per report was reduced from 45 minutes to 3 minutes, error rate dropped to zero, and it has served 50+ inspection units.",
    },
  ],
};
