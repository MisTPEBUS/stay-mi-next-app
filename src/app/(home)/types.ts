export type SectionTitleContent = {
  heading: string;
  label: string;
};

export type SectionTitleProps = {
  content: SectionTitleContent;
  orientation?: "horizontal" | "vertical";
};

export type ScenarioType = {
  title: string;
  content: string;
  imageUrl: string;
};

export type SubscriptionPlanType = {
  title: string;
  subtitle: string;
  content: string;
};

export type StepType = {
  stepId: string;
  title: string;
  content: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type HotelType = {
  title: string;
  room_type: string;
  region: string;
  price: number;
  sub_price: number;
  stars: number;
  imageUrl: string;
};
