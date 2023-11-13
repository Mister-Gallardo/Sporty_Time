import { Box, PaperProps, Typography } from "@mui/material";
import { Avatar } from "./Avatar";
interface IBlockProps extends PaperProps { }

export const ResultCard: React.FC<IBlockProps> = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: "350px",
            padding: "5px 10px",
            marginRight: '15px',
            borderRadius: "10px",
            backgroundColor: "#fff",
            justifyContent: "space-between"
        }} >
            <Box>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingBottom: "10px",
                    marginBottom: "10px",
                    borderBottom: "1px solid #eee"
                }} >
                    <Avatar img='' name='Evan' rate="2"></Avatar>
                    <Avatar img='' name='Tomas' rate="2"></Avatar>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Avatar img='' name='Tomas' rate="2"></Avatar>
                    <Avatar img='' name='Eva' rate="2"></Avatar>
                </Box>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#777", margin: "0" }}>Oct 28 | 9:00 - 10:30</p>
                <Typography sx={{
                    paddingBottom: "10px",
                    marginBottom: "10px",
                    borderBottom: "1px solid #eee",
                    position: "relative",
                    fontSize: "38px",
                    margin: "0",
                    paddingLeft: "40px",
                    lineHeight: 2.5,
                    letterSpacing: "10px",
                    '::before': {
                        position: "absolute",
                        content: '""',
                        width: "40px",
                        height: "40px",
                        left: "-40px",
                        top: "30%",
                        backgroundImage: "url('http://localhost:3000/img/cup.jpg')",
                        backgroundSize: "100% 100%",

                    }
                }} > 667</Typography>
                <Typography sx={{
                    position: "relative",
                    fontSize: "38px",
                    margin: "0",
                    paddingLeft: "40px",
                    lineHeight: 2.5,
                    letterSpacing: "10px"
                }}>256</Typography>
            </Box>
        </Box>
    )
}