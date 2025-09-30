/**
 * @page HomePage
 * @summary The main landing page of the application.
 * @type page-component
 * @category public
 */
export const HomePage = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to the Counter Application
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          This is the foundational structure for the 'sistema para contar de 1 a 10'.
          The feature to display the count will be implemented here.
        </p>
      </div>
    </section>
  );
};
