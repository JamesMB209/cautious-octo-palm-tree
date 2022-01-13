import { useState } from "react";
import TagButtons from "./TagButtons";


export default function Search(props) {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const onSearchChangeLocal = (e) => {
    const newSearch = e.currentTarget.value.toLowerCase();
    setSearch(newSearch);
    props.onSearchChangeProp(newSearch);
  };

  const handleChange = (tags) => {
    props.onFilterChangeProp(tags)
    setTags(tags)
  };

  return (
    <div className="search">
      <TagButtons id={"search"} tags={tags} onChange={handleChange} />
      <input className="my-1" type="text" value={search} onChange={onSearchChangeLocal} />
    </div>
  );
}