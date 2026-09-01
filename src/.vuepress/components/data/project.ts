import type { projectListItemType } from "../type/project.ts";

/** 项目列表 - 多语言版本 */
export const MyProjectList: Record<string, projectListItemType[]> = {
  "zh-CN": [
    {
      id: "1",
      tech: ["Python3", "Pandas", "Matplotlib", "Seaborn", "Gooey", "docx"],
      title: "PGS 送检单位质控报告软件",
      role: "项目负责人",
      description:
        "自动化生成送检单位的质量控制报告，支持数据校验、图表生成与一键导出",
      achievements: [
        "从 0 到 1 主导系统架构设计与开发",
        "设计可视化报告模板，支持 20+ 种质检指标图表",
        "封装 Pandas + Matplotlib 数据处理流水线，报告生成效率提升 80%",
        "获国家版权局计算机软件著作权（2024年9月）",
      ],
      background:
        "传统人工制作方式耗时且易出错，此前流程不满足自定义时间、单位的统计/绘图需求，不能及时响应紧急安排的需求。需要将流程模块化、软件化。",
      challenges: [
        "不同单位/月份的指标统计与绘图样式未统一 → 与实验室沟通，制定指标的数据统计和绘图样式",
        "报告制作工作量大、难以批量产出 → 由实验室提供报告样式用于制作报告模板，构建自动化程序完成批量报告产出",
        "同一单位不同月份名称不一致导致识别失败 → 将送检单位识别从单位代码表改为用总表识别",
        "未加r的重做样本导致检测数据重复 → 合并流程增加样本去重步骤",
      ],
      highlights: [
        "以'三个交付阶段'与实验室协商推进，逐步完成流程构建",
        "形成可持续的月度交付机制",
        "从既有流程中提炼通用独立模块形成软件，并发表软件著作权",
        "实现统计口径自定义与批量交付",
      ],
      result:
        "2023年7月起每月8号交付质控报告，当年交付5次。2024年整理为软著，9月获证书。2025年2-12月逐月交付，9月质控报告2.0更新。",
    },
    {
      id: "2",
      tech: [
        "Python3",
        "Snakemake",
        "VEP",
        "GATK",
        "DeepVariant",
        "Sambamba",
        "samtools",
      ],
      title: "全外显子测序分析流程",
      role: "分析端",
      description: "基于Snakemake搭建的二代测序分析流程，覆盖WES全流程",
      achievements: [
        "独立走通从双端序列输入到变异注释输出的完整WES流程链路",
        "引入VEP替换ANNOVAR，建立数据库等价映射+一致性/致病性双重验证方法",
        "注释环节提速50-60%，实现'上午分析、下午出结果'",
        "WES流程从shell脚本集合升级为Snakemake标准化流水线",
        "获国家版权局计算机软件著作权（2024年11月）",
      ],
      background:
        "初期搭建流程时，依赖网络参考流程，存在使用来历不明数据库、流程搭建后未及时验证准确性的问题。需要从0到1开发，扩宽公司产品业务线。",
      challenges: [
        "注释数据库老旧（avsnp147 2016年、clinvar_20170905）→ 通过ANNOVAR官网核对最新版本，完成avsnp150、clinvar_20221231、cosmic70的注释测试与替换",
        "本地注释流程耗时过长（约6小时，占总分析时长50-60%）→ 重构为多进程注释，降至约2小时",
        "标记重复占用过多CPU（GATK Picard 40min）→ 对比Sambamba（4min），标记后位点一致性99%，采用Sambamba平替",
        "低质量致病位点Call不出来 → 查阅GATK文档定位参数，评估加参前后位点数量与补集位点致病性，确认加参有效",
        "ANNOVAR不保留0/0基因型位点 → VEP + 自建注释程序平替refGene/dbnsfp33a/人群频率库",
      ],
      highlights: [
        "每项优化均以'对比实验+一致性/致病性验证'为依据，方法可复用",
        "位点排序结合位点功能、Clinvar致病性、人群频率制定优先级排序规则",
        "建立'数据库等价映射+一致性/致病性双重验证'的注释引擎替换方法",
        "以ACMG五分类致病位点评级数量作为Call变异软件的选型依据",
      ],
      result:
        "完成WES流程雏形，2023年完成一轮系统性新增与优化。2024年评估DeepVariant可替代GATK，VEP正式替代ANNOVAR。2025年完成Snakemake化重构与204服务器迁移，支持hg19/hg38双版本。",
    },
    {
      id: "3",
      tech: ["Vue3", "Antd", "TypeScript", "VbenAdmin", "VitePress"],
      title: "常规临床检验信息管理系统(CIP)",
      role: "前端开发",
      description: "临检系统前端开发，支撑驻点版、内部版、商业版及宣传网站",
      achievements: [
        "2024年10月开始接触前端开发，半年内承担系统半数以上需求",
        "一人支撑多版本并行的前端迭代",
        "承担说明文档、软著材料、开源材料等全套配套产出",
        "2025年4月生产版本更新至V1.7.0",
      ],
      background:
        "公司需要为驻点实验室建设CIP系统，涵盖样本管理、报告生成、仪器管理等功能。需要支持不同客户版本的并行开发。",
      challenges: [
        "驻点版：新增仪器管理、送检/归档任务管理添加仪器/外送单位/项目状态查询项",
        "序源版：字典管理/字典数据页面构建与菜单嵌套问题解决",
        "商业版：开源化整理——去掉无用注释保留帮助性注释、编写前端部署README",
        "宣传网站：基于VitePress搭建产品版本页面、使用文档、授权管理体系",
      ],
      highlights: [
        "一人支撑多版本并行的前端迭代",
        "承担说明文档、软著材料、开源材料等全套配套产出",
        "CIP说明文档持续适配生产版本（V1.2.0→V1.9.x，增加问题汇总QA模块）",
        "软著申请材料，系统使用文档编写",
      ],
      result:
        "2024年底完成124个需求中的53个。2025年全程支撑驻点版、序源版、商业版、宣传网站的并行迭代与配套产出。10月CIP相关前端基本完结。",
    },
    {
      id: "4",
      tech: ["Vue3", "Element Plus", "TypeScript", "若依(RuoYi)"],
      title: "基于审核机制的文件管理系统(FMS)",
      role: "前端开发",
      description: "文件管理系统前端开发，覆盖文件管理与权限/审批体系",
      achievements: [
        "完整实现'文件+权限+审批'业务闭环的前端",
        "细节体验打磨充分：防抖、加载态、权限提示、移动端适配",
        "独立模块拆分，svg引用改js降低代码量",
        "编写teedoc说明文档与软著材料",
      ],
      background:
        "公司需要建设基审核机制的文件管理系统，涵盖文件资源管理、权限管理、审批流程等功能。需要支持复杂的权限继承与审批闭环。",
      challenges: [
        "文件资源管理：面包屑跳转（含路径清理、悬停效果）、右键菜单逐一完成接口适配",
        "权限与审批体系：权限管理（主体增删与联动、权限继承tag）、申请权限、审批管理",
        "工程化与文档：独立模块拆分、svg引用改js降低代码量",
        "持续修复边界bug（表头隐藏、页面切换不加载、新建文件夹位置异常等）",
      ],
      highlights: [
        "完整实现'文件+权限+审批'业务闭环的前端",
        "细节体验打磨充分：防抖、加载态、权限提示、移动端适配、日期降序默认排序",
        "实现批量删除与批量下载、勾选汇总栏、shift批量勾选、双击预览",
        "全局搜索（null信息卡死修复、防抖、加载动画、失焦/回车触发）",
      ],
      result:
        "8月基本完成非权限相关功能开发，9月文件管理系统前端部分基本完成。实现右键菜单、批量操作、预览、打印、全局搜索等功能。",
    },
    {
      id: "5",
      tech: ["Vue3", "Element Plus", "TypeScript", "teedoc"],
      title: "二代测序分析平台系统(NAP)",
      role: "前端开发",
      description:
        "任务投递与样本管理系统前端，覆盖引物标签、样本信息、参数管理等模块",
      achievements: [
        "完成引物标签、样本信息、参数管理、任务投递、任务管理、数据统计等模块",
        "封装表格下方分页组件、搜索表单组件等通用组件",
        "初始化部署teedoc说明文档",
        "2025年12月，NAP前端个人部分开发任务基本完成",
      ],
      background:
        "部门为公司做转型探索，以二代测序分析平台为跳板，支持PGS、NIPT、三代PGT、WES等多种分析任务的投递与管理。",
      challenges: [
        "引物标签管理：csv上传、文件与数据同接口提交、html自定义错误消息",
        "样本信息管理：用户上传/测序拆分双数据来源与芯片号下拉创建、多级表头",
        "任务投递：CMA上传渲染、NGS未拆分数据渲染、三代PGT/WES投递流程",
        "子任务/总任务管理：分析参数外显、详情外显、时间信息浮动展示",
      ],
      highlights: [
        "封装表格下方分页组件、搜索表单组件（小屏适配、label-width单独设置）",
        "表格高度自适应等通用组件供各模块复用",
        "芯片/组别联动勾选、'按样本默认'参数选项",
        "防重复点击加载机制",
      ],
      result:
        "11月除任务投递外需求基本完成，12月NAP前端个人部分基本完成。实现芯片/组别联动勾选、按样本默认参数选项等功能。",
    },
    {
      id: "6",
      tech: ["Python3", "bat脚本", "GUI开发", "SOP文档"],
      title: "临床检验电脑数据清除软件",
      role: "项目负责人",
      description: "覆盖微信聊天文件、电脑连接的分析仪器的数据清除",
      achievements: [
        "面向不同的电脑设计个性化的数据清理程序",
        "前往驻点实验室提供技术支持与文件删除调研",
        "优化软件GUI布局与搜索性能",
        "编写SOP文档并跟进实验室的数据删除进度",
      ],
      background:
        "临检实验室仪器与电脑的数据需按规范清空，涉及多种仪器、软件与数据类型。不同对象数据形态各异，需要定制化解决方案。",
      challenges: [
        "不同对象数据形态各异 → 分别实现：微信聊天文件删除功能；精子分析仪器数据库样本相关数据清空并制作空拷贝",
        "编写bat脚本删除精子质量分析系统数据（实验室测试通过）",
        "驻点mc100仪器空拷贝获取推进（其余软件开发与测试均已完成）",
        "需要现场情况调研 → 前往驻点实验室提供技术支持与删除调研",
      ],
      highlights: [
        "分别实现微信聊天文件删除、精子分析仪器数据库清空、bat脚本删除等功能",
        "前往驻点实验室提供技术支持与删除调研",
        "优化软件GUI布局与搜索性能",
        "编写SOP文档并跟进实验室的数据删除进度",
      ],
      result: "2025年2-3月完成软件与SOP修改并交付，回访未收到实验员问题反馈。",
    },
    {
      id: "7",
      tech: ["Python3", "Shell", "自动化脚本", "aria2"],
      title: "三代测序数据下载处理自动化",
      role: "项目负责人",
      description: "三代测序样本数据下载与整理的自动化处理",
      achievements: [
        "测试多渠道下载选型，确定'火山云自动化+非火山云人工下载'组合方案",
        "修复半全角括号、带横杠样本名称、全中文样本编号等边界情况",
        "形成从样本投递到流程前置文件sample.json的标准化生产链路",
        "脚本全年持续维护（7月、10月均有迭代）",
      ],
      background:
        "三代测序（PGT）样本数据来源分散（贝纳基因火山云、百度网盘、人工投递等），下载与整理的重复人工操作多，需要自动化处理。",
      challenges: [
        "多渠道下载选型：测试201服务器aria2下载、贝纳基因火山云自动下载和处理模块、百度网盘开放平台",
        "边界情况持续修补：修复半全角括号样本路径重命名失败问题",
        "适配带横杠的样本名称字符；新增全中文样本编号转拼音首字母大写方法",
        "修复md5文件查找方法",
      ],
      highlights: [
        "确定'火山云自动化+非火山云人工下载'的组合方案",
        "形成从样本投递到sample.json的标准化生产链路",
        "脚本全年持续维护（7月、10月均有迭代）",
        "修复多种边界情况，提高脚本健壮性",
      ],
      result:
        "2025年5月完成TGS从样本下载到sample.json的生产过程，脚本全年持续维护。",
    },
    {
      id: "8",
      tech: ["Python3", "统计分析", "数据可视化"],
      title: "业务数据统计软件",
      role: "项目负责人",
      description: "实验室样本账单数据统计与条目生成",
      achievements: [
        "实现基于销售和送检单位的账单汇总",
        "从已有模块中选择统计模块，减少重复开发",
        "封装远程文件传输逻辑，支持本地执行操作",
      ],
      background: "每月1号需要提供上月的样本数据，用于公司收账。",
      challenges: [
        "将总表和GIP审核表的数据合并统计",
        "由自编远程传输器完成'执行'和'服务器传输'操作",
        "通过运行参数文件（时间、单位、销售数据）实现自定义指定统计",
      ],
      highlights: [
        "从既有流程中提炼通用独立模块形成软件",
        "实现统计口径自定义与批量交付",
        "远程传输器支持'执行+传输'操作",
        "V1.0.1加入NA数量对比，方便实验部检查NA数",
      ],
      result: "销售业务统计的办公自动化，操作简单上手，辅助财务核对账单。",
    },
    {
      id: "9",
      tech: ["Python3", "统计分析", "数据可视化", "爬虫"],
      title: "生信云平台调研",
      role: "数据挖掘",
      description: "获取各家生信云的后台数据json，整理成调研报告",
      achievements: [
        "从各家生信云的后台数据，找出最受欢迎的工具模块",
        "探索生信云的付费逻辑",
      ],
      background: "部门为公司做转型探索，期望了解当前生信云平台的使用市场",
      challenges: [
        "各家数据格式不统一，评测的维度各有不同",
        "部分云平台比较冷门，数据较为惨淡，不足以支撑调研结论",
      ],
      highlights: [
        "利用AI辅助，提供统一的格式范式，让AI整理",
        "筛选和剔除无价值数据，利用AI合并已调查平台的数据，并生产调研报告",
      ],
      result:
        "基本完成云平台后台数据爬虫的工作，并给出个人对公司云平台产品搭建的建议",
    },
  ],
  "en-US": [
    {
      id: "1",
      tech: ["Python3", "Pandas", "Matplotlib", "Seaborn", "Gooey", "docx"],
      title: "PGS Quality Control Report Software for Submitting Institutions",
      role: "Project Lead",
      description:
        "Automated generation of quality control reports for submitting institutions, supporting data validation, chart generation, and one-click export",
      achievements: [
        "Led system architecture design and development from scratch",
        "Designed visual report templates supporting 20+ types of quality indicator charts",
        "Packaged Pandas + Matplotlib data processing pipeline, improving report generation efficiency by 80%",
        "Received National Copyright Bureau Computer Software Copyright (September 2024)",
      ],
      background:
        "Traditional manual production was time-consuming and error-prone, and the previous process could not meet custom time/unit statistical and plotting needs, nor respond promptly to urgent scheduling requirements. There was a need to modularize and software-ize the process.",
      challenges: [
        "Indicator statistics and chart styles for different units/months were not unified → Coordinated with the lab to define data statistics and chart styles for indicators",
        "Report production workload was heavy and batch output difficult → Lab provided report templates; automated program built for batch report generation",
        "Inconsistent naming of the same unit across months caused recognition failures → Changed unit identification from unit code table to using the master table",
        "Repeated test data due to samples without 'r' prefix → Added sample deduplication step in the merging process",
      ],
      highlights: [
        "Used a 'three-delivery-stage' approach to negotiate with the lab, progressively building the workflow",
        "Established a sustainable monthly delivery mechanism",
        "Extracted general independent modules from the existing process to form software, and published software copyright",
        "Achieved customizable statistical scopes and batch delivery",
      ],
      result:
        "Monthly quality control reports delivered on the 8th since July 2023, with 5 deliveries that year. Compiled into software copyright in 2024, certificate received in September. Monthly deliveries from February to December 2025, with Quality Control Report 2.0 update in September.",
    },
    {
      id: "2",
      tech: [
        "Python3",
        "Snakemake",
        "VEP",
        "GATK",
        "DeepVariant",
        "Sambamba",
        "samtools",
      ],
      title: "Whole Exome Sequencing (WES) Analysis Pipeline",
      role: "Analytics Developer",
      description:
        "NGS analysis pipeline built on Snakemake, covering the full WES workflow",
      achievements: [
        "Independently implemented the complete WES pipeline from paired-end sequence input to variant annotation output",
        "Replaced ANNOVAR with VEP, establishing a database equivalence mapping + consistency/pathogenicity dual validation method",
        "Achieved 50-60% speedup in annotation, enabling 'analysis in the morning, results in the afternoon'",
        "Upgraded WES pipeline from shell scripts to a standardized Snakemake pipeline",
        "Received National Copyright Bureau Computer Software Copyright (November 2024)",
      ],
      background:
        "Initially, the pipeline relied on online reference workflows, with issues such as using databases of unknown origin and lack of timely validation after building. Needed to develop from scratch to expand the company's product line.",
      challenges: [
        "Annotation databases were outdated (avsnp147 2016, clinvar_20170905) → Verified latest versions via ANNOVAR official site, completed annotation testing and replacement with avsnp150, clinvar_20221231, cosmic70",
        "Local annotation was too slow (~6 hours, 50-60% of total analysis time) → Refactored to multi‑process annotation, reduced to ~2 hours",
        "MarkDuplicates consumed excessive CPU (GATK Picard ~40min) → Compared with Sambamba (~4min), achieved 99% concordance after marking; adopted Sambamba as replacement",
        "Low-quality pathogenic variants not called → Consulted GATK documentation to tune parameters, evaluated variant counts and pathogenicity of complementary sets, confirmed parameter adjustment effective",
        "ANNOVAR does not retain 0/0 genotype sites → Replaced refGene/dbnsfp33a/population frequency databases with VEP + custom annotation program",
      ],
      highlights: [
        "Every optimization was validated by comparative experiments + consistency/pathogenicity validation, with reusable methodology",
        "Established priority ranking rules for variants combining functional impact, Clinvar pathogenicity, and population frequency",
        "Built a 'database equivalence mapping + consistency/pathogenicity dual validation' approach for annotation engine replacement",
        "Used the number of ACMG five‑class pathogenic variants as the selection criterion for variant callers",
      ],
      result:
        "Completed the initial WES pipeline, with a systematic round of additions and optimizations in 2023. In 2024, evaluated DeepVariant as a GATK alternative, and VEP officially replaced ANNOVAR. In 2025, completed Snakemake refactoring and migration to server 204, supporting both hg19 and hg38 builds.",
    },
    {
      id: "3",
      tech: ["Vue3", "Antd", "TypeScript", "VbenAdmin", "VitePress"],
      title:
        "Clinical Information Platform (CIP) for Routine Laboratory Testing",
      role: "Frontend Developer",
      description:
        "Frontend development for the clinical laboratory system, supporting on‑site, internal, commercial versions, and promotional website",
      achievements: [
        "Started frontend development in October 2024, and within half a year handled over half of the system requirements",
        "Single-handedly supported parallel frontend iterations of multiple versions",
        "Produced comprehensive supporting documentation, software copyright materials, open‑source materials, etc.",
        "Production version updated to V1.7.0 in April 2025",
      ],
      background:
        "The company needed to build a CIP system for on‑site laboratories, covering sample management, report generation, instrument management, etc. It needed to support parallel development for different customer versions.",
      challenges: [
        "On‑site version: Added instrument management, submission/archiving task management with additional query filters for instruments, external units, and project status",
        "Xuyuan version: Built dictionary management and dictionary data pages, resolved menu nesting issues",
        "Commercial version: Open‑source preparation — removed unnecessary comments, retained helpful comments, wrote frontend deployment README",
        "Promotional website: Built product version pages, user documentation, and authorization management system using VitePress",
      ],
      highlights: [
        "Single-handedly supported parallel frontend iterations across multiple versions",
        "Produced full sets of documentation, copyright application materials, and open‑source materials",
        "CIP documentation continuously adapted to production versions (V1.2.0 → V1.9.x, adding a Q&A module)",
        "Wrote copyright application materials and system user documentation",
      ],
      result:
        "Completed 53 out of 124 requirements by the end of 2024. Throughout 2025, supported parallel iterations and associated deliverables for on‑site, Xuyuan, commercial, and promotional versions. Frontend work for CIP was essentially completed by October.",
    },
    {
      id: "4",
      tech: ["Vue3", "Element Plus", "TypeScript", "RuoYi"],
      title: "File Management System (FMS) with Approval Workflow",
      role: "Frontend Developer",
      description:
        "Frontend development for a file management system covering file management, permissions, and approval workflows",
      achievements: [
        "Fully implemented the frontend for the complete 'file + permission + approval' business loop",
        "Polished user experience details: debouncing, loading states, permission prompts, mobile adaptation",
        "Modularized components, replaced SVG imports with JS to reduce code size",
        "Authored teedoc documentation and copyright application materials",
      ],
      background:
        "The company needed a file management system with an approval mechanism, covering file resources, permission management, and approval processes. It needed to support complex permission inheritance and a closed‑loop approval workflow.",
      challenges: [
        "File resource management: breadcrumb navigation (including path cleaning, hover effects), context menu with full interface adaptation",
        "Permissions and approval system: permission management (subject CRUD, permission inheritance tags), permission requests, approval management",
        "Engineering and documentation: modularized components, replaced SVG references with JS to reduce code size",
        "Continuous bug fixes (table header hiding, page switching not loading, new folder positioning errors, etc.)",
      ],
      highlights: [
        "Fully implemented the frontend for the 'file + permission + approval' business loop",
        "Polished UX details: debouncing, loading states, permission prompts, mobile adaptation, default descending date sorting",
        "Implemented batch delete and batch download, selection summary bar, shift+click batch selection, double‑click preview",
        "Global search (fixed null info crash, added debouncing, loading animation, blur/enter triggers)",
      ],
      result:
        "Non‑permission features were largely completed by August; frontend for FMS was basically finished by September. Implemented context menus, batch operations, preview, printing, global search, etc.",
    },
    {
      id: "5",
      tech: ["Vue3", "Element Plus", "TypeScript", "teedoc"],
      title: "Next‑Generation Sequencing Analysis Platform (NAP)",
      role: "Frontend Developer",
      description:
        "Frontend for the job submission and sample management system, covering primer labels, sample information, parameter management, etc.",
      achievements: [
        "Completed modules for primer labels, sample information, parameter management, job submission, job management, data statistics, etc.",
        "Encapsulated common components: table pagination, search forms, etc.",
        "Initialized teedoc documentation deployment",
        "By December 2025, frontend tasks for the NAP were essentially completed",
      ],
      background:
        "The department was exploring business transformation, using the NGS analysis platform as a springboard to support various analysis tasks including PGS, NIPT, PGT for trios, WES, etc.",
      challenges: [
        "Primer label management: CSV upload, single‑interface file+data submission, custom HTML error messages",
        "Sample information management: dual data sources (user upload / sequencing split), chip dropdown creation, multi‑level table headers",
        "Job submission: CMA upload and rendering, NGS un‑split data rendering, trios PGT/WES submission workflows",
        "Sub‑task / main task management: exposed analysis parameters, exposed details, floating time information display",
      ],
      highlights: [
        "Encapsulated table pagination and search form components (small‑screen adaptation, label‑width customization)",
        "Auto‑height table components reusable across modules",
        "Chip/group linked selection, 'default by sample' parameter option",
        "Anti‑duplicate click loading mechanism",
      ],
      result:
        "By November, most requirements except job submission were completed; by December, frontend work for NAP was essentially finished. Implemented chip/group linked selection, default‑by‑sample parameter options, etc.",
    },
    {
      id: "6",
      tech: [
        "Python3",
        "batch scripts",
        "GUI development",
        "SOP documentation",
      ],
      title: "Clinical Laboratory Computer Data Cleaning Software",
      role: "Project Lead",
      description:
        "Covers clearing of WeChat chat files and data from connected laboratory analyzers",
      achievements: [
        "Designed customized data cleaning programs for different computers",
        "Visited on‑site laboratories to provide technical support and conduct deletion surveys",
        "Optimized software GUI layout and search performance",
        "Wrote SOP documentation and followed up on laboratory data deletion progress",
      ],
      background:
        "Data from laboratory instruments and computers must be cleared according to specifications, involving multiple instruments, software, and data types. Different objects have different data structures, requiring customized solutions.",
      challenges: [
        "Various data formats across different objects → Implemented separately: WeChat chat file deletion; clearing of sample‑related data from sperm analyzer databases and creating empty copies",
        "Wrote batch scripts to delete data from the sperm quality analysis system (tested and passed by the lab)",
        "On‑site MC100 instrument empty copy acquisition progress (other software development and testing completed)",
        "Needed on‑site survey → visited lab to provide technical support and deletion survey",
      ],
      highlights: [
        "Implemented separate functions for WeChat file deletion, sperm analyzer database clearing, batch script deletion, etc.",
        "Visited on‑site lab for technical support and deletion survey",
        "Optimized GUI layout and search performance",
        "Wrote SOP and followed up on deletion progress",
      ],
      result:
        "Completed software and SOP revisions by February–March 2025 and delivered; follow‑up received no issue reports from lab technicians.",
    },
    {
      id: "7",
      tech: ["Python3", "Shell", "Automation scripts", "aria2"],
      title:
        "Third‑Generation Sequencing Data Download and Processing Automation",
      role: "Project Lead",
      description:
        "Automated download and organization of third‑generation sequencing sample data",
      achievements: [
        "Tested multiple download channel options, settled on a combined solution: 'Volcano Cloud automation + manual download for non‑Volcano samples'",
        "Fixed edge cases: half‑full‑width parentheses, sample names with dashes, fully Chinese sample IDs",
        "Established a standardized production pipeline from sample submission to the pre‑processing file sample.json",
        "Scripts maintained throughout the year (iterations in July and October)",
      ],
      background:
        "Third‑generation sequencing (PGT) sample data comes from diverse sources (Beina Gene Volcano Cloud, Baidu Netdisk, manual uploads, etc.). Repetitive manual work in download and organization required automation.",
      challenges: [
        "Multi‑channel download selection: tested aria2 on server 201, Beina Gene Volcano Cloud auto‑download and processing modules, Baidu Netdisk Open Platform",
        "Continuous edge‑case fixes: fixed renaming failures due to half‑full‑width parentheses in sample paths",
        "Adapted sample names with dashes; added conversion from fully Chinese sample IDs to capitalized pinyin initials",
        "Fixed md5 file lookup method",
      ],
      highlights: [
        "Adopted the combined 'Volcano Cloud automation + manual download for non‑Volcano' approach",
        "Created a standardized production pipeline from sample submission to sample.json",
        "Scripts continuously maintained (iterations in July and October)",
        "Fixed multiple edge cases, improving script robustness",
      ],
      result:
        "Completed the TGS production process from sample download to sample.json in May 2025, with scripts maintained throughout the year.",
    },
    {
      id: "8",
      tech: [
        "Python3",
        "Statistical analysis",
        "Data visualization",
        "Web scraping",
      ],
      title: "Business Data Statistics Software",
      role: "Project Lead",
      description:
        "Statistical summarization and entry generation for laboratory sample billing data",
      achievements: [
        "Implemented billing summaries by sales representative and submitting institution",
        "Reused statistical modules from existing components to minimize duplicate development",
        "Encapsulated remote file transfer logic to support local execution operations",
      ],
      background:
        "Monthly sample data for the previous month is required on the 1st for company revenue collection.",
      challenges: [
        "Merged data from the master table and the GIP review table for statistics",
        "Used a custom remote transfer utility to perform both 'execution' and 'server transfer' operations",
        "Enabled custom‑specified statistics via runtime parameter files (time, unit, sales data)",
      ],
      highlights: [
        "Extracted general independent modules from existing processes to form software",
        "Achieved customizable statistical scopes and batch delivery",
        "Remote transfer utility supports 'execute + transfer' operations",
        "V1.0.1 added NA count comparison to facilitate lab inspection of NA numbers",
      ],
      result:
        "Achieved office automation for sales business statistics, easy to use, and assisting finance in billing verification.",
    },
    {
      id: "9",
      tech: [
        "Python3",
        "Statistical analysis",
        "Data visualization",
        "Web scraping",
      ],
      title: "Bioinformatics Cloud Platform Market Research",
      role: "Data Mining",
      description:
        "Retrieve backend JSON data from various bioinformatics cloud platforms and compile into a research report",
      achievements: [
        "Identified the most popular tool modules from backend data of multiple bioinformatics cloud platforms",
        "Explored the monetization/pricing logic of bioinformatics cloud platforms",
      ],
      background:
        "The department is exploring business transformation and aims to understand the current market landscape of bioinformatics cloud platforms.",
      challenges: [
        "Data formats vary across platforms, and evaluation metrics differ significantly",
        "Some platforms are relatively niche with sparse data, insufficient to support robust research conclusions",
      ],
      highlights: [
        "Leveraged AI to provide a unified data schema and assist in organizing the information",
        "Filtered and excluded low‑value data, used AI to consolidate data from surveyed platforms, and generated a comprehensive research report",
      ],
      result:
        "Basically completed the data scraping work for cloud platform backends, and provided personal recommendations for building the company’s own cloud platform product.",
    },
  ],
};