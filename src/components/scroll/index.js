export default function scroll() {
    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <p
                onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                }}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#FFC23C',
                    cursor: 'pointer',
                    fontSize: '16px',
                    marginTop: '25px',
                    textDecoration: 'underline' 
                }}
            >
                Scroll to the top
            </p>
        </div>
    )
}