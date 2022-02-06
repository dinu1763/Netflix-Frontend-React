import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export const Featured = () => {
    return (
        <div className="featured">
            <img width="100%" src="https://images.prismic.io/nimsdai/b6d80c6c-5a3e-4966-a913-dcbd6c3b900f_EN-US_Main_01_16X9_RGB_POST.jpg?auto=compress,format&rect=0,156,2500,1250&w=1200&h=600" alt="" />
            <div className="info">
                {/* <img src="" alt="Text" /> */}
                <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, quis exercitationem? Impedit quidem voluptate voluptatibus in sequi aspernatur
                    laborum libero dolore non quo, optio explicabo, eaque harum labore? In, nemo.
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
