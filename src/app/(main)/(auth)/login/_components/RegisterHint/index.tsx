type RegisterHintProps = {
  signUpRoute: string;
};
const RegisterHint = ({ signUpRoute }: RegisterHintProps) => (
  <p className="text-center">
    還沒有成為會員？
    <a href={signUpRoute} className="text-primary ml-1 hover:underline">
      立即註冊
    </a>
  </p>
);
export default RegisterHint;
