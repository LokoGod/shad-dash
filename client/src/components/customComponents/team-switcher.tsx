"use client";

import * as React from "react";
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { UrlObject } from "url";

const groups = [
  {
    label: "Admin",
    teams: [
      {
        label: "Admin",
        value: "admin",
        href: "/",
      },
    ],
  },
  {
    label: "Services",
    teams: [
      {
        label: "Human Resource",
        value: "humanResource",
        href: "/humanResource/overview",
      },
      {
        label: "Inventory",
        value: "inventory",
        href: "/inventory/overview",
      },
    ],
  },
];

type Team = (typeof groups)[number]["teams"][number];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface TeamSwitcherProps extends PopoverTriggerProps {}

export default function TeamSwitcher({ className }: TeamSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false);
  const [selectedTeam, setSelectedTeam] = React.useState<Team>(
    groups[0].teams[0]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a team"
          className={cn("w-[200px] justify-between", className)}
        >
          <Avatar className="mr-2 h-5 w-5">
            <AvatarImage
              src={"https://www.svgrepo.com/show/327408/logo-vercel.svg"}
              alt={"Vercel"}
              className="grayscale"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          Vercel
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search team..." />
            <CommandEmpty>No team found.</CommandEmpty>

            <CommandGroup>
              <Link href={"/"}>
                <CommandItem className="text-sm">
                  <Avatar className="mr-2 h-5 w-5">
                    <AvatarImage
                      src={"https://avatar.vercel.sh/${team.value}.png"}
                      alt={"team.label"}
                      className="grayscale"
                    />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  Admin
                </CommandItem>
              </Link>
              <Link href={"/humanResource/overview"}>
                <CommandItem className="text-sm">
                  <Avatar className="mr-2 h-5 w-5">
                    <AvatarImage
                      src={"https://avatar.vercel.sh/${team.value}.png"}
                      alt={"team.label"}
                      className="grayscale"
                    />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  Human Resource
                </CommandItem>
              </Link>
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <p className="text-center text-sm">End of services</p>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
