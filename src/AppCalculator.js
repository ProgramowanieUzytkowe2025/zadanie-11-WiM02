import { AppActionButton } from "./AppActionButton";

export function AppCalculator({ values, setValues, onCalculate }) {
    
    // A.5: Dynamiczne porównanie (wyzwalane przy każdej zmianie inputów)
    const getComparison = () => {
        if (values.a === '' || values.b === '') return "Wpisz obie liczby";
        const numA = Number(values.a);
        const numB = Number(values.b);
        if (numA > numB) return "Liczba A jest większa od liczby B";
        if (numA < numB) return "Liczba A jest mniejsza od liczby B";
        return "Liczba A jest równa liczbie B";
    };

    const handleAction = (op) => {
        const numA = Number(values.a);
        const numB = Number(values.b);
        let res;

        if (op === '/' && numB === 0) {
            res = "Błąd: dzielenie przez 0"; // A.7
        } else {
            if (op === '+') res = numA + numB;
            if (op === '-') res = numA - numB;
            if (op === '*') res = numA * numB;
            if (op === '/') res = numA / numB;
        }

        const currentComparison = getComparison();
        onCalculate(numA, numB, op, res, currentComparison);
    };

    // A.6: Walidacja przycisków
    const isInvalid = values.a === '' || values.b === '';

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <div>
                <label>A: </label>
                <input type="number" value={values.a} onChange={(e) => setValues({...values, a: e.target.value})} />
            </div>
            <div>
                <label>B: </label>
                <input type="number" value={values.b} onChange={(e) => setValues({...values, b: e.target.value})} />
            </div>

            <div style={{ margin: '10px 0' }}>
                Wynik działania: <input type="text" readOnly value={values.result} />
            </div>

            <AppActionButton label="+" onClick={() => handleAction('+')} disabled={isInvalid} />
            <AppActionButton label="-" onClick={() => handleAction('-')} disabled={isInvalid} />
            <AppActionButton label="*" onClick={() => handleAction('*')} disabled={isInvalid} />
            <AppActionButton label="/" onClick={() => handleAction('/')} disabled={isInvalid} />

            <div style={{ marginTop: '10px' }}>
                Porównanie: <input type="text" readOnly style={{ width: '250px' }} value={getComparison()} />
            </div>
        </div>
    );
}