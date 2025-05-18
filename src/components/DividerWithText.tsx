const DividerWithText = ({ text }: { text: string }) => (
  <div className="my-2 flex items-center">
    <div className="border-gray flex-grow border-t" />
    <span className="text-black-sub mx-4">{text}</span>
    <div className="border-gray flex-grow border-t" />
  </div>
);
export default DividerWithText;
