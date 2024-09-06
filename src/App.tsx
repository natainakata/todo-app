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

function App() {
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
              <Input type="text" bg="#eee"></Input>
            </InputGroup>
            <Textarea bg="#eee" placeholder="説明："></Textarea>
            <InputGroup>
              <InputLeftAddon>期限</InputLeftAddon>
              <Input type="date" bg="#eee"></Input>
            </InputGroup>
            <Button bg="blue" color="#fff" px={4} mx="auto">
              登録
            </Button>
          </Stack>
        </Box>
        <Box></Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
