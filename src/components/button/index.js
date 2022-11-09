import Button from '@mui/material/Button'

export default function ButtonComponent({ text, onClick, sx }) {
    return (
        <div>
            <Button
                onClick={onClick}
                style={{ background: '#3F0071', fontFamily: 'Fira Sans', fontWeight: 'bold', opacity: '0.9' }}
                sx={sx} 
                variant="contained"
        >
                {text}
            </Button>
        </div>
    )
}