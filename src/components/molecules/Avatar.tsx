import { Box, PaperProps } from "@mui/material";

interface IBlockProps extends PaperProps {
    name: string | undefined;
    img: string | undefined;
    rate: string | undefined;
}

export const Avatar: React.FC<IBlockProps> = (props) => {
    return (
        <Box sx={{ width: "60px", marginRight: "15px", textAlign: "center" }}>
            <img style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#eee",
                border: "1px solid #e1e1e1"
            }} src={props.img}  />
            <h4 style={{ margin: 0, fontSize: '16px' }}>{props.name}</h4>
            <p>{props.rate}</p>
        </Box>
    )
}