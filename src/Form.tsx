import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import dayjs, { Dayjs } from "dayjs";
import { useForm } from "react-hook-form";

interface FormProps {
  onSubmit: (data: { title: string; description: string; date: Dayjs }) => void;
}

export default function Form(props: FormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (values) => {
    props.onSubmit({
      title: values.title,
      description: values.description,
      date: dayjs(values.date),
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name !== undefined}>
        <FormLabel htmlFor="title">タスク名</FormLabel>
        <Input
          type="text"
          id="title"
          bg="#eee"
          {...register("title", { required: true })}
        ></Input>
        <FormLabel htmlFor="date">日付</FormLabel>
        <Input
          type="date"
          bg="#eee"
          {...register("date", { required: true })}
        ></Input>
        <FormLabel htmlFor="description">説明</FormLabel>
        <Textarea
          bg="#eee"
          placeholder="説明："
          {...register("description")}
        ></Textarea>
        <FormErrorMessage>
          {errors.name && errors.name?.message?.toString()}
        </FormErrorMessage>
        <Button
          bg="blue"
          color="#fff"
          px={4}
          mx="auto"
          isLoading={isSubmitting}
          type="submit"
        >
          登録
        </Button>
      </FormControl>
    </form>
  );
}
