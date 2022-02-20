import { useEffect, useState } from "react";
import { Featured } from "../featured/Featured";
import { List } from "../list/List";
import Navbar from "../navbar/Navbar";
import "./home.scss";
import axios from "axios";


export const Home = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get("lists", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTFlNzFlY2FlMjM3ZmYyNjk5OTJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTM1NDQ1OSwiZXhwIjoxNjQ1Nzg2NDU5fQ.hsGtrM6EdrlAn5A8RDzElGFCwB7xM6i1gRlPyusOTag"
                    }
                });
                // console.log(res)
                setLists(res.data)
            } catch (e) {
                console.log(e)
            }
        }
        getRandomLists();
    }, [])

    return <div className="home">
        <Navbar />
        <Featured />
        {lists.map((list) => (
            <List list={list} />

        ))}

    </div>;
};
