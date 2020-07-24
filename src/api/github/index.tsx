import React, { FC, useState, useCallback, useEffect } from "react";
import axios from "axios";
import "./style.scss";
import { Loader } from "../../common";
import { Helmet } from "react-helmet";

type Props = {
  username?: string;
};

type State = {
  isLoading: boolean;
  data: any;
};

const github = `https://api.github.com/users/`;

export const Github: FC<Props> = ({ username }) => {
  const [{ isLoading, data }, setState] = useState<State>({
    isLoading: true,
    data: [],
  });

  const fetchData = useCallback(async () => {
    setState((state) => ({ ...state, isLoading: true }));
    try {
      const { data } = await axios.get(github + `${username}`);
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

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const location = window.location.href;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <meta charSet="utf-8" />

            <title>{data.name}</title>
            <meta name="title" content={data.name} />
            <meta name="description" content={data.name} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={location} />
            <meta property="og:title" content={data.name} />
            <meta property="og:description" content={data.name} />
            <meta property="og:image" content={data.avatar_url} />

            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content={location} />
            <meta property="twitter:title" content={data.name} />
            <meta property="twitter:description" content={data.name} />
            <meta property="twitter:image" content={data.avatar_url} />
            <link rel="canonical" href={location} />
          </Helmet>
          <img
            src={data.avatar_url}
            alt={data.name}
            className="rounded-circle img-thumbnail profile-picture"
          />{" "}
          <h1 className="h2 font-weight-bold my-3">{data.name}</h1>
          <h2 className="h3">
            a {data.bio} from {data.location}
          </h2>
        </>
      )}
    </>
  );
};
