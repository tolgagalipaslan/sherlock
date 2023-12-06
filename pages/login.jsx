import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import Image from "next/image";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    // Eğer session yoksa, anasayfaya yönlendir
    const session = JSON.parse(localStorage.getItem("session")) || null;
    if (session) {
      router.push("/");
    }
  }, []);
  const onFinish = (values) => {
    // E-posta doğrulaması
    if (!isEmailValid(values.email)) {
      message.error("Geçerli bir e-posta adresi giriniz.");
      return;
    }

    // Local storage'dan kullanıcı bilgilerini al
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kullanıcının e-posta adresini bul
    const user = users.find((u) => u.email === values.email);

    // Kullanıcı bulunamazsa veya şifre eşleşmezse hata mesajı göster
    if (!user || !bcrypt.compareSync(values.password, user.password)) {
      message.error("Geçersiz e-posta adresi veya şifre.");
      return;
    }
    const session = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password, // Dilerseniz bu bilgiyi saklamayabilirsiniz, sadece örnek olarak ekledim
    };

    // Session bilgilerini local storage'a kaydet
    localStorage.setItem("session", JSON.stringify(session));
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full bg-mainGray relative flex items-center justify-center py-5">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg w-8/12  p-5  justify-between">
        <div className="md:w-1/2 w-full text-[#002d74] flex flex-col items-start">
          <div className="mx-auto flex flex-col md:w-[350px] w-full mt-10 gap-3">
            {" "}
            <h2 className="font-bold text-2xl"> Login </h2>
            <p className="text-sm mt-4">
              If you already a member , easily log in
            </p>
            <Form name="basic" onFinish={onFinish} autoComplete="off">
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
            <p className="mt-5 text-xs border-b border-gray-400 py-4 text-black cursor-pointer">
              Forgot your password?
            </p>
            <div className="mt-3 text-xs  flex justify-between items-center cursor-pointer">
              <p>Don't have an account?</p>
              <div className="py-2 px-5 bg-white border rounded-xl cursor-pointer">
                {" "}
                Register
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

export default login;
