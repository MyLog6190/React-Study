import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Categories } from "../atmos";
import { useSetRecoilState } from "recoil";

interface IForm {
  newCategory: string;
}

const CategoryForm = styled.form`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

function CreateCategory() {
  const setCategories = useSetRecoilState(Categories);
  const { register, handleSubmit } = useForm<IForm>();
  const handle = ({ newCategory }: IForm) => {
    setCategories((category) => [...category, newCategory]);
  };

  return (
    <CategoryForm onSubmit={handleSubmit(handle)}>
      <Title>New Category</Title>
      <Input
        {...register("newCategory", { required: "Please write a Category" })}
        type="text"
        placeholder="Enter Category Name"
      />
      <Button>add</Button>
    </CategoryForm>
  );
}

export default CreateCategory;
