import React from "react";
import {Link} from "react-router-dom";
import './mainStyle.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export const CreatePages = () => {
    return (
        <div className={'chatLinkButtonContainer'}>
            <Link to={'/links'}>
                <button className={'chatButton'}>Let`s go --<NavigateNextIcon></NavigateNextIcon>
                </button>
            </Link>
        </div>
    )
}