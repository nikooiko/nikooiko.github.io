import { HeadFC, Link, PageProps } from "gatsby";
import * as React from "react";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <div>
        <h1 className="text-2xl">Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <Link
            to="/"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Go home
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
