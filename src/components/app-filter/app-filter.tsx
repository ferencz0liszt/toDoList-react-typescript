import './app-filter.css'
import {Component} from "react";

interface AppFilterProps {
    onUpdateFilter: (filter: string) => void,
    filter: string
}

class AppFilter extends Component<AppFilterProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { onUpdateFilter, filter } = this.props;

        const buttonsData = [
            {name: 'all', label: 'All employees'},
            {name: 'promotion', label: 'For promotion'},
            {name: '1k', label: 'More than 1000$'},
        ];

        const buttons = buttonsData.map(({name, label}) => {
            const active = name===filter;
            const className = active ? 'btn-light' : 'btn-outline-light';
            return (
                <button className={`btn ${className}`}
                        type={"button"}
                        onClick={() => onUpdateFilter(name)}
                        key={name}
                >
                    {label}
                </button>
            )
        })



        return (
            <div className={"btn-group"}>
                {buttons}
            </div>
        )
    }
}

export default AppFilter;