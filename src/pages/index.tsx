import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="w-full border-red-500 border justify-center align-middle p-2">
      <section className="flex flex-col-reverse sm:flex-row border-blue-500 border h-screen justify-center align-middle">
        <div className="flex flex-col justify-center gap-2">
          <h1>Hello I'm Nikos Oikonomou</h1>
          <p>I'm a software engineer.</p>
          <button>GET IN TOUCH</button>
        </div>
        <div className="flex justify-center border-green-500 border">
          <img width="240px" height="240px" alt="Avatar Here" />
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Nikos Oikonomou</title>;
