import "./listitem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Listitem = ({ index, item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movie/find/" + item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTFlNzFlY2FlMjM3ZmYyNjk5OTJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTM1NDQ1OSwiZXhwIjoxNjQ1Nzg2NDU5fQ.hsGtrM6EdrlAn5A8RDzElGFCwB7xM6i1gRlPyusOTag"
                    }
                });
                console.log(res.data)
                setMovie(res.data);
            } catch (e) {
                console.log(e);
            }
        };
        getMovie()
    }, [item])

    return (

        <div className="listitem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={movie.img} alt="" />
            {isHovered && (
                <>

                    <video src={movie.video} autoPlay={true} loop />


                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrowIcon className="icon" />
                            <AddIcon className="icon" />
                            <ThumbUpOutlinedIcon className="icon" />
                            <ThumbDownOutlinedIcon className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 Hour 14 Min</span>
                            <span className="limit">{movie.limit}</span>
                            <span>1994</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="genre">
                            {movie.genre}
                        </div>
                    </div>
                </>
            )}

        </div>

    );
};
