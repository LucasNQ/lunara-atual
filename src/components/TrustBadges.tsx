import { LucideIcon } from 'lucide-react';

interface Badge {
  icon: LucideIcon;
  text: string;
}

interface TrustBadgesProps {
  badges: Badge[];
}

const TrustBadges = ({ badges }: TrustBadgesProps) => {
  return (
    <div className="space-y-3 my-6">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
          <badge.icon className="flex-shrink-0 w-5 h-5 text-green-600" />
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
