import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddLink: React.FC = () => {
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    selectInput: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  return (
    <FormControl sx={{ m: 1, width: 300, marginX:40 }} >
      <TextField
        name="name"
        label="name"
        variant="outlined"
        fullWidth
        value={formData.input1}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        name="url"
        label="url"
        variant="outlined"
        fullWidth
        value={formData.input2}
        onChange={handleChange}
        margin="normal"
      />
      <FormControl fullWidth variant="outlined" margin="normal">
        <Select
          name="category"
          value={formData.selectInput}
          onChange={handleChange}
          label="Select Input"
        >
          <MenuItem value="category">
            <em>category</em>
          </MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
    </FormControl>
  );
};

export default AddLink;
