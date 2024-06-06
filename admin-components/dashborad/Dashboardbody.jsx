import React, { useState } from 'react';
import { Button, Modal, Grid } from '@mui/material';
import { BsPlus, BsDownload } from 'react-icons/bs';
import NewClientForm from '../../app/admin/companies/companies-components/NewClientForm';
import CompaniesList from '../../app/admin/companies/companies-components/CompaniesList';

function DashboardBody() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    const handleOpenModal = (client) => {
        setSelectedClient(client);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedClient(null);
        setIsModalOpen(false);
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: "space-between"}}>
                <div style={{ margin: "10px" }}>
                    
                </div>
                
                <div style={{ display: 'flex' }}>
                    <div style={{ margin: "10px" }}>
                        <Button
                            variant="contained"
                            startIcon={<BsDownload style={{ fontSize: '1.2em' }} />}
                        >
                            Download as Excel
                        </Button>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <Button
                            variant="contained"
                            startIcon={<BsPlus style={{ fontSize: '1.2em' }} />}
                            onClick={() => handleOpenModal(null)}
                        >
                            New Company
                        </Button>
                    </div>
                </div>
            </div>
            <CompaniesList onEdit={handleOpenModal} />
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
               
            >
                <Grid >
                    <Grid >
                        <NewClientForm client={selectedClient} onClose={handleCloseModal} />
                    </Grid>
                </Grid>
            </Modal>
        </>
    );
}

export default DashboardBody;
