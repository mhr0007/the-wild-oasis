import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isLoading,
    isPending,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: async (user) => {
      // ✅ Wait a short moment to allow Supabase to set the session
      setTimeout(() => {
        // await queryClient.invalidateQueries({ queryKey: ["user"] });
        queryClient.setQueryData(["user"], user.user);
        navigate("/dashboard", { replace: true });
      }, 200); // 200ms is usually enough
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password is incorrect");
    },
  });

  return { login, isLoading, isPending };
}
