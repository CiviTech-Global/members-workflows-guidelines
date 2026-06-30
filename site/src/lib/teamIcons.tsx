import {
  Lightbulb,
  Code2,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
import type { Team } from '../data/teams';

const iconMap: Record<string, LucideIcon> = {
  'product-strategy': Lightbulb,
  engineering: Code2,
  operations: ShieldCheck,
  revenue: TrendingUp,
  leadership: Users,
};

export function getTeamIcon(team: Team): LucideIcon {
  return iconMap[team.id] || Users;
}
