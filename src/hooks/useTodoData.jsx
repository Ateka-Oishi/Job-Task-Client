import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTodoData = () => {
  const { user, authLoading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: todoData = {}, isPending: todoDataPending, refetch: todoDataRefetch } = useQuery({
    queryKey: [user?.uid, "todoData"],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/todo/${user?.uid}`);
      return res.data;
    },
  });
  return [todoData, todoDataPending, todoDataRefetch];
};

export default useTodoData;
