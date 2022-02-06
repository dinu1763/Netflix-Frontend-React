import { Featured } from "../featured/Featured";
import { List } from "../list/List";
import Navbar from "../navbar/Navbar";
import "./home.scss";


export const Home = () => {
    return <div className="home">
        <Navbar />
        <Featured />
        <List />
        <List />
        <List />
        <List />
    </div>;
};
