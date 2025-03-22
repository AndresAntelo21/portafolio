export const Error404 = () => {
  return (
    <div className="flex h-[100svh] w-full flex-col gap-5 lg:flex-row">
      <div className="lg:rounded-x1 flex justify-center rounded-xl pt-13 md:pt-2 lg:items-center lg:pt-0">
        <img
          src="/page-not-found/page-not-found.webp"
          alt="Something went wrong"
          className="overflow-hidden rounded-xl lg:h-90 lg:w-200"
        />
      </div>
      <div className="flex flex-col items-center gap-20 lg:justify-center">
        <div className="font-poppins flex flex-col gap-3 text-center">
          <h1 className="font-poppins text-center text-3xl">
            Something went <span className="text-blue-700">wrong</span>.
          </h1>
          <h2>
            We couldn’t find what you were looking for.{" "}
            <span className="text-blue-700">
              Try going back to the homepage
            </span>
            .
          </h2>
        </div>
        <a
          className="font-poppins flex w-max justify-center rounded-lg border-1 border-blue-600 bg-blue-950 px-20 py-2 text-xl md:py-1"
          href="/"
        >
          HOME
        </a>
      </div>
    </div>
  );
};
