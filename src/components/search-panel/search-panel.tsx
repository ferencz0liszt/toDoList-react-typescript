import './search-panel.css'
import {Component} from "react";

interface SearchPanelProps {
    onUpdateSearch: (term: string) => void;
}

interface SearchPanelState {
    term: string
}

class SearchPanel extends Component<SearchPanelProps, SearchPanelState> {
    constructor(props: any) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (event: any) => {
        const term = event.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term);
    }

    render() {
        const { term } = this.state;
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Search for the employee"
                value={term}
                onChange={this.onUpdateSearch}
                />
        )
    }
}

export default SearchPanel;