import './employees-add-form.css'
import {Component, FormEvent, } from "react";

interface EmployeesAddFormProps {
    onAdd: (newItem : any) => void;
}

interface EmployeesAddFormState {
    [key: string]: string | number;
}

class employeesAddForm extends Component<EmployeesAddFormProps , EmployeesAddFormState>{

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        };
    }

    onValueChange = (event: any) => {
        const { target } = event;
        const key = event.target.name;
        this.setState({
            [key]: target.value
        })
    }

    createEmployee = () => {
        const { name, salary } = this.state;
        return  {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: Math.floor(Math.random() * 1000)
        }
    }

    render() {
        const { name, salary } = this.state;
        const { onAdd } = this.props;
        const newItem = this.createEmployee();
        const addItem = (event: FormEvent) => {
            event.preventDefault();
            onAdd(newItem);
        };

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="What is his name?"
                           name="name"
                           value={name}
                           onChange={this.onValueChange} />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="His salary in USD?"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange} />

                    <button type="submit"
                            onClick={addItem}
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default employeesAddForm;