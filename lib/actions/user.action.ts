"use server";

import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { jsonstring } from "../utils";

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();

    const response = await account.createEmailPasswordSession(email, password);

    // Debug: Log the response to check if the session is created correctly
    console.log("Sign-in response:", response);

    // Check if the session is successfully created
    if (response && response.secret) {
      // Set the session cookie
      cookies().set("appWrite-session", response.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });
      return jsonstring(response);
    } else {
      throw new Error("Failed to create session. Please check your credentials.");
    }
  } catch (error) {
    console.error("Sign-in error:", error);
    throw new Error("Failed to sign in. Please check your credentials.");
  }
  
};

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appWrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    //   redirect("/account");
    return jsonstring(newUserAccount);
  } catch (error) {
    console.log(error);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const getDate = await account.get();
    return jsonstring(getDate);
  } catch (error) {
    return null;
  }
}

export async function LogOutData() {
  try {
    const { account } = await createSessionClient();
    cookies().delete("appWrite-session");
    await account.deleteSession("current");
  } catch (error) {
    return null;
  }
}
