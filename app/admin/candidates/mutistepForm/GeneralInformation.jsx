import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { _getAll } from "../../../../utils/apiUtils";
import { useSearchParams } from 'next/navigation';

const GeneralInformation = ({ formData, setFormData }) => {
  const [companies, setCompanies] = useState([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const companiesData = await _getAll('/client');
        setCompanies(companiesData);

       
        if (id) {
          const candidateData = await _getAll(`/candidate/${id}`);
          console.log("this is candidate data",candidateData)
          setFormData(candidateData);
        } else {
          if(localStorage.getItem("user_role") === '3') {
            const data = await _getAll('/candidate');
            setFormData(data[0]);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id, setFormData]);

  const handleCompanyChange = (event, newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      company: newValue ? newValue.id : null,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fields = [
    { name: "notify_candidate", label: "E-mail Notification to candidate", type: "select", options: ["Yes", "No"] },
    { name: "notify_client", label: "E-mail Notification to client", type: "select", options: ["Yes", "No"] },
    { name: "notify_admin", label: "E-mail Notification to admin", type: "select", options: ["Yes", "No"] },
    { name: "form_filled_by", label: "Form Filled By", type: "select", options: ["Candidate", "Data Internal Team"] },
    { name: "company", label: "Company (Auto Assign to Client Portal)", type: "text" },
    { name: "name", label: "Candidate Name", type: "text" },
    { name: "dob", label: "Candidate DOB", type: "date" },
    { name: "father_name", label: "Candidate Father’s Name", type: "text" },
    { name: "mobile_no", label: "Candidate Mobile No", type: "text" },
    { name: "email_id", label: "Candidate Email ID", type: "email" },
    { name: "client_location", label: "Company Location", type: "text" },
    { name: "client_process", label: "Company Process Name", type: "text" },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {fields.map((field, index) => (
        <div key={index} style={{ flex: '1 1 calc(25% - 16px)', minWidth: '200px' }}>
          {field.name === "company" ? (
            <Autocomplete
              value={companies.find(company => company.id === formData.company) || null}
              onChange={handleCompanyChange}
              options={companies}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="company"
                  label="Company "
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          ) : field.type === "select" ? (
            <TextField
              select
              name={field.name}
              value={formData[field.name] || field.options[0]}
              onChange={handleChange}
              label={field.label}
              variant="outlined"
              fullWidth
              margin="normal"
              SelectProps={{ native: true }}
            >
              {field.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </TextField>
          ) : (
            <TextField
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              label={field.label}
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={field.type === "date" ? { shrink: true } : {}}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default GeneralInformation;
