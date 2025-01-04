import { useEffect, useState } from "react";
import axios from 'axios';

var UseEffect = () => {
    var [post, setPost] = useState([]);
    var [user, setUser] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then((res) => {
                setPost(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users/')
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <section style={{ color: 'black', textAlign: 'left', marginLeft: '20px' }}>
            <h1>Fetching data from Json Placeholder API</h1>
            <h2>Posts are:</h2>
            <ol>
                {post.map((data) => {
                    return <li key={data.id}>{data.title}</li>;
                })}
            </ol>
            <h2>Users are:</h2>
            <ol>
                {user.map((data) => {
                    return <li key={data.id}>{data.name} {data.email}</li>;
                })}
            </ol>
        </section>
    );
};

export default UseEffect;