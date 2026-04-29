"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClientAction } from "@/app/(dashboard)/clients/actions";

export function AddClientDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button className="bg-[#e7dcc5] text-[#111111]" />}>
        Add Client
      </DialogTrigger>
      <DialogContent className="max-w-xl border-[#1f1f1f] bg-[#111111] text-[#f3f3f1]">
        <DialogHeader>
          <DialogTitle>Add Client</DialogTitle>
          <DialogDescription className="text-[#a6a6a2]">
            Create a new client record for the Novara pipeline.
          </DialogDescription>
        </DialogHeader>

        <form action={createClientAction} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="business_name">Business name</Label>
              <Input id="business_name" name="business_name" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact_name">Contact name</Label>
              <Input id="contact_name" name="contact_name" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="industry">Industry</Label>
              <Input id="industry" name="industry" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="notes">Notes</Label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              className="w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2 text-sm text-[#f3f3f1] outline-none focus:border-[#3f3f3f]"
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-[#e7dcc5] text-[#111111]">
              Save Client
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
