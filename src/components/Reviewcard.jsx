import React from "react";
import styled from "styled-components";

const CardWapper = styled.div`
  background-image: url(${({ src }) => src});
`;

const Reviewcard = ({ nickname, content, src }) => {
  return (
    <CardWapper src={src}>
      <h4>{nickname}</h4>
      <p>{content}</p>
    </CardWapper>
  );
};

export default Reviewcard;
