import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { teams } from '../data/teams';
import type { Team, Role } from '../data/teams';
import TopBar from './TopBar';
import Hero from './Hero';
import TeamNav from './TeamNav';
import TeamSection from './TeamSection';
import RoleModal from './RoleModal';
import Footer from './Footer';

export default function Home() {
  const [activeTeam, setActiveTeam] = useState<string>(teams[0].id);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (selectedRole) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedRole]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTeam(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTeam = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTeam(id);
    }
  };

  const handleRoleClick = (team: Team, role: Role) => {
    setSelectedTeam(team);
    setSelectedRole(role);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <TopBar />
      <Hero teamCount={teams.length} roleCount={teams.reduce((acc, t) => acc + t.roles.length, 0)} />
      <TeamNav teams={teams} activeTeam={activeTeam} onSelect={scrollToTeam} />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-12 space-y-24 sm:px-6 lg:px-8">
        {teams.map((team) => (
          <TeamSection
            key={team.id}
            team={team}
            ref={(el) => { sectionRefs.current[team.id] = el; }}
            onRoleClick={(role) => handleRoleClick(team, role)}
          />
        ))}
      </main>

      <Footer />

      <AnimatePresence>
        {selectedRole && selectedTeam && (
          <RoleModal
            role={selectedRole}
            team={selectedTeam}
            onClose={() => setSelectedRole(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
