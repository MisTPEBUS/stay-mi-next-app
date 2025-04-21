export type SectionTitleContent = {
  heading: string;
  label: string;
};

export type SectionTitleProps = {
  content: SectionTitleContent;
  orientation?: "horizontal" | "vertical";
  className?: string;
};
