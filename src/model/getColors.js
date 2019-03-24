import hexRgb from 'hex-rgb';
import {colors} from './colors';

function formatName (name) {
    return name.split('-').map(item => item.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase())).join(' ');
}

export const getColors = () => {
    return Object.keys(colors).reduce((newColors, key) => {
        const color = colors[key];
        const { red, green, blue, alpha } = hexRgb(color);
        return newColors.concat({
            id: key.toLocaleLowerCase(),
            name: formatName(key),
            value: {
                hex: color,
                hexa: color.replace(/#/, ''),
                rgb: `rgb(${red}, ${green}, ${blue})`,
                rgba: `rgba(${red}, ${green}, ${blue}, ${alpha})`
            }
        });
    }, []);
}
