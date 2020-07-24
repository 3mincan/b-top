import React, { FC, useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Loader } from "../../common";

type Props = {
  id?: string;
};

type State = {
  isLoading: boolean;
  data: any;
};

export const Stackoverflow: FC<Props> = ({ id }) => {
  const [{ isLoading, data }, setState] = useState<State>({
    isLoading: true,
    data: [],
  });

  const stackoverflow = `https://api.stackexchange.com/2.2/users/${id}?site=stackoverflow`;

  const fetchData = useCallback(async () => {
    setState((state) => ({ ...state, isLoading: true }));
    try {
      const {
        data: { items },
      } = await axios.get(stackoverflow);
      setState((state) => ({
        ...state,
        data: items,
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

  const location = window.location.href;

  console.log(location);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            {data.map((item: any, index: number) => (
              <p key={index}>
                <a href={item.link}>
                  {item.display_name}'s Stackoverflow profile
                </a>{" "}
                and Stackoverflow reputation {item.reputation}
              </p>
            ))}
          </div>
        </>
      )}
    </>
  );
};
