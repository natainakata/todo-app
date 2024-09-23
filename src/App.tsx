import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface Task {
  id: number;
  title: string;
  date: Dayjs;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Dayjs>(dayjs());
  const addTasks = (): void => {
    const newTask: Task = {
      id: tasks.length + 1,
      title: title || "無題",
      description: description || "説明なし",
      date: date,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDate(dayjs);
    setDescription("");
  };

  return (
    <ChakraProvider>
      <Box w={[300, 400, 600]}>
        <Box
          p={8}
          mt={2}
          textAlign="center"
          border="1px"
          borderColor="gray.200"
          borderRadius="8px"
        >
          <Heading as="h1">TODO APP</Heading>
          <Text mt={1}>TODO管理、します。</Text>
          <Stack spacing={4} maxW="sm" mt={4} mx="auto">
            <InputGroup>
              <InputLeftAddon>タスク名</InputLeftAddon>
              <Input
                type="text"
                bg="#eee"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              ></Input>
            </InputGroup>
            <InputGroup>
              <InputLeftAddon>期限</InputLeftAddon>
              <Input
                type="date"
                bg="#eee"
                onChange={(e) => setDate(dayjs(e.target.value))}
                value={date.format()}
              ></Input>
            </InputGroup>
            <Textarea
              bg="#eee"
              placeholder="説明："
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></Textarea>

            <Button bg="blue" color="#fff" px={4} mx="auto" onClick={addTasks}>
              登録
            </Button>
          </Stack>
        </Box>
        <Box>
          {tasks.map((task) => (
            <div key={task.id}>
              <Stack spacing={2} maxW="sm" mt={4} mx="auto">
                <Flex align="center" justifyContent="space-between">
                  <Text>タスク名:</Text>
                  <Text>{task.title}</Text>
                </Flex>
                <Flex align="center" justifyContent="space-between">
                  <Text>期日:</Text>
                  <Text>{task.date.format("YYYY/MM/DD")}</Text>
                </Flex>
                <Box>
                  <Text textAlign="left">説明:</Text>
                  <Text textAlign="justify">{task.description}</Text>
                </Box>
              </Stack>
            </div>
          ))}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
