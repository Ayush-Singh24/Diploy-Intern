import { Plus } from "lucide-react";
import { cn } from "../../lib/utils";

export default function PlusMarker({ className }: { className: string }) {
  return (
    <div
      className={cn(
        `absolute z-[100] p-1 transition-transform rounded-full opacity-75 cursor-pointer bg-primary-1 hover:scale-105 ${className}`
      )}
    >
      <div className="p-1 rounded-full bg-primary-2 text-white-1">
        <Plus className="w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>
  );
}
