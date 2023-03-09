import React from "react";

import styled from "styled-components";

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  color: red;
`;

const Button = styled.button`
  all: unset;
  padding: 4px 10px;
  background: blue;
  border: blue;
  color: white;
`;

const Input = styled.input`
  padding: 4px 10px;
  border: 1px solid blue;
`;

const FormLayout = styled.div`
  display: flex;
  gap: 0px 10px;
`;
const ComCP = () => {
  return (
    <MainLayout>
      <H1>Component Compound</H1>

      <FormLayout>
        <Input /> <Button>Add</Button>
      </FormLayout>
    </MainLayout>
  );
};

export default ComCP;
