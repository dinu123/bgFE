"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TextField, Button, Grid, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FaUser, FaLock, FaUserTie, FaBuilding, FaUserAlt, FaUsers } from 'react-icons/fa'; 
import { _create } from '../utils/apiUtils'; 

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        user_role: 0
    });

    const [error, setError] = useState(null);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await _create('/users', formData); 
            
            setFormData({
                username: '',
                email: '',
                password: '',
                user_role: ''
            });
            setError(null); 
            router.push("/auth/login");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
            <Grid item xs={12} md={8}>
                <div className="card h-100 shadow" style={{ borderRadius: '20px' }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <div className="card-body d-flex flex-column justify-content-center">
                                <Typography variant="h4" align="center" style={{ fontWeight: 'bold', color: 'blue' }}>Signup</Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        id="username"
                                        name="username"
                                        label="Username"
                                        variant="outlined"
                                        value={formData.username}
                                        onChange={handleChange}
                                        InputProps={{ startAdornment: <FaUser style={{ marginRight: '8px' }} /> }}
                                        style={{ backgroundColor: '#f0f2f5', fontSize: '0.8rem' }}
                                    />
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        id="email"
                                        name="email"
                                        label="Email"
                                        variant="outlined"
                                        value={formData.email}
                                        onChange={handleChange}
                                        InputProps={{ startAdornment: <FaUserAlt style={{ marginRight: '8px' }} /> }}
                                        style={{ backgroundColor: '#f0f2f5', fontSize: '0.8rem' }}
                                    />
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        id="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        value={formData.password}
                                        onChange={handleChange}
                                        InputProps={{ startAdornment: <FaLock style={{ marginRight: '8px' }} /> }}
                                        style={{ backgroundColor: '#f0f2f5', fontSize: '0.8rem' }}
                                    />
                                    <FormControl fullWidth margin="normal" variant="outlined">
                                        <InputLabel id="role-label">Role</InputLabel>
                                        <Select
                                            labelId="role-label"
                                            id="role"
                                            name="user_role"
                                            value={formData.user_role}
                                            onChange={handleChange}
                                            label="Role"
                                            style={{ backgroundColor: '#f0f2f5', fontSize: '0.8rem' }}
                                        >
                                            <MenuItem value="1"><FaUserTie style={{ marginRight: '8px' }} />Admin</MenuItem>
                                            <MenuItem value="2"><FaBuilding style={{ marginRight: '8px' }} />Client</MenuItem>
                                            <MenuItem value="3"><FaUsers style={{ marginRight: '8px' }} />Candidate</MenuItem>
                                            <MenuItem value="4"><FaUserTie style={{ marginRight: '8px' }} />Internal Team</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                                        Sign up
                                    </Button>
                                </form>
                                {error && <Typography variant="body2" color="error">{error}</Typography>}
                                <div className="mt-3">
                                    <Typography variant="body2">
                                        Already have an account? <Link href="/auth/login" passHref style={{ textDecoration: 'none' }}>Login</Link>
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
};

export default SignupForm;
