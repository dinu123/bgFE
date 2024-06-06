import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const WorkExperience = ({ handleChange, formData }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          label="Company Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          label="Location"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="text"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          label="Employee ID"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          label="Designation"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      <div style={{ flex: '1 1 calc(25% - 16px)', minWidth: '150px' }}>
        <TextField
          type="date"
          name="from"
          value={formData.from}
          onChange={handleChange}
          label="From"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      
      <div style={{ flex: '1 1 calc(25% - 16px)', minWidth: '150px' }}>
        <TextField
          type="date"
          name="to"
          value={formData.to}
          onChange={handleChange}
          label="To"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      
      
      <div style={{ flex: '1 1 calc(25% - 16px)', minWidth: '200px' }}>
        <TextField
          type="file"
          name="   Upload Experience Letter"
          onChange={handleChange}
          label="   Upload Experience Letter"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          label="Salary in CTC"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
     
    
      

      <div style={{ flex: '1 1 calc(25% - 16px)', minWidth: '200px' }}>
        <TextField
          type="file"
          name="  Upload Salary Slip"
          onChange={handleChange}
          label="  Upload Salary Slip"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>


      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="text"
          name="reasonForLeaving"
          value={formData.reasonForLeaving}
          onChange={handleChange}
          label="Reason for Leaving"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      
      
      <div style={{ flex: '1 1 calc(25% - 16px)', minWidth: '200px' }}>
        <TextField
          type="file"
          name=" Upload Relieving Letter"
          onChange={handleChange}
          label=" Upload Relieving Letter"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="text"
          name="reportingManagerName"
          value={formData.reportingManagerName}
          onChange={handleChange}
          label="Reporting Manager Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="text"
          name="reportingManagerDesignation"
          value={formData.reportingManagerDesignation}
          onChange={handleChange}
          label="Reporting Manager Designation"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="text"
          name="reportingManagerContact"
          value={formData.reportingManagerContact}
          onChange={handleChange}
          label="Reporting Manager Contact"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="email"
          name="reportingManagerEmail"
          value={formData.reportingManagerEmail}
          onChange={handleChange}
          label="Reporting Manager Email ID"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
