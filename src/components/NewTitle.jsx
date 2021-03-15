import React, {useContext, useRef} from "react";
import { Context } from "../store/appContext";



const NewTitle = () => {

  const { actions, store } = useContext(Context);
  let titleRef = useRef(null);
  let contentRef = useRef(null);
  
  return (
    <form onSubmit={(e) => actions.handleSubmitTopics(e)}>
    <div className="container">
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Title
        </label>
        <input
          onChange={(e) => actions.handleChange(e)}
          name="title"
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="type the title..."
          value={store.title}
          ref={r => (titleRef = r)}
         
          
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Descriptions
        </label>
        <textarea
          onChange={(e) => actions.handleChange(e)}
          name="content"
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="type the description..."
          value={store.content}
          ref={r => (contentRef = r)}
         
        />
      </div>
      <button
      onClick={() =>  {titleRef.value = ""; contentRef.value = ""}}
        type="button"
        class="btn btn-primary"
      >
        Create Discussion
      </button>
    </div>
    </form>
  );
};

export default NewTitle;
