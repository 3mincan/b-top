import React, { FC, useState, useCallback, useEffect } from "react";
import axios from "axios";
import "./style.scss";
import { Helmet } from "react-helmet";

type Props = {
  endpoint?: string;
};

const formspree = `https://formspree.io/`;

export const Formspree: FC<Props> = ({ endpoint }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnChange = (event: any) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const [serverState, setServerState] = useState({
    submitting: false,
    status: {
      ok: false,
      msg: "",
    },
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    setServerState({
      submitting: true,
      status: { ok: false, msg: "Sending" },
    });
    axios
      .post(formspree + `${endpoint}`, inputs)
      .then((r) => {
        handleServerResponse(true, "Thanks!");
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  const location = window.location.href;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <title>Emincan Demirkaya | Contact</title>
        <meta name="title" content="Emincan Demirkaya" />
        <meta name="description" content="Contact Emincan Demirkaya" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={location} />
        <meta property="og:title" content="Emincan Demirkaya" />
        <meta property="og:description" content="Emincan Demirkaya" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={location} />
        <meta property="twitter:title" content="Emincan Demirkaya" />
        <meta
          property="twitter:description"
          content="Contact Emincan Demirkaya"
        />
        <link rel="canonical" href={location} />
      </Helmet>
      {serverState.status.ok ? (
        <p>Thanks your message, I'll back to you shortly.</p>
      ) : (
        <>
          <form
            id="contact-form"
            name="myForm"
            className="form"
            onSubmit={handleOnSubmit}
            encType="multipart/form-data"
            role="form"
          >
            <div className="form-group">
              <label
                className="form-label"
                id="nameLabel"
                htmlFor="name"
              ></label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={handleOnChange}
                value={inputs.name}
                name="name"
                placeholder="Your name"
                tabIndex={1}
              />
            </div>

            <div className="form-group">
              <label
                className="form-label"
                id="emailLabel"
                htmlFor="email"
              ></label>
              <input
                type="email"
                className="form-control"
                onChange={handleOnChange}
                value={inputs.email}
                id="email"
                name="email"
                placeholder="Your Email"
                tabIndex={2}
              />
            </div>

            <div className="form-group">
              <label
                className="form-label"
                id="messageLabel"
                htmlFor="message"
              ></label>
              <textarea
                rows={6}
                cols={60}
                onChange={handleOnChange}
                value={inputs.message}
                name="message"
                className="form-control"
                id="message"
                placeholder="Your message"
                tabIndex={4}
              ></textarea>
            </div>

            <div className="text-center margin-top-25">
              <button
                type="submit"
                className="btn btn-outline-light btn-large"
                disabled={serverState.submitting}
              >
                Submit
              </button>
              {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                  {!serverState.status.ok ? serverState.status.msg : ""}
                </p>
              )}
            </div>
          </form>
        </>
      )}
    </>
  );
};
