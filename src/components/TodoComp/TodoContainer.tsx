import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { TTodo } from "@/redux/features/todoSlice";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between my-3">
        <AddTodoModal />

        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-2 space-y-3">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.length !== 0 &&
            todos.map((item: TTodo) => <TodoCard key={item.id} {...item} />)}

          {todos.length === 0 && (
            <div className="bg-white p-5 rounded-md flex justify-center items-center">
              <p className="text-2xl font-bold">There is no task pending</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
