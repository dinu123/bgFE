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
  '/candidate-eduction', 
  '/candidate-cibil', 
  '/candidate-reference', 
  '/candidate-work-experience', 
  '/fathers-document'
];

const MainForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [generalInfoData, setGeneralInfoData] = useState({});
  const [permanentAddressData, setPermanentAddressData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [workExperienceData, setWorkExperienceData] = useState({});
  const [fathersDocumentData, setFathersDocumentData] = useState({});
  const [cibilInformationData, setCibilInformationData] = useState({});
  const [otherReferenceInformationData, setOtherReferenceInformationData] = useState({});

  const handleNext = async () => {
    const formDataMapping = [
      generalInfoData,
      permanentAddressData,
      educationData,
      cibilInformationData,
      otherReferenceInformationData,
      workExperienceData,
      fathersDocumentData
    ];
    console.log('Data for step', activeStep, ':', formDataMapping[activeStep]);

    try {
      await _create(stepEndpoints[activeStep], formDataMapping[activeStep]);
      console.log('Form data submitted successfully for step:', activeStep);
      setActiveStep((prevStep) => prevStep + 1);
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
      await _create(stepEndpoints[activeStep], otherReferenceInformationData);
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
        <GeneralInformation formData={generalInfoData} setFormData={setGeneralInfoData} />
      )}
      {activeStep === 1 && (
        <PermanentAddress formData={permanentAddressData} setFormData={setPermanentAddressData} />
      )}
      {activeStep === 2 && (
        <Education formData={educationData} setFormData={setEducationData} />
      )}
      {activeStep === 3 && (
        <CIBILInformation formData={cibilInformationData} setFormData={setCibilInformationData} />
      )}
      {activeStep === 4 && (
        <OtherReferenceInformation formData={otherReferenceInformationData} setFormData={setOtherReferenceInformationData} />
      )}
      {activeStep === 5 && (
        <WorkExperience formData={workExperienceData} setFormData={setWorkExperienceData} />
      )}
      {activeStep === 6 && (
        <FathersDocument formData={fathersDocumentData} setFormData={setFathersDocumentData} />
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
