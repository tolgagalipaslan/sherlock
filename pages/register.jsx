import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import Image from "next/image";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";
import { uid } from "uid";
const Register = () => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const router = useRouter();
  const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  };
  const isEmailValid = (email) => {
    // Basit bir e-posta doğrulama kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isEmailRegistered = (email) => {
    // Local storage'dan kullanıcı bilgilerini al
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verilen e-posta adresi ile kayıtlı kullanıcı var mı kontrol et
    return users.some((user) => user.email === email);
  };
  useEffect(() => {
    // Eğer session yoksa, anasayfaya yönlendir
    const session = JSON.parse(localStorage.getItem("session")) || null;
    if (session) {
      router.push("/");
    }
  }, []);
  const onFinish = async (values) => {
    setisSubmitting(true);
    // E-posta doğrulaması
    if (!isEmailValid(values.email)) {
      message.error("Geçerli bir e-posta adresi giriniz.");
      setisSubmitting(false);
      return;
    }
    if (isEmailRegistered(values.email)) {
      message.error("Bu e-posta adresi zaten kullanılmış.");
      setisSubmitting(false);
      return;
    }
    // Şifre uzunluğu kontrolü
    if (values.password.length < 6) {
      message.error("Şifre en az 6 karakterden oluşmalıdır.");
      setisSubmitting(false);
      return;
    }
    // Şifreyi hashle
    const hashedPassword = await hashPassword(values.password);

    // Mevcut kullanıcıları al
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const id = uid(25);
    // Yeni kullanıcıyı ekle
    const user = {
      id: id,
      name: values.name,
      surname: values.surname,
      email: values.email,
      password: hashedPassword,
    };
    const session = {
      id: id,
      name: values.name,
      surname: values.surname,
      email: values.email,
      password: hashedPassword,
    };
    users.push(user);
    console.log(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("session", JSON.stringify(session));
    setisSubmitting(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full bg-mainGray relative flex items-center justify-center py-5">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg w-8/12  p-5  justify-between">
        <div className="md:w-1/2 w-full text-[#002d74] flex flex-col items-start">
          <div className="mx-auto flex flex-col md:w-[350px] w-full mt-10 gap-3">
            {" "}
            <h2 className="font-bold text-2xl"> Register </h2>
            <p className="text-sm mt-4">
              If you want a member , easily register
            </p>
            <Form name="basic" onFinish={onFinish} autoComplete="off">
              <div className="flex gap-3 justify-between">
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
                    },
                  ]}
                >
                  <Input placeholder="Name" size="large" className="w-full" />
                </Form.Item>
                <Form.Item
                  name="surname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Surname!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Surname"
                    size="large"
                    className="w-full"
                  />
                </Form.Item>
              </div>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email Adress!",
                  },
                ]}
              >
                <Input placeholder="Email" size="large" className="w-full" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" size="large" />
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  className="w-full bg-[#002d74] text-white "
                  size="large"
                  loading={isSubmitting}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <div className="w-full py-2 px-5 bg-white hover:scale-95 duration-500 border flex justify-center rounded-xl relative gap-4 items-center text-sm">
              <div className="relative aspect-square h-[25px] cursor-pointer">
                <Image
                  alt="@"
                  fill
                  src={"/assets/google.png"}
                  className="object-cover"
                />
              </div>
              Login with Google
            </div>
            <div className="mt-3 text-xs  flex justify-between items-center cursor-pointer">
              <p>Do you already have an account?</p>
              <div className="py-2 px-5 bg-white border rounded-xl cursor-pointer">
                {" "}
                Log In
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 relative p-5 h-[600px]   md:block hidden  ">
          <Image
            alt="#"
            src={"/assets/login.avif"}
            fill
            className="object-cover rounded-2xl overflow-hidden  l-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
