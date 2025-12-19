export function AppCalculationHistory({ history, onRestore }) {
    return (
        <div style={{ marginTop: '20px' }}>
            <h3>Historia działań</h3>
            <table border="1" style={{ width: '100%', textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Działanie</th>
                        <th>Wynik</th>
                        <th>Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item, index) => (
                        <tr key={index}>
                            <td>{item.a} {item.op} {item.b}</td>
                            <td>{item.res}</td>
                            <td>
                                <button onClick={() => onRestore(index)}>Przywróć</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}