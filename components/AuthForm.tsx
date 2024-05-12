"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { fromTheme } from "tailwind-merge";
import { authFormSchema } from "@/lib/utils";
import { z } from "zod";

const AuthForm = ({ type }: { type: string }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password:"",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [user, setUser] = useState(null);
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="mb-12 flex gap-3 items-center cursor-pointer">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
      </header>

      <div className="flex flex-col gap-1">
        <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
          {user ? "Link account" : type === "sign-in" ? "Log In" : "sign up"}
        </h1>
        <p className="text-16 font-normal text-gray-600">
          {user
            ? "Link your account to get started"
            : "Please enter your details"}
        </p>
      </div>

      {user ? (
        <div>PLADELINK</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput controls={form.control} type="email" />
              <CustomInput controls={form.control} type="password" />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthForm;
