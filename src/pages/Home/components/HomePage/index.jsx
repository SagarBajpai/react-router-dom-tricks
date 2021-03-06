import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import YouTube from "~/assets/icons/youtube.svg";
import GitHub from "~/assets/icons/github.svg";
import { TRICKS_ROUTES } from "~/const/tricks";

import useStyles from "./styles";
import { IconButton } from "@material-ui/core";

const HomePage = () => {
  const styles = useStyles();

  const stopPropagation = useCallback((event) => {
    event.stopPropagation();
  }, []);

  return (
    <div className={styles.container}>
      <h2>React Router Tricks</h2>
      {TRICKS_ROUTES.map((trick) => {
        return (
          <Link key={trick.url} to={trick.url} className={styles.card}>
            <img className={styles.image} src={trick.image} alt="" />
            <div className={styles.info}>
              <h3 className={styles.title}>{trick.title}</h3>
              <p className={styles.description}>{trick.description}</p>
              <p className={styles.social}>
                {Boolean(trick.enYouTube) && (
                  <a
                    href={trick.enYouTube}
                    onClick={stopPropagation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <Button
                      variant="outlined"
                      color="secondary"
                      endIcon={<YouTube width="26px" />}
                    >
                      EN
                    </Button>
                  </a>
                )}
                {Boolean(trick.ruYouTube) && (
                  <a
                    href={trick.ruYouTube}
                    onClick={stopPropagation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <Button
                      variant="outlined"
                      color="secondary"
                      endIcon={<YouTube width="26px" />}
                    >
                      RU
                    </Button>
                  </a>
                )}

                {Boolean(trick.github) && (
                  <a
                    href={trick.github}
                    onClick={stopPropagation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <IconButton>
                      <GitHub width="26px" />
                    </IconButton>
                  </a>
                )}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;
