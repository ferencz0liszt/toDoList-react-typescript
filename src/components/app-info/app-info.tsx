import './app-info.css'
import {FC} from "react";

interface AppInfoProps {
    countItems: number;
    countRaises: number;
}

const AppInfo : FC<AppInfoProps> = (props) => {
    const { countItems, countRaises } = props;
    return (
        <div className="app-info">
            <h1>Employees list</h1>
            <h2>Total number of employees: {countItems}</h2>
            <h3>Gets reward: {countRaises}</h3>
        </div>
    );
}

export default AppInfo;