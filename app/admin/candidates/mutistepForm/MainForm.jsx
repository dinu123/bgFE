"use client"
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import GeneralInformation from "./GeneralInformation";
import PermanentAddress from "./PermanentAddress";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import FathersDocument from "./FathersDocument";
import CIBILInformation from "./CIBILInformation";
import OtherReferenceInformation from "./OtherReferenceInformation";
import { _create } from '../../../../utils/apiUtils';
import { Notifications } from '@mui/icons-material';
import { toast } from 'react-toastify';


const steps = [
  'General Information',
  'Permanent Address',
  'Education',
  'CIBIL Information',
  'Candidate Reference',
  'Work Experience',
  'Father\'s Document'
];


const stepEndpoints = [
  '/candidate',
  '/candidate-address',
  '/candidate-education',
  '/candidate-cibil',
  '/candidate-reference',
  '/candidate-work-experience',
  '/fathers-document'
];


const MainForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [candidateId, setCandidateId] = useState('');


  const handleNext = async () => {
    try {
      let payload = { ...formData };
      
      if (activeStep === 0) {
        const response = await _create(stepEndpoints[activeStep], payload);
        console.log(response);
        if(response.isError) {
          toast.error(response.msg);
          return 
        }
        setActiveStep((prevStep) => prevStep + 1);
        const id = response.id;
        console.log("responseId:", id);
        setCandidateId(id);
      } else {
        payload = {
          ...payload,
          id: candidateId
        };
        await _create(stepEndpoints[activeStep], payload);
      }
 
      console.log('Form data submitted successfully for step:', activeStep);
      console.log('Next Step:', activeStep + 1);
    } catch (error) {
      console.error('Failed to submit form data for step:', activeStep, error);
    }
  };
 
 
 




  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    console.log('Previous Step:', activeStep - 1);
  };


  const handleFinalSubmit = async () => {
    try {
      await _create(stepEndpoints[activeStep], formData);
      console.log('Form data submitted successfully for step:', activeStep);
     
    } catch (error) {
      console.error('Failed to submit form data for final step:', activeStep, error);
    }
  };


  return (
    <div style={{ margin: '20px' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>


      {activeStep === 0 && (
        <GeneralInformation formData={formData} setFormData={setFormData} />
      )}
      {activeStep === 1 && (
        <PermanentAddress formData={formData} setFormData={setFormData} />
      )}
      {activeStep === 2 && (
        <Education formData={formData} setFormData={setFormData} />
      )}
      {activeStep === 3 && (
        <CIBILInformation formData={formData} setFormData={setFormData} />
      )}
      {activeStep === 4 && (
        <OtherReferenceInformation formData={formData} setFormData={setFormData} />
      )}
      {activeStep === 5 && (
        <WorkExperience formData={formData} setFormData={setFormData} />
      )}
      {activeStep === 6 && (
        <FathersDocument formData={formData} setFormData={setFormData} />
      )}


      <div style={{ marginTop: '20px' }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="outlined"
          style={{ marginRight: '10px' }}
        >
          Back
        </Button>
        {activeStep < steps.length - 1 ? (
          <Button onClick={handleNext} variant="contained">
            Next
          </Button>
        ) : (
          <Button onClick={handleFinalSubmit} variant="contained" color="primary">
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};


export default MainForm;



