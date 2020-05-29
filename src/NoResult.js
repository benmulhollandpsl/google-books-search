import React from "react";
import { Row } from "./Grid";
// import Jumbotron from "/Jumbotron";

function NoResult() {
  return (
    <div>
      <Row>
        <col size="md-12">
          {/* <Jumbotron> */}
            <h1 className="text-white">404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          {/* </Jumbotron> */}
        </col>
      </Row>
    </div>
  );
}

export default NoResult;
