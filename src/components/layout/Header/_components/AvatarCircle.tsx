import { UserRound } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ClassNameProps = {
  className?: string;
};

const AvatarCircle = ({ className = "size-9" }: ClassNameProps) => {
  return (
    <Avatar className={className}>
      <AvatarImage src="https://avatars.githubusercontent.com/u/147689292?v=4&size=64" />
      <AvatarFallback className="bg-white">
        <UserRound className="size-7 text-black" />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarCircle;
