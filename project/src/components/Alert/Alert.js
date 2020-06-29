import React, { useEffect, useState } from "react";

import "./Alert.css";
import { Alert } from "react-bootstrap";

function Alerta({ variant, show, mensage }) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    function setarShow() {
      setShowAlert(show);
    }
    setarShow();
  }, [show]);

  return (
    <>
      {showAlert && (
        <Alert
          variant={variant}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>{mensage}</Alert.Heading>
        </Alert>
      )}
    </>
  );
}

export default Alerta;
