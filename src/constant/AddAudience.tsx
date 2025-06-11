"use client"
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {supabase} from "@/utils/supabase/client"
import {useState} from "react"

export function AddAudience() {
    const [targetName,setTargetName] = useState('')
    const [targetDesc,setTargetDesc] = useState('')


    const add = async (e: React.FormEvent) => {
        e.preventDefault();

        const {data: userData,error: userError} = await supabase.auth.getUser();

        if(userError || !userData.user) {
            console.log("User not authenticated");
            return;
        }

        try {
            const {error} = await supabase
                .from('audiences')
                .insert({
                    name: targetName,
                    description: targetDesc,
                    user_id: userData.user.id,
                });

            if(error) {
                console.log(error);
            } else {
                console.log("audience created successfully");
                setTargetName("");
                setTargetDesc("");
            }
        } catch(error) {
            console.log(error);
        }
    };


    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Audience</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Audience</DialogTitle>
                        <DialogDescription>
                            Create and save a target group based on interests and demographics.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="audience-name">Audience Name</Label>
                            <Input
                                value={targetName}
                                onChange={(e) => setTargetName(e.target.value)}
                                id="audience-name"
                                name="name"
                                placeholder="Gamers"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="target-description">Target Description</Label>
                            <textarea
                                value={targetDesc}
                                onChange={(e) => setTargetDesc(e.target.value)}
                                className="h-36 text-sm rounded-md border bg-transparent px-3 py-1"
                                id="target-description"
                                name="description"
                                placeholder="Gamers seeking a high-quality setup for better performance and aesthetics"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="cursor-pointer">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button onClick={add} className="cursor-pointer hover:opacity-80">
                            Save Audience
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
