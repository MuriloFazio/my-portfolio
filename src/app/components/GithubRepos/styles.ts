import styled from "styled-components";

import Link from "next/link";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const RepoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  width: 100%;
  max-width: 600px;
`;

export const RepoTitle = styled.p`
  margin: 0;
  font-size: 1.5em;
  color: white;
`;

export const RepoDescription = styled.p`
  color: lightgray;
  font-size: 12px;
`;

export const RepoLanguage = styled.p`
  color: lightgray;
  font-size: 0.9em;
  margin: 5px 0;
`;

export const LanguageColor = styled.span<{ language: string }>`
  color: ${({ language }) => {
        switch (language) {
            case "JavaScript":
                return "yellow";
            case "TypeScript":
                return "blue";
            case "Python":
                return "green";
            default:
                return "lightgray";
        }
    }};
`;

export const GithubLink = styled(Link)`
  color: grey;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: white;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`;
