import type { projectListItemType } from "../type/project.ts";

/** 项目列表 - 多语言版本 */
export const MyProjectList: Record<string, projectListItemType[]> = {
  "zh-CN": [
    {
      id: "1",
      tech: ["Python3", "Pandas", "Matplotlib", "Seaborn", "Gooey"],
      title: "PGS 送检单位质控报告生成系统",
      role: "项目负责人 & 全栈开发",
      description:
        "自动化生成送检单位的质量控制报告，支持数据校验、图表生成与一键导出。",
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
      tech: ["Django", "DRF", "PostgreSQL", "Redis", "Docker"],
      title: "智能运维工单管理系统",
      role: "后端负责人",
      description:
        "基于 Django Rest Framework 的工单流转与智能分派系统，支持 SLA 监控。",
      achievements: [
        "设计 RESTful API 接口，日均处理 5000+ 请求",
        "引入 Redis 缓存 + Celery 异步任务，接口响应时间降至 120ms",
        "搭建 Docker 容器化部署方案，实现一键交付",
      ],
      background:
        "原工单系统采用 PHP + MySQL 单体架构，性能瓶颈明显，且缺乏自动化分派能力。",
      result:
        "系统重构后，工单平均处理时长从 6 小时缩短至 1.5 小时，SLA 达标率从 72% 提升至 96%。",
    },
  ],
  "en-US": [
    {
      id: "1",
      tech: ["Python3", "Pandas", "Matplotlib", "Seaborn", "Gooey"],
      title: "PGS Quality Control Report Generator",
      role: "Project Lead & Full-Stack Developer",
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
      tech: ["Django", "DRF", "PostgreSQL", "Redis", "Docker"],
      title: "Smart Ops Ticket Management System",
      role: "Backend Lead",
      description:
        "Ticket routing and intelligent assignment system built on Django Rest Framework, with SLA monitoring.",
      achievements: [
        "Designed RESTful APIs handling 5000+ requests per day",
        "Introduced Redis caching + Celery async tasks, reducing API response time to 120ms",
        "Built Docker containerized deployment for one-click delivery",
      ],
      background:
        "Legacy ticket system was a PHP + MySQL monolithic app with performance bottlenecks and lacked automated assignment.",
      result:
        "Average ticket resolution time reduced from 6 hours to 1.5 hours, SLA compliance rate rose from 72% to 96%.",
    },
  ],
};
