import React, { useState } from "react";
import { useEffect } from "react";

export const Mail = (props) => {
  // console.log("props -" , props.apidata  )

  const onClickFavorite = (id) => {
    // console.log("id - ", id);

    if (Number(localStorage.getItem(`emailId-${id}`)) !== id) {
      // console.log("set as Favorite ");
      localStorage.setItem(`emailId-${id}`, id);
      window.location.reload("/");
    } else {
      alert("Already Favorite");
    }
  };

  const onClickRemoveFavorite = (id) => {
    // console.log("id - ", id);

    if (Number(localStorage.getItem(`emailId-${id}`)) !== id) {
      // console.log("set as Favorite ");
      localStorage.removeItem(`emailId-${id}`, id);
      window.location.reload("/");
    } else {
      alert("Already Favorite");
    }
  };

  return (
    <>
      {props.apidata !== undefined
        ? props.apidata.map((data, index) => {
            // console.log(data)
            return (
              <div className="email dflex" key={index}>
                <div className="userImage">
                  <p>{data.from.name[0]}</p>
                </div>

                <div className="description">
                  <div className="from dflex">
                    <p>id- </p>
                    <p> {data.id}</p>
                  </div>

                  <div className="from dflex">
                    <p>From- </p>
                    <p>
                      {" "}
                      {data.from.name} {"<"} {data.from.email} {">"}{" "}
                    </p>
                  </div>

                  <div className="subject dflex">
                    <p>Subject: </p>
                    <p> {data.subject} </p>
                  </div>

                  <div className="des dflex">
                    <p> {data.short_description} </p>
                  </div>

                  <div className="date dflex">
                    <p>{Date(data.date)} </p>
                    <p>
                      {" "}
                      {localStorage.getItem(`emailId-${data.id}`) ===
                      data.id ? (
                        <button onClick={() => onClickRemoveFavorite(data.id)}>
                          Remove From Favorite
                        </button>
                      ) : (
                        <button onClick={() => onClickFavorite(data.id)}>
                          Add to Favorite
                        </button>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};
