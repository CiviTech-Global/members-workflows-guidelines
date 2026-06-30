import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW_DIR = ROOT / "scripts" / "raw"
OUT_FILE = ROOT / "site" / "src" / "data" / "teams.ts"

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


def normalize_role(role: dict) -> dict:
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

    return {
        "title": role["title"],
        "shortTitle": role["shortTitle"],
        "summary": role["summary"],
        "responsibilities": unique_responsibilities,
        "skills": skills,
        "tools": tools,
        "roadmap": roadmap,
        "interactions": interactions,
        "bestPractices": role.get("bestPractices", []),
        "resources": resources,
    }


def build_team(config: dict) -> dict:
    roles = []
    for filename in config["files"]:
        data = load_json(RAW_DIR / filename)
        for role in data.get("roles", []):
            roles.append(normalize_role(role))

    color = config["color"]
    return {
        "id": config["id"],
        "name": config["name"],
        "originalName": config["originalName"],
        "color": f"text-{color}-400",
        "bg": f"bg-{color}-500/10",
        "border": f"border-{color}-500/20",
        "roles": roles,
    }


def main():
    teams = [build_team(cfg) for cfg in TEAM_CONFIG]

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
  title: string;
  shortTitle: string;
  summary: string;
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
