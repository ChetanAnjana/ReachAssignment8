import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      filterType: "all"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  }

  filterItem = (item) => {
    const searchMatch = item.name.toLowerCase().includes(this.state.search);
    const typeMatch = this.state.filterType === "all" || item.type.toLowerCase() === this.state.filterType;
    return searchMatch && typeMatch;
  }

  onSelectFilterType = (eventKey) => {
    this.setState({ filterType: eventKey });
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title="Type">
          <Dropdown.Item eventKey="all" onSelect={this.onSelectFilterType}>All</Dropdown.Item>
          <Dropdown.Item eventKey="fruit" onSelect={this.onSelectFilterType}>Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="vegetable" onSelect={this.onSelectFilterType}>Vegetable</Dropdown.Item>
        </DropdownButton>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
