import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import IconEyeToggle from "../components/icons/IconEyeToggle";

const schema = yup.object({
  username: yup.string().required("Hãy nhập tài khoản"),
  email:yup.string().required("Hãy nhập email"),
  password: yup.string().required("Hãy nhập mật khẩu").min(8, "Mật khẩu tối thiểu là 8 ký tự"),
});

const SignUpPage = () => {
  const {handleSubmit, control, formState: {errors}} = useForm({resolver: yupResolver(schema), mode:"onSubmit"});
  const handleSignUp = () => {
  }
  useEffect(() => {
    const arrErroes = Object.values(errors);
    console.log(arrErroes);
    if(arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
      })
    }
  })
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }
  return (
    <LayoutAuthentication heading="Đăng ký">
      <p className="text-sm text-center text-primary dark:text-color-1 mb-5">
        Bạn đã có tài khoản?{" "}
        <Link to="/sign-in" className="text-green-500 cursor-pointer font-semibold">
          Đăng nhập
        </Link>
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="username">Tài khoản</Label>
          <Input type="text" name="username" placeholder="Nhập tài khoản" control={control} ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>   
          <Input type="text" name="email" placeholder="Nhập email" control={control}></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mật khẩu</Label>
          <Input type={showPassword ? "text" : "password"} name="password"  placeholder="Tạo mật khẩu" control={control}>
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <p className="text-right text-sm text-green-500 font-semibold">Quên mật khẩu</p>
        <Button className="w-full text-white mt-5">Đăng ký</Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
