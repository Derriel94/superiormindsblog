import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import BloggerTableRow from "./BloggerTableRow";
  
const BloggerList = () => {
  const [bloggers, setBloggers] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:3001/bloggers/")
      .then(({ data }) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return bloggers.map((res, i) => {
      return <BloggerTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default BloggerList;