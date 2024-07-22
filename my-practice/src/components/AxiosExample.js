import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [title, setTitle] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        const x = Response.data.map((user) => ({
          title: user.title,
        }));
        setTitle(x);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>
    <ul>
        {title.map((item,index) =>( 
            <li key={index}>{item.title}</li>
        ))}
    </ul>
  </div>;
};

export default AxiosExample;
