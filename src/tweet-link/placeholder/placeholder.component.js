import React from 'react';
import { arrayOf, object, string } from 'prop-types';
import { utcTimestampToEST } from 'utils/date';
import { replaceHTMLEntities } from 'utils/format';
import Highlighter from 'react-highlight-words';
import ExternalLink from 'components/external-link';
import styles from './placeholder.style.scss';

export default class Placeholder extends React.Component {
  static propTypes = {
    className: string,
    placeholderHighlights: arrayOf(string),
    tweetData: object.isRequired,
  }

  static defaultProps = {
    className: '',
    placeholderHighlights: [],
  }

  render () {
    const {
      className,
      placeholderHighlights,
      tweetData,
    } = this.props;

    const {
      date,
      device,
      id,
      text,
    } = tweetData;

    return (
      <div className={className}>
        <div className={styles.placeholder}>
          <h4>Donald J. Trump</h4>
          <span className={styles.gray}>@realdonaldtrump</span>
          <p>
            <Highlighter
              autoEscape={true}
              searchWords={placeholderHighlights}
              textToHighlight={replaceHTMLEntities(text)}
            />
          </p>
          <div className={styles.gray}>
            <span>{ utcTimestampToEST(date) }</span>
            <span className={styles.dot}>·</span>
            <span>{ device }</span>
            <span className={styles.dot}>·</span>
            <span>
              <ExternalLink id={id}>
                View on Twitter
              </ExternalLink>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
