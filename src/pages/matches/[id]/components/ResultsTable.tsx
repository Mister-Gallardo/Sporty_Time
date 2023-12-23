import React from 'react';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { matchResults } from '../../../../services/matches/interface';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { Box, Typography } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import { Status } from '../../../../types';
import Table from '@mui/material/Table';

function createData(name: string, setsArr: number[]) {
  return { name, set1: setsArr[0], set2: setsArr[1], set3: setsArr[2] };
}

interface IResultsTable {
  winningTeam: string | null;
  status: Status;
  matchResults: matchResults;
}

export const ResultsTable: React.FC<IResultsTable> = ({
  winningTeam,
  status,
  matchResults,
}) => {
  const getSetResults = (team: string): number[] => {
    if (!matchResults || (!matchResults && status === Status.WITHOUT_RESULT))
      return [0, 0, 0];

    return matchResults.map((item: any) => {
      return team === 'A' ? item[0] : item[1];
    });
  };

  const teamAResults = getSetResults('A');
  const teamBResults = getSetResults('B');

  const rows = [createData('A', teamAResults), createData('B', teamBResults)];

  return (
    <Box mt={3}>
      <Typography fontSize={18} fontWeight={600} mb={1}>
        Результат
      </Typography>

      <TableContainer sx={{ border: 'none' }}>
        <Table aria-label="results table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: 16, color: '#777', paddingY: 1 }}
              >
                Set-1
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: 16, color: '#777', paddingY: 1 }}
              >
                Set-2
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: 16, color: '#777', paddingY: 1 }}
              >
                Set-3
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontWeight: 600,
                    fontSize: 22,
                    borderLeft: '1.5px solid #eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 1,
                    paddingRight: 2,
                  }}
                >
                  {row.name}
                  <Box
                    width={30}
                    height={30}
                    borderRadius={30}
                    border="2px solid #36bfa5"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    visibility={winningTeam === row.name ? 'visible' : 'hidden'}
                  >
                    <EmojiEventsOutlinedIcon fontSize="small" />
                  </Box>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: 25,
                    border: '1.5px solid #eee',
                    padding: 0,
                  }}
                >
                  {row.set1}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: 25,
                    border: '1.5px solid #eee',
                    padding: 0,
                  }}
                >
                  {row.set2}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: 25,
                    border: '1.5px solid #eee',
                    padding: 0,
                  }}
                >
                  {row.set3}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
