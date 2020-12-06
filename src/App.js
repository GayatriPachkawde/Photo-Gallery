import React, { useState, useEffect } from "react";
import "./App.css";
import ImageComponent from "./Image/ImageComponent";
import UserInput from "./UserInput/UserInput";
import Welcome from "./Welcome/Welcome";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ImageArr from "./Images/homePageImages";
import Button from "./Button/Button";
import Gallery from "./Typecode/Gallery";
function App() {
  const [imageState, setImageState] = useState(ImageArr);
  const [addButtonEnabled, setAddbuttonState] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [historyArr, sethistoryArr] = useState([]);
  const [undoState, setUndoState] = useState(false);

  const [apiImg, setImg] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((respone) => respone.json())
      .then((res) => setImg(res));
  }, []);

  const deleteClickedHandler = (index) => {
    const newArr = [...imageState];
    newArr.splice(index, 1);
    setImageState(newArr);
    const currImgArr = [...imageState];
    const currHistoryArr = [...historyArr, currImgArr];
    sethistoryArr([...currHistoryArr]);
    setUndoState(true);
  };

  const addClicked = () => {
    setAddbuttonState(true);
    setUndoState(false);
  };

  const changeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const submitHandler = () => {
    if (userInput.length > 0) {
      const newArr = [...imageState];
      newArr.push({ src: userInput, comment: "" });
      setImageState(newArr);
      setAddbuttonState(false);
      setUserInput("");
    }
  };

  const undoClicked = () => {
    const lengthofHistoryArrr = historyArr.length;
    const requiredIndex = lengthofHistoryArrr - 1;
    const newArr = [...historyArr[requiredIndex]];
    setImageState(newArr);
    const currHistoryArr = [...historyArr];
    currHistoryArr.pop();
    sethistoryArr(currHistoryArr);
    if (historyArr.length === 1) {
      setUndoState(false);
    }
  };

  const commentChangeHandler = (event, idx) => {
    const newArr = [...imageState];
    newArr[idx].comment = event.target.value;
    setImageState(newArr);
  };

  return (
    <Router>
      <div>
        <Route exact path="/">
          <div className="mainDiv">
            <Welcome />
          </div>
        </Route>

        {apiImg.length > 0 ? (
          <Route exact path="/typecode">
            <Gallery data={apiImg} />
          </Route>
        ) : null}

        <Route exact path="/gallery">
          <div className="heading">
            {addButtonEnabled ? (
              <UserInput
                clicked={submitHandler}
                srcchange={(event) => changeHandler(event)}
              />
            ) : (
              <Button
                clicked={addClicked}
                msg="Press Add to add an image"
                btn="Add"
              />
            )}
            {undoState ? (
              <Button btn="Undo" clicked={undoClicked} msg="" />
            ) : null}
          </div>

          <div className="gallery">
            {imageState.map((currImg, index) => {
              return (
                <ImageComponent
                  imgSrc={currImg.src}
                  clicked={() => deleteClickedHandler(index)}
                  alt={currImg}
                  key={`${currImg}${index}`}
                  change={(event) => commentChangeHandler(event, index)}
                  comment={currImg.comment}
                />
              );
            })}
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default App;
