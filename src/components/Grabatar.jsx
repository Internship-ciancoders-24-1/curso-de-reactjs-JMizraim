import React from "react";
import md5 from "md5";

const Grabatar = ({ email, className }) => {
  const hashedEmail = md5(email);
  return (
    <div className={className}>
      <img
        src={`https://www.gravatar.com/avatar/${hashedEmail}?d=identicon`}
        alt="badge"
      />
    </div>
  );
};

export default Grabatar;
