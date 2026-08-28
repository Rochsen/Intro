import { techsListItemType } from "../type/index.ts";

/**
 * 技术栈数组
 */
export const MyTechsList: Record<string, techsListItemType[]> = {
  "zh-CN": [
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
  "en-US": [
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
};
