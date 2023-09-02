import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
const Search = () => {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><BsSearch /></InputGroup.Text>
                <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </>
    )
}

export default Search