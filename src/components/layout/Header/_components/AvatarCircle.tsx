import { UserRound } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { AvatarCircleProps } from "../types";

const AvatarCircle = ({ avatar, className = "size-9" }: AvatarCircleProps) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={avatar} />
      <AvatarFallback className="flex items-center justify-center bg-white">
        <UserRound className="size-7 text-black" />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarCircle;
