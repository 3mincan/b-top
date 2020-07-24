import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

type Props = {
  github?: string;
  linkedin?: string;
  telegram?: string;
};

export const Social: FC<Props> = ({ github, linkedin, telegram }) => {
  const githubLink = `https://github.com/${github}`;
  const linkedinLink = `https://linkedin.com/in/${linkedin}`;
  const telegramLink = `https://t.me/in/${telegram}`;

  return (
    <>
      <div className="d-flex justify-content-center">
        <a className="m-3 " target="_blank" href={githubLink}>
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a className="m-3" target="_blank" href={linkedinLink}>
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a className="m-3" target="_blank" href={telegramLink}>
          <FontAwesomeIcon icon={faTelegram} size="3x" />
        </a>
      </div>
    </>
  );
};
