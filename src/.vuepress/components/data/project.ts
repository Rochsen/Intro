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
        "实验室需要按月为送检单位（序源、番禺等）产出质控报告，传统人工制作方式耗时且易出错，急需自动化工具提效。指标与绘图样式未统一，报告制作工作量大。",
      challenges: [
        "不同单位/月份的指标统计与绘图样式未统一 → 与实验室沟通，制定指标的数据统计和绘图样式",
        "报告制作工作量大、难以批量产出 → 由实验室提供报告样式用于制作报告模板，构建自动化程序完成批量报告产出",
        "同一单位不同月份名称不一致导致识别失败 → 将送检单位识别从代码表改为用总表识别",
        "未加r的样本导致检测数据重复 → 合并流程增加样本去重步骤",
      ],
      highlights: [
        "以'三个交付阶段'与实验室协商推进，逐步完成流程构建",
        "形成可持续的月度交付机制",
        "从既有流程中提炼通用独立模块形成软件",
        "实现统计口径自定义与批量交付",
      ],
      result:
        "2023年7月起每月8号交付质控报告，当年交付5次。2024年整理为软著，9月获证书。2025年2-11月逐月交付，9月辅助质控报告2.0更新。",
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
      role: "核心参与者",
      description: "基于Snakemake搭建的二代测序分析流程，覆盖WES全流程",
      achievements: [
        "独立走通从双端序列输入到变异注释输出的完整WES流程链路",
        "引入VEP替换ANNOVAR，建立数据库等价映射+一致性/致病性双重验证方法",
        "注释环节提速50-60%，实现'上午分析、下午出结果'",
        "WES流程从脚本集合升级为Snakemake标准化流水线",
        "获国家版权局计算机软件著作权（2024年11月）",
      ],
      background:
        "公司需要搭建WES标准分析流程。初期依赖网络参考流程，存在使用来历不明数据库、流程搭建后未及时验证准确性的问题。需要从0到1开发，扩宽公司产品业务线。",
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
        "以五分类致病位点评级数量作为Call变异软件的选型依据",
      ],
      result:
        "完成WES流程雏形，2023年完成一轮系统性新增与优化。2024年评估DeepVariant可替代GATK，VEP正式替代ANNOVAR。2025年完成Snakemake化重构与204服务器迁移，支持hg19/hg38双版本。",
    },
    {
      id: "3",
      tech: ["Vue3", "Element Plus", "TypeScript", "若依(RuoYi)", "VitePress"],
      title: "常规临床检验信息管理系统(CIP)",
      role: "前端开发",
      description: "临检系统前端开发，支撑双子星版、序源版、商业版及宣传网站",
      achievements: [
        "2024年10月开始接触前端开发，半年内承担系统半数以上需求",
        "一人支撑多版本并行的前端迭代",
        "承担说明文档、软著材料、开源材料等全套配套产出",
        "2025年4月生产版本更新至V1.7.0",
      ],
      background:
        "公司需要建设常规临床检验信息管理系统，涵盖样本管理、报告生成、仪器管理等功能。需要支持不同客户版本的并行开发。",
      challenges: [
        "双子星版：新增仪器管理、送检/归档任务管理添加仪器/外送单位/项目状态查询项",
        "序源版：字典管理/字典数据页面构建与菜单嵌套问题解决",
        "商业版：开源化整理——去掉无用注释保留帮助性注释、编写前端部署README",
        "宣传网站：基于VitePress搭建产品版本页面、使用文档、授权管理体系",
      ],
      highlights: [
        "一人支撑多版本并行的前端迭代",
        "承担说明文档、软著材料、开源材料等全套配套产出",
        "CIP说明文档持续适配生产版本（V1.2.0→V1.9.x，增加问题汇总QA模块）",
        "软著Word使用文档编写、前端源程序压缩至30页",
      ],
      result:
        "2024年底完成124个需求中的53个。2025年支撑双子星版、序源版、商业版、宣传网站的并行迭代与配套产出。10月CIP相关前端告一段落。",
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
        "编写teedoc说明文档与软著源代码",
      ],
      background:
        "公司需要建设新的文件管理系统，涵盖文件资源管理、权限管理、审批流程等功能。需要支持复杂的权限继承与审批闭环。",
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
        "12月NAP前端个人部分基本完成",
      ],
      background:
        "公司需要建设新的任务投递与样本管理系统，支持CMA、NGS、三代PGT、WES等多种分析任务的投递与管理。",
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
      description: "覆盖微信聊天文件、精子分析系统、细胞分析仪器等数据清除",
      achievements: [
        "分别实现微信聊天文件删除、精子分析仪器数据库清空、bat脚本删除等功能",
        "前往驻点实验室提供技术支持与删除调研",
        "优化软件GUI布局与搜索性能",
        "编写SOP文档并跟进实验室手动删除进度",
      ],
      background:
        "临检实验室仪器与电脑的数据需按规范清除，涉及多种仪器、软件与数据类型。不同对象数据形态各异，需要定制化解决方案。",
      challenges: [
        "不同对象数据形态各异 → 分别实现：微信聊天文件删除功能；精子分析仪器数据库样本相关数据清空并制作空拷贝",
        "编写bat脚本删除精子质量分析系统数据（实验室测试通过）",
        "双子星mc100仪器空拷贝获取推进（其余软件开发与测试均已完成）",
        "需要现场情况调研 → 前往双子星实验室提供技术支持与删除调研",
      ],
      highlights: [
        "分别实现微信聊天文件删除、精子分析仪器数据库清空、bat脚本删除等功能",
        "前往双子星实验室提供技术支持与删除调研",
        "优化软件GUI布局与搜索性能",
        "编写SOP文档并跟进实验室手动删除进度",
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
        "形成从样本投递到sample.json的标准化生产链路",
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
      tech: ["Python3", "统计分析", "数据可视化", "爬虫"],
      title: "业务数据统计软件",
      role: "项目负责人",
      description: "PGS质控报告、人员实验室质控报告、销售业务统计三模块",
      achievements: [
        "从既有流程中提炼通用独立模块形成软件",
        "实现统计口径自定义与批量交付",
        "远程控制器支持'执行+传输'操作",
        "获国家版权局计算机软件著作权（2024年9月）",
      ],
      background:
        "此前搭建的流程不满足自定义时间、单位的统计/绘图需求，不能及时响应紧急安排的需求。需要将流程模块化、软件化。",
      challenges: [
        "将总表和GIP审核表的数据合并统计",
        "由自编远程控制器完成'执行'和'传输'操作",
        "通过运行参数文件（时间、单位、销售数据）实现自定义指定统计",
        "从流程中拆分出三个模块：PGS送检单位质控报告、人员实验室质控报告、销售业务统计",
      ],
      highlights: [
        "从既有流程中提炼通用独立模块形成软件",
        "实现统计口径自定义与批量交付",
        "远程控制器支持'执行+传输'操作",
        "V1.0.1加入NA数量对比，方便实验部检查NA数",
      ],
      result:
        "2024年7月整理为软著，9月收到证书。支持PGS质控报告、人员实验室质控报告、销售业务统计三个模块。",
    },
  ],
  "en-US": [
    {
      id: "1",
      tech: ["Python3", "Pandas", "Matplotlib", "Seaborn", "Gooey", "docx"],
      title: "PGS Quality Control Report Generator",
      role: "Project Lead",
      description:
        "Automated quality control report generation for testing labs, supporting data validation, charting, and one-click export.",
      achievements: [
        "Led the system architecture design and development from 0 to 1",
        "Designed visual report templates supporting 20+ quality metric charts",
        "Built a Pandas + Matplotlib data processing pipeline, boosting report generation efficiency by 80%",
        "Obtained National Copyright Bureau Computer Software Copyright (Sept 2024)",
      ],
      background:
        "Labs need monthly quality control reports for testing units (Xuyuan, Panyu, etc.). Manual creation was time-consuming and error-prone, urgently requiring automation. Metrics and chart styles were not unified.",
      challenges: [
        "Different units/months had inconsistent metric statistics and chart styles → Communicated with labs to establish data statistics and chart styles",
        "Report creation workload was heavy and difficult to batch produce → Lab provided report styles for template creation, built automation program for batch production",
        "Same unit had different names across months causing recognition failures → Changed unit recognition from code table to total table identification",
        "Samples without 'r' caused duplicate test data → Added sample deduplication step to merge process",
      ],
      highlights: [
        "Advanced in 'three delivery stages' through negotiation with labs, gradually completing process construction",
        "Formed sustainable monthly delivery mechanism",
        "Extracted common independent modules from existing processes to form software",
        "Implemented statistical caliber customization and batch delivery",
      ],
      result:
        "Monthly reports delivered on the 8th since July 2023, 5 deliveries that year. Compiled into software copyright in 2024, certificate received in September. 2025 Feb-Nov monthly delivery, Sept assisted QC report 2.0 update.",
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
      title: "Whole Exome Sequencing Analysis Pipeline",
      role: "Core Contributor",
      description:
        "A next-generation sequencing analysis pipeline built with Snakemake for whole exome sequencing.",
      achievements: [
        "Independently completed the full WES pipeline from paired-end sequence input to variant annotation output",
        "Introduced VEP to replace ANNOVAR, establishing database equivalence mapping + dual verification method",
        "Annotation process speed improved by 50-60%, enabling 'morning analysis, afternoon results'",
        "WES pipeline upgraded from script collection to Snakemake standardized workflow",
        "Obtained National Copyright Bureau Computer Software Copyright (Nov 2024)",
      ],
      background:
        "Company needed to build standard WES analysis pipeline. Initially relied on online reference flows with unverified databases and lack of accuracy validation. Needed to develop from scratch to expand product service lines.",
      challenges: [
        "Annotation databases outdated (avsnp147 2016, clinvar_20170905) → Verified latest versions through ANNOVAR official website, completed testing and replacement",
        "Local annotation process took too long (~6 hours, 50-60% of total analysis time) → Refactored to multi-process annotation, reduced to ~2 hours",
        "Marking duplicates consumed too much CPU (GATK Picard 40min) → Compared Sambamba (4min), 99% variant consistency after marking, adopted Sambamba as replacement",
        "Low-quality pathogenic variants not called → Referenced GATK documentation to locate parameters, evaluated variant counts and pathogenicity before/after adding parameters",
        "ANNOVAR didn't retain 0/0 genotype variants → VEP + custom annotation program replaced refGene/dbnsfp33a/population frequency database",
      ],
      highlights: [
        "Each optimization based on 'comparison experiment + consistency/pathogenicity verification', method reusable",
        "Variant ranking combined variant function, Clinvar pathogenicity, population frequency to establish priority ranking rules",
        "Established 'database equivalence mapping + consistency/pathogenicity dual verification' annotation engine replacement method",
        "Used five-category pathogenic variant rating quantity as variant calling software selection basis",
      ],
      result:
        "Completed WES prototype, systematic optimization in 2023. 2024 evaluated DeepVariant as GATK alternative, VEP officially replaced ANNOVAR. 2025 completed Snakemake refactoring and server migration, supporting hg19/hg38 dual versions.",
    },
    {
      id: "3",
      tech: ["Vue3", "Element Plus", "TypeScript", "RuoYi", "VitePress"],
      title: "Routine Clinical Laboratory Information Management System (CIP)",
      role: "Front-end Developer",
      description:
        "Clinical inspection system front-end development, supporting Shuangzixing, Xuyuan, commercial versions and promotional website.",
      achievements: [
        "Started front-end development in Oct 2024,承担 over half of system requirements within 6 months",
        "Single-handedly supported parallel front-end iterations for multiple versions",
        "Handled documentation, software copyright materials, open-source materials as complete package",
        "Production version updated to V1.7.0 in April 2025",
      ],
      background:
        "Company needed to build routine clinical inspection information management system covering sample management, report generation, instrument management, etc. Required parallel development for different client versions.",
      challenges: [
        "Shuangzixing version: Added instrument management, inspection/archival task management with instrument/external unit/project status query",
        "Xuyuan version: Dictionary management/data page construction and menu nesting problem resolution",
        "Commercial version: Open-source cleanup—removed useless comments, retained helpful ones, wrote front-end deployment README",
        "Promotional website: Built product version pages, documentation, authorization management system based on VitePress",
      ],
      highlights: [
        "Single-handedly supported parallel front-end iterations for multiple versions",
        "Handled documentation, software copyright materials, open-source materials as complete package",
        "CIP documentation continuously adapted to production versions (V1.2.0→V1.9.x, added QA module)",
        "Software copyright Word documentation writing, front-end source code compressed to 30 pages",
      ],
      result:
        "Completed 53 of 124 requirements by end of 2024. 2025 supported parallel iterations for Shuangzixing, Xuyuan, commercial versions and promotional website. CIP front-end work concluded in October.",
    },
    {
      id: "4",
      tech: ["Vue3", "Element Plus", "TypeScript", "RuoYi"],
      title: "FMS File Management System",
      role: "Front-end Developer",
      description:
        "File management system front-end development, covering file management and permission/approval system.",
      achievements: [
        "Completely implemented 'file + permission + approval' business loop front-end",
        "Thorough detail experience polishing: debounce, loading states, permission prompts, mobile adaptation",
        "Independent module separation, svg to js reference for code reduction",
        "Wrote teedoc documentation and software copyright source code",
      ],
      background:
        "Company needed to build new file management system covering file resource management, permission management, approval processes, etc. Required support for complex permission inheritance and approval closed loops.",
      challenges: [
        "File resource management: Breadcrumb navigation (with path cleanup, hover effects), right-click menu interface adaptation",
        "Permission and approval system: Permission management (subject add/delete and linkage, permission inheritance tag), application permission, approval management",
        "Engineering and documentation: Independent module separation, svg to js reference for code reduction",
        "Continuously fixed boundary bugs (header hidden, page switch not loading, new folder position abnormal, etc.)",
      ],
      highlights: [
        "Completely implemented 'file + permission + approval' business loop front-end",
        "Thorough detail experience polishing: debounce, loading states, permission prompts, mobile adaptation, date descending default sorting",
        "Implemented batch delete and batch download, selection summary bar, shift batch selection, double-click preview",
        "Global search (null info crash fix, debounce, loading animation, blur/enter trigger)",
      ],
      result:
        "August basically completed non-permission related function development, September file management system front-end basically completed. Implemented right-click menu, batch operations, preview, print, global search, etc.",
    },
    {
      id: "5",
      tech: ["Vue3", "Element Plus", "TypeScript", "teedoc"],
      title: "NAP System Front-end Development",
      role: "Front-end Developer",
      description:
        "Task delivery and sample management system front-end, covering primer tags, sample info, parameter management, etc.",
      achievements: [
        "Completed primer tag, sample info, parameter management, task delivery, task management, data statistics modules",
        "Encapsulated table pagination component, search form component for reuse",
        "Initialized teedoc documentation deployment",
        "December NAP front-end personal part basically completed",
      ],
      background:
        "Company needed to build new task delivery and sample management system supporting CMA, NGS, third-generation PGT, WES and other analysis task delivery and management.",
      challenges: [
        "Primer tag management: csv upload, file and data same interface submission, html custom error messages",
        "Sample info management: User upload/sequencing split dual data sources and chip number dropdown creation, multi-level headers",
        "Task delivery: CMA upload rendering, NGS unsplit data rendering, third-generation PGT/WES delivery process",
        "Subtask/main task management: Analysis parameter exposure, detail exposure, time information floating display",
      ],
      highlights: [
        "Encapsulated table pagination component, search form component (small screen adaptation, label-width单独设置)",
        "Table height self-adaptive and other common components for module reuse",
        "Chip/group linked selection, 'sample default' parameter options",
        "Anti-duplicate click loading mechanism",
      ],
      result:
        "November requirements basically completed except task delivery, December NAP front-end personal part basically completed. Implemented chip/group linked selection, sample default parameter options, etc.",
    },
    {
      id: "6",
      tech: [
        "Python3",
        "bat scripting",
        "GUI development",
        "SOP documentation",
      ],
      title: "Clinical Inspection Data Clearing Software",
      role: "Project Lead",
      description:
        "Covering WeChat chat files, sperm analysis system, Shuangzixing instrument data clearing.",
      achievements: [
        "Implemented WeChat chat file deletion, sperm analysis instrument database clearing, bat script deletion functions",
        "Provided on-site technical support and deletion research at Shuangzixing laboratory",
        "Optimized software GUI layout and search performance",
        "Wrote SOP documentation and followed up on manual deletion progress",
      ],
      background:
        "Clinical inspection laboratory instruments and computers need data cleared according to specifications, involving various instruments, software and data types. Different targets have different data forms, requiring customized solutions.",
      challenges: [
        "Different targets have different data forms → Implemented separately: WeChat chat file deletion; sperm analysis instrument database sample data clearing and empty copy creation",
        "Wrote bat script to delete sperm quality analysis system data (lab testing passed)",
        "Shuangzixing mc100 instrument empty copy acquisition progress (other software development and testing completed)",
        "Needed on-site investigation → Provided technical support and deletion research at Shuangzixing laboratory",
      ],
      highlights: [
        "Implemented WeChat chat file deletion, sperm analysis instrument database clearing, bat script deletion functions",
        "Provided on-site technical support and deletion research at Shuangzixing laboratory",
        "Optimized software GUI layout and search performance",
        "Wrote SOP documentation and followed up on manual deletion progress",
      ],
      result:
        "Feb-March 2025 completed software and SOP modification and delivery, no problem feedback from lab staff during follow-up.",
    },
    {
      id: "7",
      tech: ["Python3", "Shell", "Automation scripts", "aria2"],
      title: "Third-generation Sequencing Data Download Automation",
      role: "Project Lead",
      description:
        "Automation of third-generation sequencing sample data download and processing.",
      achievements: [
        "Tested multi-channel download options, determined 'Huoshanyun automation + non-Huoshanyun manual download' combination",
        "Fixed edge cases: half/full-width brackets, hyphenated sample names, full Chinese sample numbers",
        "Formed standardized production chain from sample delivery to sample.json",
        "Script maintained throughout the year (iterations in July, October)",
      ],
      background:
        "Third-generation sequencing (PGT) sample data sources are scattered (Beina Gene Huoshanyun, Baidu Netdisk, manual delivery, etc.), with repetitive manual operations for download and processing requiring automation.",
      challenges: [
        "Multi-channel download selection: Tested 201 server aria2 download, Beina Gene Huoshanyun automatic download and processing module, Baidu Netdisk open platform",
        "Edge case continuous repair: Fixed half/full-width bracket sample path renaming failure",
        "Adapted to hyphenated sample name characters; added full Chinese sample number to pinyin initials capitalization method",
        "Fixed md5 file finding method",
      ],
      highlights: [
        "Determined 'Huoshanyun automation + non-Huoshanyun manual download' combination solution",
        "Formed standardized production chain from sample delivery to sample.json",
        "Script maintained throughout the year (iterations in July, October)",
        "Fixed various edge cases, improving script robustness",
      ],
      result:
        "May 2025 completed TGS production process from sample download to sample.json, script maintained throughout the year.",
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
        "PGS quality control report, personnel laboratory QC report, sales business statistics three modules.",
      achievements: [
        "Extracted common independent modules from existing processes to form software",
        "Implemented statistical caliber customization and batch delivery",
        "Remote controller supports 'execution + transmission' operations",
        "Obtained National Copyright Bureau Computer Software Copyright (Sept 2024)",
      ],
      background:
        "Previously built processes did not meet customized time/unit statistics/charting needs, unable to respond promptly to urgent requirements. Needed to modularize and softwareize the processes.",
      challenges: [
        "Merged total table and GIP audit table data for statistics",
        "Built custom remote controller to complete 'execution' and 'transmission' operations",
        "Implemented custom specification through operation parameter files (time, unit, sales data)",
        "Split three modules from process: PGS quality control report, personnel laboratory QC report, sales business statistics",
      ],
      highlights: [
        "Extracted common independent modules from existing processes to form software",
        "Implemented statistical caliber customization and batch delivery",
        "Remote controller supports 'execution + transmission' operations",
        "V1.0.1 added NA quantity comparison for lab to check NA count",
      ],
      result:
        "July 2024 compiled into software copyright, September certificate received. Supports PGS quality control report, personnel laboratory QC report, sales business statistics three modules.",
    },
  ],
};