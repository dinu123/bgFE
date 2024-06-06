'use client'
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Modal } from '@mui/material';
import { Delete, Edit, Preview } from '@mui/icons-material';
import NewClientForm from './NewClientForm';
import SearchComponent from '@/common-components/SearchComponent';
import { _getAll, _delete } from '@/utils/apiUtils';
import staticColumns from './columns';

export default function CompaniesList() {
  const [clientListData, setClientListData] = useState([]);
  const [filteredClientListData, setFilteredClientListData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dialogVisibility, setDialogVisibility] = useState({
    isDeleteDialogOpen: false,
    isPreviewDialogOpen: false,
    isErrorDialogOpen: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await _getAll('/client');
        // console.log(data)
        setClientListData(data);
        setFilteredClientListData(data);
        setColumns([
          ...staticColumns,
          {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
              <>
                <IconButton aria-label="edit" color="primary" onClick={() => handleEditInitiation(params.row)}>
                  <Edit />
                </IconButton>
                <IconButton aria-label="delete" color="secondary" onClick={() => handleDeleteInitiation(params.row)}>
                  <Delete />
                </IconButton>
                <IconButton aria-label="preview" color="default" onClick={() => handlePreviewInitiation(params.row)}>
                  <Preview />
                </IconButton>
              </>
            ),
          },
        ]);
      } catch (error) {
        setErrorMessage('Failed to fetch client data. Please try again later.');
        setDialogVisibility((prevState) => ({ ...prevState, isErrorDialogOpen: true }));
      }
    };

    fetchData();
  }, []);

  const handleEditInitiation = (client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const handleDeleteInitiation = (client) => {
    setSelectedClient(client);
    setDialogVisibility((prevState) => ({ ...prevState, isDeleteDialogOpen: true }));
  };

  const handlePreviewInitiation = (client) => {
    setSelectedClient(client);
    setDialogVisibility((prevState) => ({ ...prevState, isPreviewDialogOpen: true }));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    filterData(event.target.value);
  };

  const filterData = (query) => {
    const filteredData = clientListData.filter(client =>
      Object.values(client).some(value =>
        value !== null && value !== undefined && value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredClientListData(filteredData);
  };

  const confirmDelete = async () => {
    try {
      console.log("selected client id when delete", selectedClient.id)
      await _delete('client', selectedClient.id);
      const updatedList = clientListData.filter(client => client.id !== selectedClient.id);
      setClientListData(updatedList);
      setFilteredClientListData(updatedList);
      setDialogVisibility((prevState) => ({ ...prevState, isDeleteDialogOpen: false }));
    } catch (error) {
      setErrorMessage('Failed to delete client. Please try again later.');
      setDialogVisibility((prevState) => ({ ...prevState, isErrorDialogOpen: true }));
    }
  };

  const closeDialog = (dialogName) => {
    setDialogVisibility((prevState) => ({ ...prevState, [dialogName]: false }));
  };

  return (
    <div style={{ height: 440, width: '100%', padding: '16px' }}>
      <SearchComponent searchQuery={searchQuery} onSearch={handleSearch} />
      <DataGrid
        rows={filteredClientListData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
      />

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
      >
        <Grid>
          <Grid>
            <NewClientForm client={selectedClient} onClose={handleCloseModal} />
          </Grid>
        </Grid>
      </Modal>

      {/* Delete Client */}
      <Dialog open={dialogVisibility.isDeleteDialogOpen} onClose={() => closeDialog('isDeleteDialogOpen')}>
        <DialogTitle>Delete Company</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this company?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog('isDeleteDialogOpen')} color="primary">Cancel</Button>
          <Button onClick={confirmDelete} color="primary" autoFocus>Delete</Button>
        </DialogActions>
      </Dialog>

      {/* Preview Client */}
      <Dialog open={dialogVisibility.isPreviewDialogOpen} onClose={() => closeDialog('isPreviewDialogOpen')}>
        <DialogTitle>Preview Company</DialogTitle>
        <DialogContent>
          <pre>{JSON.stringify(selectedClient, null, 2)}</pre>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog('isPreviewDialogOpen')} color="primary">Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={dialogVisibility.isErrorDialogOpen} onClose={() => closeDialog('isErrorDialogOpen')}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          {errorMessage}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog('isErrorDialogOpen')} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
