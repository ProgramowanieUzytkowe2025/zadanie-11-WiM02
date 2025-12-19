export function AppActionButton({ label, onClick, disabled }) {
    return (
        <button onClick={onClick} disabled={disabled} style={{ margin: '15px', padding: '10px 15px' }}>
            {label}
        </button>
    );
}