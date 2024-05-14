"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "../lib/actions/user.action";
import { ID } from "node-appwrite";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  // ALL STATE
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fromSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address1: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
    },
  });

  //SUBMITE HANDLER
  const onSubmit = async (data: z.infer<typeof fromSchema>) => {
    setLoading(true);
    console.log(data);
    try {
      // SIGN_UP 
      if (type === "sign-up") {
        const newUser = await signUp(data);
        setUser(newUser);
      }
      // SIGN_IN

      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) {
          router.push("/");
        }
      }
    } catch (error) {
      console.log("submit Error", error);
    } finally {
      setLoading(false);
    }
  };

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
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      controls={form.control}
                      type="firstName"
                      placeholder="ex:john"
                      label="First Name"
                    />
                    <CustomInput
                      controls={form.control}
                      type="lastName"
                      placeholder="ex:dove"
                      label="Last Name"
                    />
                  </div>
                  <CustomInput
                    controls={form.control}
                    type="address1"
                    placeholder="Enter your specific address"
                    label="Address"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      controls={form.control}
                      type="state"
                      placeholder="ex:NY"
                      label="State"
                    />
                    <CustomInput
                      controls={form.control}
                      type="postalCode"
                      placeholder="Example: 11101"
                      label="Postal Code"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      controls={form.control}
                      type="dateOfBirth"
                      placeholder="YYYY-MM-DD"
                      label="Date of Birth"
                    />
                    <CustomInput
                      controls={form.control}
                      type="ssn"
                      placeholder="ex:1234"
                      label="SSN"
                    />
                  </div>
                </>
              )}

              <CustomInput
              id={"1"}
                controls={form.control}
                type="email"
                placeholder="Enter Your Email"
                label="Email"
              />
              <CustomInput
              id={"2"}
                controls={form.control}
                type="password"
                placeholder="Enter Your Password"
                label="Password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex items-center justify-center gap-1">
            <h2>
              {type === "sign-in"
                ? "Don't have an account ?"
                : "Already have an account ?"}
            </h2>
            <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"}>
              <p className="text-14 cursor-pointer font-medium text-bankGradient capitalize">
                {type === "sign-in" ? "sign Up" : "Sign In"}
              </p>
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
