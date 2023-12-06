import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Modal, message } from "antd";
import Image from "next/image";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";
import { uid } from "uid";
import { FaEdit } from "react-icons/fa";
const Profile = () => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const [sessionData, setSessionData] = useState();
  const router = useRouter();
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  useEffect(() => {
    // Eğer session yoksa, anasayfaya yönlendir
    const session = JSON.parse(localStorage.getItem("session")) || null;
    if (!session) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("session")) {
      setSessionData(JSON.parse(localStorage.getItem("session")));
      const data = JSON.parse(localStorage.getItem("session"));
      form.setFieldsValue({
        name: data?.name,
        surname: data?.surname,
        email: data?.email,
      });
      form2.setFieldsValue({
        name: data?.name,
        surname: data?.surname,
        email: data?.email,
      });
    }
  }, [router.pathname]);
  const onUpdate = async () => {
    const data = JSON.parse(localStorage.getItem("session"));
    form.setFieldsValue({
      name: data?.name,
      surname: data?.surname,
      email: data?.email,
    });
    form2.setFieldsValue({
      name: data?.name,
      surname: data?.surname,
      email: data?.email,
    });
  };
  const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  };
  const onFinish = async (values) => {
    // Eğer kullanıcı şifre girdiyse, şifre kontrolü yap
    if (values.password) {
      // Hashlenmiş şifreyi al
      const hashedPassword = sessionData.password;

      // Kullanıcının girdiği şifreyi hashleyip, kayıtlı hash ile karşılaştır
      if (!bcrypt.compareSync(values.password, hashedPassword)) {
        message.error("Incorrect Password.");
        return;
      } else {
        if (values.newpassword || values.newpasswordrepeat) {
          if (values.newpassword !== values.newpasswordrepeat) {
            message.error("New password and new password repeat must be same");
            return;
          }
          // Şifre uzunluğu kontrolü
          if (values.newpassword.length < 6) {
            message.error("Şifre en az 6 karakterden oluşmalıdır.");
            setisSubmitting(false);
            return;
          }
          const hashedNewPassword = await hashPassword(values.newpassword);
          const updatedUserData = {
            ...sessionData,
            password: hashedNewPassword,
            name: values.name,
            surname: values.surname,
          };
          const users = JSON.parse(localStorage.getItem("users")) || [];
          const updatedUsers = users.map((user) =>
            user.id === sessionData.id ? updatedUserData : user
          );
          localStorage.setItem("users", JSON.stringify(updatedUsers));
          localStorage.setItem("session", JSON.stringify(updatedUserData));
          message.success("The editing process was completed successfully.");
          setSessionData(updatedUserData);
          form2.setFieldsValue({
            password: undefined,
            newpassword: undefined,
            newpasswordrepeat: undefined,
          });
          onUpdate();
          setOpen(false);
        } else {
          const updatedUserData = {
            ...sessionData,
            name: values.name,
            surname: values.surname,
          };
          const users = JSON.parse(localStorage.getItem("users")) || [];
          const updatedUsers = users.map((user) =>
            user.id === sessionData.id ? updatedUserData : user
          );
          localStorage.setItem("users", JSON.stringify(updatedUsers));
          localStorage.setItem("session", JSON.stringify(updatedUserData));
          message.success("The editing process was completed successfully.");
          setSessionData(updatedUserData);
          form2.setFieldsValue({
            password: undefined,
            newpassword: undefined,
            newpasswordrepeat: undefined,
          });
          onUpdate();
          setOpen(false);
        }
      }
    }
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <div className="min-h-screen w-full bg-mainGray relative flex items-center justify-center py-5">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg w-8/12  p-5  justify-between">
        <div className="md:w-1/2 w-full text-[#002d74] flex flex-col items-start">
          <div className="mx-auto flex flex-col md:w-[350px] w-full mt-10 gap-3">
            {" "}
            <h2 className="font-bold text-2xl"> Profile </h2>
            <p className="text-sm mt-4">Lorem ipsum dolor sit amet.</p>
            <hr />
            <div className="relative aspect-square h-[70px] w-[70px] rounded-full overflow-hidden mx-auto">
              <Image
                alt="vector"
                fill
                src={"/assets/vector.jpg"}
                className="object-cover"
              />
            </div>
            <Form name="basic" autoComplete="off" form={form}>
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
                  <Input
                    placeholder="Name"
                    size="large"
                    className="w-full"
                    disabled
                  />
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
                    disabled
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
                <Input
                  placeholder="Email"
                  size="large"
                  className="w-full"
                  disabled
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className="w-full bg-[#002d74] text-white flex justify-center gap-2 items-center "
                  size="large"
                  loading={isSubmitting}
                  onClick={(e) => {
                    setOpen(true);
                  }}
                >
                  <FaEdit /> Edit
                </Button>
              </Form.Item>
            </Form>
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
      <Modal
        title="Edit Profile"
        open={open}
        onCancel={handleCancel}
        okButtonProps={{
          style: {
            backgroundColor: "#002d74",
            display: "none",
          },
        }}
        cancelButtonProps={{
          style: {
            backgroundColor: "#002d74",
            display: "none",
          },
        }}
      >
        <Form name="basic" onFinish={onFinish} autoComplete="off" form={form2}>
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
              <Input placeholder="Surname" size="large" className="w-full" />
            </Form.Item>
          </div>
          <Form.Item name="email">
            <Input
              placeholder="Email"
              size="large"
              className="w-full"
              disabled
            />
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
          <Form.Item name="newpassword">
            <Input.Password placeholder="New Password" size="large" />
          </Form.Item>{" "}
          <Form.Item name="newpasswordrepeat">
            <Input.Password placeholder="New Password Repeat" size="large" />
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
      </Modal>
    </div>
  );
};

export default Profile;
