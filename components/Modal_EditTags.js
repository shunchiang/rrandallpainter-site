import React, { useState, useEffect } from 'react';
import axios from "axios";
import style from "../sass/EditTags.module.scss";

import { Tags } from "../utils/tags";

export default function EditTags(props) {

    // State Declarations
    const [tags, setTags] = useState({});
    const id = [props.id]

    // Toggling Tags Logic
    function toggleTag(tag)
    {
        const newTags = {...tags};
        console.log(newTags[tag])
        if ( newTags[tag] === true ) delete newTags[tag];
        else newTags[tag] = true;
        setTags(newTags);
        console.log(newTags)
        console.log(tags);
    }

    const axiosInstance = axios.create({
        withCredentials: true,
    });

    function onSubmit(e)
    {
        e.preventDefault();

        const data = {ids: id, tags: Object.keys(tags)};
        console.log(data)

        axiosInstance
        .put
        (
            "https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/tags/update",
            data,
            {
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
        )
        .then
        ((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <form className={style.Form} onSubmit={onSubmit}>
                <div className={style.Body}>
                    <div className={style.Title}>Editing Tags</div>
                    <div className={style.Stage}>
                        <div className={style.Tags}>
                            <p>Tags</p>
                            <ul>
                                {Tags.map((e) => (
                                    <li onClick={() => toggleTag(e)} style={{color: tags[e] ? "lightGreen" : "white"}}>
                                    <span>
                                        <i className={`${style.taggedIcon} fas fa-tag`}></i>
                                        {e}
                                    </span>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div className={style.ImagePreview}>
                            <img src={props.img} alt="preview"/>
                            <div className={style.Id}>public_id: {props.id}</div>
                        </div>
                    </div>
                    <button className={style.Button} >
                        Confirm
                    </button>
                </div>
            </form>
        </>
    )
}