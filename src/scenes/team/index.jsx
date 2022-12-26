import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../components/Header';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left'
        },
        { field: 'phone', headerName: 'Phone Number', flex: 1 },
        { field: 'email', headerName: 'E-mail', flex: 1 },
        {
            field: 'access',
            headerName: 'Access Level',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            cellClassName: 'access-column--cell',
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width='80%'
                        m='0 auto'
                        p='5px'
                        display='flex'
                        backgroundColor={
                            access === 'admin' ? colors.redAccent[600] : colors.greenAccent[800]
                        }
                        borderRadius='4px'
                    >
                        {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
                        {access === 'manager' && <SecurityOutlinedIcon />}
                        {access === 'user' && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
                            {access}
                        </Typography>
                    </Box>
                );
            }
        }
    ];

    return (
        <Box m='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title='TEAM' subtitle='Managing the Team Members' />
            </Box>
            <Box
                m='40px 0 0 0'
                height='75vh'
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none'
                    },
                    '& .name-column--cell': {
                        color: colors.greenAccent[500]
                    },
                    '& .access-column--cell': {
                        backgroundColor: colors.primary[800]
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: colors.greenAccent[800],
                        borderBottom: 'none'
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400]
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: colors.greenAccent[800]
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${colors.grey[100]} !important`
                    }
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Team;
