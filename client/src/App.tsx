import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import { Dayjs } from "dayjs";
import Form from "./Form";
interface TaskData {
  id: number;
  title: string;
  description: string;
  date: Dayjs;
}

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const addTasks = (data: {
    title: string;
    description: string;
    date: Dayjs;
  }): void => {
    const newTask: TaskData = {
      id: tasks.length + 1,
      title: data.title || "無題",
      description: data.description || "説明なし",
      date: data.date,
    };
    setTasks([...tasks, newTask]);
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
            <Form onSubmit={addTasks} />
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
                  <Text>日付:</Text>
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
