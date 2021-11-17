import React from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

const Page403 = () => (
  <div className="text-center">
    <h1 className="display-1 font-weight-bold">403</h1>
    <p className="h1">Access is denied!</p>
    <p className="h2 font-weight-normal mt-3 mb-4">
    You can not access this page.
    </p>
    <Link to="/vaccines">
      <Button color="primary" size="lg">
        Return to website
      </Button>
    </Link>
  </div>
);

export default Page403;
