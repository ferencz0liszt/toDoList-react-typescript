import EmployeesListItem from '../eployees-list-item/emloyees-list-item'
import './employees-list.css'
import {FC} from "react";

interface EmployeesListProps{
    data: {
        name: string | number, salary: string | number, increase: boolean, rise: boolean, id: number
    }[]
    onDelete: (id: number) => void,
    toggleIncrease: (id: number) => void,
    toggleRise: (id: number) => void
}

const EmployeesList : FC<EmployeesListProps> = ({data, onDelete, toggleIncrease, toggleRise}) => {

    const elements = data.map(employee => {
        const {id, ...employeeProps} = employee;
        return (
            <EmployeesListItem
                key = {id}
                {...employeeProps}
                onDelete = {() => onDelete(id)}
                toggleIncrease = {() => toggleIncrease(id)}
                toggleRise = {() => toggleRise(id)}
            />
        );
    });

    return (
      <ul className="app-list list-group">
          {elements}
      </ul>
    );

}

export default EmployeesList;