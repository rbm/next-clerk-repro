import { SignUp } from "@clerk/nextjs";
import { buildClerkProps } from "@clerk/nextjs/server";
import { GetServerSidePropsContext } from "next";

export default function SignUpPage(props: { redirectUrl: string }) {
  console.log(`redirectUrl=${props.redirectUrl}`);
  return (
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      redirectUrl={props.redirectUrl}
    />
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, query } = context;

  // Could do this on client side, but this matches our real example
  let redirectUrl = null;
  const passedRedirectUrl = query["redirect_url"];
  if (typeof passedRedirectUrl === "string") redirectUrl = passedRedirectUrl;
  if (typeof passedRedirectUrl === "object") redirectUrl = passedRedirectUrl[0];

  const props = { redirectUrl: redirectUrl };
  return { props: { ...props, ...buildClerkProps(req) } };
}
