"use server";

import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { jsonstring } from "../utils";

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();

    const response = await account.createEmailPasswordSession(email, password);
    return jsonstring(response);
  } catch (error) {
    console.log(error);
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
      const getDate = await account.get();
      return jsonstring(getDate);
    } catch (error) {
      return null;
    }
  }

