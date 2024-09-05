"use client";
import React from "react";
import { Group, Button, Rating , Title , Textarea , Text, Divider ,Pagination} from "@mantine/core";
import { useState } from 'react';

export default function YourRating() {

const [value, setValue] = useState(0);

    return (
        
        <div>
        <Title order={4} size="h4"mt="md">Your rating</Title>
        
        <Rating value={value} onChange={setValue} size="lg"/>

        <Textarea
      label="Your review"
      placeholder="Do you enjoy eating?"
      autosize
      minRows={3}
      maxRows={3}
      mt="md"
    />

    <Button variant="filled" color="orange" mt="md">Submit Review</Button>
    <Divider my="sm" />

        <Group justify="center" mt="sm">
    <Title order={4} size="h4">Elon Musk</Title>
    <Rating value={5} fractions={1} readOnly />
    
        </Group>
    <Text c="dimmed" ta = "center">Best pizza in this world. I give you X score.</Text>
    <Divider my="sm" />

    <Group justify="center" mt="sm">
    <Title order={4} size="h4">Mark Zuck</Title>
    <Rating value={4} fractions={1} readOnly />
    
    </Group>
    
    <Text c="dimmed" ta = "center">My favourite part is pepperoni</Text>

        <Group justify="center">
    <Pagination total={20} color="orange" mt="sm"/>
        </Group>

        </div>

    );
  }