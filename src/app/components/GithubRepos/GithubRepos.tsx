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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${userData.githubUser}/repos`
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setRepositories(data);
        } else {
          throw new Error('Invalid response format from GitHub API');
        }

      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepo();
  }, []);

  if (loading) {
    return (
      <Container>
        <p>Loading repositories...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </Container>
    );
  }

  if (repositories.length === 0) {
    return (
      <Container>
        <p>No repositories found.</p>
      </Container>
    );
  }

  return (
    <Container>
      {repositories.map((repo) => (
        <RepoCard key={repo.id}>
          <RepoTitle>{repo.name}</RepoTitle>
          <RepoDescription>{repo.description || 'No description available'}</RepoDescription>
          <RepoLanguage>
            Language: <LanguageColor language={repo.language || 'Unknown'}>
              {repo.language || 'Unknown'}
            </LanguageColor>
          </RepoLanguage>
          <LinkWrapper>
            <GithubLink href={repo.html_url} target="_blank">
              <FaGithub /> Github Code
            </GithubLink>
            {repo.homepage && (
              <GithubLink href={repo.homepage} target="_blank">
                <IoOpenOutline /> Live Demo
              </GithubLink>
            )}
          </LinkWrapper>
        </RepoCard>
      ))}
    </Container>
  );
}

export default GithubRepos;