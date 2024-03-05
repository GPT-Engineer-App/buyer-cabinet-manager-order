import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, List, ListItem, Button, Image, Input, FormControl, FormLabel, Textarea, useToast } from "@chakra-ui/react";
import { FaRegListAlt, FaRegComments, FaUpload, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  // Dummy data to simulate user's purchases and complaints
  const purchases = [
    { id: 1, product: "Laptop", date: "2021-09-15" },
    { id: 2, product: "Smartphone", date: "2021-10-01" },
  ];

  const complaints = [{ id: 1, issue: "Screen not working", status: "Resolved", date: "2021-10-05" }];

  const [blockNumber, setBlockNumber] = useState("");
  const [photo, setPhoto] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmitComplaint = () => {
    // Handle the submission of the complaint
    toast({
      title: "Complaint Submitted",
      description: "We've received your complaint and will get back to you soon.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <VStack spacing={8}>
          <Heading as="h1" size="xl">
            Client Dashboard
          </Heading>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>
                <FaRegListAlt /> Purchases
              </Tab>
              <Tab>
                <FaRegComments /> Complaints
              </Tab>
              <Tab>
                <FaRegComments /> Request Manager
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <List spacing={3}>
                  {purchases.map((purchase) => (
                    <ListItem key={purchase.id}>
                      <Text fontSize="xl">{purchase.product}</Text>
                      <Text fontSize="sm">Date: {purchase.date}</Text>
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
              <TabPanel>
                <List spacing={3}>
                  {complaints.map((complaint) => (
                    <ListItem key={complaint.id}>
                      <Text fontSize="xl">{complaint.issue}</Text>
                      <Text fontSize="sm">Status: {complaint.status}</Text>
                      <Text fontSize="sm">Date: {complaint.date}</Text>
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
              <TabPanel>
                <FormControl isRequired>
                  <FormLabel>Block Number</FormLabel>
                  <Input placeholder="Enter the block number" onChange={(e) => setBlockNumber(e.target.value)} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Upload Photo</FormLabel>
                  <Input type="file" p={1} accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} icon={<FaUpload />} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Comment</FormLabel>
                  <Textarea placeholder="Describe the issue" onChange={(e) => setComment(e.target.value)} />
                </FormControl>
                <Button leftIcon={<FaPaperPlane />} colorScheme="blue" mt={4} onClick={handleSubmitComplaint}>
                  Submit Complaint
                </Button>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
