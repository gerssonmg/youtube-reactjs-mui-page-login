import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

function createData(
    id: number,
    date: string,
    name: string,
    shipTo: string,
    paymentMethod: string,
    amount: number,
    desconto: boolean
) {
    return { id, date, name, shipTo, paymentMethod, amount, desconto };
}

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        'Elvis Presley',
        'Tupelo, MS',
        'VISA ⠀•••• 3719',
        312.44,
        true
    ),
    createData(
        1,
        '16 Mar, 2019',
        'Paul McCartney',
        'London, UK',
        'VISA ⠀•••• 2574',
        866.99,
        true
    ),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81, true),
    createData(
        3,
        '16 Mar, 2019',
        'Michael Jackson',
        'Gary, IN',
        'AMEX ⠀•••• 2000',
        654.39,
        true
    ),
    createData(
        4,
        '15 Mar, 2019',
        'Bruce Springsteen',
        'Long Branch, NJ',
        'VISA ⠀•••• 5919',
        212.79,
        false
    ),
];

const rows1 = [
    ...rows
]

const TableComponent = () => {
    return (

        <Box
            // bgcolor="#cdd0dc"
            p={8}
            display="flex"
            justifyContent="center"
        >
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Enviado para</TableCell>
                            <TableCell>Pagou com</TableCell>
                            <TableCell align="right">Valor</TableCell>
                            <TableCell align="right">Teve Desconto?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows1.map((row, index) => (
                                <TableRow hover
                                    // style={{
                                    //     backgroundColor: index % 2 === 0 ? '#eff4f8' : ''
                                    // }}
                                    onClick={() => alert(`Você clicou na linha ${index}. Nome: ${row.name}`)}
                                    sx={{
                                        '&:hover': {
                                            cursor: 'pointer'
                                        }
                                    }}>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.shipTo}</TableCell>
                                    <TableCell>{row.paymentMethod}</TableCell>
                                    <TableCell align="right">{`R$ ${row.amount}`}</TableCell>
                                    <TableCell style={{ alignContent: "left" }} align="center">{
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            width="full">
                                            {row.desconto ?
                                                <Box px={2}
                                                    bgcolor="green"
                                                    borderRadius="16px"
                                                    color="#FFF">
                                                    Sim
                                                </Box>
                                                :
                                                <Box px={2} bgcolor="red" borderRadius="16px" color="#FFF">
                                                    Não
                                                </Box>

                                            }
                                        </Box >
                                    }</TableCell>
                                </TableRow>
                            ))
                        }


                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    )
}

export default TableComponent