import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authslice";
import { nanoid } from "nanoid";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 Characters"),
});

type FormData = z.infer<typeof formSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onsubmit = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      dispatch(login({ user: { ...data }, token: nanoid() }));
      reset();
      navigate("/");
    } catch (error) {
      alert("Login failed. Please try again");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="hidden md:flex flex-1 items-center justify-center p-8">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center">
          Welcome Back.
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6 sm:p-8 flex flex-col gap-5"
        >
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>

            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              aria-label="email"
              className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
            />

            {errors.email && (
              <p className="text-red-600 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>

            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              aria-label="password"
              className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
            />

            {errors.password && (
              <p className="text-red-600 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="contained"
            color="warning"
            fullWidth
            aria-label="login"
          >
            {isSubmitting ? "Logining..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;