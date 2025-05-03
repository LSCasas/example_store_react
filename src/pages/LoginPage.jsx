import { toast } from "sonner";
import { login } from "../api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();

  async function onSubmit(data) {
    try {
      const token = await login(data.username, data.password);

      if (token) {
        window.localStorage.setItem("token", token);
        toast.success("Welcome");
        navigate("/productos");
      } else {
        toast.error("Incorrect username or password");
        setError("root.credentials", {
          type: "manual",
          message: "Invalid credentials",
        });
      }
    } catch (error) {
      toast.error("Error logging in");
      console.error("[login error]", error);
    }
  }

  function handleShowHidePasword() {
    setShowPassword(!showPassword);
  }

  return (
    <main className="flex justify-center items-center flex-col w-full min-h-dvh gap-6 bg-[#F7F9FA]">
      <h1 className="text-4xl font-bold text-[#2E2E2E] text-center">Login</h1>
      <form
        className={clsx(
          "rounded p-6 flex flex-col gap-4 max-w-sm w-full bg-white shadow-md border",
          {
            "border-red-500": errors.root?.credentials,
            "border-[#2ED47A]": !errors.root?.credentials,
          }
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className="border border-[#2E2E2E] rounded p-2 text-[#2E2E2E] placeholder:text-gray-400 focus:outline-[#2ED47A]"
          placeholder="Username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        <input
          type={showPassword ? "text" : "password"}
          className="border border-[#2E2E2E] rounded p-2 text-[#2E2E2E] placeholder:text-gray-400 focus:outline-[#2ED47A]"
          placeholder="Password"
          {...register("password", {
            required: { value: true, message: "Password is required" },
          })}
        />
        <span
          className="text-xs text-gray-500 cursor-pointer hover:text-[#2E2E2E]"
          onClick={handleShowHidePasword}
        >
          {showPassword ? "🙈 Ocultar" : "🐵 Mostrar"} password
        </span>
        <button className="bg-[#2ED47A] p-3 text-white font-semibold hover:bg-[#25ba6b] rounded">
          Log in
        </button>
        {errors.root?.credentials && (
          <p className="text-red-500 text-center text-sm">
            Invalid credentials
          </p>
        )}
      </form>
    </main>
  );
}
