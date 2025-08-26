import React from "react";
import type { GitHubUser } from "../types";
import { MapPin, Link2, Building2, Twitter } from "lucide-react";

function fmtDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

interface RowProps {
  icon: React.ReactNode;
  label: string;
  href?: string | null;
  value?: string | null;
}

const Row: React.FC<RowProps> = ({ icon, label, href, value }) => {
  const content = value || "Not Available";
  const disabled = !value;

  const inner =
    href && value ? (
      <a className="link" href={href} target="_blank" rel="noreferrer">
        <span className="icon">{icon}</span>
        <span>{content}</span>
      </a>
    ) : (
      <div className="link">
        <span className="icon">{icon}</span>
        <span className={disabled ? "muted" : ""}>{content}</span>
      </div>
    );

  return <div className={disabled ? "is-disabled" : ""}>{inner}</div>;
};

const UserCard: React.FC<{ user: GitHubUser }> = ({ user }) => {
  return (
    <article className="card user">
      <img src={user.avatar_url} alt={`${user.login} avatar`} />
      <div>
        <header>
          <div>
            <div className="title">{user.name || user.login}</div>
            <a
              className="muted"
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              @{user.login}
            </a>
          </div>
          <div className="muted">Joined {fmtDate(user.created_at)}</div>
        </header>

        <p style={{ marginTop: 12 }} className="muted">
          {user.bio || "This profile has no bio."}
        </p>

        <div className="stats">
          <div className="stat">
            <div className="label">Repos</div>
            <div className="value">{user.public_repos}</div>
          </div>
          <div className="stat">
            <div className="label">Followers</div>
            <div className="value">{user.followers}</div>
          </div>
          <div className="stat">
            <div className="label">Following</div>
            <div className="value">{user.following}</div>
          </div>
        </div>

        <div className="links">
          <Row
            icon={<MapPin size={16} />}
            label="Location"
            value={user.location}
          />
          <Row
            icon={<Link2 size={16} />}
            label="Website"
            value={user.blog}
            href={
              user.blog
                ? user.blog.startsWith("http")
                  ? user.blog
                  : `https://${user.blog}`
                : undefined
            }
          />
          <Row
            icon={<Building2 size={16} />}
            label="Company"
            value={user.company}
          />
          <Row
            icon={<Twitter size={16} />}
            label="Twitter"
            value={user.twitter_username}
            href={
              user.twitter_username
                ? `https://x.com/${user.twitter_username}`
                : undefined
            }
          />
        </div>
      </div>
    </article>
  );
};

export default UserCard;
