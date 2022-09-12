import './empoyees-list-item.css'
import {FC} from "react";


interface EmployeesListItemProps {
    key: number,
    name: string | number,
    salary: string | number,
    increase: boolean,
    rise: boolean,
    onDelete: () => void,
    toggleIncrease: () => void,
    toggleRise: () => void
}


const EmployeesListItem: FC<EmployeesListItemProps> = (props) => {

    const {name, salary, increase, rise, onDelete, toggleIncrease, toggleRise} = props;

    let classList = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classList += ' increase';
    }
    if (rise) {
        classList += ' like';
    }

    return (
        <li className={classList}>
            <span
                className="list-group-item-label"
                onClick={toggleRise}>
                {name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={toggleIncrease}>
                    <i className="fas fa-check"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-ban"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default EmployeesListItem;