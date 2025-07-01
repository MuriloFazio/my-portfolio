import React, { useEffect, useState } from "react";

import { ReposType } from "./types";
import { userData } from "../../utils/userData";

import {
    Container,
    RepoCard,
    RepoTitle,
    RepoDescription,
    GithubLink,
    RepoLanguage,
    LanguageColor,
    LinkWrapper,
} from './styles'
import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";

export const GithubRepos: React.FC = () => {
    const [repositories, setRepositories] = useState<ReposType[]>([]);

    useEffect(() => {
        const fetchRepo = async () => {
            const data = await fetch(
                `https://api.github.com/users/${userData.githubUser}/repos`
            );
            const response = await data.json();
            setRepositories(response);
            return response;
        };
        fetchRepo();
    }, []);


    return (
        <Container>
            {repositories && repositories.map((repo)=>{
                return (
                    <RepoCard key={repo.id}>
                        <RepoTitle>{repo.name}</RepoTitle>
                        <RepoDescription>{repo.description}</RepoDescription>
                        <RepoLanguage >Language: <LanguageColor language={repo.language}>{repo.language}</LanguageColor></RepoLanguage>
                        <LinkWrapper>
                        <GithubLink href={repo.html_url} target="_blank">
                           <FaGithub /> Github Code
                        </GithubLink>
                        { repo.homepage &&
                        <GithubLink href={repo.homepage} target="_blank">
                           <IoOpenOutline /> Live Demo
                        </GithubLink> }
                        </LinkWrapper>
                    </RepoCard>
                );
            })}
        </Container>
    );
}

export default GithubRepos;