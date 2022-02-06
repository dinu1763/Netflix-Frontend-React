import "./listitem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { useState } from "react";
export const Listitem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "http://techslides.com/demos/sample-videos/small.mp4";
    return (
        <div className="listitem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src="https://www.webgeekstuff.com/assets/uploads/2021/07/the-best-netflix-originals-movies-you-shouldnt-miss-enola-holmes.jpg" alt="" />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />


                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrowIcon className="icon" />
                            <AddIcon className="icon" />
                            <ThumbUpOutlinedIcon className="icon" />
                            <ThumbDownOutlinedIcon className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 Hour 14 Min</span>
                            <span className="limit">+16</span>
                            <span>1994</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Praesentium laudantium mollitia labore suscipit deleniti
                        </div>
                        <div className="genre">
                            Fantasy
                        </div>
                    </div>
                </>
            )}

        </div>
    );
};
