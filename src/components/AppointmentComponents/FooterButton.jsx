import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const isStay = (v) => !v || v === "stay";

const FooterButton = ({
  gotoLocation = "",
  backtoLocation = "",
  onNextClick,
  onBackClick,
  disableNext = false,
  disableBack = false,
  labelNext = "",
  labelBack = "",
}) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="d-flex flex justify-content-between mb-0"
        style={{ width: "850px", marginLeft: "1.5rem" }}
      >
        {isStay(backtoLocation) ? (
          <Button
            className="d-flex align-items-center justify-content-center shadow-lg"
            style={{
              width: "125px",
              height: "57px",
              color: "#002D73",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "18px",
              gap: "10px",
            }}
            onClick={onBackClick}
            disabled={disableBack}
          >
            <i className="bi bi-chevron-left" />
            {labelBack}
          </Button>
        ) : (
          <Button
            as={Link}
            to={`/${backtoLocation}`}
            className="d-flex align-items-center justify-content-center border-0 shadow-sm"
            style={{
              width: "125px",
              height: "57px",
              color: "#002D73",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "18px",
              gap: "10px",
            }}
          >
            <i className="bi bi-chevron-left" />
            {labelBack}
          </Button>
        )}

        {isStay(gotoLocation) ? (
          <Button
            className="d-flex align-items-center justify-content-center border-0 shadow-sm"
            style={{
              width: "125px",
              height: "57px",
              color: "#ffffff",
              background: "#002D73",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "18px",
              gap: "10px",
            }}
            onClick={onNextClick}
            disabled={disableNext}
          >
            <i className="bi bi-chevron-right" />
            {labelNext}
          </Button>
        ) : (
          <Button
            as={Link}
            to={`/${gotoLocation}`}
            className="d-flex align-items-center justify-content-center border-0 shadow-sm"
            style={{
              width: "125px",
              height: "57px",
              color: "#ffffff",
              background: "#002D73",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "18px",
              gap: "10px",
            }}
          >
            <i className="bi bi-chevron-right" />
            {labelNext}
          </Button>
        )}
      </div>
    </div>
  );
};
export default FooterButton;
