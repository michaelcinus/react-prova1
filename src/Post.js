import react, { useState } from "react";

function Post(props) {

    var [count, setCount] = useState(0);
    var increment = () => {
        setCount(count + 1)
    }
    return (

        <div class="card bg-light mb-3">
            <div class="card-header">{props.author}</div>
            <div class="card-body">
              <h5 class="card-title">{props.text}</h5>
              <div class="row">
                  <div class="col-sm-6">
                    <p>Like : {count}</p>
                  </div>
                  <div class="col-sm-6">
                    <button onClick={increment}>Like</button>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Post;