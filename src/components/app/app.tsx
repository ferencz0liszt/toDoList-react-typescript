import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../empoyees-add-form/employees-add-form";
import {Component} from "react";

interface AppProps {
}

interface AppState {
    data: {name: string | number, salary: string | number, increase: boolean, rise: boolean, id: number}[],
    term: string,
    filter: string
}

class App extends Component<AppProps, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {name: 'John', salary: 900, increase: false, rise: false, id: 1},
                {name: 'Peter', salary: 1500, increase: false, rise: false, id: 2},
                {name: 'Franz', salary: 2800, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
    }

    toggleItemRise = (id:number) => {
        this.setState(({data}) => ({
            data: data.map((element) => {
                if(element.id === id) {
                    return {...element, increase: !element.increase}
                }
                return element;
            })
        }))
    }

    toggleItemIncrease = (id: number) => {
        this.setState(({data}) => ({
            data: data.map(element => {
                if (element.id === id) {
                    return {...element, rise: !element.rise}
                }
                return element;
            })
        }))
    }

    deleteItem = (id: number) => {
        this.setState(({data}) => {
            return {
                data: data.filter((item) => item.id !== id)
            }
        })
    }

    addItem = (newItem: {name: string | number, salary: string | number, increase: false, rise: false, id: number}) => {
        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        })

    }

    countRaises = (data: any[]) => {
        let counter = 0;
        data.forEach(item => {
            if (item.rise === true) counter++;
        })
        return counter;
    }

    searchEmployee = (items: any[], term: string) => {
        if (term.length === 0) {
            return items;
        } else {
            return items.filter(item => {
                return item.name.indexOf(term) > -1;
            })
        }
    }

    onUpdateSearch = (term: string) => {
        this.setState({term})
    }

    onUpdateFilter = (filter: string) => {
        this.setState({filter});
    }

    filterVisibleData = (data: any[], filter: string) => {
        if (filter === 'promotion') {
            return data.filter(item => {
                return item.rise === true;
            })
        } else if (filter === '1k') {
            return data.filter(item => {
                return item.salary > 1000;
            })
        }
        else return data;
    }

    render() {
        const { data, term, filter } = this.state;
        const visibleData = this.searchEmployee(data, term);
        const filteredVisibleData = this.filterVisibleData(visibleData, filter);
        return (
            <div className="app">
                <AppInfo
                    countItems={data.length}
                    countRaises={this.countRaises(data)}/>

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        onUpdateFilter={this.onUpdateFilter}
                        filter={filter}/>
                </div>

                <EmployeesList
                    data={filteredVisibleData}
                    onDelete={this.deleteItem}
                    toggleIncrease={this.toggleItemIncrease}
                    toggleRise={this.toggleItemRise}
                />

                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;