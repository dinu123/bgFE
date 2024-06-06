import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const FathersDocument = ({ handleChange, formData }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
     

      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="text"
          name="uanNumber"
          value={formData.uanNumber}
          onChange={handleChange}
          label="UAN Number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>

      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="text"
          name="aadharNumber"
          value={formData.aadharNumber}
          onChange={handleChange}
          label="Aadhaar Card Number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="file"
          name="aadharUpload"
          onChange={handleChange}
          label="Upload Aadhaar Card (1 MB)"
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
          name="panNumber"
          value={formData.panNumber}
          onChange={handleChange}
          label="PAN Card Number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="file"
          name="panUpload"
          onChange={handleChange}
          label="Upload PAN Card (1 MB)"
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
          name="passportNumber"
          value={formData.passportNumber}
          onChange={handleChange}
          label="Passport Number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="file"
          name="passportUpload"
          onChange={handleChange}
          label="Upload Passport (1 MB)"
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
          name="drivingLicenseNumber"
          value={formData.drivingLicenseNumber}
          onChange={handleChange}
          label="Driving License Number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      
      <div style={{ flex: '1 1 calc(50% - 16px)', minWidth: '300px' }}>
        <TextField
          type="file"
          name="drivingLicenseUpload"
          onChange={handleChange}
          label="Upload Driving License (1 MB)"
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
          type="file"
          name="resumeUpload"
          onChange={handleChange}
          label="Upload Resume (1 MB)"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  );
};

export default FathersDocument;
