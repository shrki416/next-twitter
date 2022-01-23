import reactStringReplace from "react-string-replace";

export const formatStr = (text) => {
  let replacedText;

  replacedText = reactStringReplace(text, /(https?:\/\/\S+)/g, (match, i) => (
    <a key={match + i} href={match}>
      {match}
    </a>
  ));
  replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
    <a key={match + i} href={`https://twitter.com/${match}`}>
      @{match}
    </a>
  ));
  replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
    <a key={match + i} href={`https://twitter.com/hashtag/${match}`}>
      #{match}
    </a>
  ));

  replacedText = reactStringReplace(replacedText, /\n/g, (match, i) => (
    <p key={i}>{match}</p>
  ));

  return replacedText;
};
