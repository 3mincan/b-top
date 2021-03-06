import React, { FC, useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Loader } from "../../common";
import { Helmet } from "react-helmet";
import "./style.scss";
import moment from "moment";

type Props = {
  username?: string;
};

type State = {
  isLoading: boolean;
  data: any;
};

export const DevTo: FC<Props> = ({ username }) => {
  const [{ isLoading, data }, setState] = useState<State>({
    isLoading: true,
    data: [],
  });

  const devTo = `https://dev.to/api/articles?username=${username}&state=all`;

  const fetchData = useCallback(async () => {
    setState((state) => ({ ...state, isLoading: true }));
    try {
      const { data } = await axios.get(devTo);
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
          {data.length > 0 ? (
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>{data[0].name}</title>
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
              <div className="col-lg-12">
                <div className="card-columns">
                  {data.map((article: any, index: number) => (
                    <div className="card bg-dark">
                      <img
                        key={index}
                        className="card-img-top"
                        src={article.social_image}
                        alt={article.title}
                      />
                      <div className="card-body text-white">
                        <h5 className="card-title">
                          <a
                            className="text-white h6"
                            key={index}
                            href={article.canonical_url}
                            target="_blank"
                          >
                            Read More
                          </a>
                        </h5>
                        <p className="card-text" key={index}>
                          <small className="text-muted">
                            Published at{" "}
                            {moment(article.created_at).format("DD/MM/YYYY")}
                          </small>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
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
              <h1 className="h2">No articles found</h1>
            </>
          )}
        </>
      )}
    </>
  );
};
