import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

export type ChildrenProps = LayoutProps & {
  className?: string;
  params?: {
    id: string;
  };
};
