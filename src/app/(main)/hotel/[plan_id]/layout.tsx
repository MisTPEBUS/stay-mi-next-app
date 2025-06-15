import Providers from "@/components/Providers";

const BookingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Providers>{children}</Providers>
    </>
  );
};

export default BookingPageLayout;
