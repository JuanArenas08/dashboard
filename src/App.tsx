import { useState } from 'react'; // <-- Importamos useState en el Padre
import './App.css';
import SelectorUI from './components/SelectorUI';
import AlertUI from './components/AlertUI';
import HeaderUI from './components/HeaderUI';
import { Grid } from '@mui/material';
import { type SelectChangeEvent } from '@mui/material/Select'; // <-- Importamos el tipo para el handler

function App() {
    // 1. El estado ahora vive aquí en el padre
    const [cityInput, setCityInput] = useState('');

    // 2. Función que actualizará el estado cuando el hijo cambie
    const handleCityChange = (event: SelectChangeEvent<string>) => {
        setCityInput(event.target.value);
    };

    return (
        <Grid container spacing={5} sx={{ justifyContent: 'center', alignItems: 'center' }}>

            {/* Encabezado */}
            <Grid size={{ xs: 12, md: 12 }}>
                <HeaderUI />
            </Grid>

            {/* Alertas */}
            <Grid size={{ xs: 12, md: 12 }}
                container sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <AlertUI description="No se prevén lluvias" />
                <AlertUI description="Índice UV alto" severity="warning" variant="filled" />
            </Grid>

            {/* Selector: Le pasamos el estado y la función modificadora */}
            <Grid size={{ xs: 12, md: 3 }}>
                <SelectorUI value={cityInput} onChange={handleCityChange} />
            </Grid>

            {/* Indicadores: ¡Ahora puedes usar `cityInput` aquí también! */}
            <Grid size={{ xs: 12, md: 9 }}>
                Elemento: Indicadores {cityInput && `para ${cityInput}`}
            </Grid>

            {/* Gráfico */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                Elemento: Gráfico
            </Grid>

            {/* Tabla */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                Elemento: Tabla
            </Grid>

            {/* Información adicional */}
            <Grid size={{ xs: 12, md: 12 }}>Elemento: Información adicional</Grid>

        </Grid>
    );
}

export default App;
