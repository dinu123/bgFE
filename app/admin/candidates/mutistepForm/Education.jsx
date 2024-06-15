import React from 'react';
import TextField from '@mui/material/TextField';

const Education = ({ formData, setFormData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fields = [
    { name: "name_of_certificate", label: "Name of Certificate", type: "text" },
    { name: "course_name", label: "Course Name", type: "text" },
    { name: "institution_name", label: "Institution Name", type: "text" },
    { name: "institution_address", label: "Institution Address", type: "text" },
    { name: "university_name", label: "University Name", type: "text" },
    { name: "passing_year", label: "Passing Year", type: "number" },
    { name: "roll_number", label: "Roll Number", type: "text" },
    { name: "grade", label: "Grade", type: "text" },
    { name: "marks", label: "Marks", type: "number" },
    { name: "certificate", label: "Certificate", type: "text" },
   
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {fields.map((field, index) => (
        <div key={index} style={{ flex: '1 1 calc(25% - 16px)', minWidth: '200px' }}>
          <TextField
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            label={field.label}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </div>
      ))}
    </div>
  );
}

export default Education;
