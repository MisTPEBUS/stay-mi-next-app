import { Suspense } from "react";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};
export default SearchLayout;
