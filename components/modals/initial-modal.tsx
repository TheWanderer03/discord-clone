"use client";

import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod" ;
import { useForm } from "react-hook-form";

import{
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is require."
    }),
    imageUrl: z.string().min(1,{
        message: "Server image is required>"
    })
});

export const InitialModal = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:"",
            imageUrl:""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async(values:z.infer<typeof formSchema>) =>{
        console.log(values);
    }

    return(
        <Dialog open>
            <DialogContent 
            className="bg-white
            text-black p-0
            oveflow-hidden">
                <DialogHeader className="pt-6 px-6">
                    <DialogTitle className="text-2xl text-center">
                        Customize Your Server
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Give your server a personality with a name and a image. You can always change it later
                    </DialogDescription>
                </DialogHeader>
                <Form{...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}className="sapce-y-8">
                    <div className="space-y-8 px-6">
                        <div className="flex item-center justif-center text-center">
                            TODO: Image upload
                        </div>

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) =>(
                                <FormItem>
                                    <FormLabel
                                        className="uppercase text-xs font-bold text-zinc-500
                                        dark:text-secondary/70"                                    
                                    >
                                        Server Name
                                    </FormLabel>
                                    <FormControl>
                                       <Input 
                                        disabled={isLoading}
                                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-cisible:ring-offset-0"
                                        placeholder="Enter server name"
                                        {...field}
                                       /> 
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}