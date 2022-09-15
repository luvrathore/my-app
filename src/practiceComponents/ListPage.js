import React from "react";
import { List} from "@material-ui/core";
import {sp as Sports} from "./data2.js";
import SubList from "./SubList";
// import video1 from "../resources/video1.mp4";

function handleClickSubList(event) {
  console.log("asdf");
  debugger;
}

function ListPage() {
  // [currentVideoUrl, setcurrentVideoUrl] = React.useState("");
  return (
    <>
      <List>
        {
          Sports.map((sport) => {
            return (
              <>
                <SubList
                  name={sport.name}
                  drills={sport.drills}
                  onClickSubList={handleClickSubList}
                />
              </>
            );
          })
          // console.log(e);
        }
      </List>
    </>
  );
}

export default ListPage;
