import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW_DIR = ROOT / "scripts" / "raw"
OUT_FILE = ROOT / "site" / "src" / "data" / "teams.ts"
STORIES_FILE = RAW_DIR / "stories.json"

# Final team configuration (order matters)
TEAM_CONFIG = [
    {
        "id": "product-strategy",
        "name": "Product Strategy & Experience",
        "originalName": "Ideation & Strategy",
        "color": "cyan",
        "files": ["ideation.json"],
    },
    {
        "id": "engineering",
        "name": "Engineering & Architecture",
        "originalName": "Development & Engineering",
        "color": "violet",
        "files": ["dev1.json", "dev2.json"],
    },
    {
        "id": "operations",
        "name": "Platform Operations & Customer Success",
        "originalName": "Deployment & Operations",
        "color": "emerald",
        "files": ["deployment.json"],
    },
    {
        "id": "revenue",
        "name": "Revenue, Sales & Marketing",
        "originalName": "Go-to-Market, Sales & Promotion",
        "color": "amber",
        "files": ["gtm.json"],
    },
    {
        "id": "leadership",
        "name": "Delivery & Technical Leadership",
        "originalName": "Project Leadership & Management",
        "color": "rose",
        "files": ["leadership.json"],
    },
]


def load_json(path: Path) -> dict:
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def slugify(text: str) -> str:
    s = text.lower().strip()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s or "role"


def normalize_role(role: dict, team_id: str, stories: dict) -> dict:
    responsibilities = role.get("responsibilities") or role.get("keyResponsibilities", [])
    # Remove exact duplicates while preserving order
    seen = set()
    unique_responsibilities = []
    for r in responsibilities:
        if r not in seen:
            seen.add(r)
            unique_responsibilities.append(r)

    skills = role.get("skills") or role.get("coreSkills", [])
    tools = role.get("tools") or role.get("commonTools") or role.get("commonToolsTechnologies", [])

    raw_roadmap = role.get("roadmap") or role.get("careerRoadmap", [])
    roadmap = []
    for item in raw_roadmap:
        if "levelName" in item:
            roadmap.append({
                "level": item["levelName"],
                "title": item["typicalTitle"],
                "focus": item["focus"],
                "timeframe": item["approximateTimeframe"],
            })
        else:
            roadmap.append({
                "level": str(item.get("level", "")),
                "title": item["title"],
                "focus": item["focus"],
                "timeframe": item["timeframe"],
            })

    raw_interactions = role.get("interactions") or role.get("dailyInteractions", [])
    interactions = []
    for item in raw_interactions:
        interactions.append({
            "role": item["role"],
            "description": item.get("description") or item.get("howTheyCollaborate", ""),
        })

    raw_resources = role.get("resources") or role.get("referencesResources", [])
    resources = []
    for item in raw_resources:
        resources.append({
            "title": item.get("title") or item.get("name", ""),
            "url": item["url"],
            "description": item["description"],
        })

    title = role["title"]
    role_story = stories.get("roles", {}).get(team_id, {}).get(title, {}).get("story", "")

    return {
        "slug": slugify(title),
        "title": title,
        "shortTitle": role["shortTitle"],
        "summary": role["summary"],
        "story": role_story,
        "responsibilities": unique_responsibilities,
        "skills": skills,
        "tools": tools,
        "roadmap": roadmap,
        "interactions": interactions,
        "bestPractices": role.get("bestPractices", []),
        "resources": resources,
    }


def build_team(config: dict, stories: dict) -> dict:
    team_id = config["id"]
    roles = []
    used_slugs = set()
    for filename in config["files"]:
        data = load_json(RAW_DIR / filename)
        for role in data.get("roles", []):
            normalized = normalize_role(role, team_id, stories)
            # Ensure slug uniqueness within the team
            base_slug = normalized["slug"]
            slug = base_slug
            suffix = 2
            while slug in used_slugs:
                slug = f"{base_slug}-{suffix}"
                suffix += 1
            used_slugs.add(slug)
            normalized["slug"] = slug
            roles.append(normalized)

    color = config["color"]
    team_story = stories.get("teams", {}).get(team_id, {}).get("story", "")
    return {
        "id": team_id,
        "name": config["name"],
        "originalName": config["originalName"],
        "story": team_story,
        "color": f"text-{color}-400",
        "bg": f"bg-{color}-500/10",
        "border": f"border-{color}-500/20",
        "roles": roles,
    }


def main():
    stories = load_json(STORIES_FILE) if STORIES_FILE.exists() else {}
    teams = [build_team(cfg, stories) for cfg in TEAM_CONFIG]

    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    type_definitions = """export interface Resource {
  title: string;
  url: string;
  description: string;
}

export interface RoadmapLevel {
  level: string;
  title: string;
  focus: string;
  timeframe: string;
}

export interface Interaction {
  role: string;
  description: string;
}

export interface Role {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  story: string;
  responsibilities: string[];
  skills: string[];
  tools: string[];
  roadmap: RoadmapLevel[];
  interactions: Interaction[];
  bestPractices: string[];
  resources: Resource[];
}

export interface Team {
  id: string;
  name: string;
  originalName: string;
  story: string;
  color: string;
  bg: string;
  border: string;
  roles: Role[];
}

"""

    data_json = json.dumps(teams, ensure_ascii=False, indent=2)
    with open(OUT_FILE, "w", encoding="utf-8") as f:
        f.write(type_definitions)
        f.write("export const teams: Team[] = ")
        f.write(data_json)
        f.write(";\n")

    print(f"Wrote {OUT_FILE} ({len(teams)} teams, {sum(len(t['roles']) for t in teams)} roles)")


if __name__ == "__main__":
    main()
