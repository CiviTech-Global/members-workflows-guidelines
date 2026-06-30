import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { Team, Role } from '../data/teams';
import RoleCard from './RoleCard';

interface TeamSectionProps {
  team: Team;
  onRoleClick: (role: Role) => void;
}

const TeamSection = forwardRef<HTMLElement, TeamSectionProps>(
  ({ team, onRoleClick }, ref) => {
    return (
      <section
        id={team.id}
        ref={ref}
        className="scroll-mt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3">
            <span className={`h-3 w-3 rounded-full ${team.color.replace('text-', 'bg-')}`} />
            <h2 className={`text-3xl font-bold tracking-tight ${team.color}`}>{team.name}</h2>
          </div>
          <p className="mt-2 max-w-2xl text-slate-400">
            Formerly <span className="text-slate-300">{team.originalName}</span>. Explore the roles,
            roadmaps, and daily collaborations inside this team.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.roles.map((role, roleIndex) => (
            <RoleCard
              key={role.title}
              role={role}
              team={team}
              index={roleIndex}
              onClick={() => onRoleClick(role)}
            />
          ))}
        </div>
      </section>
    );
  }
);

TeamSection.displayName = 'TeamSection';
export default TeamSection;
