import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import NewLink from './components/NewLink';
import Links from './components/Links';
import { useState } from "react";
import Button from "react-bootstrap/Button"

function App() {
  // localStorage.clear();
  /**
   * Load inital data into app on first load. This can not be null.
   */
  let tmpLink = [];
  let clientData = localStorage.getItem("weblink");
  const [results, setResults] = useState(tmpLink);

  if (clientData) {
    tmpLink = JSON.parse(clientData);
  } else {
    localStorage.setItem("weblink", "")
  }

  /**
   * Update local storage with new notes.
   */
  function saveLink(link) {
    console.log(link);
    if (link.name === "" || link.link === "" || link.tags.length === 0) { return; }
    tmpLink.push(link);
    localStorage.setItem("weblink", JSON.stringify(tmpLink))
    setResults(tmpLink);
  }

  /**
   * filter function  
   */
  var searchList = "";
  var tagList = ["Home", "Work", "School"];

  function filter(search) {
    searchList = search;
    runSearch(searchList, tagList);
  }

  function filterTag(tag) {
    tagList = tag;
    runSearch(searchList, tagList);
  }

  function runSearch(search, tag) {
    let stage1 = (tmpLink.filter(link => link.tags.some(val => tag.includes(val))));
    setResults(stage1.filter((val) => val.name.concat(val.link).toLowerCase().includes(search)));
  }

  /**
   * Delete everything
   */
  function deleteAll() {
    localStorage.clear();
    runSearch("", [])
  }


  return (
    <div className="App container-fluid">
      <div className="App-header row">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='row'>
        <div className='navigation  col-12 col-sm-3 '>
          <br /><br />
          <h5>Save a new link.</h5>
          <p>All fields must have a value and tag.</p>
          <NewLink saveFunction={saveLink} />
          <br /><br />
          <h5>Filter.</h5>
          <Search onSearchChangeProp={filter} onFilterChangeProp={filterTag} />
          <br /><br />
          <h5>Delete Everything.</h5>
          <Button variant='danger' onClick={deleteAll}>Delete</Button>
        </div>

        <div className='results col-12 col-sm-9'>
          <Links links={results} />
        </div>

      </div>
    </div>
  );
}

export default App;
