import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(50000);

  const increamentAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const increamentSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={increamentAge}>Increament Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={increamentSalary}>Increament Salary</Button>
    </div>
  );
};

export default ParentComponent;
