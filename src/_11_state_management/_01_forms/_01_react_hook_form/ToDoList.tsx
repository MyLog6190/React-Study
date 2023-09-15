import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */

function ToDoList() {
  /**
   * react-hook-form
   * - react-hook-form을 사용하면 유효성 검사를 해준다.
   *
   * register
   * - 유효성 검사를 하는데 사용한다.
   * - register 함수(function)를 사용하면 Props으로
   *   event(onBlur, onChange, ref)가 주어지고
   *   setState도 사용하지 않아도 입력값을 자동으로 변경된다.
   *
   * watch
   * - form의 입력값들의 감시하여 변화를 확인할 수 있음
   *
   *
   */
  const { register, watch } = useForm();
  console.log(watch());

  /**
   * ES6
   * - ...
   * - array을 나열
   * - arr1 = [1,2,3]
   * - arr2 = [...arr1,4,5,6]
   * - arr2 = [1,2,3,4,5,6]
   */

  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
