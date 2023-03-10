import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        { field: 'registrarId', headerName: 'Registrar ID' },
        { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left',
            flex: 0.75
        },
        { field: 'phone', headerName: 'Phone Number', flex: 1 },
        { field: 'email', headerName: 'E-mail', flex: 1 },
        { field: 'address', headerName: 'Address', flex: 1 },
        { field: 'city', headerName: 'City', flex: 1 },
        { field: 'zipCode', headerName: 'ZipCode', flex: 1 }
    ];

    return (
        <Box m='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title='CONTACTS' subtitle='List of Contacts for Future Reference' />
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
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Contacts;
