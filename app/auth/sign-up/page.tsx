"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { SignUpSchema } from "@/app/schemas/auth";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";

export default function SignUpPage(){

    const form=useForm({
        resolver:zodResolver(SignUpSchema),
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    });

    function onSubmit(){
        console.log("Form Values", form.getValues());
    }

    return (
         <Card>
        <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Create your account to get started.</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup className="gap-y-5">    
                    <Controller name="name" control={form.control} render={({ field,fieldState })=>(
                        <Field>
                            <FieldLabel>Full Name</FieldLabel>
                            <Input aria-invalid={fieldState.invalid} placeholder="Jon Doe" {...field} />
                            {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                    )}>

                    </Controller>

                    <Controller name="email" control={form.control} render={({ field,fieldState })=>(
                        <Field>
                            <FieldLabel>Email</FieldLabel>
                            <Input aria-invalid={fieldState.invalid} placeholder="jon.doe@example.com" {...field} />
                            {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                    )}>

                    </Controller>

                    <Controller name="password" control={form.control} render={({ field,fieldState })=>(
                        <Field>
                            <FieldLabel>Password</FieldLabel>
                            <Input aria-invalid={fieldState.invalid} type="password" placeholder="••••••••" {...field} />
                            {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                    )}>

                    </Controller>
                    <Button  className={buttonVariants ({ variant: "ghost" })}>Sign Up</Button>

                </FieldGroup>
            </form>
        </CardContent>
    </Card>
    );
}