import React from 'react';

export function AppHeader({ onFontSizeChange }) {
    return (
        <header style={{ borderBottom: '2px solid #000', marginBottom: '20px', padding: '10px' }}>
            <h1>Wiktoria Makara</h1>
            
            <div>
                <span onClick={() => onFontSizeChange('12px')} style={{ cursor: 'pointer', fontSize: '12px', margin: '5px' }}>A</span>
                <span onClick={() => onFontSizeChange('18px')} style={{ cursor: 'pointer', fontSize: '18px', margin: '5px' }}>A</span>
                <span onClick={() => onFontSizeChange('24px')} style={{ cursor: 'pointer', fontSize: '24px', margin: '5px' }}>A</span>
            </div>
        </header>
    );
}