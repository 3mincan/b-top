import React, { FC, useState, useCallback, useEffect } from "react";
import { Home, About, Articles, Contact } from "./pages";
import "./App.scss";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Loader } from "./common";
import { Navbar } from "./common";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

type State = {
  isLoading: boolean;
  data: any;
};

const nasaBg = "https://api.nasa.gov/planetary/apod?api_key=";
const apiKey = "LJjujGkoa4J1bHjgIMVF7kSM90vMuwBdTxBB7hKb";

export const App: FC = () => {
  const [{ isLoading, data }, setState] = useState<State>({
    isLoading: true,
    data: [],
  });

  const fetchData = useCallback(async () => {
    setState((state) => ({ ...state, isLoading: true }));
    try {
      const { data } = await axios.get(nasaBg + `${apiKey}`);
      setState((state) => ({
        ...state,
        data: data,
        isLoading: false,
      }));
    } catch (err) {
      setState((state) => ({
        ...state,
        isLoading: false,
      }));
      throw err;
    }
  }, []);
  console.log(data);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <style>{`div.bg-image { background-image: url("${data.hdurl}") `}</style>
          </Helmet>
          <div className="bg-image"></div>
          <div id="content" className="full">
            <Router>
              <Navbar />
              <div className="main-content">
                <Switch>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/articles">
                    <Articles />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </Router>
          </div>
        </>
      )}
    </>
  );
};
