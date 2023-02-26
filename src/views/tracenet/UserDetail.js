
import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MainCard from 'ui-component/cards/MainCard';
import { Card } from '@mui/material';

// ================================|| AUTH3 - LOGIN ||================================ //

const UserDetail = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <MainCard title="Create Tracenet User">
            <Card>
                <React.Fragment>
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>Tracenet Code</TableCell>
                                    <TableCell align="right">Active Status</TableCell>
                                    <TableCell align="right">Tracenet Code</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                                    <TableCell>
                                        <IconButton
                                            aria-label="expand row"
                                            size="small"
                                            onClick={() => setOpen(!open)}
                                        >
                                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        user
                                    </TableCell>
                                    <TableCell align="right">calories</TableCell>
                                    <TableCell align="right">calories</TableCell>
                                    <TableCell align="right">calories</TableCell>
                                    <TableCell align="right">calories</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <Box sx={{ margin: 1 }}>
                                                <Typography variant="h6" gutterBottom component="div">
                                                    History
                                                </Typography>
                                                <Table size="small" aria-label="purchases">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Date</TableCell>
                                                            <TableCell>Customer</TableCell>
                                                            <TableCell align="right">Amount</TableCell>
                                                            <TableCell align="right">Total price ($)</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {/* {row.history.map((historyRow) => ( */}
                                                            <TableRow key="date">
                                                                <TableCell component="th" scope="row">
                                                                    historyRow.date
                                                                </TableCell>
                                                                <TableCell>historyRow.customerId</TableCell>
                                                                <TableCell align="right">historyRow.amount</TableCell>
                                                                <TableCell align="right">
                                                                    {Math.round(500 * 30 * 100) / 100}
                                                                </TableCell>
                                                            </TableRow>
                                                        {/* ))} */}
                                                    </TableBody>
                                                </Table>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </React.Fragment>
            </Card>
        </MainCard >
    )


}
export default UserDetail;