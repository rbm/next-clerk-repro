import { GetServerSidePropsContext } from "next";

export default function Protected(props: { principal: string }) {
  return (
    <main>
      <h1>He protecc {props.principal}</h1>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return { props: { principal: "a guy" } };
}
