import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

// 1. Definimos la interfaz de las Props para TypeScript
interface SelectorUIProps {
    value: string;
    onChange: (event: SelectChangeEvent<string>) => void;
}

// 2. Recibimos las props desestructuradas
export default function SelectorUI({ value, onChange }: SelectorUIProps) {
    return (
        <FormControl fullWidth>
            <InputLabel id="city-select-label">Ciudad</InputLabel>
            <Select
                labelId="city-select-label"
                id="city-simple-select"
                label="Ciudad"
                value={value}       // Controlado por el Padre
                onChange={onChange} // Avisa al Padre
            >
                <MenuItem disabled value=""><em>Seleccione una ciudad</em></MenuItem>
                <MenuItem value={'guayaquil'}>Guayaquil</MenuItem>
                <MenuItem value={'quito'}>Quito</MenuItem>
                <MenuItem value={'manta'}>Manta</MenuItem>
                <MenuItem value={'cuenca'}>Cuenca</MenuItem>
            </Select>
            {/* Nota: Corregido para que no se muestre si está el string con espacio en blanco ' ' */}
            {value.trim() && (
                <p>
                    Información del clima en <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{value}</span>
                </p>
            )}
        </FormControl>
    );
}
