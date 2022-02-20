import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Featured = () => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get("/movie/random/", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTFlNzFlY2FlMjM3ZmYyNjk5OTJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTM1NDQ1OSwiZXhwIjoxNjQ1Nzg2NDU5fQ.hsGtrM6EdrlAn5A8RDzElGFCwB7xM6i1gRlPyusOTag"
                    }
                })
                setContent(res.data[0]);
            } catch (e) {
                console.log(e)
            }
        }
        getRandomContent();
    }, []);

    return (
        <div className="featured">
            <img width="100%" src={content.img} alt="" />
            <div className="info">
                {/* <img src="" alt="Text" /> */}
                <span className="desc">{content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
