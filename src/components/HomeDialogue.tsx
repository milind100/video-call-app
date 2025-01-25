import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface MeetingDialogueType {
  isOpen: boolean;
  children?: ReactNode;
  title?: string;
  handleOpenChange: (open: boolean) => void;
}

export function HomeDialogue({
  title,
  children,
  isOpen = false,
  handleOpenChange,
}: MeetingDialogueType) {
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-dark-1 border-none rounded">
        <DialogHeader>
          <DialogTitle className="m-auto text-2xl">{title}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
