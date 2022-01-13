import Button from "react-bootstrap/Button";
import { useState } from "react";
import TagButtons from "./TagButtons";

export default function AddButton(props) {

    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [tags, setTags] = useState([]);

    const handleChange = (tags) => {
        console.log(tags);
        setTags(tags)
    };

    function saveLinkComponent() {
        let newObj = {
            name: name,
            link: link,
            tags: tags
        }

        props.saveFunction(newObj);
        
        setName("");
        setLink("");
        setTags([]);
    }

    return (
        <>
            <div>
                <label>Name</label>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.currentTarget.value)} required></input>
            </div>
            <div>
                <label>Link</label>
                <input placeholder="www.example-link.com" value={link} onChange={(e) => setLink(e.currentTarget.value)} required></input>
            </div>
            <div>
                <label>tags</label>
                <TagButtons tags={tags} onChange={handleChange} required/>
            </div>
            <div>
                <Button id={"new-link"} variant='primary' onClick={saveLinkComponent}>Add new link</Button>
            </div>
        </>
    )
}