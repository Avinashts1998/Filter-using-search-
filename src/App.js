import { Component } from "react";
import UserProfile from "./components/UserProfile";

import "./App.css";

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      "https://image.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg",
    name: "Charlie",
  },
  {
    uniqueNo: 2,
    imageUrl:
      "https://image.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    name: "Daniel",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Diego",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Dean",
  },
  {
    uniqueNo: 5,
    imageUrl:
      "https://image.freepik.com/free-photo/portrait-african-american-man_23-2149072214.jpg",
    name: "James",
  },
  {
    uniqueNo: 6,
    imageUrl:
      "https://image.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg",
    name: "Jackson",
  },
];

class App extends Component {
  state = {
    searchInput: "",
    usersDetailsList: initialUserDetailsList,
  };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  deleteUser = (uniqueNo) => {
    const { usersDetailsList } = this.state;
    const filteredUsersData = usersDetailsList.filter(
      (each) => each.uniqueNo !== uniqueNo
    );
    this.setState({
      usersDetailsList: filteredUsersData,
    });
  };

  render() {
    const { searchInput, usersDetailsList } = this.state;
    const searchResults = usersDetailsList.filter((eachUser) =>
      eachUser.name.includes(searchInput)
    );
    return (
      <div className="app-container">
        <h1 className="title">All Contacts</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map((eachUser) => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
